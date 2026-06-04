(function () {
  "use strict";

  const config = window.OPENQUOTE_CONFIG || {};
  const year = document.getElementById("year");
  const orderValue = document.getElementById("order-value");
  const orderValueOutput = document.getElementById("order-value-output");
  const quoteIncludedMargin = document.getElementById("percentage-fee");
  const feeDifference = document.getElementById("fee-difference");
  const whatsappNote = document.getElementById("whatsapp-note");
  const whatsappNumber = String(config.whatsappNumber || "").replace(/\D/g, "");
  const numberFormatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  });
  const quickScoutFee = 59;

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function formatUsd(value) {
    return "US$" + numberFormatter.format(value);
  }

  function updateFeeComparison() {
    if (!orderValue || !orderValueOutput || !quoteIncludedMargin || !feeDifference) {
      return;
    }

    const value = Number(orderValue.value);
    const lowFee = Math.round(value * 0.1);
    const highFee = Math.round(value * 0.15);
    const lowDifference = Math.max(0, lowFee - quickScoutFee);
    const highDifference = Math.max(0, highFee - quickScoutFee);

    orderValueOutput.textContent = formatUsd(value);
    quoteIncludedMargin.textContent = formatUsd(lowFee) + "–" + formatUsd(highFee);
    feeDifference.textContent =
      formatUsd(lowDifference) + "–" + formatUsd(highDifference);
  }

  function createWhatsAppMessage(service) {
    if (window.OPENQUOTE_I18N && window.OPENQUOTE_I18N.whatsappMessage) {
      return window.OPENQUOTE_I18N.whatsappMessage(service);
    }

    return [
      "Hello OpenQuote Yiwu, I would like a free feasibility review.",
      "",
      "Service: " + service,
      "",
      "I will send:",
      "1. Product photo or description",
      "2. Target quantity",
      "3. Target country or market",
      "4. Packaging or customization needs"
    ].join("\n");
  }

  function configureWhatsAppLinks() {
    document.querySelectorAll("[data-whatsapp-link]").forEach(function (link) {
      if (!whatsappNumber) {
        link.href = "#request";
        return;
      }

      const message = createWhatsAppMessage(
        link.dataset.whatsappService || "China sourcing support"
      );

      link.href =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);
      link.target = "_blank";
      link.rel = "noopener";
    });

    if (!whatsappNumber && whatsappNote) {
      whatsappNote.textContent =
        window.OPENQUOTE_I18N && window.OPENQUOTE_I18N.getMissingNumberNote
          ? window.OPENQUOTE_I18N.getMissingNumberNote()
          : "Preview mode: add the WhatsApp number before public launch. This website does not collect or store your request.";
    }
  }

  if (orderValue) {
    orderValue.addEventListener("input", updateFeeComparison);
  }

  updateFeeComparison();
  configureWhatsAppLinks();
  document.addEventListener("openquote:localechange", configureWhatsAppLinks);
})();
