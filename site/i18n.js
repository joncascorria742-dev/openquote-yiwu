(function () {
  "use strict";

  const COOKIE_NAME = "oq_locale";
  const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;
  const LOCALES = ["en", "es", "ar", "fr", "pt", "ru"];

  const translations = {
    en: {
      lang: "en",
      dir: "ltr",
      title: "OpenQuote Yiwu | China Product Scouting from US$29",
      metaDescription:
        "Start sourcing products in China from inside the world's largest small-commodity wholesale market. Fixed service fees from US$29. Zero commission. Zero product markup.",
      ogTitle: "OpenQuote Yiwu | China Product Scouting from US$29",
      ogDescription:
        "Local product and supplier research from inside the world's largest small-commodity wholesale market. Zero commission. Zero product markup.",
      nav: ["Why us", "Services", "How it works", "Sample pack", "Start from US$29"],
      hero: {
        eyebrow: "Inside the world's largest small-commodity wholesale market",
        title: "China sourcing,<br /><span>without the flight.</span>",
        text: "Send one product photo. We'll check real Yiwu supplier options before you travel or place an order.",
        benefits: ["Original supplier quotes", "Supplier contact details", "MOQ, lead time and local photos"],
        cta: "Start a US$29 price re-check",
        sample: "View sample sourcing pack <span>↗</span>",
        note: "Fixed service fee. Zero commission. Zero product markup."
      },
      starter: {
        heading: ["CHINA PRICE RE-CHECK", "ENTRY SERVICE"],
        price: "29",
        from: "FIXED-FEE ENTRY SERVICE",
        items: [
          "For buyers with a quote, product photo or link",
          "We requote and compare reference prices",
          "Useful for checking suppliers, agents or trading quotes",
          "Price range and risk notes",
          "Not a full supplier development service"
        ],
        foot: ["Typical delivery", "1–2 business days"]
      },
      savings: {
        eyebrow: "Clear fixed fees. No commission. No product markup.",
        title: "How we differ from sourcing agents and trading companies.",
        text:
          '<strong class="red-highlight">Our service fee is fixed and agreed upfront.</strong> Some sourcing agents and trading companies may offer free product searches, then earn through commission or, more commonly, <strong class="red-highlight">by adding a margin to the product quote.</strong> The slider below uses a common illustrative margin of <strong class="red-highlight">10%–15%</strong>. Actual pricing varies by provider.',
        planned: "Planned order value",
        ourFee: "Our Quick Product Scout fee",
        otherCost: "Illustrative agent or trading company cost",
        difference: "Illustrative difference",
        meaningEyebrow: "What this means",
        meaningTitle: "See the original supplier quotation, shared unchanged.",
        meaningText:
          "Pay a fixed fee for local research. If you decide to buy, contact the supplier directly or choose any agent or export-service provider you prefer.",
        start: "Start from US$59",
        hint: "Swipe sideways to compare service models →",
        table: [
          ["", "OpenQuote Yiwu", "Typical sourcing agent", "Typical trading company"],
          ["Product search", "From US$59", "Product search may be free", "Quote requests are usually free"],
          ["How the provider earns", "Fixed task fee agreed upfront", "Margin included in product quote", "Resale margin included in product quote"],
          ["Product quote", "Original supplier quote shared unchanged", "Buyer receives the agent's quote", "Buyer receives a sales quote"],
          ["What happens next", "You choose freely", "Agent often manages the order", "Trading company handles the sale"]
        ],
        note:
          "Illustration only. Provider pricing and service scope vary. The slider shows an illustrative 10%–15% quote-included margin. The US$59 Quick Product Scout is a research service, not full order management."
      },
      market: {
        eyebrow: "Why begin in Yiwu?",
        title: "Start where millions of product options meet.",
        text:
          "Yiwu, China, is home to the world's largest small-commodity wholesale market. We help you explore it remotely before you spend time and money on an initial trip to China.",
        stats: ["square metres of market area", "market booths", "product varieties", "starting research fee"]
      },
      fieldShots: {
        eyebrow: "Market floor phone shots",
        title: "See product options like you asked someone to walk the market for you.",
        text:
          "The best proof is simple: vertical phone photos from the market, different products, clear notes and supplier details collected for your request.",
        cards: [
          ["Yiwu market", "09:42", "Market aisles", "Walk the market remotely"],
          ["Supplier shelf", "10:18", "Toys & ride-ons", "Children's vehicles, toy shelves"],
          ["Product check", "11:05", "Plush toys", "Character toys, gift items"],
          ["Market entrance", "12:20", "Trade market", "Yiwu International Trade Market"],
          ["Quote notes", "13:27", "Home decor", "Ceramics, bowls, display shelves"],
          ["Accessory booth", "16:08", "Jewelry & accessories", "Earrings, necklaces, fashion items"],
          ["Product ideas", "16:32", "Kitchen storage", "Racks, holders, home-use ideas"]
        ],
        note:
          "During a paid scouting task, we can collect phone photos from booths, shelves, packaging samples or supplier displays when they are relevant to your request."
      },
      servicesHeading: {
        eyebrow: "What we can do",
        title: "Choose a clear fixed-fee starting point.",
        text:
          "Start with the service that fits your goal. If your request needs a broader scope, we confirm the fixed fee with you before work begins."
      },
      services: [
        {
          price: "01 / US$29",
          title: "China Price Re-Check",
          text:
            "For buyers who already have a product photo, link, quote, supplier, sourcing agent or trading company offer. We requote and compare reference prices.",
          cta: "Re-check my price",
          service: "China Price Re-Check - US$29, requote and reference price comparison without full supplier development"
        },
        {
          price: "02 / US$59",
          title: "Quick Product Scout",
          text:
            "For buyers without a clear supplier yet. We search 3 supplier options and organize prices, MOQ, packaging notes and lead-time details.",
          cta: "Start a product scout",
          service: "Quick Product Scout - US$59, 3 supplier options with prices, MOQ, packaging notes and lead-time details"
        },
        {
          price: "03 / US$99",
          title: "5-Product Scout",
          text:
            "Search up to 5 specific products in one category. For each product, receive 2 supplier options, original quotes, contact details, MOQ, lead-time and packaging notes.",
          cta: "Start a 5-product scout",
          service: "5-Product Scout - US$99, up to 5 products with 2 supplier options per product"
        },
        {
          price: "04 / FROM US$199",
          title: "New Product Category Scout",
          text:
            "Explore one product category and receive 10–15 selected new product opportunities with photos, price ranges, packaging ideas and source notes.",
          cta: "Request a category scout",
          service: "New Product Category Scout - from US$199, 10-15 selected new product opportunities in one category"
        },
        {
          price: "05 / FROM US$79",
          title: "Remote local support",
          text:
            "Request a focused local task such as additional photos, basic follow-up or sample coordination in Yiwu.",
          cta: "Describe your task",
          service: "Remote local support - from US$79"
        }
      ],
      serviceNote:
        "Listed prices cover focused entry scopes. The US$29 China Price Re-Check is for buyers who already have a product photo, link, quote, supplier, sourcing agent or trading company offer. It includes requoting and reference price comparison, but not full supplier development. The US$59 Quick Product Scout is for buyers without a clear supplier yet and includes 3 supplier options. Broader requests receive a fixed quote before work begins. The US$99 5-Product Scout covers up to 5 products in one category, with 2 supplier options per product. The US$199 New Product Category Scout starts with 10–15 selected new product opportunities in one category. Third-party shipping, export, warehousing and testing costs are quoted separately when relevant. We do not claim regulated inspection work.",
      process: {
        eyebrow: "How it works",
        title: "Four clear steps. You stay in control.",
        intro: "Start with a free WhatsApp review. We confirm the fixed fee before any paid work begins.",
        steps: [
          ["Send your request on WhatsApp", "Send a product photo, sourcing goal or practical local task. The initial review is free."],
          ["Confirm the fixed-fee scope", "We confirm that the task is feasible, explain what is included and agree the fixed service fee. After payment, we begin the work."],
          ["We research locally in Yiwu", "We collect the agreed original supplier quotations, contact details, MOQ, lead times and local photos."],
          ["Receive the collected results", "We send the agreed results and the task is complete. Factory visits, production follow-up and shipping support are available as separate paid services."]
        ]
      },
      report: {
        eyebrow: "Private sourcing pack",
        title: "More useful than a list of links.",
        text:
          "Receive the agreed research in a structured private pack: original supplier quotations shared unchanged, contact details, MOQ, lead times, local photos, packaging or customization notes and clear next steps.",
        chips: ["Original quotes", "Supplier contacts", "MOQ and lead time", "Local photos", "Packaging/customization notes"],
        button: "Open the sample pack",
        previewTop: ["OPENQUOTE YIWU / SAMPLE", "PRODUCT SCOUT"],
        image: "LOCAL<br />PHOTO",
        productLabel: "TARGET PRODUCT",
        productName: "Foldable storage basket",
        productText: "Three responsive local supplier options compared.",
        stats: ["CONTACTED", "SHORTLISTED", "MOQ FROM"],
        supplierNames: ["Supplier A", "Supplier B"],
        quoteRecorded: "Original quote recorded",
        note: "Plus packaging, lead time, exclusions and next steps."
      },
      faq: {
        eyebrow: "Common questions",
        title: "Clarity before you commit.",
        items: [
          ["Do you charge commission on my order?", "No. Our service fee is fixed by task or workload and does not increase with your order value."],
          ["Do you add a markup to product prices?", "No. The original supplier quotations collected for your task are shared unchanged. Third-party costs are shown separately when relevant."],
          ["Will I receive supplier contact details?", "Yes. The paid sourcing pack includes the supplier contact details collected for your task, so you can decide how to proceed."],
          ["Can you check packaging, logo or customization options?", "Yes. When relevant, we can include basic packaging, logo, color or customization notes collected from suppliers. More detailed follow-up is quoted separately."],
          ["What is the difference between the US$59 and US$99 scouts?", "The US$59 Quick Product Scout covers one specific product with 3 supplier options. The US$99 5-Product Scout covers up to five specific products in one category, with 2 supplier options per product."],
          ["How many products are included in the US$199 category scout?", "The US$199 New Product Category Scout starts with 10–15 selected new product opportunities in one category, with photos, price ranges and source notes."],
          ["Can you help me find factory sources?", "Yes. Send your requirements through WhatsApp and we will confirm a fixed-fee scope for suitable factory and direct-supply options."],
          ["Are the listed prices fixed?", "Yes, for the stated entry scope. If your request is broader, we confirm a clear fixed fee through WhatsApp before paid work begins."],
          ["What happens after you send the collected results?", "Once we send the agreed collected results, that task is complete. Factory visits, production follow-up, shipping support and extra checks are separate paid services."],
          ["Do I need to visit China first?", "No. You can begin with local research and review your options remotely before deciding whether a trip is worthwhile."],
          ["Can you help with samples or another local task?", "Yes. Sample coordination, extra photos, supplier follow-up and other local tasks are available as separate fixed-fee services after we confirm feasibility."]
        ]
      },
      request: {
        eyebrow: "Start with a free WhatsApp review",
        title: "Message us directly on WhatsApp.",
        text:
          "Send a product photo, a short description or your sourcing goal directly in the chat. We will review your request and confirm a clear fixed-fee scope before any paid work begins.",
        points: [
          "Quick Product Scout: US$59",
          "5-Product Scout: US$99 · up to 5 products, 2 supplier options each",
          "New Product Category Scout: from US$199 · 10–15 selected opportunities",
          "Remote local support: from US$79",
          "Packaging/customization notes when available",
          "Zero commission. Zero product markup.",
          "Free request review before you pay",
          "Payment options are confirmed in WhatsApp before work begins"
        ],
        cardEyebrow: "WHATSAPP DIRECT CHAT",
        cardTitle: "Send your request in one message.",
        cardText:
          "Include a product photo or description, your target quantity and any important requirements. We will reply in the same chat.",
        button: "Chat with us on WhatsApp",
        note: "This website does not collect or store your request.",
        helpService: "Help me choose the right fixed-fee service"
      },
      footer: {
        text: "Original quotes. Zero commission. Zero product markup. Fixed service fees.",
        privacy: "Privacy"
      },
      whatsapp: {
        hello: "Hello OpenQuote Yiwu, I would like a free feasibility review.",
        service: "Service: ",
        willSend: "I will send:",
        fields: ["Product photo or description", "Target quantity", "Target country or market", "Packaging or customization needs"],
        fallbackService: "China sourcing support",
        missingNumber:
          "Preview mode: add the WhatsApp number before public launch. This website does not collect or store your request."
      }
    },
    es: {
      lang: "es",
      dir: "ltr",
      title: "OpenQuote Yiwu | Búsqueda de productos en China desde US$29",
      metaDescription:
        "Empiece a buscar productos en China desde el mayor mercado mayorista de pequeños productos del mundo. Tarifas fijas desde US$29. Sin comisión. Sin margen añadido.",
      ogTitle: "OpenQuote Yiwu | Búsqueda de productos en China desde US$29",
      ogDescription:
        "Investigación local de productos y proveedores desde el mayor mercado mayorista de pequeños productos del mundo. Sin comisión. Sin margen añadido.",
      nav: ["Ventajas", "Servicios", "Proceso", "Ejemplo", "Empezar por US$29"],
      hero: {
        eyebrow: "Dentro del mayor mercado mayorista de pequeños productos del mundo",
        title: "Sourcing en China,<br /><span>sin viajar.</span>",
        text: "Envíe una foto del producto. Revisaremos opciones reales de proveedores en Yiwu antes de que viaje o haga un pedido.",
        benefits: ["Cotizaciones originales", "Contactos de proveedores", "MOQ, plazos y fotos locales"],
        cta: "Empezar revisión por US$29",
        sample: "Ver ejemplo de informe <span>↗</span>",
        note: "Tarifa fija. Sin comisión. Sin margen añadido al producto."
      },
      starter: {
        heading: ["REVISIÓN DE PRECIO", "SERVICIO DE ENTRADA"],
        price: "29",
        from: "SERVICIO INICIAL DE TARIFA FIJA",
        items: [
          "Una cotización o foto de producto",
          "Revisión rápida de razonabilidad de mercado",
          "1–2 opciones de referencia",
          "Rango de precio y notas de riesgo",
          "Contactos completos desde US$59"
        ],
        foot: ["Entrega típica", "1–2 días hábiles"]
      },
      savings: {
        eyebrow: "Tarifas fijas claras. Sin comisión. Sin margen añadido.",
        title: "Diferencia frente a agentes de compra y empresas comerciales.",
        text:
          '<strong class="red-highlight">Nuestra tarifa de servicio es fija y se acuerda por adelantado.</strong> Algunos agentes de compra y empresas comerciales pueden ofrecer búsqueda gratuita de productos y luego ganar con comisión o, más comúnmente, <strong class="red-highlight">añadiendo un margen a la cotización del producto.</strong> El control inferior usa un margen ilustrativo común de <strong class="red-highlight">10%–15%</strong>. El precio real varía según el proveedor.',
        planned: "Valor previsto del pedido",
        ourFee: "Nuestra tarifa Quick Product Scout",
        otherCost: "Costo ilustrativo de agente o trading",
        difference: "Diferencia ilustrativa",
        meaningEyebrow: "Qué significa",
        meaningTitle: "Vea la cotización original del proveedor, sin cambios.",
        meaningText:
          "Pague una tarifa fija por investigación local. Si decide comprar, contacte al proveedor directamente o elija cualquier agente o proveedor de exportación que prefiera.",
        start: "Empezar desde US$59",
        hint: "Deslice para comparar modelos de servicio →",
        table: [
          ["", "OpenQuote Yiwu", "Agente de compra típico", "Empresa comercial típica"],
          ["Búsqueda de producto", "Desde US$59", "La búsqueda puede ser gratis", "Las solicitudes de cotización suelen ser gratis"],
          ["Cómo gana el proveedor", "Tarifa fija acordada antes", "Margen incluido en la cotización", "Margen de reventa incluido en la cotización"],
          ["Cotización del producto", "Cotización original sin cambios", "El comprador recibe la cotización del agente", "El comprador recibe una cotización de venta"],
          ["Qué pasa después", "Usted elige libremente", "El agente suele gestionar el pedido", "La empresa comercial gestiona la venta"]
        ],
        note:
          "Solo ilustración. Los precios y alcances varían. El control muestra un margen ilustrativo de 10%–15% incluido en la cotización. Quick Product Scout de US$59 es investigación, no gestión completa del pedido."
      },
      market: {
        eyebrow: "¿Por qué empezar en Yiwu?",
        title: "Empiece donde se reúnen millones de opciones de producto.",
        text:
          "Yiwu, China, alberga el mayor mercado mayorista de pequeños productos del mundo. Le ayudamos a explorarlo a distancia antes de gastar tiempo y dinero en un primer viaje a China.",
        stats: ["metros cuadrados de mercado", "puestos de mercado", "variedades de productos", "tarifa inicial de investigación"]
      },
      fieldShots: {
        eyebrow: "Fotos verticales desde el mercado",
        title: "Vea opciones de producto como si alguien caminara el mercado por usted.",
        text:
          "La prueba más clara es sencilla: fotos verticales desde el mercado, productos diferentes, notas claras y datos de proveedores recopilados para su solicitud.",
        cards: [
          ["Mercado de Yiwu", "09:42", "Pasillos del mercado", "Recorra el mercado a distancia"],
          ["Estante proveedor", "10:18", "Juguetes y montables", "Vehículos infantiles y estantes"],
          ["Revisión producto", "11:05", "Peluches", "Juguetes de personaje y regalos"],
          ["Entrada mercado", "12:20", "Mercado mayorista", "Yiwu International Trade Market"],
          ["Notas de precio", "13:27", "Decoración hogar", "Cerámica, cuencos y exhibidores"],
          ["Puesto accesorios", "16:08", "Joyería y accesorios", "Aretes, collares y moda"],
          ["Ideas producto", "16:32", "Cocina y organización", "Estantes, soportes y hogar"]
        ],
        note:
          "Durante una tarea pagada, podemos recopilar fotos de teléfono de puestos, estantes, muestras de empaque o exhibiciones de proveedores cuando sean relevantes para su solicitud."
      },
      servicesHeading: {
        eyebrow: "Qué podemos hacer",
        title: "Elija un punto de inicio con tarifa fija.",
        text:
          "Empiece con el servicio que encaja con su objetivo. Si su solicitud requiere un alcance mayor, confirmamos la tarifa fija antes de iniciar."
      },
      services: [
        {
          price: "01 / US$29",
          title: "Revisión de precio en China",
          text:
            "Para compradores que ya tienen foto, enlace, cotización, proveedor, agente de compra u oferta de trading. Volvemos a cotizar y comparamos precios de referencia.",
          cta: "Revisar mi precio",
          service: "Revisión de precio en China - US$29, recotización y comparación de precios de referencia sin desarrollo completo de proveedores"
        },
        {
          price: "02 / US$59",
          title: "Búsqueda rápida de producto",
          text:
            "Para compradores que aún no tienen un proveedor claro. Buscamos 3 opciones de proveedores y organizamos precios, MOQ, notas de empaque y plazos.",
          cta: "Empezar búsqueda",
          service: "Búsqueda rápida de producto - US$59, 3 opciones de proveedores con precios, MOQ, notas de empaque y plazos"
        },
        {
          price: "03 / US$99",
          title: "Búsqueda de 5 productos",
          text:
            "Buscamos hasta 5 productos específicos en una categoría. Para cada producto, reciba 2 opciones de proveedores, cotizaciones originales, contactos, MOQ, plazos y notas de empaque.",
          cta: "Empezar 5 productos",
          service: "Búsqueda de 5 productos - US$99, hasta 5 productos con 2 proveedores por producto"
        },
        {
          price: "04 / DESDE US$199",
          title: "Búsqueda de nueva categoría",
          text:
            "Explore una categoría y reciba 10–15 oportunidades seleccionadas de productos nuevos con fotos, rangos de precio, ideas de empaque y notas de origen.",
          cta: "Solicitar categoría",
          service: "Búsqueda de nueva categoría - desde US$199, 10-15 oportunidades seleccionadas en una categoría"
        },
        {
          price: "05 / DESDE US$79",
          title: "Soporte local remoto",
          text:
            "Solicite una tarea local concreta, como fotos adicionales, seguimiento básico o coordinación de muestras en Yiwu.",
          cta: "Describir tarea",
          service: "Soporte local remoto - desde US$79"
        }
      ],
      serviceNote:
        "Los precios indicados cubren alcances iniciales concretos. La revisión de precio en China por US$29 es para compradores que ya tienen foto, enlace, cotización, proveedor, agente de compra u oferta de trading. Incluye recotización y comparación de precios de referencia, pero no desarrollo completo de proveedores. La búsqueda rápida de producto por US$59 es para compradores que aún no tienen un proveedor claro e incluye 3 opciones de proveedores. Las solicitudes más amplias reciben una cotización fija antes de iniciar. La búsqueda de 5 productos por US$99 cubre hasta 5 productos en una categoría, con 2 proveedores por producto. La búsqueda de categoría desde US$199 empieza con 10–15 oportunidades seleccionadas en una categoría. Envío, exportación, almacén, pruebas y otros costos de terceros se cotizan por separado cuando correspondan. No afirmamos realizar inspecciones reguladas.",
      process: {
        eyebrow: "Cómo funciona",
        title: "Cuatro pasos claros. Usted mantiene el control.",
        intro: "Empiece con una revisión gratuita por WhatsApp. Confirmamos la tarifa fija antes de cualquier trabajo pagado.",
        steps: [
          ["Envíe su solicitud por WhatsApp", "Envíe una foto del producto, objetivo de búsqueda o tarea local práctica. La revisión inicial es gratis."],
          ["Confirme el alcance de tarifa fija", "Confirmamos si la tarea es viable, explicamos qué incluye y acordamos la tarifa fija. Después del pago, empezamos el trabajo."],
          ["Investigamos localmente en Yiwu", "Recopilamos las cotizaciones originales acordadas, contactos, MOQ, plazos y fotos locales."],
          ["Reciba los resultados recopilados", "Enviamos los resultados acordados y la tarea termina. Visitas a fábricas, seguimiento de producción y apoyo de envío son servicios pagados aparte."]
        ]
      },
      report: {
        eyebrow: "Informe privado de sourcing",
        title: "Más útil que una lista de enlaces.",
        text:
          "Reciba la investigación acordada en un informe privado estructurado: cotizaciones originales sin cambios, contactos, MOQ, plazos, fotos locales, notas de empaque o personalización y próximos pasos claros.",
        chips: ["Cotizaciones originales", "Contactos", "MOQ y plazo", "Fotos locales", "Notas de empaque/personalización"],
        button: "Abrir ejemplo",
        previewTop: ["OPENQUOTE YIWU / EJEMPLO", "BÚSQUEDA DE PRODUCTO"],
        image: "FOTO<br />LOCAL",
        productLabel: "PRODUCTO OBJETIVO",
        productName: "Canasta plegable de almacenamiento",
        productText: "Tres proveedores locales que responden comparados.",
        stats: ["CONTACTADOS", "PRESELECCIONADOS", "MOQ DESDE"],
        supplierNames: ["Proveedor A", "Proveedor B"],
        quoteRecorded: "Cotización original registrada",
        note: "Además de empaque, plazo, exclusiones y próximos pasos."
      },
      faq: {
        eyebrow: "Preguntas comunes",
        title: "Claridad antes de comprometerse.",
        items: [
          ["¿Cobran comisión sobre mi pedido?", "No. Nuestra tarifa es fija por tarea o carga de trabajo y no aumenta con el valor de su pedido."],
          ["¿Añaden margen al precio del producto?", "No. Las cotizaciones originales recopiladas para su tarea se comparten sin cambios. Los costos de terceros se muestran por separado cuando correspondan."],
          ["¿Recibiré los datos de contacto del proveedor?", "Sí. El informe pagado incluye los contactos recopilados para su tarea, para que usted decida cómo continuar."],
          ["¿Pueden revisar empaque, logo o personalización?", "Sí. Cuando sea relevante, podemos incluir notas básicas de empaque, logo, color o personalización recopiladas de proveedores. El seguimiento detallado se cotiza aparte."],
          ["¿Cuál es la diferencia entre US$59 y US$99?", "US$59 cubre un producto específico con 3 proveedores. US$99 cubre hasta cinco productos específicos en una categoría, con 2 proveedores por producto."],
          ["¿Cuántos productos incluye la categoría de US$199?", "La búsqueda de categoría desde US$199 empieza con 10–15 oportunidades seleccionadas en una categoría, con fotos, rangos de precio y notas de origen."],
          ["¿Pueden ayudarme a encontrar fábricas?", "Sí. Envíe sus requisitos por WhatsApp y confirmaremos un alcance de tarifa fija para opciones adecuadas de fábrica o suministro directo."],
          ["¿Los precios indicados son fijos?", "Sí, para el alcance inicial indicado. Si su solicitud es más amplia, confirmamos una tarifa fija clara por WhatsApp antes de iniciar."],
          ["¿Qué pasa después de enviar los resultados?", "Cuando enviamos los resultados acordados, esa tarea termina. Visitas a fábricas, seguimiento de producción, envío y revisiones extra son servicios pagados aparte."],
          ["¿Necesito visitar China primero?", "No. Puede empezar con investigación local y revisar sus opciones a distancia antes de decidir si vale la pena viajar."],
          ["¿Pueden ayudar con muestras u otra tarea local?", "Sí. Coordinación de muestras, fotos extra, seguimiento de proveedores y otras tareas locales están disponibles como servicios de tarifa fija después de confirmar viabilidad."]
        ]
      },
      request: {
        eyebrow: "Empiece con una revisión gratuita por WhatsApp",
        title: "Escríbanos directamente por WhatsApp.",
        text:
          "Envíe una foto, una breve descripción o su objetivo de sourcing directamente en el chat. Revisaremos la solicitud y confirmaremos un alcance de tarifa fija antes de cualquier trabajo pagado.",
        points: [
          "Búsqueda rápida: US$59",
          "Búsqueda de 5 productos: US$99 · hasta 5 productos, 2 proveedores cada uno",
          "Búsqueda de nueva categoría: desde US$199 · 10–15 oportunidades seleccionadas",
          "Soporte local remoto: desde US$79",
          "Notas de empaque/personalización cuando estén disponibles",
          "Sin comisión. Sin margen añadido.",
          "Revisión gratuita antes de pagar",
          "Las opciones de pago se confirman por WhatsApp antes de empezar"
        ],
        cardEyebrow: "CHAT DIRECTO DE WHATSAPP",
        cardTitle: "Envíe su solicitud en un mensaje.",
        cardText:
          "Incluya foto o descripción del producto, cantidad objetivo y requisitos importantes. Responderemos en el mismo chat.",
        button: "Chatear por WhatsApp",
        note: "Este sitio no recopila ni guarda su solicitud.",
        helpService: "Ayúdenme a elegir el servicio de tarifa fija adecuado"
      },
      footer: {
        text: "Cotizaciones originales. Sin comisión. Sin margen añadido. Tarifas fijas.",
        privacy: "Privacidad"
      },
      whatsapp: {
        hello: "Hola OpenQuote Yiwu, quiero una revisión gratuita de viabilidad.",
        service: "Servicio: ",
        willSend: "Enviaré:",
        fields: ["Foto o descripción del producto", "Cantidad objetivo", "País o mercado objetivo", "Necesidades de empaque o personalización"],
        fallbackService: "Soporte de sourcing en China",
        missingNumber:
          "Modo de vista previa: agregue el número de WhatsApp antes del lanzamiento. Este sitio no recopila ni guarda su solicitud."
      }
    },
    ar: {
      lang: "ar",
      dir: "rtl",
      title: "OpenQuote Yiwu | بحث عن منتجات الصين من US$29",
      metaDescription:
        "ابدأ البحث عن منتجات في الصين من داخل أكبر سوق جملة للسلع الصغيرة في العالم. رسوم خدمة ثابتة من US$29. بدون عمولة وبدون زيادة على سعر المنتج.",
      ogTitle: "OpenQuote Yiwu | بحث عن منتجات الصين من US$29",
      ogDescription:
        "بحث محلي عن المنتجات والموردين من داخل أكبر سوق جملة للسلع الصغيرة في العالم. بدون عمولة وبدون زيادة على سعر المنتج.",
      nav: ["لماذا نحن", "الخدمات", "طريقة العمل", "نموذج التقرير", "ابدأ من US$29"],
      hero: {
        eyebrow: "من داخل أكبر سوق جملة للسلع الصغيرة في العالم",
        title: "التوريد من الصين،<br /><span>بدون السفر.</span>",
        text: "أرسل صورة واحدة للمنتج. سنفحص خيارات موردين حقيقيين في ييوو قبل أن تسافر أو تقدم طلب شراء.",
        benefits: ["عروض أسعار أصلية", "بيانات التواصل مع الموردين", "MOQ والمدة والصور المحلية"],
        cta: "ابدأ فحص السعر من US$29",
        sample: "عرض نموذج تقرير التوريد <span>↗</span>",
        note: "رسوم ثابتة. بدون عمولة. بدون زيادة على سعر المنتج."
      },
      starter: {
        heading: ["فحص سعر الصين", "خدمة دخول"],
        price: "29",
        from: "خدمة أولية برسوم ثابتة",
        items: [
          "عرض سعر مورد أو صورة منتج",
          "فحص سريع لمعقولية سعر السوق",
          "1–2 خيار مورد مرجعي",
          "نطاق السعر وملاحظات المخاطر",
          "التواصل الكامل يبدأ من US$59"
        ],
        foot: ["مدة التسليم المعتادة", "1–2 يوم عمل"]
      },
      savings: {
        eyebrow: "رسوم ثابتة واضحة. بدون عمولة. بدون زيادة على المنتج.",
        title: "كيف نختلف عن وكلاء الشراء وشركات التجارة.",
        text:
          '<strong class="red-highlight">رسوم خدمتنا ثابتة ويتم الاتفاق عليها مسبقاً.</strong> قد يقدم بعض وكلاء الشراء وشركات التجارة بحثاً مجانياً عن المنتج، ثم يربحون من العمولة أو، في الغالب، <strong class="red-highlight">بإضافة هامش إلى عرض سعر المنتج.</strong> يستخدم المؤشر أدناه هامشاً توضيحياً شائعاً قدره <strong class="red-highlight">10%–15%</strong>. تختلف الأسعار الفعلية حسب مقدم الخدمة.',
        planned: "قيمة الطلب المخططة",
        ourFee: "رسوم Quick Product Scout لدينا",
        otherCost: "تكلفة توضيحية للوكيل أو شركة التجارة",
        difference: "الفرق التوضيحي",
        meaningEyebrow: "ماذا يعني ذلك",
        meaningTitle: "اطلع على عرض المورد الأصلي كما هو.",
        meaningText:
          "ادفع رسوماً ثابتة للبحث المحلي. إذا قررت الشراء، يمكنك التواصل مباشرة مع المورد أو اختيار أي وكيل أو مقدم خدمة تصدير تفضله.",
        start: "ابدأ من US$59",
        hint: "اسحب جانبياً لمقارنة نماذج الخدمة →",
        table: [
          ["", "OpenQuote Yiwu", "وكيل شراء نموذجي", "شركة تجارة نموذجية"],
          ["بحث عن المنتج", "من US$59", "قد يكون البحث مجانياً", "طلبات عروض الأسعار غالباً مجانية"],
          ["كيف يربح مقدم الخدمة", "رسوم ثابتة متفق عليها مسبقاً", "هامش مضاف داخل عرض المنتج", "هامش إعادة بيع داخل عرض المنتج"],
          ["عرض سعر المنتج", "عرض المورد الأصلي كما هو", "المشتري يتلقى عرض الوكيل", "المشتري يتلقى عرض بيع"],
          ["ما التالي", "أنت تختار بحرية", "الوكيل غالباً يدير الطلب", "شركة التجارة تدير عملية البيع"]
        ],
        note:
          "للتوضيح فقط. تختلف الأسعار ونطاق الخدمة. يعرض المؤشر هامشاً توضيحياً 10%–15% داخل عرض السعر. خدمة US$59 هي بحث، وليست إدارة كاملة للطلب."
      },
      market: {
        eyebrow: "لماذا نبدأ من ييوو؟",
        title: "ابدأ من حيث تلتقي ملايين خيارات المنتجات.",
        text:
          "تضم ييوو في الصين أكبر سوق جملة للسلع الصغيرة في العالم. نساعدك على استكشافه عن بُعد قبل أن تنفق الوقت والمال على رحلتك الأولى إلى الصين.",
        stats: ["متر مربع من مساحة السوق", "كشك سوق", "تنوع منتج", "رسوم البحث المبدئية"]
      },
      fieldShots: {
        eyebrow: "صور هاتفية من أرض السوق",
        title: "شاهد خيارات المنتجات كأن شخصاً يتجول في السوق نيابة عنك.",
        text:
          "أفضل دليل بسيط: صور عمودية بالهاتف من السوق، منتجات مختلفة، ملاحظات واضحة وبيانات موردين نجمعها حسب طلبك.",
        cards: [
          ["سوق ييوو", "09:42", "ممرات السوق", "تجول في السوق عن بعد"],
          ["رف المورد", "10:18", "ألعاب ومركبات أطفال", "سيارات أطفال ورفوف ألعاب"],
          ["فحص المنتج", "11:05", "ألعاب قطيفة", "ألعاب شخصيات وهدايا"],
          ["مدخل السوق", "12:20", "سوق الجملة", "سوق ييوو للتجارة الدولية"],
          ["ملاحظات السعر", "13:27", "ديكور المنزل", "سيراميك، أوعية، رفوف عرض"],
          ["كشك إكسسوارات", "16:08", "مجوهرات وإكسسوارات", "أقراط، قلائد، منتجات موضة"],
          ["أفكار منتجات", "16:32", "تخزين المطبخ", "رفوف، حوامل، أفكار منزلية"]
        ],
        note:
          "أثناء المهمة المدفوعة، يمكننا جمع صور هاتفية من الأكشاك أو الرفوف أو عينات التغليف أو عروض الموردين عندما تكون مرتبطة بطلبك."
      },
      servicesHeading: {
        eyebrow: "ما الذي يمكننا فعله",
        title: "اختر نقطة بداية واضحة برسوم ثابتة.",
        text:
          "ابدأ بالخدمة المناسبة لهدفك. إذا احتاج طلبك إلى نطاق أوسع، نؤكد الرسوم الثابتة معك قبل بدء العمل."
      },
      services: [
        {
          price: "01 / US$29",
          title: "إعادة فحص سعر الصين",
          text:
            "للمشترين الذين لديهم بالفعل صورة منتج أو رابط أو عرض سعر أو مورد أو وكيل شراء أو عرض من شركة تجارة. نعيد طلب السعر ونقارن أسعاراً مرجعية.",
          cta: "أعد فحص السعر",
          service: "إعادة فحص سعر الصين - US$29، إعادة تسعير ومقارنة أسعار مرجعية بدون تطوير موردين كامل"
        },
        {
          price: "02 / US$59",
          title: "بحث سريع عن منتج",
          text:
            "للمشترين الذين لا يملكون مورداً واضحاً بعد. نبحث عن 3 خيارات موردين ونرتب الأسعار، MOQ، ملاحظات التغليف ومدة التسليم.",
          cta: "ابدأ بحث المنتج",
          service: "بحث سريع عن منتج - US$59، 3 خيارات موردين مع الأسعار وMOQ وملاحظات التغليف ومدة التسليم"
        },
        {
          price: "03 / US$99",
          title: "بحث 5 منتجات",
          text:
            "نبحث عن حتى 5 منتجات محددة في فئة واحدة. لكل منتج تحصل على خيارين موردين، عروض أصلية، بيانات التواصل، MOQ، مدة التسليم وملاحظات التغليف.",
          cta: "ابدأ بحث 5 منتجات",
          service: "بحث 5 منتجات - US$99، حتى 5 منتجات مع خيارين موردين لكل منتج"
        },
        {
          price: "04 / من US$199",
          title: "بحث فئة منتجات جديدة",
          text:
            "استكشف فئة منتج واحدة واحصل على 10–15 فرصة مختارة لمنتجات جديدة مع صور، نطاقات أسعار، أفكار تغليف وملاحظات مصدر.",
          cta: "اطلب بحث فئة",
          service: "بحث فئة منتجات جديدة - من US$199، 10-15 فرصة مختارة في فئة واحدة"
        },
        {
          price: "05 / من US$79",
          title: "دعم محلي عن بُعد",
          text:
            "اطلب مهمة محلية محددة مثل صور إضافية، متابعة أساسية أو تنسيق عينات في ييوو.",
          cta: "اشرح مهمتك",
          service: "دعم محلي عن بُعد - من US$79"
        }
      ],
      serviceNote:
        "الأسعار المعروضة تغطي نطاقات دخول محددة. خدمة إعادة فحص سعر الصين US$29 مناسبة للمشترين الذين لديهم صورة أو رابط أو عرض سعر أو مورد أو وكيل شراء أو عرض من شركة تجارة. تشمل إعادة طلب السعر ومقارنة أسعار مرجعية، لكنها لا تشمل تطوير موردين كامل. خدمة البحث السريع عن منتج US$59 مناسبة لمن لا يملكون مورداً واضحاً وتشمل 3 خيارات موردين. الطلبات الأوسع تحصل على عرض ثابت قبل بدء العمل. خدمة US$99 تغطي حتى 5 منتجات في فئة واحدة، مع خيارين موردين لكل منتج. خدمة فئة المنتجات من US$199 تبدأ بـ 10–15 فرصة مختارة في فئة واحدة. الشحن، التصدير، التخزين، الاختبار وتكاليف الأطراف الثالثة تُعرض بشكل منفصل عند الحاجة. نحن لا ندّعي تقديم تفتيش منظم.",
      process: {
        eyebrow: "طريقة العمل",
        title: "أربع خطوات واضحة. القرار يبقى بيدك.",
        intro: "ابدأ بمراجعة مجانية عبر واتساب. نؤكد الرسوم الثابتة قبل أي عمل مدفوع.",
        steps: [
          ["أرسل طلبك عبر واتساب", "أرسل صورة المنتج أو هدف التوريد أو مهمة محلية عملية. المراجعة الأولية مجانية."],
          ["أكد نطاق الرسوم الثابتة", "نؤكد إمكانية التنفيذ، نشرح ما يشمله العمل ونتفق على الرسوم الثابتة. بعد الدفع نبدأ العمل."],
          ["نبحث محلياً في ييوو", "نجمع عروض الموردين الأصلية المتفق عليها، بيانات التواصل، MOQ، مدد التسليم والصور المحلية."],
          ["استلم النتائج المجمعة", "نرسل النتائج المتفق عليها وتنتهي المهمة. زيارة المصانع، متابعة الإنتاج ودعم الشحن خدمات مدفوعة منفصلة."]
        ]
      },
      report: {
        eyebrow: "ملف توريد خاص",
        title: "أكثر فائدة من قائمة روابط.",
        text:
          "استلم البحث المتفق عليه في ملف خاص منظم: عروض الموردين الأصلية كما هي، بيانات التواصل، MOQ، مدد التسليم، صور محلية، ملاحظات التغليف أو التخصيص وخطوات تالية واضحة.",
        chips: ["عروض أصلية", "بيانات الموردين", "MOQ ومدة التسليم", "صور محلية", "ملاحظات تغليف/تخصيص"],
        button: "افتح نموذج التقرير",
        previewTop: ["OPENQUOTE YIWU / نموذج", "بحث منتج"],
        image: "صورة<br />محلية",
        productLabel: "المنتج المطلوب",
        productName: "سلة تخزين قابلة للطي",
        productText: "مقارنة ثلاثة خيارات موردين محليين متجاوبين.",
        stats: ["تم التواصل", "قائمة مختصرة", "MOQ من"],
        supplierNames: ["المورد A", "المورد B"],
        quoteRecorded: "تم تسجيل العرض الأصلي",
        note: "بالإضافة إلى التغليف، المدة، الاستثناءات والخطوات التالية."
      },
      faq: {
        eyebrow: "أسئلة شائعة",
        title: "وضوح قبل أن تلتزم.",
        items: [
          ["هل تفرضون عمولة على طلبي؟", "لا. رسومنا ثابتة حسب المهمة أو حجم العمل ولا تزيد مع قيمة طلبك."],
          ["هل تضيفون هامشاً إلى أسعار المنتجات؟", "لا. عروض الموردين الأصلية التي نجمعها لمهمتك تُشارك كما هي. تكاليف الأطراف الثالثة تظهر منفصلة عند الحاجة."],
          ["هل سأحصل على بيانات التواصل مع الموردين؟", "نعم. ملف التوريد المدفوع يتضمن بيانات التواصل التي جمعناها لمهمتك حتى تقرر كيف تتابع."],
          ["هل يمكنكم فحص التغليف أو الشعار أو التخصيص؟", "نعم. عند الحاجة يمكننا إضافة ملاحظات أساسية عن التغليف، الشعار، اللون أو التخصيص من الموردين. المتابعة التفصيلية تُسعر منفصلة."],
          ["ما الفرق بين خدمة US$59 وUS$99؟", "خدمة US$59 تغطي منتجاً محدداً واحداً مع 3 خيارات موردين. خدمة US$99 تغطي حتى خمسة منتجات في فئة واحدة، مع خيارين موردين لكل منتج."],
          ["كم منتجاً تشمل خدمة الفئة من US$199؟", "تبدأ خدمة فئة المنتجات من US$199 بـ 10–15 فرصة مختارة في فئة واحدة، مع صور ونطاقات أسعار وملاحظات مصدر."],
          ["هل يمكنكم مساعدتي في إيجاد مصادر مصانع؟", "نعم. أرسل متطلباتك عبر واتساب وسنؤكد نطاقاً برسوم ثابتة لخيارات مصنع أو توريد مباشر مناسبة."],
          ["هل الأسعار المعروضة ثابتة؟", "نعم، للنطاق الأولي الموضح. إذا كان طلبك أوسع، نؤكد رسوماً ثابتة واضحة عبر واتساب قبل بدء العمل المدفوع."],
          ["ماذا يحدث بعد إرسال النتائج؟", "بعد إرسال النتائج المتفق عليها تنتهي تلك المهمة. زيارة المصانع، متابعة الإنتاج، دعم الشحن والفحوصات الإضافية خدمات مدفوعة منفصلة."],
          ["هل أحتاج إلى زيارة الصين أولاً؟", "لا. يمكنك البدء ببحث محلي ومراجعة الخيارات عن بُعد قبل أن تقرر إن كانت الرحلة تستحق."],
          ["هل تساعدون بالعينات أو مهمة محلية أخرى؟", "نعم. تنسيق العينات، الصور الإضافية، متابعة الموردين والمهام المحلية الأخرى متاحة كخدمات برسوم ثابتة بعد تأكيد الإمكانية."]
        ]
      },
      request: {
        eyebrow: "ابدأ بمراجعة مجانية عبر واتساب",
        title: "راسلنا مباشرة عبر واتساب.",
        text:
          "أرسل صورة منتج أو وصفاً قصيراً أو هدف التوريد مباشرة في المحادثة. سنراجع طلبك ونؤكد نطاقاً واضحاً برسوم ثابتة قبل أي عمل مدفوع.",
        points: [
          "بحث سريع عن منتج: US$59",
          "بحث 5 منتجات: US$99 · حتى 5 منتجات وخيارا موردين لكل منتج",
          "بحث فئة منتجات جديدة: من US$199 · 10–15 فرصة مختارة",
          "دعم محلي عن بُعد: من US$79",
          "ملاحظات تغليف/تخصيص عند توفرها",
          "بدون عمولة. بدون زيادة على سعر المنتج.",
          "مراجعة مجانية قبل الدفع",
          "يتم تأكيد خيارات الدفع عبر واتساب قبل بدء العمل"
        ],
        cardEyebrow: "محادثة واتساب مباشرة",
        cardTitle: "أرسل طلبك في رسالة واحدة.",
        cardText:
          "أرفق صورة المنتج أو وصفه، الكمية المستهدفة وأي متطلبات مهمة. سنرد في نفس المحادثة.",
        button: "تواصل معنا عبر واتساب",
        note: "هذا الموقع لا يجمع أو يخزن طلبك.",
        helpService: "ساعدوني في اختيار خدمة الرسوم الثابتة المناسبة"
      },
      footer: {
        text: "عروض أصلية. بدون عمولة. بدون زيادة على المنتج. رسوم خدمة ثابتة.",
        privacy: "الخصوصية"
      },
      whatsapp: {
        hello: "مرحباً OpenQuote Yiwu، أريد مراجعة مجانية لإمكانية التنفيذ.",
        service: "الخدمة: ",
        willSend: "سأرسل:",
        fields: ["صورة أو وصف المنتج", "الكمية المستهدفة", "الدولة أو السوق المستهدف", "احتياجات التغليف أو التخصيص"],
        fallbackService: "دعم التوريد من الصين",
        missingNumber:
          "وضع المعاينة: أضف رقم واتساب قبل الإطلاق العام. هذا الموقع لا يجمع أو يخزن طلبك."
      }
    },
    fr: {
      lang: "fr",
      dir: "ltr",
      title: "OpenQuote Yiwu | Recherche de produits en Chine dès US$29",
      metaDescription:
        "Commencez votre sourcing en Chine depuis le plus grand marché de gros de petites marchandises au monde. Frais fixes dès US$29. Aucune commission. Aucune marge ajoutée.",
      ogTitle: "OpenQuote Yiwu | Recherche de produits en Chine dès US$29",
      ogDescription:
        "Recherche locale de produits et fournisseurs depuis le plus grand marché de gros de petites marchandises au monde. Aucune commission. Aucune marge ajoutée.",
      nav: ["Avantages", "Services", "Processus", "Exemple", "Démarrer à US$29"],
      hero: {
        eyebrow: "Au cœur du plus grand marché de gros de petites marchandises au monde",
        title: "Sourcing en Chine,<br /><span>sans prendre l’avion.</span>",
        text: "Envoyez une photo du produit. Nous vérifierons de vraies options de fournisseurs à Yiwu avant votre voyage ou votre commande.",
        benefits: ["Devis fournisseurs originaux", "Contacts fournisseurs", "MOQ, délais et photos locales"],
        cta: "Démarrer une vérification à US$29",
        sample: "Voir un exemple de dossier <span>↗</span>",
        note: "Frais fixes. Aucune commission. Aucune marge ajoutée au produit."
      },
      starter: {
        heading: ["VÉRIFICATION DE PRIX", "SERVICE D’ENTRÉE"],
        price: "29",
        from: "SERVICE INITIAL À FRAIS FIXES",
        items: [
          "Un devis fournisseur ou une photo produit",
          "Vérification rapide de cohérence du marché",
          "1–2 options fournisseur de référence",
          "Fourchette de prix et notes de risque",
          "Contacts complets dès US$59"
        ],
        foot: ["Délai habituel", "1–2 jours ouvrés"]
      },
      savings: {
        eyebrow: "Frais fixes clairs. Aucune commission. Aucune marge produit.",
        title: "Notre différence avec les agents de sourcing et sociétés de trading.",
        text:
          '<strong class="red-highlight">Nos frais de service sont fixes et convenus à l’avance.</strong> Certains agents de sourcing et sociétés de trading peuvent proposer une recherche gratuite, puis gagner via une commission ou, plus souvent, <strong class="red-highlight">en ajoutant une marge au devis produit.</strong> Le curseur ci-dessous utilise une marge illustrative courante de <strong class="red-highlight">10%–15%</strong>. Les prix réels varient selon le prestataire.',
        planned: "Valeur de commande prévue",
        ourFee: "Nos frais Quick Product Scout",
        otherCost: "Coût illustratif agent ou trading",
        difference: "Différence illustrative",
        meaningEyebrow: "Ce que cela signifie",
        meaningTitle: "Voyez le devis fournisseur original, partagé sans modification.",
        meaningText:
          "Payez des frais fixes pour une recherche locale. Si vous décidez d’acheter, contactez directement le fournisseur ou choisissez l’agent ou prestataire export que vous préférez.",
        start: "Démarrer dès US$59",
        hint: "Faites défiler pour comparer les modèles →",
        table: [
          ["", "OpenQuote Yiwu", "Agent de sourcing typique", "Société de trading typique"],
          ["Recherche produit", "Dès US$59", "La recherche peut être gratuite", "Les demandes de devis sont souvent gratuites"],
          ["Comment le prestataire gagne", "Frais fixes convenus à l’avance", "Marge incluse dans le devis produit", "Marge de revente incluse dans le devis"],
          ["Devis produit", "Devis fournisseur original inchangé", "L’acheteur reçoit le devis de l’agent", "L’acheteur reçoit un devis de vente"],
          ["Suite du processus", "Vous choisissez librement", "L’agent gère souvent la commande", "La société de trading gère la vente"]
        ],
        note:
          "Illustration uniquement. Prix et périmètres varient. Le curseur montre une marge illustrative de 10%–15% incluse dans le devis. Le Quick Product Scout à US$59 est une recherche, pas une gestion complète de commande."
      },
      market: {
        eyebrow: "Pourquoi commencer à Yiwu ?",
        title: "Commencez là où se croisent des millions d’options produit.",
        text:
          "Yiwu, en Chine, abrite le plus grand marché de gros de petites marchandises au monde. Nous vous aidons à l’explorer à distance avant d’investir temps et argent dans un premier voyage en Chine.",
        stats: ["mètres carrés de marché", "stands de marché", "variétés de produits", "frais de recherche de départ"]
      },
      fieldShots: {
        eyebrow: "Photos verticales depuis le marché",
        title: "Voyez les options produit comme si quelqu’un parcourait le marché pour vous.",
        text:
          "La preuve la plus simple : des photos verticales prises au marché, différents produits, des notes claires et des contacts fournisseurs collectés pour votre demande.",
        cards: [
          ["Marché de Yiwu", "09:42", "Allées du marché", "Parcourir le marché à distance"],
          ["Rayon fournisseur", "10:18", "Jouets et porteurs", "Véhicules enfants et rayons jouets"],
          ["Vérif produit", "11:05", "Peluches", "Jouets personnages et cadeaux"],
          ["Entrée marché", "12:20", "Marché de gros", "Yiwu International Trade Market"],
          ["Notes devis", "13:27", "Déco maison", "Céramique, bols, présentoirs"],
          ["Stand accessoires", "16:08", "Bijoux et accessoires", "Boucles, colliers, mode"],
          ["Idées produit", "16:32", "Rangement cuisine", "Étagères, supports, idées maison"]
        ],
        note:
          "Pendant une mission payée, nous pouvons collecter des photos téléphone de stands, rayons, échantillons d’emballage ou présentoirs fournisseurs si elles sont utiles à votre demande."
      },
      servicesHeading: {
        eyebrow: "Ce que nous pouvons faire",
        title: "Choisissez un point de départ à frais fixes.",
        text:
          "Commencez avec le service adapté à votre objectif. Si votre demande est plus large, nous confirmons les frais fixes avant de commencer."
      },
      services: [
        {
          price: "01 / US$29",
          title: "Revérification de prix Chine",
          text:
            "Pour les acheteurs qui ont déjà une photo, un lien, un devis, un fournisseur, un agent de sourcing ou une offre de trading. Nous redemandons des prix et comparons des prix de référence.",
          cta: "Revérifier mon prix",
          service: "Revérification de prix Chine - US$29, nouvelle demande de prix et comparaison de référence sans développement fournisseur complet"
        },
        {
          price: "02 / US$59",
          title: "Recherche produit rapide",
          text:
            "Pour les acheteurs sans fournisseur clair. Nous recherchons 3 options fournisseurs et organisons prix, MOQ, notes d’emballage et délais.",
          cta: "Démarrer une recherche",
          service: "Recherche produit rapide - US$59, 3 options fournisseurs avec prix, MOQ, notes d’emballage et délais"
        },
        {
          price: "03 / US$99",
          title: "Recherche 5 produits",
          text:
            "Recherche jusqu’à 5 produits spécifiques dans une catégorie. Pour chaque produit, recevez 2 options fournisseurs, devis originaux, contacts, MOQ, délais et notes d’emballage.",
          cta: "Démarrer 5 produits",
          service: "Recherche 5 produits - US$99, jusqu’à 5 produits avec 2 options fournisseurs par produit"
        },
        {
          price: "04 / DÈS US$199",
          title: "Recherche nouvelle catégorie",
          text:
            "Explorez une catégorie et recevez 10–15 opportunités de nouveaux produits sélectionnées avec photos, fourchettes de prix, idées d’emballage et notes source.",
          cta: "Demander une catégorie",
          service: "Recherche nouvelle catégorie - dès US$199, 10-15 opportunités sélectionnées dans une catégorie"
        },
        {
          price: "05 / DÈS US$79",
          title: "Support local à distance",
          text:
            "Demandez une tâche locale précise : photos supplémentaires, suivi de base ou coordination d’échantillons à Yiwu.",
          cta: "Décrire la tâche",
          service: "Support local à distance - dès US$79"
        }
      ],
      serviceNote:
        "Les prix indiqués couvrent des périmètres initiaux précis. La revérification de prix Chine à US$29 s’adresse aux acheteurs qui ont déjà une photo, un lien, un devis, un fournisseur, un agent de sourcing ou une offre de trading. Elle inclut une nouvelle demande de prix et une comparaison de référence, mais pas un développement fournisseur complet. Le Quick Product Scout à US$59 s’adresse aux acheteurs sans fournisseur clair et inclut 3 options fournisseurs. Les demandes plus larges reçoivent un devis fixe avant le début. La recherche 5 produits à US$99 couvre jusqu’à 5 produits dans une catégorie, avec 2 options fournisseurs par produit. La recherche de catégorie dès US$199 commence avec 10–15 opportunités sélectionnées dans une catégorie. Les frais tiers de transport, export, stockage et tests sont devisés séparément si nécessaire. Nous ne prétendons pas réaliser d’inspection réglementée.",
      process: {
        eyebrow: "Processus",
        title: "Quatre étapes claires. Vous gardez le contrôle.",
        intro: "Commencez par une revue gratuite sur WhatsApp. Nous confirmons les frais fixes avant tout travail payé.",
        steps: [
          ["Envoyez votre demande sur WhatsApp", "Envoyez une photo produit, un objectif de sourcing ou une tâche locale pratique. La première revue est gratuite."],
          ["Confirmez le périmètre à frais fixes", "Nous confirmons la faisabilité, expliquons ce qui est inclus et convenons des frais fixes. Après paiement, nous commençons."],
          ["Nous recherchons localement à Yiwu", "Nous collectons les devis fournisseurs originaux convenus, les contacts, MOQ, délais et photos locales."],
          ["Recevez les résultats collectés", "Nous envoyons les résultats convenus et la tâche est terminée. Visites d’usine, suivi production et support expédition sont des services payants séparés."]
        ]
      },
      report: {
        eyebrow: "Dossier sourcing privé",
        title: "Plus utile qu’une liste de liens.",
        text:
          "Recevez la recherche convenue dans un dossier privé structuré : devis fournisseurs originaux inchangés, contacts, MOQ, délais, photos locales, notes d’emballage ou personnalisation et prochaines étapes claires.",
        chips: ["Devis originaux", "Contacts fournisseurs", "MOQ et délai", "Photos locales", "Notes emballage/personnalisation"],
        button: "Ouvrir l’exemple",
        previewTop: ["OPENQUOTE YIWU / EXEMPLE", "RECHERCHE PRODUIT"],
        image: "PHOTO<br />LOCALE",
        productLabel: "PRODUIT CIBLE",
        productName: "Panier de rangement pliable",
        productText: "Trois fournisseurs locaux réactifs comparés.",
        stats: ["CONTACTÉS", "PRÉSÉLECTIONNÉS", "MOQ DÈS"],
        supplierNames: ["Fournisseur A", "Fournisseur B"],
        quoteRecorded: "Devis original enregistré",
        note: "Plus emballage, délai, exclusions et prochaines étapes."
      },
      faq: {
        eyebrow: "Questions fréquentes",
        title: "De la clarté avant de vous engager.",
        items: [
          ["Prenez-vous une commission sur ma commande ?", "Non. Nos frais sont fixes par tâche ou charge de travail et n’augmentent pas avec la valeur de votre commande."],
          ["Ajoutez-vous une marge aux prix produits ?", "Non. Les devis fournisseurs originaux collectés pour votre tâche sont partagés sans modification. Les frais tiers sont montrés séparément si nécessaire."],
          ["Vais-je recevoir les contacts fournisseurs ?", "Oui. Le dossier payé inclut les contacts collectés pour votre tâche afin que vous décidiez comment continuer."],
          ["Pouvez-vous vérifier emballage, logo ou personnalisation ?", "Oui. Si pertinent, nous pouvons inclure des notes de base sur emballage, logo, couleur ou personnalisation collectées auprès des fournisseurs. Le suivi détaillé est devisé séparément."],
          ["Quelle différence entre US$59 et US$99 ?", "US$59 couvre un produit spécifique avec 3 fournisseurs. US$99 couvre jusqu’à cinq produits dans une catégorie, avec 2 options fournisseurs par produit."],
          ["Combien de produits dans la recherche catégorie US$199 ?", "La recherche catégorie dès US$199 commence avec 10–15 opportunités sélectionnées dans une catégorie, avec photos, fourchettes de prix et notes source."],
          ["Pouvez-vous aider à trouver des sources usine ?", "Oui. Envoyez vos exigences sur WhatsApp et nous confirmerons un périmètre à frais fixes pour des options usine ou approvisionnement direct adaptées."],
          ["Les prix indiqués sont-ils fixes ?", "Oui, pour le périmètre initial indiqué. Si votre demande est plus large, nous confirmons des frais fixes clairs sur WhatsApp avant le travail payé."],
          ["Que se passe-t-il après l’envoi des résultats ?", "Une fois les résultats convenus envoyés, la tâche est terminée. Visites d’usine, suivi production, expédition et vérifications extra sont des services payants séparés."],
          ["Dois-je visiter la Chine d’abord ?", "Non. Vous pouvez commencer par une recherche locale et examiner vos options à distance avant de décider si un voyage vaut la peine."],
          ["Pouvez-vous aider avec des échantillons ou une autre tâche locale ?", "Oui. Coordination d’échantillons, photos extra, suivi fournisseur et autres tâches locales sont disponibles en frais fixes après confirmation de faisabilité."]
        ]
      },
      request: {
        eyebrow: "Commencez par une revue gratuite sur WhatsApp",
        title: "Écrivez-nous directement sur WhatsApp.",
        text:
          "Envoyez une photo, une courte description ou votre objectif de sourcing directement dans le chat. Nous examinons votre demande et confirmons un périmètre clair à frais fixes avant tout travail payé.",
        points: [
          "Recherche produit rapide : US$59",
          "Recherche 5 produits : US$99 · jusqu’à 5 produits, 2 fournisseurs chacun",
          "Recherche nouvelle catégorie : dès US$199 · 10–15 opportunités sélectionnées",
          "Support local à distance : dès US$79",
          "Notes emballage/personnalisation si disponibles",
          "Aucune commission. Aucune marge produit.",
          "Revue gratuite avant paiement",
          "Les options de paiement sont confirmées sur WhatsApp avant le début"
        ],
        cardEyebrow: "CHAT WHATSAPP DIRECT",
        cardTitle: "Envoyez votre demande en un message.",
        cardText:
          "Incluez une photo ou description produit, votre quantité cible et les exigences importantes. Nous répondrons dans le même chat.",
        button: "Discuter sur WhatsApp",
        note: "Ce site ne collecte ni ne stocke votre demande.",
        helpService: "Aidez-moi à choisir le bon service à frais fixes"
      },
      footer: {
        text: "Devis originaux. Aucune commission. Aucune marge produit. Frais fixes.",
        privacy: "Confidentialité"
      },
      whatsapp: {
        hello: "Bonjour OpenQuote Yiwu, je souhaite une revue gratuite de faisabilité.",
        service: "Service : ",
        willSend: "J’enverrai :",
        fields: ["Photo ou description du produit", "Quantité cible", "Pays ou marché cible", "Besoins d’emballage ou personnalisation"],
        fallbackService: "Support sourcing Chine",
        missingNumber:
          "Mode aperçu : ajoutez le numéro WhatsApp avant le lancement public. Ce site ne collecte ni ne stocke votre demande."
      }
    },
    pt: {
      lang: "pt-BR",
      dir: "ltr",
      title: "OpenQuote Yiwu | Pesquisa de produtos na China desde US$29",
      metaDescription:
        "Comece a buscar produtos na China dentro do maior mercado atacadista de pequenas mercadorias do mundo. Taxas fixas desde US$29. Sem comissão. Sem margem no produto.",
      ogTitle: "OpenQuote Yiwu | Pesquisa de produtos na China desde US$29",
      ogDescription:
        "Pesquisa local de produtos e fornecedores dentro do maior mercado atacadista de pequenas mercadorias do mundo. Sem comissão. Sem margem no produto.",
      nav: ["Vantagens", "Serviços", "Como funciona", "Exemplo", "Começar por US$29"],
      hero: {
        eyebrow: "Dentro do maior mercado atacadista de pequenas mercadorias do mundo",
        title: "Sourcing na China,<br /><span>sem viajar.</span>",
        text: "Envie uma foto do produto. Vamos verificar opções reais de fornecedores em Yiwu antes de você viajar ou fazer um pedido.",
        benefits: ["Cotações originais", "Contatos dos fornecedores", "MOQ, prazo e fotos locais"],
        cta: "Começar verificação por US$29",
        sample: "Ver exemplo de relatório <span>↗</span>",
        note: "Taxa fixa. Sem comissão. Sem margem no produto."
      },
      starter: {
        heading: ["VERIFICAÇÃO DE PREÇO", "SERVIÇO INICIAL"],
        price: "29",
        from: "SERVIÇO INICIAL COM TAXA FIXA",
        items: [
          "Uma cotação ou foto de produto",
          "Checagem rápida de razoabilidade de mercado",
          "1–2 fornecedores de referência",
          "Faixa de preço e notas de risco",
          "Contatos completos a partir de US$59"
        ],
        foot: ["Entrega típica", "1–2 dias úteis"]
      },
      savings: {
        eyebrow: "Taxas fixas claras. Sem comissão. Sem margem no produto.",
        title: "Como somos diferentes de agentes de compra e tradings.",
        text:
          '<strong class="red-highlight">Nossa taxa de serviço é fixa e combinada antes.</strong> Alguns agentes de compra e tradings podem oferecer busca grátis de produtos e depois ganhar com comissão ou, mais comumente, <strong class="red-highlight">adicionando margem à cotação do produto.</strong> O controle abaixo usa uma margem ilustrativa comum de <strong class="red-highlight">10%–15%</strong>. O preço real varia conforme o prestador.',
        planned: "Valor planejado do pedido",
        ourFee: "Nossa taxa Quick Product Scout",
        otherCost: "Custo ilustrativo de agente ou trading",
        difference: "Diferença ilustrativa",
        meaningEyebrow: "O que isso significa",
        meaningTitle: "Veja a cotação original do fornecedor, sem alteração.",
        meaningText:
          "Pague uma taxa fixa pela pesquisa local. Se decidir comprar, fale diretamente com o fornecedor ou escolha qualquer agente ou prestador de exportação que preferir.",
        start: "Começar desde US$59",
        hint: "Deslize para comparar modelos de serviço →",
        table: [
          ["", "OpenQuote Yiwu", "Agente de compra típico", "Trading típica"],
          ["Busca de produto", "Desde US$59", "A busca pode ser grátis", "Pedidos de cotação geralmente são grátis"],
          ["Como o prestador ganha", "Taxa fixa combinada antes", "Margem incluída na cotação", "Margem de revenda incluída na cotação"],
          ["Cotação do produto", "Cotação original sem alteração", "Comprador recebe a cotação do agente", "Comprador recebe uma cotação de venda"],
          ["O que acontece depois", "Você escolhe livremente", "O agente costuma gerenciar o pedido", "A trading gerencia a venda"]
        ],
        note:
          "Apenas ilustração. Preços e escopo variam. O controle mostra margem ilustrativa de 10%–15% incluída na cotação. O Quick Product Scout de US$59 é pesquisa, não gestão completa do pedido."
      },
      market: {
        eyebrow: "Por que começar em Yiwu?",
        title: "Comece onde milhões de opções de produto se encontram.",
        text:
          "Yiwu, na China, abriga o maior mercado atacadista de pequenas mercadorias do mundo. Ajudamos você a explorá-lo remotamente antes de gastar tempo e dinheiro em uma primeira viagem à China.",
        stats: ["metros quadrados de área de mercado", "boxes de mercado", "variedades de produtos", "taxa inicial de pesquisa"]
      },
      fieldShots: {
        eyebrow: "Fotos verticais do mercado",
        title: "Veja opções de produto como se alguém caminhasse pelo mercado para você.",
        text:
          "A melhor prova é simples: fotos verticais do mercado, produtos diferentes, notas claras e dados de fornecedores coletados para sua solicitação.",
        cards: [
          ["Mercado de Yiwu", "09:42", "Corredores do mercado", "Percorra o mercado à distância"],
          ["Prateleira fornecedor", "10:18", "Brinquedos e carrinhos", "Veículos infantis e prateleiras"],
          ["Checagem produto", "11:05", "Pelúcias", "Personagens e itens de presente"],
          ["Entrada mercado", "12:20", "Mercado atacadista", "Yiwu International Trade Market"],
          ["Notas de preço", "13:27", "Decoração da casa", "Cerâmica, tigelas e displays"],
          ["Box acessórios", "16:08", "Joias e acessórios", "Brincos, colares e moda"],
          ["Ideias produto", "16:32", "Organização cozinha", "Prateleiras, suportes e casa"]
        ],
        note:
          "Durante uma tarefa paga, podemos coletar fotos de telefone de boxes, prateleiras, amostras de embalagem ou displays de fornecedores quando forem relevantes para sua solicitação."
      },
      servicesHeading: {
        eyebrow: "O que podemos fazer",
        title: "Escolha um ponto de partida com taxa fixa.",
        text:
          "Comece com o serviço que combina com seu objetivo. Se sua solicitação precisar de escopo maior, confirmamos a taxa fixa antes de começar."
      },
      services: [
        {
          price: "01 / US$29",
          title: "Reverificação de preço China",
          text:
            "Para compradores que já têm foto, link, cotação, fornecedor, agente de sourcing ou oferta de trading. Recotamos e comparamos preços de referência.",
          cta: "Reverificar meu preço",
          service: "Reverificação de preço China - US$29, recotação e comparação de preços de referência sem desenvolvimento completo de fornecedores"
        },
        {
          price: "02 / US$59",
          title: "Pesquisa rápida de produto",
          text:
            "Para compradores que ainda não têm fornecedor claro. Pesquisamos 3 opções de fornecedores e organizamos preços, MOQ, notas de embalagem e prazos.",
          cta: "Começar pesquisa",
          service: "Pesquisa rápida de produto - US$59, 3 opções de fornecedores com preços, MOQ, notas de embalagem e prazos"
        },
        {
          price: "03 / US$99",
          title: "Pesquisa de 5 produtos",
          text:
            "Pesquisamos até 5 produtos específicos em uma categoria. Para cada produto, receba 2 opções de fornecedores, cotações originais, contatos, MOQ, prazo e notas de embalagem.",
          cta: "Começar 5 produtos",
          service: "Pesquisa de 5 produtos - US$99, até 5 produtos com 2 opções de fornecedores por produto"
        },
        {
          price: "04 / A PARTIR DE US$199",
          title: "Pesquisa de nova categoria",
          text:
            "Explore uma categoria e receba 10–15 oportunidades selecionadas de novos produtos com fotos, faixas de preço, ideias de embalagem e notas de origem.",
          cta: "Solicitar categoria",
          service: "Pesquisa de nova categoria - a partir de US$199, 10-15 oportunidades selecionadas em uma categoria"
        },
        {
          price: "05 / A PARTIR DE US$79",
          title: "Suporte local remoto",
          text:
            "Solicite uma tarefa local focada, como fotos extras, follow-up básico ou coordenação de amostras em Yiwu.",
          cta: "Descrever tarefa",
          service: "Suporte local remoto - a partir de US$79"
        }
      ],
      serviceNote:
        "Os preços listados cobrem escopos iniciais focados. A reverificação de preço China por US$29 é para compradores que já têm foto, link, cotação, fornecedor, agente de sourcing ou oferta de trading. Inclui recotação e comparação de preços de referência, mas não desenvolvimento completo de fornecedores. A pesquisa rápida de produto por US$59 é para compradores que ainda não têm fornecedor claro e inclui 3 opções de fornecedores. Solicitações maiores recebem cotação fixa antes do início. A pesquisa de 5 produtos por US$99 cobre até 5 produtos em uma categoria, com 2 opções de fornecedores por produto. A pesquisa de nova categoria a partir de US$199 começa com 10–15 oportunidades selecionadas em uma categoria. Custos de terceiros, como frete, exportação, armazenagem e testes, são cotados separadamente quando relevante. Não afirmamos realizar inspeção regulamentada.",
      process: {
        eyebrow: "Como funciona",
        title: "Quatro passos claros. Você mantém o controle.",
        intro: "Comece com uma análise gratuita pelo WhatsApp. Confirmamos a taxa fixa antes de qualquer trabalho pago.",
        steps: [
          ["Envie sua solicitação no WhatsApp", "Envie uma foto do produto, objetivo de sourcing ou tarefa local prática. A análise inicial é grátis."],
          ["Confirme o escopo de taxa fixa", "Confirmamos se a tarefa é viável, explicamos o que está incluído e combinamos a taxa fixa. Após o pagamento, começamos o trabalho."],
          ["Pesquisamos localmente em Yiwu", "Coletamos as cotações originais combinadas, contatos, MOQ, prazos e fotos locais."],
          ["Receba os resultados coletados", "Enviamos os resultados combinados e a tarefa termina. Visitas a fábricas, acompanhamento de produção e suporte de envio são serviços pagos separados."]
        ]
      },
      report: {
        eyebrow: "Pacote privado de sourcing",
        title: "Mais útil que uma lista de links.",
        text:
          "Receba a pesquisa combinada em um pacote privado estruturado: cotações originais sem alteração, contatos, MOQ, prazos, fotos locais, notas de embalagem ou personalização e próximos passos claros.",
        chips: ["Cotações originais", "Contatos", "MOQ e prazo", "Fotos locais", "Notas de embalagem/personalização"],
        button: "Abrir exemplo",
        previewTop: ["OPENQUOTE YIWU / EXEMPLO", "PESQUISA DE PRODUTO"],
        image: "FOTO<br />LOCAL",
        productLabel: "PRODUTO-ALVO",
        productName: "Cesto organizador dobrável",
        productText: "Três fornecedores locais responsivos comparados.",
        stats: ["CONTATADOS", "SELECIONADOS", "MOQ DESDE"],
        supplierNames: ["Fornecedor A", "Fornecedor B"],
        quoteRecorded: "Cotação original registrada",
        note: "Mais embalagem, prazo, exclusões e próximos passos."
      },
      faq: {
        eyebrow: "Perguntas comuns",
        title: "Clareza antes de se comprometer.",
        items: [
          ["Vocês cobram comissão no meu pedido?", "Não. Nossa taxa é fixa por tarefa ou carga de trabalho e não aumenta com o valor do seu pedido."],
          ["Vocês adicionam margem aos preços dos produtos?", "Não. As cotações originais coletadas para sua tarefa são compartilhadas sem alteração. Custos de terceiros aparecem separadamente quando relevante."],
          ["Vou receber os contatos dos fornecedores?", "Sim. O pacote pago inclui os contatos coletados para sua tarefa, para você decidir como continuar."],
          ["Vocês verificam embalagem, logo ou personalização?", "Sim. Quando relevante, podemos incluir notas básicas sobre embalagem, logo, cor ou personalização coletadas de fornecedores. Follow-up detalhado é cotado separadamente."],
          ["Qual a diferença entre US$59 e US$99?", "US$59 cobre um produto específico com 3 fornecedores. US$99 cobre até cinco produtos em uma categoria, com 2 opções de fornecedores por produto."],
          ["Quantos produtos entram na categoria de US$199?", "A pesquisa de categoria a partir de US$199 começa com 10–15 oportunidades selecionadas em uma categoria, com fotos, faixas de preço e notas de origem."],
          ["Vocês ajudam a encontrar fontes de fábrica?", "Sim. Envie seus requisitos pelo WhatsApp e confirmaremos um escopo de taxa fixa para opções adequadas de fábrica ou fornecimento direto."],
          ["Os preços listados são fixos?", "Sim, para o escopo inicial indicado. Se sua solicitação for maior, confirmamos uma taxa fixa clara pelo WhatsApp antes de iniciar."],
          ["O que acontece depois de enviar os resultados?", "Quando enviamos os resultados combinados, essa tarefa termina. Visitas a fábricas, acompanhamento de produção, envio e checagens extras são serviços pagos separados."],
          ["Preciso visitar a China primeiro?", "Não. Você pode começar com pesquisa local e revisar as opções remotamente antes de decidir se vale viajar."],
          ["Vocês ajudam com amostras ou outra tarefa local?", "Sim. Coordenação de amostras, fotos extras, follow-up com fornecedor e outras tarefas locais ficam disponíveis como serviços de taxa fixa após confirmarmos viabilidade."]
        ]
      },
      request: {
        eyebrow: "Comece com uma análise gratuita pelo WhatsApp",
        title: "Fale conosco diretamente no WhatsApp.",
        text:
          "Envie uma foto, uma breve descrição ou seu objetivo de sourcing diretamente no chat. Vamos analisar sua solicitação e confirmar um escopo claro de taxa fixa antes de qualquer trabalho pago.",
        points: [
          "Pesquisa rápida: US$59",
          "Pesquisa de 5 produtos: US$99 · até 5 produtos, 2 fornecedores cada",
          "Pesquisa de nova categoria: a partir de US$199 · 10–15 oportunidades selecionadas",
          "Suporte local remoto: a partir de US$79",
          "Notas de embalagem/personalização quando disponíveis",
          "Sem comissão. Sem margem no produto.",
          "Análise gratuita antes de pagar",
          "As opções de pagamento são confirmadas no WhatsApp antes do início"
        ],
        cardEyebrow: "CHAT DIRETO NO WHATSAPP",
        cardTitle: "Envie sua solicitação em uma mensagem.",
        cardText:
          "Inclua foto ou descrição do produto, quantidade-alvo e requisitos importantes. Responderemos no mesmo chat.",
        button: "Conversar no WhatsApp",
        note: "Este site não coleta nem armazena sua solicitação.",
        helpService: "Ajude-me a escolher o serviço de taxa fixa certo"
      },
      footer: {
        text: "Cotações originais. Sem comissão. Sem margem no produto. Taxas fixas.",
        privacy: "Privacidade"
      },
      whatsapp: {
        hello: "Olá OpenQuote Yiwu, gostaria de uma análise gratuita de viabilidade.",
        service: "Serviço: ",
        willSend: "Vou enviar:",
        fields: ["Foto ou descrição do produto", "Quantidade-alvo", "País ou mercado-alvo", "Necessidades de embalagem ou personalização"],
        fallbackService: "Suporte de sourcing na China",
        missingNumber:
          "Modo de prévia: adicione o número do WhatsApp antes do lançamento público. Este site não coleta nem armazena sua solicitação."
      }
    },
    ru: {
      lang: "ru",
      dir: "ltr",
      title: "OpenQuote Yiwu | Поиск товаров в Китае от US$29",
      metaDescription:
        "Начните поиск товаров в Китае из крупнейшего в мире оптового рынка мелких товаров. Фиксированная стоимость от US$29. Без комиссии. Без наценки на товар.",
      ogTitle: "OpenQuote Yiwu | Поиск товаров в Китае от US$29",
      ogDescription:
        "Локальный поиск товаров и поставщиков из крупнейшего в мире оптового рынка мелких товаров. Без комиссии. Без наценки на товар.",
      nav: ["Почему мы", "Услуги", "Как это работает", "Пример", "Начать за US$29"],
      hero: {
        eyebrow: "Внутри крупнейшего в мире оптового рынка мелких товаров",
        title: "Поиск товаров в Китае,<br /><span>без поездки.</span>",
        text: "Отправьте одно фото товара. Мы проверим реальные варианты поставщиков в Иу до вашей поездки или размещения заказа.",
        benefits: ["Оригинальные цены поставщиков", "Контакты поставщиков", "MOQ, сроки и местные фото"],
        cta: "Начать проверку за US$29",
        sample: "Смотреть пример отчета <span>↗</span>",
        note: "Фиксированная оплата. Без комиссии. Без наценки на товар."
      },
      starter: {
        heading: ["ПРОВЕРКА ЦЕНЫ В КИТАЕ", "СТАРТОВАЯ УСЛУГА"],
        price: "29",
        from: "СТАРТОВАЯ УСЛУГА С ФИКСИРОВАННОЙ ОПЛАТОЙ",
        items: [
          "Одно предложение поставщика или фото товара",
          "Быстрая проверка адекватности рыночной цены",
          "1–2 справочных варианта поставщиков",
          "Ценовой диапазон и заметки о рисках",
          "Полные контакты начинаются с US$59"
        ],
        foot: ["Обычный срок", "1–2 рабочих дня"]
      },
      savings: {
        eyebrow: "Понятная фиксированная цена. Без комиссии. Без наценки.",
        title: "Чем мы отличаемся от агентов по закупкам и торговых компаний.",
        text:
          '<strong class="red-highlight">Наша стоимость услуги фиксирована и согласуется заранее.</strong> Некоторые агенты и торговые компании могут предлагать бесплатный поиск товара, а затем зарабатывать на комиссии или, чаще всего, <strong class="red-highlight">добавляя маржу в цену товара.</strong> Слайдер ниже использует типичный иллюстративный диапазон <strong class="red-highlight">10%–15%</strong>. Реальные цены зависят от поставщика услуги.',
        planned: "Плановая сумма заказа",
        ourFee: "Наша цена Quick Product Scout",
        otherCost: "Примерная стоимость агента или trading-компании",
        difference: "Примерная разница",
        meaningEyebrow: "Что это значит",
        meaningTitle: "Вы видите оригинальное предложение поставщика без изменений.",
        meaningText:
          "Вы платите фиксированную сумму за локальное исследование. Если решите покупать, можете связаться с поставщиком напрямую или выбрать любого агента или экспортного партнера.",
        start: "Начать от US$59",
        hint: "Прокрутите в сторону, чтобы сравнить модели →",
        table: [
          ["", "OpenQuote Yiwu", "Типичный агент по закупкам", "Типичная торговая компания"],
          ["Поиск товара", "От US$59", "Поиск может быть бесплатным", "Запросы цены обычно бесплатны"],
          ["Как зарабатывает посредник", "Фиксированная цена заранее", "Маржа включена в цену товара", "Маржа перепродажи включена в цену"],
          ["Цена товара", "Оригинальная цена поставщика без изменений", "Покупатель получает цену агента", "Покупатель получает продажную цену"],
          ["Что дальше", "Вы выбираете свободно", "Агент часто ведет заказ", "Trading-компания ведет продажу"]
        ],
        note:
          "Только иллюстрация. Цены и объем услуг различаются. Слайдер показывает пример маржи 10%–15%, включенной в цену. Quick Product Scout за US$59 — это исследование, не полное ведение заказа."
      },
      market: {
        eyebrow: "Почему начать в Иу?",
        title: "Начните там, где встречаются миллионы вариантов товаров.",
        text:
          "Иу в Китае — крупнейший в мире оптовый рынок мелких товаров. Мы помогаем изучить его удаленно до того, как вы потратите время и деньги на первую поездку в Китай.",
        stats: ["кв. метров площади рынка", "рыночных павильонов", "разновидностей товаров", "стартовая цена исследования"]
      },
      fieldShots: {
        eyebrow: "Вертикальные фото с рынка",
        title: "Смотрите варианты товаров так, будто кто-то проходит рынок за вас.",
        text:
          "Лучшее доказательство простое: вертикальные фото с рынка, разные товары, понятные заметки и контакты поставщиков, собранные под ваш запрос.",
        cards: [
          ["Рынок Иу", "09:42", "Рыночные проходы", "Пройти рынок удаленно"],
          ["Полка поставщика", "10:18", "Игрушки и машинки", "Детские машины и полки игрушек"],
          ["Проверка товара", "11:05", "Плюшевые игрушки", "Персонажи, игрушки и подарки"],
          ["Вход на рынок", "12:20", "Оптовый рынок", "Yiwu International Trade Market"],
          ["Заметки цены", "13:27", "Декор для дома", "Керамика, чаши, витрины"],
          ["Павильон аксесс.", "16:08", "Украшения и аксессуары", "Серьги, колье, fashion-товары"],
          ["Идеи товаров", "16:32", "Хранение кухни", "Стойки, держатели, товары для дома"]
        ],
        note:
          "Во время платной задачи мы можем собрать телефонные фото павильонов, полок, образцов упаковки или витрин поставщика, если это важно для вашего запроса."
      },
      servicesHeading: {
        eyebrow: "Что мы можем сделать",
        title: "Выберите понятный старт с фиксированной ценой.",
        text:
          "Начните с услуги, которая подходит вашей цели. Если запрос шире, мы согласуем фиксированную стоимость до начала работы."
      },
      services: [
        {
          price: "01 / US$29",
          title: "Повторная проверка цены в Китае",
          text:
            "Для покупателей, у которых уже есть фото, ссылка, цена, поставщик, агент по sourcing или предложение trading-компании. Мы повторно запрашиваем цены и сравниваем справочные цены.",
          cta: "Перепроверить цену",
          service: "Повторная проверка цены в Китае - US$29, повторный запрос цены и справочное сравнение без полного поиска поставщиков"
        },
        {
          price: "02 / US$59",
          title: "Быстрый поиск товара",
          text:
            "Для покупателей без понятного поставщика. Мы ищем 3 варианта поставщиков и собираем цены, MOQ, заметки по упаковке и сроки.",
          cta: "Начать поиск товара",
          service: "Быстрый поиск товара - US$59, 3 варианта поставщиков с ценами, MOQ, заметками по упаковке и сроками"
        },
        {
          price: "03 / US$99",
          title: "Поиск 5 товаров",
          text:
            "Поиск до 5 конкретных товаров в одной категории. По каждому товару — 2 варианта поставщиков, оригинальные предложения, контакты, MOQ, сроки и заметки по упаковке.",
          cta: "Начать поиск 5 товаров",
          service: "Поиск 5 товаров - US$99, до 5 товаров с 2 вариантами поставщиков по каждому"
        },
        {
          price: "04 / ОТ US$199",
          title: "Поиск новой категории",
          text:
            "Изучение одной категории и 10–15 отобранных возможностей новых товаров с фото, диапазонами цен, идеями упаковки и заметками по источникам.",
          cta: "Запросить категорию",
          service: "Поиск новой категории - от US$199, 10-15 отобранных возможностей в одной категории"
        },
        {
          price: "05 / ОТ US$79",
          title: "Удаленная локальная помощь",
          text:
            "Запросите конкретную локальную задачу: дополнительные фото, базовый follow-up или координацию образцов в Иу.",
          cta: "Описать задачу",
          service: "Удаленная локальная помощь - от US$79"
        }
      ],
      serviceNote:
        "Указанные цены покрывают конкретный стартовый объем. Повторная проверка цены в Китае за US$29 подходит покупателям, у которых уже есть фото, ссылка, цена, поставщик, агент по sourcing или предложение trading-компании. Она включает повторный запрос цены и справочное сравнение, но не полный поиск поставщиков. Быстрый поиск товара за US$59 подходит покупателям без понятного поставщика и включает 3 варианта поставщиков. Более широкие запросы получают фиксированную цену до начала работы. Поиск 5 товаров за US$99 покрывает до 5 товаров в одной категории, с 2 вариантами поставщиков по каждому товару. Поиск новой категории от US$199 начинается с 10–15 отобранных возможностей в одной категории. Доставка, экспорт, склад, тестирование и другие расходы третьих сторон указываются отдельно при необходимости. Мы не заявляем регулируемую инспекционную работу.",
      process: {
        eyebrow: "Как это работает",
        title: "Четыре понятных шага. Вы сохраняете контроль.",
        intro: "Начните с бесплатного просмотра запроса в WhatsApp. Мы подтверждаем фиксированную цену до любой платной работы.",
        steps: [
          ["Отправьте запрос в WhatsApp", "Отправьте фото товара, цель sourcing или практическую локальную задачу. Первичный просмотр бесплатный."],
          ["Подтвердите фиксированный объем", "Мы подтверждаем выполнимость, объясняем, что входит, и согласуем фиксированную стоимость. После оплаты начинаем работу."],
          ["Мы исследуем локально в Иу", "Мы собираем согласованные оригинальные цены поставщиков, контакты, MOQ, сроки и местные фото."],
          ["Получите собранные результаты", "Мы отправляем согласованные результаты, и задача завершена. Посещение фабрик, контроль производства и поддержка доставки оплачиваются отдельно."]
        ]
      },
      report: {
        eyebrow: "Частный sourcing-пакет",
        title: "Полезнее, чем список ссылок.",
        text:
          "Получите согласованное исследование в структурированном частном пакете: оригинальные цены поставщиков без изменений, контакты, MOQ, сроки, местные фото, заметки по упаковке или кастомизации и понятные следующие шаги.",
        chips: ["Оригинальные цены", "Контакты поставщиков", "MOQ и сроки", "Местные фото", "Упаковка/кастомизация"],
        button: "Открыть пример",
        previewTop: ["OPENQUOTE YIWU / ПРИМЕР", "ПОИСК ТОВАРА"],
        image: "МЕСТНОЕ<br />ФОТО",
        productLabel: "ЦЕЛЕВОЙ ТОВАР",
        productName: "Складная корзина для хранения",
        productText: "Сравнение трех локальных поставщиков, которые ответили.",
        stats: ["СВЯЗАЛИСЬ", "ОТОБРАНО", "MOQ ОТ"],
        supplierNames: ["Поставщик A", "Поставщик B"],
        quoteRecorded: "Оригинальная цена зафиксирована",
        note: "Плюс упаковка, сроки, исключения и следующие шаги."
      },
      faq: {
        eyebrow: "Частые вопросы",
        title: "Ясность до оплаты.",
        items: [
          ["Вы берете комиссию с моего заказа?", "Нет. Наша оплата фиксирована по задаче или объему работы и не растет вместе со стоимостью заказа."],
          ["Вы добавляете наценку к ценам товаров?", "Нет. Оригинальные предложения поставщиков, собранные по вашей задаче, передаются без изменений. Расходы третьих сторон показываются отдельно при необходимости."],
          ["Я получу контакты поставщиков?", "Да. Платный sourcing-пакет включает контакты поставщиков, собранные по вашей задаче, чтобы вы сами решили, как продолжать."],
          ["Можете проверить упаковку, логотип или кастомизацию?", "Да. Если актуально, мы можем включить базовые заметки по упаковке, логотипу, цвету или кастомизации от поставщиков. Более детальный follow-up рассчитывается отдельно."],
          ["В чем разница между US$59 и US$99?", "US$59 покрывает один конкретный товар с 3 поставщиками. US$99 покрывает до пяти товаров в одной категории, с 2 вариантами поставщиков по каждому."],
          ["Сколько товаров в категории за US$199?", "Поиск новой категории от US$199 начинается с 10–15 отобранных возможностей в одной категории, с фото, диапазонами цен и заметками источников."],
          ["Можете помочь найти фабрики?", "Да. Отправьте требования в WhatsApp, и мы согласуем фиксированный объем для подходящих фабрик или прямых источников поставки."],
          ["Указанные цены фиксированные?", "Да, для описанного стартового объема. Если запрос шире, мы согласуем понятную фиксированную цену в WhatsApp до начала платной работы."],
          ["Что происходит после отправки результатов?", "Когда мы отправляем согласованные результаты, эта задача завершена. Посещения фабрик, follow-up производства, доставка и дополнительные проверки оплачиваются отдельно."],
          ["Нужно ли сначала ехать в Китай?", "Нет. Вы можете начать с локального исследования и удаленно изучить варианты до решения о поездке."],
          ["Можете помочь с образцами или другой локальной задачей?", "Да. Координация образцов, дополнительные фото, follow-up поставщика и другие локальные задачи доступны как услуги с фиксированной оплатой после подтверждения выполнимости."]
        ]
      },
      request: {
        eyebrow: "Начните с бесплатного просмотра в WhatsApp",
        title: "Напишите нам напрямую в WhatsApp.",
        text:
          "Отправьте фото товара, короткое описание или цель sourcing прямо в чат. Мы посмотрим запрос и подтвердим понятный фиксированный объем до любой платной работы.",
        points: [
          "Быстрый поиск товара: US$59",
          "Поиск 5 товаров: US$99 · до 5 товаров, 2 поставщика по каждому",
          "Поиск новой категории: от US$199 · 10–15 отобранных возможностей",
          "Удаленная локальная помощь: от US$79",
          "Заметки по упаковке/кастомизации, если доступны",
          "Без комиссии. Без наценки на товар.",
          "Бесплатный просмотр до оплаты",
          "Варианты оплаты подтверждаются в WhatsApp до начала работы"
        ],
        cardEyebrow: "ПРЯМОЙ ЧАТ WHATSAPP",
        cardTitle: "Отправьте запрос одним сообщением.",
        cardText:
          "Добавьте фото или описание товара, целевое количество и важные требования. Мы ответим в том же чате.",
        button: "Написать в WhatsApp",
        note: "Этот сайт не собирает и не хранит ваш запрос.",
        helpService: "Помогите выбрать подходящую услугу с фиксированной оплатой"
      },
      footer: {
        text: "Оригинальные цены. Без комиссии. Без наценки на товар. Фиксированная оплата.",
        privacy: "Конфиденциальность"
      },
      whatsapp: {
        hello: "Здравствуйте, OpenQuote Yiwu. Я хочу бесплатную оценку выполнимости.",
        service: "Услуга: ",
        willSend: "Я отправлю:",
        fields: ["Фото или описание товара", "Целевое количество", "Целевая страна или рынок", "Потребности по упаковке или кастомизации"],
        fallbackService: "Поддержка sourcing из Китая",
        missingNumber:
          "Режим предпросмотра: добавьте номер WhatsApp перед публичным запуском. Этот сайт не собирает и не хранит ваш запрос."
      }
    }
  };

  const pageTranslations = {
    en: {
      sampleReport: {
        title: "Sample Product Scout Report | OpenQuote Yiwu",
        metaDescription: "A demonstration OpenQuote Yiwu product scout report with fictional supplier details.",
        contactCta: "Contact us",
        whatsappService: "Start my own Quick Product Scout from the sample report",
        titleEyebrow: "DEMONSTRATION REPORT / DETAILS ANONYMIZED",
        h1: "Product Scout:<br />Foldable storage basket",
        intro: "This sample illustrates the report structure. Product details, quotations and supplier identities are fictional placeholders.",
        metaLabels: ["REPORT ID", "PREPARED", "SERVICE"],
        metaValues: ["OQ-DEMO-001", "June 1, 2026", "Quick Product Scout"],
        sections: [
          ["01 / CLIENT BRIEF", "Target requirements"],
          ["02 / SEARCH SUMMARY", "How the shortlist was produced"],
          ["03 / DELIVERABLES", "What the paid pack includes"],
          ["04 / SHORTLIST", "Three comparable local options"],
          ["05 / NEXT STEP", "You remain in control"]
        ],
        briefLabels: ["PRODUCT", "PLANNED QUANTITY", "TARGET MARKET", "REQUIREMENTS"],
        briefValues: ["Foldable storage basket", "1,000 pcs", "Australia", "Neutral colors, retail packaging"],
        summaryStats: ["Local suppliers contacted", "Options shortlisted", "Options excluded"],
        exclusionTitle: "Exclusion notes",
        exclusions: [
          "Three suppliers could not meet the requested retail packaging requirement.",
          "Two suppliers required a minimum order quantity above 3,000 pieces.",
          "Two suppliers did not provide a complete written quote within the review window.",
          "One supplier's product dimensions did not match the target brief."
        ],
        deliverables: [
          ["Original quote evidence", "Written supplier price notes or chat quote records collected for the agreed task."],
          ["Supplier contact field", "Contact details are included in the paid report and anonymized in this public sample."],
          ["Local photo field", "Booth, product, packaging or sample photos when available during the local search."],
          ["Decision notes", "MOQ, lead time, packaging, customization and practical trade-offs."]
        ],
        supplierLabels: ["MOQ", "PACKAGING", "LEAD TIME", "CUSTOMIZATION", "CONTACT", "QUOTE EVIDENCE"],
        suppliers: [
          {
            option: "OPTION A",
            name: "Yiwu Supplier A",
            source: "Yiwu Market booth locally documented",
            price: "$1.28 / pc",
            values: ["500 pcs", "Individual bag + carton", "7 to 10 days", "Color available", "Included in paid report", "Written quote recorded"],
            noteLabel: "Trade-off:",
            note: "Lowest MOQ of the shortlist. Quote is slightly higher than Option B."
          },
          {
            option: "OPTION B",
            name: "Yiwu Supplier B",
            source: "Yiwu Market booth locally documented",
            price: "$1.19 / pc",
            values: ["1,000 pcs", "Individual bag + carton", "10 to 14 days", "Color and label available", "Included in paid report", "Written quote recorded"],
            noteLabel: "Trade-off:",
            note: "Lowest quote at the planned quantity. Longer lead time than Option A."
          },
          {
            option: "OPTION C",
            name: "Yiwu Supplier C",
            source: "Yiwu Market booth locally documented",
            price: "$1.35 / pc",
            values: ["800 pcs", "Retail sleeve + carton", "8 to 12 days", "Color and sleeve available", "Included in paid report", "Written quote recorded"],
            noteLabel: "Trade-off:",
            note: "Best packaging presentation. Highest unit quote in this shortlist."
          }
        ],
        nextSteps: [
          ["Contact suppliers directly", "The paid report includes the supplier contact details collected for your task."],
          ["Request sample support", "Ask OpenQuote Yiwu to collect, label and photograph samples under a separate fixed-fee quote."],
          ["Use your own service partners", "You may use any sourcing agent, freight forwarder or export-service provider you choose."]
        ],
        cta: "Start my own product scout",
        disclaimerTitle: "Demonstration disclaimer",
        disclaimer:
          "This is an anonymized demonstration template. A real report records the scope agreed for the task and the information collected during that task. OpenQuote Yiwu does not guarantee supplier performance, product quality, legal compliance or successful delivery. Buyers remain responsible for commercial due diligence and contract decisions.",
        footerText: "On-the-ground support. Original quotes. Zero commission. Zero markup.",
        footerLabel: "Sample report"
      },
      privacyPage: {
        title: "Privacy Notice | OpenQuote Yiwu",
        metaDescription: "Privacy notice for OpenQuote Yiwu feasibility review requests and local support services.",
        contactCta: "Contact us",
        whatsappService: "Privacy page question",
        eyebrow: "OpenQuote Yiwu",
        h1: "Privacy notice",
        updated: "Last updated: June 2, 2026",
        sections: [
          ["Website requests", "This website does not include a request form and does not collect or store your sourcing request. The contact button opens a WhatsApp chat."],
          ["WhatsApp messages", "If you choose to message us through WhatsApp, we may receive your WhatsApp profile details, phone number, photos and the information you send in the chat. We use this information to review your request, prepare a fixed-fee scope, respond to you and deliver any local service you choose to purchase. We do not sell your contact details."],
          ["Service providers", "We may use website hosting and messaging providers. WhatsApp processes messages according to its own terms and privacy practices. If you ask for optional support, relevant information may be shared with a supplier or third-party service provider only as needed to address your request."],
          ["Your choices", "You may ask us to correct or delete the contact information you have shared. You may also ask us to stop sending non-essential messages."],
          ["Contact", "Contact OpenQuote Yiwu on WhatsApp: +1 614 720 0111."]
        ],
        footerText: "On-the-ground support. Original quotes. Zero commission. Zero markup.",
        back: "Back to home"
      }
    },
    es: {
      sampleReport: {
        title: "Ejemplo de informe Product Scout | OpenQuote Yiwu",
        metaDescription: "Ejemplo de informe OpenQuote Yiwu Product Scout con datos ficticios de proveedores.",
        contactCta: "Contactar",
        whatsappService: "Quiero iniciar mi propio Quick Product Scout desde el ejemplo",
        titleEyebrow: "INFORME DE DEMOSTRACIÓN / DATOS ANONIMIZADOS",
        h1: "Product Scout:<br />Canasta plegable",
        intro: "Este ejemplo muestra la estructura del informe. Los detalles de producto, cotizaciones e identidades de proveedores son ficticios.",
        metaLabels: ["ID DE INFORME", "PREPARADO", "SERVICIO"],
        metaValues: ["OQ-DEMO-001", "1 de junio de 2026", "Quick Product Scout"],
        sections: [
          ["01 / BRIEF DEL CLIENTE", "Requisitos objetivo"],
          ["02 / RESUMEN DE BÚSQUEDA", "Cómo se creó la lista corta"],
          ["03 / ENTREGABLES", "Qué incluye el paquete pagado"],
          ["04 / LISTA CORTA", "Tres opciones locales comparables"],
          ["05 / SIGUIENTE PASO", "Usted mantiene el control"]
        ],
        briefLabels: ["PRODUCTO", "CANTIDAD PLANIFICADA", "MERCADO OBJETIVO", "REQUISITOS"],
        briefValues: ["Canasta plegable de almacenamiento", "1,000 unidades", "Australia", "Colores neutros, empaque retail"],
        summaryStats: ["Proveedores locales contactados", "Opciones preseleccionadas", "Opciones excluidas"],
        exclusionTitle: "Notas de exclusión",
        exclusions: [
          "Tres proveedores no podían cumplir el requisito de empaque retail.",
          "Dos proveedores exigían un MOQ superior a 3,000 unidades.",
          "Dos proveedores no entregaron una cotización escrita completa dentro del periodo de revisión.",
          "Las dimensiones de un proveedor no coincidían con el brief objetivo."
        ],
        deliverables: [
          ["Evidencia de cotización original", "Notas de precio escritas o registros de chat recopilados para la tarea acordada."],
          ["Campo de contacto del proveedor", "Los contactos se incluyen en el informe pagado y se anonimizan en este ejemplo público."],
          ["Campo de fotos locales", "Fotos de puesto, producto, empaque o muestra cuando estén disponibles durante la búsqueda local."],
          ["Notas de decisión", "MOQ, plazo, empaque, personalización y trade-offs prácticos."]
        ],
        supplierLabels: ["MOQ", "EMPAQUE", "PLAZO", "PERSONALIZACIÓN", "CONTACTO", "EVIDENCIA DE COTIZACIÓN"],
        suppliers: [
          { option: "OPCIÓN A", name: "Proveedor Yiwu A", source: "Puesto del mercado de Yiwu documentado localmente", price: "$1.28 / ud", values: ["500 unidades", "Bolsa individual + caja", "7 a 10 días", "Color disponible", "Incluido en informe pagado", "Cotización escrita registrada"], noteLabel: "Trade-off:", note: "MOQ más bajo de la lista corta. Precio algo mayor que la Opción B." },
          { option: "OPCIÓN B", name: "Proveedor Yiwu B", source: "Puesto del mercado de Yiwu documentado localmente", price: "$1.19 / ud", values: ["1,000 unidades", "Bolsa individual + caja", "10 a 14 días", "Color y etiqueta disponibles", "Incluido en informe pagado", "Cotización escrita registrada"], noteLabel: "Trade-off:", note: "Precio más bajo para la cantidad planificada. Plazo más largo que la Opción A." },
          { option: "OPCIÓN C", name: "Proveedor Yiwu C", source: "Puesto del mercado de Yiwu documentado localmente", price: "$1.35 / ud", values: ["800 unidades", "Funda retail + caja", "8 a 12 días", "Color y funda disponibles", "Incluido en informe pagado", "Cotización escrita registrada"], noteLabel: "Trade-off:", note: "Mejor presentación de empaque. Precio unitario más alto." }
        ],
        nextSteps: [
          ["Contactar proveedores directamente", "El informe pagado incluye los contactos recopilados para su tarea."],
          ["Solicitar apoyo con muestras", "Pida a OpenQuote Yiwu recoger, etiquetar y fotografiar muestras con una tarifa fija separada."],
          ["Usar sus propios socios", "Puede usar cualquier agente, transitario o proveedor de exportación que prefiera."]
        ],
        cta: "Iniciar mi propia búsqueda",
        disclaimerTitle: "Aviso de demostración",
        disclaimer: "Esta es una plantilla de demostración anonimizada. Un informe real registra el alcance acordado y la información recopilada durante la tarea. OpenQuote Yiwu no garantiza desempeño del proveedor, calidad del producto, cumplimiento legal ni entrega exitosa. El comprador sigue siendo responsable de la debida diligencia comercial y decisiones contractuales.",
        footerText: "Apoyo local. Cotizaciones originales. Sin comisión. Sin margen añadido.",
        footerLabel: "Informe de ejemplo"
      },
      privacyPage: {
        title: "Aviso de privacidad | OpenQuote Yiwu",
        metaDescription: "Aviso de privacidad para revisiones de viabilidad y servicios locales de OpenQuote Yiwu.",
        contactCta: "Contactar",
        whatsappService: "Pregunta sobre privacidad",
        eyebrow: "OpenQuote Yiwu",
        h1: "Aviso de privacidad",
        updated: "Última actualización: 2 de junio de 2026",
        sections: [
          ["Solicitudes del sitio", "Este sitio no incluye formulario y no recopila ni guarda su solicitud de sourcing. El botón de contacto abre un chat de WhatsApp."],
          ["Mensajes de WhatsApp", "Si nos escribe por WhatsApp, podemos recibir su perfil, número de teléfono, fotos y la información enviada en el chat. Usamos esa información para revisar la solicitud, preparar un alcance de tarifa fija, responder y entregar cualquier servicio local que usted decida comprar. No vendemos sus datos de contacto."],
          ["Proveedores de servicio", "Podemos usar proveedores de hosting y mensajería. WhatsApp procesa los mensajes según sus propios términos y prácticas de privacidad. Si solicita apoyo opcional, la información relevante puede compartirse con un proveedor o tercero solo cuando sea necesario para atender su solicitud."],
          ["Sus opciones", "Puede pedirnos corregir o borrar la información de contacto que compartió. También puede pedirnos dejar de enviar mensajes no esenciales."],
          ["Contacto", "Contacte a OpenQuote Yiwu por WhatsApp: +1 614 720 0111."]
        ],
        footerText: "Apoyo local. Cotizaciones originales. Sin comisión. Sin margen añadido.",
        back: "Volver al inicio"
      }
    }
  };

  pageTranslations.ar = {
    sampleReport: Object.assign({}, pageTranslations.en.sampleReport, {
      title: "نموذج تقرير Product Scout | OpenQuote Yiwu",
      metaDescription: "نموذج تقرير OpenQuote Yiwu Product Scout مع بيانات موردين افتراضية.",
      contactCta: "تواصل معنا",
      whatsappService: "أريد بدء Quick Product Scout من نموذج التقرير",
      titleEyebrow: "تقرير تجريبي / البيانات مخفية",
      h1: "Product Scout:<br />سلة تخزين قابلة للطي",
      intro: "يوضح هذا النموذج بنية التقرير. تفاصيل المنتج والأسعار وهويات الموردين هي أمثلة افتراضية.",
      sections: [["01 / طلب العميل", "المتطلبات المستهدفة"], ["02 / ملخص البحث", "كيف تم إعداد القائمة المختصرة"], ["03 / المخرجات", "ما الذي يشمله الملف المدفوع"], ["04 / القائمة المختصرة", "ثلاثة خيارات محلية قابلة للمقارنة"], ["05 / الخطوة التالية", "يبقى القرار بيدك"]],
      metaLabels: ["رقم التقرير", "تاريخ الإعداد", "الخدمة"],
      metaValues: ["OQ-DEMO-001", "1 يونيو 2026", "Quick Product Scout"],
      briefLabels: ["المنتج", "الكمية المخططة", "السوق المستهدف", "المتطلبات"],
      briefValues: ["سلة تخزين قابلة للطي", "1,000 قطعة", "أستراليا", "ألوان محايدة وتغليف تجزئة"],
      summaryStats: ["موردون محليون تم التواصل معهم", "خيارات مختصرة", "خيارات مستبعدة"],
      exclusionTitle: "ملاحظات الاستبعاد",
      exclusions: ["ثلاثة موردين لم يتمكنوا من تلبية متطلبات تغليف التجزئة.", "موردان طلبا كمية حد أدنى أعلى من 3,000 قطعة.", "موردان لم يقدما عرضاً مكتوباً كاملاً خلال فترة المراجعة.", "أبعاد منتج أحد الموردين لم تطابق الطلب."],
      deliverables: [["دليل عرض السعر الأصلي", "ملاحظات سعر مكتوبة أو سجلات محادثة تم جمعها للمهمة المتفق عليها."], ["حقل بيانات المورد", "تُدرج بيانات التواصل في التقرير المدفوع وتُخفى في هذا النموذج العام."], ["حقل الصور المحلية", "صور للكشك أو المنتج أو التغليف أو العينة عند توفرها أثناء البحث المحلي."], ["ملاحظات القرار", "MOQ ومدة التسليم والتغليف والتخصيص والمفاضلات العملية."]],
      supplierLabels: ["MOQ", "التغليف", "مدة التسليم", "التخصيص", "التواصل", "دليل السعر"],
      suppliers: [
        { option: "الخيار A", name: "مورد ييوو A", source: "تم توثيق كشك سوق ييوو محلياً", price: "$1.28 / قطعة", values: ["500 قطعة", "كيس فردي + كرتون", "7 إلى 10 أيام", "اللون متاح", "مدرج في التقرير المدفوع", "تم تسجيل عرض مكتوب"], noteLabel: "المفاضلة:", note: "أقل MOQ في القائمة المختصرة. السعر أعلى قليلاً من الخيار B." },
        { option: "الخيار B", name: "مورد ييوو B", source: "تم توثيق كشك سوق ييوو محلياً", price: "$1.19 / قطعة", values: ["1,000 قطعة", "كيس فردي + كرتون", "10 إلى 14 يوماً", "اللون والملصق متاحان", "مدرج في التقرير المدفوع", "تم تسجيل عرض مكتوب"], noteLabel: "المفاضلة:", note: "أقل سعر عند الكمية المخططة. مدة التسليم أطول من الخيار A." },
        { option: "الخيار C", name: "مورد ييوو C", source: "تم توثيق كشك سوق ييوو محلياً", price: "$1.35 / قطعة", values: ["800 قطعة", "غلاف تجزئة + كرتون", "8 إلى 12 يوماً", "اللون والغلاف متاحان", "مدرج في التقرير المدفوع", "تم تسجيل عرض مكتوب"], noteLabel: "المفاضلة:", note: "أفضل عرض للتغليف. أعلى سعر للوحدة في هذه القائمة." }
      ],
      nextSteps: [["تواصل مباشرة مع الموردين", "يتضمن التقرير المدفوع بيانات التواصل التي تم جمعها لمهمتك."], ["اطلب دعم العينات", "يمكنك طلب جمع العينات وتصنيفها وتصويرها برسوم ثابتة منفصلة."], ["استخدم شركاءك", "يمكنك استخدام أي وكيل توريد أو شركة شحن أو مقدم خدمة تصدير تفضله."]],
      cta: "ابدأ بحثي عن المنتج",
      disclaimerTitle: "إخلاء مسؤولية النموذج",
      disclaimer: "هذا نموذج تجريبي مع إخفاء البيانات. التقرير الحقيقي يسجل نطاق المهمة المتفق عليه والمعلومات التي جُمعت أثناءها. لا تضمن OpenQuote Yiwu أداء المورد أو جودة المنتج أو الامتثال القانوني أو نجاح التسليم. يبقى المشتري مسؤولاً عن الفحص التجاري وقرارات التعاقد.",
      footerText: "دعم محلي. عروض أصلية. بدون عمولة. بدون زيادة سعرية.",
      footerLabel: "نموذج التقرير"
    }),
    privacyPage: Object.assign({}, pageTranslations.en.privacyPage, {
      title: "إشعار الخصوصية | OpenQuote Yiwu",
      contactCta: "تواصل معنا",
      whatsappService: "سؤال عن الخصوصية",
      h1: "إشعار الخصوصية",
      updated: "آخر تحديث: 2 يونيو 2026",
      sections: [["طلبات الموقع", "لا يحتوي هذا الموقع على نموذج طلب ولا يجمع أو يخزن طلب التوريد الخاص بك. زر التواصل يفتح محادثة واتساب."], ["رسائل واتساب", "إذا تواصلت معنا عبر واتساب، قد نستلم بيانات ملفك ورقم الهاتف والصور والمعلومات التي ترسلها في المحادثة. نستخدمها لمراجعة الطلب وإعداد نطاق برسوم ثابتة والرد عليك وتنفيذ أي خدمة محلية تختار شراءها. لا نبيع بيانات التواصل الخاصة بك."], ["مقدمو الخدمة", "قد نستخدم مزودي استضافة ورسائل. يعالج واتساب الرسائل وفق شروطه وسياسات الخصوصية الخاصة به. إذا طلبت دعماً اختيارياً، قد نشارك المعلومات ذات الصلة مع مورد أو طرف ثالث فقط عند الحاجة لمعالجة طلبك."], ["اختياراتك", "يمكنك طلب تصحيح أو حذف بيانات التواصل التي شاركتها. ويمكنك أيضاً طلب إيقاف الرسائل غير الضرورية."], ["التواصل", "تواصل مع OpenQuote Yiwu عبر واتساب: +1 614 720 0111."]],
      footerText: "دعم محلي. عروض أصلية. بدون عمولة. بدون زيادة سعرية.",
      back: "العودة إلى الرئيسية"
    })
  };

  pageTranslations.fr = {
    sampleReport: Object.assign({}, pageTranslations.en.sampleReport, {
      title: "Exemple de rapport Product Scout | OpenQuote Yiwu",
      metaDescription: "Exemple de rapport OpenQuote Yiwu Product Scout avec détails fournisseurs fictifs.",
      contactCta: "Nous contacter",
      whatsappService: "Démarrer mon propre Quick Product Scout depuis l’exemple",
      titleEyebrow: "RAPPORT DE DÉMONSTRATION / DÉTAILS ANONYMISÉS",
      h1: "Product Scout:<br />Panier de rangement pliable",
      intro: "Cet exemple illustre la structure du rapport. Les détails produit, devis et identités fournisseurs sont fictifs.",
      sections: [["01 / BRIEF CLIENT", "Exigences cibles"], ["02 / RÉSUMÉ DE RECHERCHE", "Comment la présélection a été produite"], ["03 / LIVRABLES", "Ce que le dossier payé inclut"], ["04 / PRÉSÉLECTION", "Trois options locales comparables"], ["05 / PROCHAINE ÉTAPE", "Vous gardez le contrôle"]],
      metaLabels: ["ID RAPPORT", "PRÉPARÉ", "SERVICE"],
      metaValues: ["OQ-DEMO-001", "1 juin 2026", "Quick Product Scout"],
      briefLabels: ["PRODUIT", "QUANTITÉ PRÉVUE", "MARCHÉ CIBLE", "EXIGENCES"],
      briefValues: ["Panier de rangement pliable", "1 000 pièces", "Australie", "Couleurs neutres, emballage retail"],
      summaryStats: ["Fournisseurs locaux contactés", "Options présélectionnées", "Options exclues"],
      exclusionTitle: "Notes d’exclusion",
      exclusions: ["Trois fournisseurs ne pouvaient pas répondre à l’exigence d’emballage retail.", "Deux fournisseurs exigeaient un MOQ supérieur à 3 000 pièces.", "Deux fournisseurs n’ont pas fourni de devis écrit complet pendant la période de revue.", "Les dimensions d’un fournisseur ne correspondaient pas au brief cible."],
      deliverables: [["Preuve de devis original", "Notes de prix écrites ou traces de devis par chat collectées pour la tâche convenue."], ["Champ contact fournisseur", "Les contacts sont inclus dans le rapport payé et anonymisés dans cet exemple public."], ["Champ photos locales", "Photos du stand, produit, emballage ou échantillon si disponibles pendant la recherche locale."], ["Notes de décision", "MOQ, délai, emballage, personnalisation et compromis pratiques."]],
      supplierLabels: ["MOQ", "EMBALLAGE", "DÉLAI", "PERSONNALISATION", "CONTACT", "PREUVE DE DEVIS"],
      suppliers: [
        { option: "OPTION A", name: "Fournisseur Yiwu A", source: "Stand du marché de Yiwu documenté localement", price: "$1.28 / pc", values: ["500 pcs", "Sachet individuel + carton", "7 à 10 jours", "Couleur disponible", "Inclus dans le rapport payé", "Devis écrit enregistré"], noteLabel: "Compromis :", note: "MOQ le plus bas de la sélection. Devis légèrement supérieur à l’Option B." },
        { option: "OPTION B", name: "Fournisseur Yiwu B", source: "Stand du marché de Yiwu documenté localement", price: "$1.19 / pc", values: ["1 000 pcs", "Sachet individuel + carton", "10 à 14 jours", "Couleur et étiquette disponibles", "Inclus dans le rapport payé", "Devis écrit enregistré"], noteLabel: "Compromis :", note: "Prix le plus bas à la quantité prévue. Délai plus long que l’Option A." },
        { option: "OPTION C", name: "Fournisseur Yiwu C", source: "Stand du marché de Yiwu documenté localement", price: "$1.35 / pc", values: ["800 pcs", "Manchon retail + carton", "8 à 12 jours", "Couleur et manchon disponibles", "Inclus dans le rapport payé", "Devis écrit enregistré"], noteLabel: "Compromis :", note: "Meilleure présentation d’emballage. Prix unitaire le plus élevé." }
      ],
      nextSteps: [["Contacter les fournisseurs directement", "Le rapport payé inclut les contacts collectés pour votre tâche."], ["Demander un support échantillons", "OpenQuote Yiwu peut collecter, étiqueter et photographier des échantillons avec un devis fixe séparé."], ["Utiliser vos propres partenaires", "Vous pouvez utiliser l’agent, transitaire ou prestataire export de votre choix."]],
      cta: "Démarrer ma recherche",
      disclaimerTitle: "Avertissement de démonstration",
      disclaimer: "Ceci est un modèle de démonstration anonymisé. Un vrai rapport enregistre le périmètre convenu et les informations collectées pendant la tâche. OpenQuote Yiwu ne garantit pas la performance fournisseur, la qualité produit, la conformité légale ni la livraison réussie. L’acheteur reste responsable de la diligence commerciale et des décisions contractuelles.",
      footerText: "Support local. Devis originaux. Aucune commission. Aucune marge.",
      footerLabel: "Rapport exemple"
    }),
    privacyPage: Object.assign({}, pageTranslations.en.privacyPage, {
      title: "Avis de confidentialité | OpenQuote Yiwu",
      contactCta: "Nous contacter",
      whatsappService: "Question de confidentialité",
      h1: "Avis de confidentialité",
      updated: "Dernière mise à jour : 2 juin 2026",
      sections: [["Demandes du site", "Ce site ne comprend pas de formulaire et ne collecte ni ne stocke votre demande de sourcing. Le bouton de contact ouvre un chat WhatsApp."], ["Messages WhatsApp", "Si vous nous écrivez sur WhatsApp, nous pouvons recevoir votre profil WhatsApp, numéro de téléphone, photos et les informations envoyées dans le chat. Nous les utilisons pour examiner votre demande, préparer un périmètre à frais fixes, vous répondre et livrer tout service local que vous choisissez d’acheter. Nous ne vendons pas vos contacts."], ["Prestataires", "Nous pouvons utiliser des prestataires d’hébergement et de messagerie. WhatsApp traite les messages selon ses propres conditions et pratiques de confidentialité. Si vous demandez un support optionnel, les informations pertinentes peuvent être partagées avec un fournisseur ou un tiers uniquement si nécessaire."], ["Vos choix", "Vous pouvez nous demander de corriger ou supprimer les informations de contact partagées. Vous pouvez aussi demander l’arrêt des messages non essentiels."], ["Contact", "Contactez OpenQuote Yiwu sur WhatsApp : +1 614 720 0111."]],
      footerText: "Support local. Devis originaux. Aucune commission. Aucune marge.",
      back: "Retour à l’accueil"
    })
  };

  pageTranslations.pt = {
    sampleReport: Object.assign({}, pageTranslations.en.sampleReport, {
      title: "Exemplo de relatório Product Scout | OpenQuote Yiwu",
      metaDescription: "Exemplo de relatório OpenQuote Yiwu Product Scout com detalhes fictícios de fornecedores.",
      contactCta: "Contato",
      whatsappService: "Quero iniciar meu próprio Quick Product Scout a partir do exemplo",
      titleEyebrow: "RELATÓRIO DE DEMONSTRAÇÃO / DADOS ANONIMIZADOS",
      h1: "Product Scout:<br />Cesto organizador dobrável",
      intro: "Este exemplo mostra a estrutura do relatório. Detalhes do produto, cotações e identidades dos fornecedores são fictícios.",
      sections: [["01 / BRIEF DO CLIENTE", "Requisitos-alvo"], ["02 / RESUMO DA BUSCA", "Como a lista curta foi criada"], ["03 / ENTREGÁVEIS", "O que o pacote pago inclui"], ["04 / LISTA CURTA", "Três opções locais comparáveis"], ["05 / PRÓXIMO PASSO", "Você mantém o controle"]],
      metaLabels: ["ID DO RELATÓRIO", "PREPARADO", "SERVIÇO"],
      metaValues: ["OQ-DEMO-001", "1 de junho de 2026", "Quick Product Scout"],
      briefLabels: ["PRODUTO", "QUANTIDADE PLANEJADA", "MERCADO-ALVO", "REQUISITOS"],
      briefValues: ["Cesto organizador dobrável", "1.000 peças", "Austrália", "Cores neutras, embalagem de varejo"],
      summaryStats: ["Fornecedores locais contatados", "Opções selecionadas", "Opções excluídas"],
      exclusionTitle: "Notas de exclusão",
      exclusions: ["Três fornecedores não atendiam à exigência de embalagem de varejo.", "Dois fornecedores exigiam MOQ acima de 3.000 peças.", "Dois fornecedores não enviaram cotação escrita completa no período de análise.", "As dimensões do produto de um fornecedor não correspondiam ao brief."],
      deliverables: [["Evidência da cotação original", "Notas de preço escritas ou registros de chat coletados para a tarefa combinada."], ["Campo de contato do fornecedor", "Os contatos entram no relatório pago e ficam anonimizados neste exemplo público."], ["Campo de fotos locais", "Fotos de box, produto, embalagem ou amostra quando disponíveis na busca local."], ["Notas para decisão", "MOQ, prazo, embalagem, personalização e trade-offs práticos."]],
      supplierLabels: ["MOQ", "EMBALAGEM", "PRAZO", "PERSONALIZAÇÃO", "CONTATO", "EVIDÊNCIA DA COTAÇÃO"],
      suppliers: [
        { option: "OPÇÃO A", name: "Fornecedor Yiwu A", source: "Box do mercado de Yiwu documentado localmente", price: "$1.28 / un.", values: ["500 peças", "Saco individual + caixa", "7 a 10 dias", "Cor disponível", "Incluído no relatório pago", "Cotação escrita registrada"], noteLabel: "Trade-off:", note: "Menor MOQ da lista curta. Cotação um pouco maior que a Opção B." },
        { option: "OPÇÃO B", name: "Fornecedor Yiwu B", source: "Box do mercado de Yiwu documentado localmente", price: "$1.19 / un.", values: ["1.000 peças", "Saco individual + caixa", "10 a 14 dias", "Cor e etiqueta disponíveis", "Incluído no relatório pago", "Cotação escrita registrada"], noteLabel: "Trade-off:", note: "Menor preço na quantidade planejada. Prazo maior que a Opção A." },
        { option: "OPÇÃO C", name: "Fornecedor Yiwu C", source: "Box do mercado de Yiwu documentado localmente", price: "$1.35 / un.", values: ["800 peças", "Sleeve de varejo + caixa", "8 a 12 dias", "Cor e sleeve disponíveis", "Incluído no relatório pago", "Cotação escrita registrada"], noteLabel: "Trade-off:", note: "Melhor apresentação de embalagem. Maior preço unitário." }
      ],
      nextSteps: [["Contatar fornecedores diretamente", "O relatório pago inclui os contatos coletados para sua tarefa."], ["Solicitar apoio com amostras", "Peça à OpenQuote Yiwu para coletar, etiquetar e fotografar amostras com taxa fixa separada."], ["Usar seus próprios parceiros", "Você pode usar qualquer agente, freight forwarder ou prestador de exportação que preferir."]],
      cta: "Iniciar minha pesquisa",
      disclaimerTitle: "Aviso de demonstração",
      disclaimer: "Este é um modelo de demonstração anonimizado. Um relatório real registra o escopo combinado e as informações coletadas durante a tarefa. A OpenQuote Yiwu não garante desempenho do fornecedor, qualidade do produto, conformidade legal ou entrega bem-sucedida. O comprador continua responsável pela diligência comercial e decisões contratuais.",
      footerText: "Suporte local. Cotações originais. Sem comissão. Sem margem.",
      footerLabel: "Relatório de exemplo"
    }),
    privacyPage: Object.assign({}, pageTranslations.en.privacyPage, {
      title: "Aviso de privacidade | OpenQuote Yiwu",
      contactCta: "Contato",
      whatsappService: "Pergunta sobre privacidade",
      h1: "Aviso de privacidade",
      updated: "Última atualização: 2 de junho de 2026",
      sections: [["Solicitações do site", "Este site não inclui formulário e não coleta nem armazena sua solicitação de sourcing. O botão de contato abre uma conversa no WhatsApp."], ["Mensagens de WhatsApp", "Se você nos enviar mensagem pelo WhatsApp, podemos receber detalhes do seu perfil, número de telefone, fotos e informações enviadas no chat. Usamos isso para revisar sua solicitação, preparar escopo com taxa fixa, responder e entregar qualquer serviço local que você escolha comprar. Não vendemos seus contatos."], ["Prestadores de serviço", "Podemos usar provedores de hospedagem e mensagens. O WhatsApp processa mensagens conforme seus próprios termos e práticas de privacidade. Se você pedir suporte opcional, informações relevantes podem ser compartilhadas com fornecedor ou terceiro somente quando necessário."], ["Suas escolhas", "Você pode pedir correção ou exclusão das informações de contato compartilhadas. Também pode pedir para pararmos mensagens não essenciais."], ["Contato", "Fale com a OpenQuote Yiwu no WhatsApp: +1 614 720 0111."]],
      footerText: "Suporte local. Cotações originais. Sem comissão. Sem margem.",
      back: "Voltar ao início"
    })
  };

  pageTranslations.ru = {
    sampleReport: Object.assign({}, pageTranslations.en.sampleReport, {
      title: "Пример отчета Product Scout | OpenQuote Yiwu",
      metaDescription: "Демонстрационный отчет OpenQuote Yiwu Product Scout с вымышленными данными поставщиков.",
      contactCta: "Связаться",
      whatsappService: "Начать мой Quick Product Scout по примеру отчета",
      titleEyebrow: "ДЕМОНСТРАЦИОННЫЙ ОТЧЕТ / ДАННЫЕ АНОНИМИЗИРОВАНЫ",
      h1: "Product Scout:<br />Складная корзина для хранения",
      intro: "Этот пример показывает структуру отчета. Данные товара, цены и поставщики являются вымышленными.",
      sections: [["01 / БРИФ КЛИЕНТА", "Целевые требования"], ["02 / РЕЗЮМЕ ПОИСКА", "Как была подготовлена короткая подборка"], ["03 / РЕЗУЛЬТАТЫ", "Что входит в платный пакет"], ["04 / КОРОТКАЯ ПОДБОРКА", "Три сопоставимых локальных варианта"], ["05 / СЛЕДУЮЩИЙ ШАГ", "Вы сохраняете контроль"]],
      metaLabels: ["ID ОТЧЕТА", "ПОДГОТОВЛЕНО", "УСЛУГА"],
      metaValues: ["OQ-DEMO-001", "1 июня 2026 г.", "Quick Product Scout"],
      briefLabels: ["ТОВАР", "ПЛАНОВОЕ КОЛИЧЕСТВО", "ЦЕЛЕВОЙ РЫНОК", "ТРЕБОВАНИЯ"],
      briefValues: ["Складная корзина для хранения", "1 000 шт.", "Австралия", "Нейтральные цвета, розничная упаковка"],
      summaryStats: ["Локальных поставщиков проверено", "Вариантов отобрано", "Вариантов исключено"],
      exclusionTitle: "Причины исключения",
      exclusions: ["Три поставщика не смогли выполнить требование по розничной упаковке.", "Два поставщика требовали MOQ выше 3 000 штук.", "Два поставщика не дали полный письменный расчет в период проверки.", "Размеры товара одного поставщика не совпали с целевым брифом."],
      deliverables: [["Доказательство оригинальной цены", "Письменные ценовые заметки поставщика или записи чата, собранные по согласованной задаче."], ["Поле контакта поставщика", "Контакты включаются в платный отчет и скрыты в этом публичном примере."], ["Поле локальных фото", "Фото павильона, товара, упаковки или образца, если доступны во время локального поиска."], ["Заметки для решения", "MOQ, сроки, упаковка, кастомизация и практические компромиссы."]],
      supplierLabels: ["MOQ", "УПАКОВКА", "СРОК", "КАСТОМИЗАЦИЯ", "КОНТАКТ", "ДОКАЗАТЕЛЬСТВО ЦЕНЫ"],
      suppliers: [
        { option: "ВАРИАНТ A", name: "Поставщик Yiwu A", source: "Павильон рынка Иу локально зафиксирован", price: "$1.28 / шт.", values: ["500 шт.", "Индивидуальный пакет + короб", "7–10 дней", "Доступен цвет", "Включено в платный отчет", "Письменная цена зафиксирована"], noteLabel: "Компромисс:", note: "Самый низкий MOQ в подборке. Цена немного выше, чем у варианта B." },
        { option: "ВАРИАНТ B", name: "Поставщик Yiwu B", source: "Павильон рынка Иу локально зафиксирован", price: "$1.19 / шт.", values: ["1 000 шт.", "Индивидуальный пакет + короб", "10–14 дней", "Доступны цвет и этикетка", "Включено в платный отчет", "Письменная цена зафиксирована"], noteLabel: "Компромисс:", note: "Самая низкая цена при плановом количестве. Срок дольше, чем у варианта A." },
        { option: "ВАРИАНТ C", name: "Поставщик Yiwu C", source: "Павильон рынка Иу локально зафиксирован", price: "$1.35 / шт.", values: ["800 шт.", "Розничный sleeve + короб", "8–12 дней", "Доступны цвет и sleeve", "Включено в платный отчет", "Письменная цена зафиксирована"], noteLabel: "Компромисс:", note: "Лучшая презентация упаковки. Самая высокая цена за единицу." }
      ],
      nextSteps: [["Связаться с поставщиками напрямую", "Платный отчет включает контакты поставщиков, собранные по вашей задаче."], ["Запросить поддержку образцов", "OpenQuote Yiwu может собрать, промаркировать и сфотографировать образцы за отдельную фиксированную оплату."], ["Использовать своих партнеров", "Вы можете использовать любого агента, экспедитора или экспортного партнера по своему выбору."]],
      cta: "Начать мой поиск товара",
      disclaimerTitle: "Дисклеймер демонстрации",
      disclaimer: "Это анонимизированный демонстрационный шаблон. Реальный отчет фиксирует согласованный объем задачи и информацию, собранную во время выполнения. OpenQuote Yiwu не гарантирует работу поставщика, качество товара, юридическое соответствие или успешную доставку. Покупатель отвечает за коммерческую проверку и договорные решения.",
      footerText: "Локальная поддержка. Оригинальные цены. Без комиссии. Без наценки.",
      footerLabel: "Пример отчета"
    }),
    privacyPage: Object.assign({}, pageTranslations.en.privacyPage, {
      title: "Уведомление о конфиденциальности | OpenQuote Yiwu",
      contactCta: "Связаться",
      whatsappService: "Вопрос о конфиденциальности",
      h1: "Уведомление о конфиденциальности",
      updated: "Последнее обновление: 2 июня 2026 г.",
      sections: [["Запросы на сайте", "На этом сайте нет формы запроса, и сайт не собирает и не хранит ваш sourcing-запрос. Кнопка контакта открывает чат WhatsApp."], ["Сообщения WhatsApp", "Если вы пишете нам через WhatsApp, мы можем получить данные вашего профиля, номер телефона, фото и информацию, отправленную в чате. Мы используем это для просмотра запроса, подготовки фиксированного объема, ответа и выполнения любой локальной услуги, которую вы решите купить. Мы не продаем ваши контактные данные."], ["Поставщики услуг", "Мы можем использовать хостинг и сервисы сообщений. WhatsApp обрабатывает сообщения по собственным условиям и политике приватности. Если вы просите дополнительную поддержку, релевантная информация может быть передана поставщику или третьей стороне только при необходимости."], ["Ваш выбор", "Вы можете попросить исправить или удалить контактную информацию, которую вы передали. Также можно попросить прекратить несущественные сообщения."], ["Контакт", "Свяжитесь с OpenQuote Yiwu в WhatsApp: +1 614 720 0111."]],
      footerText: "Локальная поддержка. Оригинальные цены. Без комиссии. Без наценки.",
      back: "Назад на главную"
    })
  };

  let currentLocale = normalizeLocale(getUrlLocale() || getCookieLocale() || "en");

  function normalizeLocale(locale) {
    if (!locale) return "en";
    const value = String(locale).toLowerCase();
    if (value.startsWith("pt")) return "pt";
    const shortValue = value.slice(0, 2);
    return LOCALES.includes(shortValue) ? shortValue : "en";
  }

  function getUrlLocale() {
    return new URLSearchParams(window.location.search).get("lang");
  }

  function getCookieLocale() {
    const match = document.cookie.match(new RegExp("(?:^|; )" + COOKIE_NAME + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : "";
  }

  function setCookie(locale) {
    document.cookie =
      COOKIE_NAME +
      "=" +
      encodeURIComponent(locale) +
      "; path=/; max-age=" +
      COOKIE_MAX_AGE +
      "; SameSite=Lax";
  }

  function updateUrlLocale(locale) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", normalizeLocale(locale));
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  function query(selector, root) {
    return (root || document).querySelector(selector);
  }

  function queryAll(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
  }

  function text(selector, value, root) {
    const element = query(selector, root);
    if (element) element.textContent = value;
  }

  function html(selector, value, root) {
    const element = query(selector, root);
    if (element) element.innerHTML = value;
  }

  function listText(selector, values, root) {
    queryAll(selector, root).forEach(function (element, index) {
      if (values[index] !== undefined) element.textContent = values[index];
    });
  }

  function renderServices(services) {
    const grid = query(".service-grid");
    if (!grid || !services) return;

    grid.innerHTML = "";
    services.forEach(function (service, index) {
      const card = document.createElement("article");
      card.className = "service-card" + (index === 1 ? " featured-service" : "");

      const number = document.createElement("p");
      number.className = "card-number";
      number.textContent = service.price;

      const title = document.createElement("h3");
      title.textContent = service.title;

      const description = document.createElement("p");
      description.textContent = service.text;

      const link = document.createElement("a");
      link.href = "#request";
      link.setAttribute("data-whatsapp-link", "");
      link.dataset.whatsappService = service.service;
      link.textContent = service.cta;

      card.append(number, title, description, link);
      grid.appendChild(card);
    });
  }

  function setMeta(selector, content) {
    const element = query(selector);
    if (element) element.setAttribute("content", content);
  }

  function applySampleReportPage(locale) {
    if (!document.body.classList.contains("sample-page")) return;

    const t = (pageTranslations[locale] || pageTranslations.en).sampleReport;
    document.title = t.title;
    setMeta('meta[name="description"]', t.metaDescription);

    text(".report-header > .button", t.contactCta);
    const headerButton = query(".report-header > .button");
    if (headerButton) headerButton.dataset.whatsappService = t.whatsappService;

    text(".document-title .eyebrow", t.titleEyebrow);
    html(".document-title h1", t.h1);
    text(".document-title > div > p:last-child", t.intro);
    listText(".document-meta span", t.metaLabels);
    listText(".document-meta b", t.metaValues);

    queryAll(".document-section-title").forEach(function (section, index) {
      const sectionText = t.sections[index];
      if (!sectionText) return;
      text(".eyebrow", sectionText[0], section);
      text("h2", sectionText[1], section);
    });

    listText(".data-grid span", t.briefLabels);
    listText(".data-grid b", t.briefValues);
    listText(".summary-grid span", t.summaryStats);
    text(".exclusions h3", t.exclusionTitle);
    listText(".exclusions li", t.exclusions);

    queryAll(".deliverable-list div").forEach(function (item, index) {
      const deliverable = t.deliverables[index];
      if (!deliverable) return;
      text("strong", deliverable[0], item);
      text("span", deliverable[1], item);
    });

    queryAll(".supplier-detail").forEach(function (supplier, index) {
      const supplierText = t.suppliers[index];
      if (!supplierText) return;
      text(".supplier-title span", supplierText.option, supplier);
      text(".supplier-title h3", supplierText.name, supplier);
      text(".supplier-title p", supplierText.source, supplier);
      text(".supplier-title > b", supplierText.price, supplier);
      listText(".supplier-data span", t.supplierLabels, supplier);
      listText(".supplier-data b", supplierText.values, supplier);
      html(".supplier-note", "<strong>" + supplierText.noteLabel + "</strong> " + supplierText.note, supplier);
    });

    queryAll(".next-step-grid div").forEach(function (item, index) {
      const nextStep = t.nextSteps[index];
      if (!nextStep) return;
      text("h3", nextStep[0], item);
      text("p", nextStep[1], item);
    });

    text(".report-cta", t.cta);
    const reportCta = query(".report-cta");
    if (reportCta) reportCta.dataset.whatsappService = t.whatsappService;
    text(".document-disclaimer h3", t.disclaimerTitle);
    text(".document-disclaimer p", t.disclaimer);
    text("footer .footer-layout > p", t.footerText);
    text("footer .footer-layout > span", t.footerLabel);
  }

  function applyPrivacyPage(locale) {
    if (!query(".privacy-document")) return;

    const t = (pageTranslations[locale] || pageTranslations.en).privacyPage;
    document.title = t.title;
    setMeta('meta[name="description"]', t.metaDescription);

    text(".report-header > .button", t.contactCta);
    const headerButton = query(".report-header > .button");
    if (headerButton) headerButton.dataset.whatsappService = t.whatsappService;
    text(".privacy-document .eyebrow", t.eyebrow);
    text(".privacy-document h1", t.h1);
    text(".privacy-document .updated", t.updated);

    queryAll(".privacy-document section").forEach(function (section, index) {
      const sectionText = t.sections[index];
      if (!sectionText) return;
      text("h2", sectionText[0], section);
      text("p", sectionText[1], section);
    });

    text("footer .footer-layout > p", t.footerText);
    text("footer .footer-layout > a", t.back);
  }

  function applyLocale(locale, options) {
    const nextLocale = normalizeLocale(locale);
    const t = translations[nextLocale] || translations.en;
    currentLocale = nextLocale;

    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.title = t.title;
    setMeta('meta[name="description"]', t.metaDescription);
    setMeta('meta[property="og:title"]', t.ogTitle);
    setMeta('meta[property="og:description"]', t.ogDescription);

    listText(".nav-links a", t.nav);

    text(".hero-copy .eyebrow", t.hero.eyebrow);
    html(".hero-copy h1", t.hero.title);
    text(".hero-text", t.hero.text);
    listText(".hero-benefits span", t.hero.benefits);
    text(".hero-actions .button", t.hero.cta);
    const heroCta = query(".hero-actions .button");
    if (heroCta && t.services && t.services[0]) heroCta.dataset.whatsappService = t.services[0].service;
    html(".hero-actions .text-link", t.hero.sample);
    text(".hero-note", t.hero.note);

    if (!query(".starter-duo")) {
      listText(".starter-heading span, .starter-heading b", t.starter.heading);
      text(".starter-from", t.starter.from);
      text(".starter-price strong", t.starter.price || "29");
      listText(".starter-card li", t.starter.items);
      text(".starter-foot span", t.starter.foot[0]);
      text(".starter-foot strong", t.starter.foot[1]);
    }

    text(".savings-heading .eyebrow", t.savings.eyebrow);
    text(".savings-heading h2", t.savings.title);
    html(".savings-heading > p:last-child", t.savings.text);
    text(".calculator-card label span", t.savings.planned);
    listText(".calculator-results span", [t.savings.ourFee, t.savings.otherCost, t.savings.difference]);
    text(".savings-copy .eyebrow", t.savings.meaningEyebrow);
    text(".savings-copy h3", t.savings.meaningTitle);
    text(".savings-copy p:not(.eyebrow)", t.savings.meaningText);
    text(".savings-copy .button", t.savings.start);
    text(".compare-mobile-hint", t.savings.hint);
    queryAll(".compare-row").forEach(function (row, rowIndex) {
      const rowValues = t.savings.table[rowIndex];
      if (!rowValues) return;
      Array.from(row.children).forEach(function (cell, cellIndex) {
        if (rowValues[cellIndex] !== undefined) cell.textContent = rowValues[cellIndex];
      });
    });
    text(".comparison-note", t.savings.note);

    text(".market-copy .eyebrow", t.market.eyebrow);
    text(".market-copy h2", t.market.title);
    text(".market-copy p:not(.eyebrow)", t.market.text);
    listText(".market-stats span", t.market.stats);

    const fieldShots = t.fieldShots || translations.en.fieldShots;
    if (fieldShots) {
      text(".field-shot-heading .eyebrow", fieldShots.eyebrow);
      text(".field-shot-heading h2", fieldShots.title);
      text(".field-shot-heading > p", fieldShots.text);
      queryAll(".phone-shot-card").forEach(function (card, index) {
        const cardText = fieldShots.cards[index];
        if (!cardText) return;
        text(".phone-shot-top span", cardText[0], card);
        text(".phone-shot-top b", cardText[1], card);
        text("figcaption strong", cardText[2], card);
        text("figcaption span", cardText[3], card);
      });
      text(".field-shot-note", fieldShots.note);
    }

    text("#services .section-heading .eyebrow", t.servicesHeading.eyebrow);
    text("#services .section-heading h2", t.servicesHeading.title);
    text("#services .section-heading > p:last-child", t.servicesHeading.text);
    renderServices(t.services);
    text(".service-note", t.serviceNote);

    text(".process-section .eyebrow", t.process.eyebrow);
    text(".process-section .section-heading h2", t.process.title);
    text(".process-section .section-heading > p:last-child", t.process.intro);
    queryAll(".process-grid li").forEach(function (item, index) {
      const step = t.process.steps[index];
      if (!step) return;
      text("h3", step[0], item);
      text("p", step[1], item);
    });

    text(".report-copy .eyebrow", t.report.eyebrow);
    text(".report-copy h2", t.report.title);
    text(".report-copy > p", t.report.text);
    listText(".pack-includes span", t.report.chips);
    text(".report-copy .button", t.report.button);
    text(".report-topline span", t.report.previewTop[0]);
    text(".report-topline b", t.report.previewTop[1]);
    html(".sample-image", t.report.image);
    text(".report-product span", t.report.productLabel);
    text(".report-product h3", t.report.productName);
    text(".report-product p", t.report.productText);
    listText(".report-stats span", t.report.stats);
    listText(".supplier-line strong", t.report.supplierNames);
    listText(".supplier-line span", [t.report.quoteRecorded, t.report.quoteRecorded]);
    text(".preview-note", t.report.note);

    text(".faq-section .section-heading .eyebrow", t.faq.eyebrow);
    text(".faq-section .section-heading h2", t.faq.title);
    queryAll(".faq-list details").forEach(function (item, index) {
      const faqItem = t.faq.items[index];
      if (!faqItem) return;
      text("summary", faqItem[0], item);
      text("p", faqItem[1], item);
    });

    text(".request-copy .eyebrow", t.request.eyebrow);
    text(".request-copy h2", t.request.title);
    text(".request-copy > p:not(.eyebrow)", t.request.text);
    listText(".request-points span", t.request.points);
    text(".whatsapp-card .card-number", t.request.cardEyebrow);
    text(".whatsapp-card h3", t.request.cardTitle);
    text(".whatsapp-card > p:not(.card-number):not(.whatsapp-note)", t.request.cardText);
    text(".button-whatsapp", t.request.button);
    text(".whatsapp-note", t.request.note);
    const requestButton = query(".button-whatsapp");
    if (requestButton) requestButton.dataset.whatsappService = t.request.helpService;

    text(".footer-layout > p", t.footer.text);
    text("footer a[href='privacy.html']", t.footer.privacy);

    applySampleReportPage(nextLocale);
    applyPrivacyPage(nextLocale);

    queryAll(".language-switcher button").forEach(function (button) {
      const isActive = button.dataset.locale === nextLocale;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (!options || options.save !== false) {
      setCookie(nextLocale);
    }

    document.dispatchEvent(new CustomEvent("openquote:localechange", { detail: { locale: nextLocale } }));
  }

  function whatsappMessage(service) {
    const t = translations[currentLocale] || translations.en;
    const selectedService = service || t.whatsapp.fallbackService;
    const normalizedService = selectedService.toLowerCase();
    const isPriceRecheck =
      normalizedService.includes("price re-check") ||
      normalizedService.includes("price check") ||
      normalizedService.includes("us$29") ||
      normalizedService.includes("29");
    const isQuickScout =
      normalizedService.includes("quick product scout") ||
      normalizedService.includes("us$59") ||
      normalizedService.includes("59");
    const isFiveProductScout =
      normalizedService.includes("5-product") ||
      normalizedService.includes("5 product") ||
      normalizedService.includes("us$99") ||
      normalizedService.includes("99");

    if (isPriceRecheck && currentLocale === "en") {
      return [
        "Hi, I want to start the $29 China Price Re-Check.",
        "",
        "Product photo/link:",
        "Current quote, if any:",
        "Quantity:",
        "Country:",
        "Packaging or logo requirements:"
      ].join("\n");
    }

    if (isQuickScout && currentLocale === "en") {
      return [
        "Hi, I want to start the $59 Quick Product Scout.",
        "",
        "Product photo/link:",
        "Target quantity:",
        "Country:",
        "Need logo/packaging:"
      ].join("\n");
    }

    if (isFiveProductScout && currentLocale === "en") {
      return [
        "Hi, I want to start the $99 5-Product Scout.",
        "",
        "Product photos/links (up to 5):",
        "Target quantity for each product:",
        "Country:",
        "Packaging or logo requirements:",
        "Product category or theme:"
      ].join("\n");
    }

    return [
      t.whatsapp.hello,
      "",
      t.whatsapp.service + selectedService,
      "",
      t.whatsapp.willSend,
      "1. " + t.whatsapp.fields[0],
      "2. " + t.whatsapp.fields[1],
      "3. " + t.whatsapp.fields[2],
      "4. " + t.whatsapp.fields[3]
    ].join("\n");
  }

  function getMissingNumberNote() {
    const t = translations[currentLocale] || translations.en;
    return t.whatsapp.missingNumber;
  }

  window.OPENQUOTE_I18N = {
    applyLocale: applyLocale,
    whatsappMessage: whatsappMessage,
    getMissingNumberNote: getMissingNumberNote,
    getLocale: function () {
      return currentLocale;
    }
  };

  queryAll(".language-switcher button").forEach(function (button) {
    button.addEventListener("click", function () {
      const nextLocale = normalizeLocale(button.dataset.locale || "en");
      updateUrlLocale(nextLocale);
      applyLocale(nextLocale);
    });
  });

  if (getUrlLocale()) {
    setCookie(currentLocale);
  }

  applyLocale(currentLocale, { save: !getCookieLocale() || Boolean(getUrlLocale()) });
})();
