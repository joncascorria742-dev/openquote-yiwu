const COOKIE_NAME = "oq_locale";
const SUPPORTED_LOCALES = new Set(["en", "es", "ar", "fr", "pt", "ru"]);

const COUNTRY_LOCALES = {
  pt: ["BR", "PT"],
  es: [
    "ES",
    "MX",
    "AR",
    "CO",
    "CL",
    "PE",
    "VE",
    "EC",
    "GT",
    "CU",
    "BO",
    "DO",
    "HN",
    "PY",
    "SV",
    "NI",
    "CR",
    "PA",
    "UY",
    "PR"
  ],
  fr: [
    "FR",
    "CI",
    "SN",
    "CM",
    "BF",
    "BJ",
    "TG",
    "ML",
    "NE",
    "CD",
    "CG",
    "GA",
    "GN",
    "MG",
    "RW",
    "BI",
    "DJ"
  ],
  ru: ["RU", "BY"],
  ar: [
    "SA",
    "AE",
    "QA",
    "KW",
    "OM",
    "BH",
    "EG",
    "JO",
    "LB",
    "IQ",
    "MA",
    "DZ",
    "TN",
    "LY",
    "SD",
    "YE",
    "SY",
    "PS"
  ]
};

const MULTILINGUAL_COUNTRIES = new Set(["BE", "CA", "CH", "LU"]);

function parseCookie(header) {
  return Object.fromEntries(
    (header || "")
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const separator = part.indexOf("=");
        if (separator === -1) return [part, ""];
        return [part.slice(0, separator), decodeURIComponent(part.slice(separator + 1))];
      })
  );
}

function normalizeLocale(value) {
  if (!value) return "";
  const locale = String(value).toLowerCase();
  if (locale.startsWith("pt")) return "pt";
  const shortLocale = locale.slice(0, 2);
  return SUPPORTED_LOCALES.has(shortLocale) ? shortLocale : "";
}

function preferredLocaleFromHeader(header) {
  return (header || "")
    .split(",")
    .map((part) => normalizeLocale(part.split(";")[0].trim()))
    .find(Boolean);
}

function countryLocale(countryCode, acceptLanguage) {
  const country = String(countryCode || "").toUpperCase();

  if (MULTILINGUAL_COUNTRIES.has(country)) {
    return preferredLocaleFromHeader(acceptLanguage) || "";
  }

  return (
    Object.entries(COUNTRY_LOCALES).find(([, countries]) =>
      countries.includes(country)
    )?.[0] || ""
  );
}

export default async (request, context) => {
  const url = new URL(request.url);
  const method = request.method.toUpperCase();

  if (url.pathname !== "/" && url.pathname !== "/index.html") return context.next();
  if (method !== "GET") return context.next();
  if (url.searchParams.has("lang")) return context.next();

  const cookies = parseCookie(request.headers.get("cookie"));
  if (normalizeLocale(cookies[COOKIE_NAME])) return context.next();

  const acceptLanguage = request.headers.get("accept-language") || "";
  const geoLocale =
    countryLocale(context.geo?.country?.code, acceptLanguage) || "en";

  if (geoLocale === "en") return context.next();

  url.searchParams.set("lang", geoLocale);

  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
      "Set-Cookie": `${COOKIE_NAME}=${geoLocale}; Path=/; Max-Age=15552000; SameSite=Lax`
    }
  });
};

export const config = {
  path: "/*",
  onError: "bypass"
};
