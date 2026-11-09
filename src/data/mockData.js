// Catálogo real — THE LOOK Noviembre–Diciembre 2026 (Mary Kay México).
// Productos y sets extraídos del folleto oficial (THE_LOOK_DIGITAL_NOV_0_b5zs.pdf).
// Precios en MXN con IVA incluido. Vigencia: 1 nov – 31 dic 2026 o hasta agotar existencias.
// Los campos stock / cost / rating / durationDays están en null: los llena María Ilana
// en el panel de admin (Inventario). Los campos shades / edition / validUntil / unitsLimit
// son nuevos: tonos del producto, edición (Especial/Limitada), vigencia y límite de unidades.
// CLIENTS, SALES_SUMMARY, WEEKLY_SALES, BEST_SELLERS y SUPPLIER_SUGGESTIONS siguen
// siendo datos de ejemplo para el panel; sus referencias a productos apuntan a productos
// reales del catálogo (antes apuntaban a los 9 productos de ejemplo p1–p9, eliminados).

export const CONSULTANT = {
  name: 'María Ilana Salazar Ramir',
  phoneDisplay: '+52 1 55 7174 1465',
  whatsappNumber: '5215571741465',
  tagline: 'Consultora de belleza — cuidado de la piel personalizado'
}

export const CATALOG_SOURCE = {
  "name": "THE LOOK Noviembre–Diciembre 2026",
  "file": "THE_LOOK_DIGITAL_NOV_0_b5zs.pdf",
  "validFrom": "2026-11-01",
  "validUntil": "2026-12-31",
  "currency": "MXN",
  "consultant": "María Ilana Salazar Ramir",
  "whatsappNumber": "5215571741465"
}

export const CATEGORIES = [
  "Cuidado de la piel",
  "Maquillaje",
  "Fragancias",
  "Cuerpo",
  "Hombre",
  "Sol",
  "Suplementos",
  "Sets"
]

export const SKIN_TYPES = ['Grasa', 'Seca', 'Mixta', 'Sensible', 'Normal']

export const NEEDS = ['Limpieza', 'Hidratación', 'Luminosidad', 'Antiedad', 'Control de grasa', 'Protección solar']

export const PRODUCTS = [
  {
    "id": "tlk-001",
    "name": "Bálsamo Limpiador Facial Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 629,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Limpieza"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Bálsamo limpiador con infusión de PDRN (ADN de salmón), con dispensador giratorio. Ayuda a limpiar la piel y proporciona sensación de renovación y acondicionamiento.",
    "shades": [],
    "edition": "Especial",
    "validUntil": "2026-12-31",
    "unitsLimit": 80000
  },
  {
    "id": "tlk-002",
    "name": "Gel Humectante con Colágeno Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 499,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación",
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Gel humectante con péptidos de colágeno, textura refrescante en gel. Ayuda a que la piel luzca suave y con apariencia glass skin; mantiene humectación y elasticidad.",
    "shades": [],
    "edition": "Especial",
    "validUntil": "2026-12-31",
    "unitsLimit": 80000
  },
  {
    "id": "tlk-003",
    "name": "Parches Faciales con Gel de Caracol Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 719,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Parches faciales con mucina de caracol que se adhieren a la piel; aportan una dosis extra de humectación y luminosidad.",
    "shades": [],
    "edition": "Especial",
    "validUntil": "2026-12-31",
    "unitsLimit": 80000
  },
  {
    "id": "tlk-004",
    "name": "Polvo para Rostro Multifuncional Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 324,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Polvo 4 en 1: contorno (define y esculpe nariz y pómulos), bronceador (calidez y efecto sunkissed), rubor (color y frescura) e iluminador (puntos altos, efecto glowy). Con vitamina E y karité.",
    "shades": [
      "Contorno",
      "Bronceador",
      "Rubor",
      "Iluminador"
    ],
    "edition": "Especial",
    "validUntil": "2026-12-31",
    "unitsLimit": 50000
  },
  {
    "id": "tlk-005",
    "name": "Maquillaje Líquido Mate Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 269,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Acabado mate, cubre imperfecciones y ayuda a controlar el exceso de brillo facial hasta por 8 horas. Cobertura completa.",
    "shades": [
      "Very light",
      "Light",
      "Light tan",
      "Soft medium",
      "Light medium",
      "Medium",
      "Deep tan",
      "Light-to-medium",
      "Medium-to-deep"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-006",
    "name": "Brocha para Maquillaje Líquido Mary Kay®",
    "category": "Maquillaje",
    "price": 264,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Cerdas sintéticas perfectas para aplicar, mezclar y difuminar el maquillaje líquido con facilidad.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-007",
    "name": "Brocha Oval para Maquillaje Mary Kay®",
    "category": "Maquillaje",
    "price": 329,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Cerdas compactas que difuminan imperfecciones y logran una cobertura uniforme y completa en todo el rostro.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-008",
    "name": "Crayón Iluminador para Rostro Mary Kay®",
    "category": "Maquillaje",
    "price": 209,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Agrega un rose gold glow a tu rostro.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-009",
    "name": "Crayón para Contorno de Rostro Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 209,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Da dimensión y profundidad a tu rostro, aplicándolo bajo los pómulos y el contorno de la nariz.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-010",
    "name": "Labial Líquido Mate Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 254,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Labial mate con ingredientes humectantes (vitamina E y karité); sensación suave y cómoda en los labios.",
    "shades": [
      "Desert sunset",
      "Taupe that",
      "Almost pink",
      "Call me rose",
      "Berry strong",
      "Red alert",
      "Red envy",
      "Chai adore you",
      "Brick my heart",
      "Red my mind",
      "Raspberry kiss",
      "I <3 lilac"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-011",
    "name": "Dúo de Rubor en Polvo Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 219,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Usa un lado o los dos y crea un estilo único para cualquier ocasión.",
    "shades": [
      "Coral sky",
      "Pink shine",
      "Desert sun",
      "True brown"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-012",
    "name": "Dúo de Bronceador en Polvo Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 219,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Acabado suave y sedoso que te encantará.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-013",
    "name": "Dúo de Lápiz para Cejas Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 174,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Un lado brinda color a tus cejas para una apariencia voluminosa que enmarca el rostro y el otro da una sutil iluminación en el hueso de la ceja.",
    "shades": [
      "Cool blonde",
      "True brown"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-014",
    "name": "Mini Estuche para Cejas Mary Kay®",
    "category": "Maquillaje",
    "price": 144,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Incluye unas mini pinzas, una mini brocha para cepillar y una mini brocha angular para aplicar color.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-015",
    "name": "Delineador Líquido para Ojos Mary Kay®",
    "category": "Maquillaje",
    "price": 244,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Fórmula de alta pigmentación y a prueba de agua, de gran definición.",
    "shades": [
      "Matte black",
      "Matte beige"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-016",
    "name": "Mascara para Pestañas a Prueba de Agua Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 244,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Pestañas largas y abundantes gracias a su cepillo.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-017",
    "name": "Lápiz Delineador para Ojos Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 189,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Crea una línea precisa o un efecto ahumado. Con vitamina E y pantenol.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-018",
    "name": "Base para Sombras con Color Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 179,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Prepara la aplicación de tus sombras y da un toque de color. Edición Limitada.",
    "shades": [
      "Totally taupe",
      "Gold star",
      "Brownie"
    ],
    "edition": "Limitada",
    "validUntil": "2026-12-31",
    "unitsLimit": 3000
  },
  {
    "id": "tlk-019",
    "name": "Dúo de Sombras en Polvo Mary Kay At Play®",
    "category": "Maquillaje",
    "price": 199,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Desde un look elegante y sofisticado hasta un look intenso y glamuroso. Edición Especial.",
    "shades": [
      "Rustic rose",
      "Choco espresso"
    ],
    "edition": "Especial",
    "validUntil": "2026-12-31",
    "unitsLimit": 3000
  },
  {
    "id": "tlk-020",
    "name": "Sombra Mate para Ojos en Barra Mary Kay®",
    "category": "Maquillaje",
    "price": 254,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Fórmula cremosa de larga duración, se desliza suavemente, se difumina con facilidad y es resistente. Color mate de alta pigmentación; acabado mate por más tiempo.",
    "shades": [
      "Black obsidian",
      "Orbit clay",
      "Lunar rose",
      "Moonshadow",
      "Celestial nude"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-021",
    "name": "Sombra con Brillos para Ojos en Barra Mary Kay®",
    "category": "Maquillaje",
    "price": 254,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Color de alto impacto con textura cremosa y fácil de aplicar. Construible y fácil de difuminar.",
    "shades": [
      "Radiant bronze",
      "Biscotti",
      "Midnight galaxy"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-022",
    "name": "Sombra para Ojos Mary Kay Chromafusion®",
    "category": "Maquillaje",
    "price": 124,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Combina entre 14 tonos con acabado mate y brillante. Tecnología Matrix Mary Kay Chromafusion®.",
    "shades": [
      "Blossom",
      "Dusty rose",
      "Hazelnut",
      "Cinnabar",
      "Golden sunrise",
      "Merlot",
      "Pink prisms",
      "Espresso",
      "Crystalline",
      "Moonstone",
      "Smoky quartz",
      "Sunlit rose",
      "Rose gold",
      "Gold status",
      "Shiny penny"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-023",
    "name": "Mary Kay Petite Palette®",
    "category": "Maquillaje",
    "price": 89,
    "promoPrice": 67,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Se vende vacía. Tiene capacidad para cuatro tonos de Sombra para Ojos Mary Kay Chromafusion® personalizados. ¡A precio especial!",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-024",
    "name": "Paleta de Sombras para Ojos Mary Kay®",
    "category": "Maquillaje",
    "price": 599,
    "promoPrice": 419,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Paleta de Edición Limitada con colores vibrantes y construibles en una sola pasada; textura suave y aterciopelada, acabados mate, brillosos y metálicos. Incluye espejo. 30% de descuento.",
    "shades": [
      "Ignited ivory",
      "Gold greatness",
      "Radiant bronze",
      "Fiery coral",
      "Bring it, brown",
      "Hot clay",
      "Inner fire",
      "Glistening aura",
      "Lilac sparks",
      "Hearts aflame",
      "Smokin’ taupe",
      "Pink inferno",
      "Outer glow",
      "Fierce purple"
    ],
    "edition": "Limitada",
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-025",
    "name": "Lápiz Delineador para Ojos a Prueba de Agua Mary Kay®",
    "category": "Maquillaje",
    "price": 229,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Tonos súper pigmentados de acabado mate, ideales para líneas precisas o un delineado difuminado. A prueba de agua y larga duración. Incluye sacapuntas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-026",
    "name": "Brocha Delineadora para Ojos y Cejas Mary Kay®",
    "category": "Maquillaje",
    "price": 174,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Con un extremo moldeas y peinas tus cejas; con el otro, das forma y las rellenas aplicando color. También delinea tus ojos.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-027",
    "name": "Delineador Líquido en Plumón para Ojos a Prueba de Agua Mary Kay®",
    "category": "Maquillaje",
    "price": 334,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Pigmento de carbón negro de alta pureza: color intenso y duradero desde el primer trazo. Con aceite de semilla de rosa mosqueta para un efecto humectante.",
    "shades": [
      "Blue black",
      "Steely brown"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-028",
    "name": "Delineador en Gel para Ojos Mary Kay®",
    "category": "Maquillaje",
    "price": 349,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "De larga duración, fácil de aplicar y perfecto para un look sutil o dramático. Incluye aplicador.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-029",
    "name": "Sacapuntas Mary Kay®",
    "category": "Maquillaje",
    "price": 29,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Tu herramienta ideal para un trazo perfecto.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-030",
    "name": "Mascara para Pestañas Lash Intensity® Mary Kay®",
    "category": "Maquillaje",
    "price": 364,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Mayor volumen y longitud. Cepillo de doble impacto que amplifica y alarga las pestañas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-031",
    "name": "Mascara para Pestañas Lash Love Fanorama® Define+Lift Mary Kay®",
    "category": "Maquillaje",
    "price": 354,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Abanica, define y levanta. Efecto lifting que abre la mirada, definición sin grumos e impacto de esquina a esquina.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-032",
    "name": "Mascara para Pestañas Great Heights Mary Kay® a Prueba de Agua",
    "category": "Maquillaje",
    "price": 319,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Máxima longitud a prueba de agua y resistente a la humedad. Hasta 12 horas de duración. Con pantenol (vitamina B5) y vitamina E.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-033",
    "name": "Mascara para Pestañas Great Heights Mary Kay®",
    "category": "Maquillaje",
    "price": 309,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Pestañas largas. Cepillo y fórmula alargadora: con tan solo 3 capas logras 75% de pestañas más largas. Con pantenol y vitamina E.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-034",
    "name": "Mascara para Pestañas de Máximo Desempeño Mary Kay®",
    "category": "Maquillaje",
    "price": 299,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Larga duración, volumen y definición. Cepillo con Tecnología SmartWiper® que aplica la cantidad exacta de producto.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-035",
    "name": "Rizador para Pestañas Mary Kay®",
    "category": "Maquillaje",
    "price": 199,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "El complemento perfecto. Incluye 2 almohadillas de repuesto. Edición Especial.",
    "shades": [],
    "edition": "Especial",
    "validUntil": "2026-12-31",
    "unitsLimit": 10000
  },
  {
    "id": "tlk-036",
    "name": "Gel Voluminizador para Cejas Mary Kay®",
    "category": "Maquillaje",
    "price": 269,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Perfecto para dar volumen y fijar tus cejas.",
    "shades": [
      "Blonde",
      "Dark blonde",
      "Brunette",
      "Dark brunette"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-037",
    "name": "Lápiz Definidor para Cejas Mary Kay®",
    "category": "Maquillaje",
    "price": 209,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Define tus cejas con su punta fina: control y precisión, trazos suaves exactamente donde los deseas.",
    "shades": [
      "Blonde",
      "Dark blonde",
      "Brunette",
      "Dark brunette",
      "Black brown"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-038",
    "name": "Gel Fijador para Cejas Mary Kay®",
    "category": "Maquillaje",
    "price": 219,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Da forma, estiliza y fija las cejas gracias a su cepillo aplicador y su fórmula en gel transparente, ligera y cómoda.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-039",
    "name": "Rubor en Gel-Crema Mary Kay®",
    "category": "Maquillaje",
    "price": 229,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Rubor en gel de Edición Limitada que se adapta a ti: desde un toque sutil hasta un look radiante.",
    "shades": [
      "Soft buff",
      "Wineberry",
      "Shy blush",
      "Golden copper",
      "Rogue rose",
      "Rosy nude",
      "Honey glow",
      "Glazed",
      "Hot coral"
    ],
    "edition": "Limitada",
    "validUntil": "2026-12-31",
    "unitsLimit": null
  },
  {
    "id": "tlk-040",
    "name": "Rubor Compacto Mary Kay Chromafusion®",
    "category": "Maquillaje",
    "price": 154,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Rubor compacto Chromafusion®.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-041",
    "name": "Iluminador para Rostro Mary Kay Chromafusion®",
    "category": "Maquillaje",
    "price": 154,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Iluminador para rostro Chromafusion®. Disponible en 2 tonos.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-042",
    "name": "Polvo para Contorno de Rostro Mary Kay Chromafusion®",
    "category": "Maquillaje",
    "price": 154,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Polvo para contorno de rostro Chromafusion®. Disponible en 2 tonos.",
    "shades": [
      "Cocoa",
      "Latte"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-043",
    "name": "Mary Kay Perfect Palette®",
    "category": "Maquillaje",
    "price": 184,
    "promoPrice": 167,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Se vende vacía. Gracias a su base magnetizada, podrás agregar los productos que necesites. Incluye espejo. ¡A precio especial!",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-044",
    "name": "Base de Maquillaje TimeWise 3D®",
    "category": "Maquillaje",
    "price": 389,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Desarrollada con la exclusiva Tecnología IntelliMatch®, que se adapta al tono natural de tu piel para un resultado preciso y uniforme. Cobertura construible de media a completa, acabado mate o luminoso, larga duración, resistente a la humedad y al sudor. Enriquecida con el Complejo TimeWise 3D® (péptido contra líneas de expresión, resveratrol encapsulado, vitamina B3).",
    "shades": [
      "Light 3",
      "Light 4",
      "Light 5",
      "Light 7",
      "Medium 1",
      "Medium 2",
      "Medium 3",
      "Medium 5",
      "Medium 6",
      "Medium 9",
      "Medium 10",
      "Medium 12",
      "Deep 1",
      "Deep 2",
      "Deep 3",
      "Deep 4",
      "Light 3 luminoso",
      "Light 7 luminoso",
      "Medium 1 luminoso",
      "Medium 2 luminoso",
      "Medium 6 luminoso",
      "Medium 9 luminoso",
      "Medium 10 luminoso",
      "Medium 12 luminoso",
      "Deep 1 luminoso",
      "Deep 2 luminoso"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-045",
    "name": "Base para Maquillaje FPS 15 Mary Kay®",
    "category": "Maquillaje",
    "price": 359,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Protección solar",
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Fórmula en gel que prepara tu piel para una aplicación perfecta del maquillaje y protege de rayos UVA/UVB. Aporta humectación, con aceite de jojoba; apariencia visiblemente más luminosa al instante. Ideal para piel normal a seca.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-046",
    "name": "Corrector para Ojos Multi-Beneficios Mary Kay®",
    "category": "Maquillaje",
    "price": 249,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Cobertura completa de alta pigmentación con punta fina para precisión. Larga duración, resistente al sudor y a la humedad. Con vitamina E y glicerina.",
    "shades": [
      "Light 2",
      "Light 3",
      "Medium 1",
      "Medium 2",
      "Medium 3"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-047",
    "name": "Corrector Iluminador para Ojos Mary Kay®",
    "category": "Maquillaje",
    "price": 249,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Cubre inmediatamente las ojeras con esta cremosa fórmula de cobertura completa; su tono durazno ayuda a neutralizar los tonos azules para lucir más fresca y despierta. Con vitamina E, glicerina y extracto de regaliz.",
    "shades": [
      "Light peach"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-048",
    "name": "Corrector para Ojos Mary Kay®",
    "category": "Maquillaje",
    "price": 199,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Su tono amarillo, de alta cobertura, neutraliza las imperfecciones, brindando un aspecto renovado y descansado.",
    "shades": [
      "Yellow"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-049",
    "name": "CC Cream Crema Correctora de Color con FPS 15 Mary Kay®",
    "category": "Maquillaje",
    "price": 404,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Protección solar",
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Protege del sol, ayuda a corregir enrojecimientos, ilumina, humecta, minimiza la apariencia de poros y mejora y reduce los signos de la edad. Cobertura ligera. Con vitamina E.",
    "shades": [
      "Very light",
      "Light to medium",
      "Medium to deep",
      "Deep"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-050",
    "name": "Esponja para Maquillaje Mary Kay®",
    "category": "Maquillaje",
    "price": 209,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Herramienta de maquillaje versátil desde cualquier ángulo. Perfecta para múltiples fórmulas y técnicas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-051",
    "name": "Polvo Fijador con Acabado Sedoso Mary Kay®",
    "category": "Maquillaje",
    "price": 304,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Fórmula multipropósito: prolonga la duración de tu maquillaje y ayuda a neutralizar imperfecciones, dejando un acabado suave como la seda.",
    "shades": [
      "Medium ivory",
      "Deep ivory",
      "Light beige",
      "Light medium beige",
      "Medium beige",
      "Deep beige"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-052",
    "name": "Brocha para Maquillaje en Polvo Mary Kay®",
    "category": "Maquillaje",
    "price": 264,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Logra una aplicación precisa y de gran fijación para maquillaje en polvo.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-053",
    "name": "Polvo Suelto Traslúcido Mary Kay®",
    "category": "Maquillaje",
    "price": 319,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Polvo ligero y natural que deja una sensación suave en la piel y ayuda a controlar el brillo facial.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-054",
    "name": "Set Esencial de Brochas con Estuche Mary Kay®",
    "category": "Maquillaje",
    "price": 1234,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Incluye: brocha para polvo, brocha para rubor, brocha definidora para ojos, brocha para ojos, brocha difuminadora para ojos y estuche.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-055",
    "name": "Brocha de Ojos para Difuminar Mary Kay®",
    "category": "Maquillaje",
    "price": 234,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Su forma permite aplicar y difuminar a la perfección.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-056",
    "name": "Brocha para Color en Crema Mary Kay®",
    "category": "Maquillaje",
    "price": 204,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Para difuminar suavemente y lograr una aplicación más completa y uniforme.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-057",
    "name": "Esponja Cosmética Mary Kay®",
    "category": "Maquillaje",
    "price": 72,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Incluye 2 por empaque.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-058",
    "name": "Esponja Compacta para Polvo Mary Kay®",
    "category": "Maquillaje",
    "price": 99,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Esponja compacta para polvo.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-059",
    "name": "Fijador de Maquillaje en Spray Mary Kay®",
    "category": "Maquillaje",
    "price": 414,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Mantiene tu maquillaje intacto hasta por 16 horas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-060",
    "name": "Papelillos Absorbentes de Brillo Facial Mary Kay®",
    "category": "Maquillaje",
    "price": 124,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Absorben instantáneamente el exceso de brillo facial, sin dañar el maquillaje. Contiene 75 piezas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-061",
    "name": "Lápiz Delineador para Labios a Prueba de Agua Mary Kay®",
    "category": "Maquillaje",
    "price": 219,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Aplicación precisa y ayuda a mantener el color en tus labios por un largo tiempo. Con vitamina E y ácido hialurónico para nutrir y humectar. Fórmula a prueba de agua y larga duración. Incluye sacapuntas.",
    "shades": [
      "Mauve nude",
      "Beige nude",
      "Rose",
      "Hot pink",
      "Violet lilac",
      "Berry",
      "Red"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-062",
    "name": "Labial en Gel Semi Mate Mary Kay®",
    "category": "Maquillaje",
    "price": 274,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Cómoda fórmula en gel que brinda intensidad de color, cobertura completa con acabado semi mate y sensación suave. Tecnología Cushion Matrix (microesferas de sílice ultrafinas).",
    "shades": [
      "Crushed berry",
      "Blush velvet",
      "Mauve moment",
      "Coral captivate",
      "Trademark pink",
      "Always apricot",
      "Powerful pink",
      "Red stiletto"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-063",
    "name": "Brillo Labial Mary Kay Unlimited®",
    "category": "Maquillaje",
    "price": 264,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Sensación cómoda y no pegajosa. Se desliza suavemente y aporta luminosidad y humectación. Disponible en 3 acabados, con vitamina C y vitamina E.",
    "shades": [
      "Sheer illusion",
      "Fancy coral",
      "Beach bronze",
      "Iconic red",
      "Pink fusion",
      "Nude blush",
      "Tawny nude",
      "Unique mauve",
      "Pink ballerina",
      "Berry delight"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-064",
    "name": "Labial en Gel Semi-Shine Mary Kay®",
    "category": "Maquillaje",
    "price": 274,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Fórmula en gel: sensación suave, color radiante y luminoso.",
    "shades": [
      "Downtown brown",
      "Spiced ginger",
      "Rosewood",
      "Raspberry ice",
      "Haute pink",
      "Sunset peach",
      "Scarlet red",
      "Red smolder",
      "Apple berry"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-065",
    "name": "Lápiz Labial Hidratante Mary Kay® Supreme",
    "category": "Maquillaje",
    "price": 299,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Labial humectante y supremo, formulado con ingredientes acondicionadores.",
    "shades": [
      "Rockstar red",
      "Coral confetti",
      "Festive pink",
      "Boho plum",
      "Mauve crush",
      "Toasted plum",
      "Better than bare"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-066",
    "name": "Labial Mate Mary Kay Mattissimo®",
    "category": "Maquillaje",
    "price": 284,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Une lo clásico con lo moderno. Acabado mate suave, cómodo y súper pigmentado.",
    "shades": [
      "Delicato nude",
      "Rosa fresco",
      "Bellissimo nude",
      "Essenziale nude",
      "Paparazzi pink",
      "Venezia violet",
      "Magnifico pink",
      "Red roma",
      "Red amore",
      "Orange mio",
      "Poetic pink",
      "Rockstar red",
      "Casual rose",
      "Hushed blush",
      "Natural"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-067",
    "name": "Set Mary Kay If You Believe®",
    "category": "Sets",
    "price": 1163,
    "promoPrice": 999,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "El detalle perfecto para consentir o consentirte. Incluye: ¡Nuevo! Mousse Corporal Mary Kay If You Believe® + Mary Kay If You Believe® Eau de Toilette, 60 ml, de Edición Limitada. ¡A precio especial!",
    "shades": [],
    "edition": "Limitada",
    "validUntil": "2026-12-31",
    "unitsLimit": 28000
  },
  {
    "id": "tlk-068",
    "name": "Pink Diamonds Intense® Eau de Parfum, 60 ml",
    "category": "Fragancias",
    "price": 804,
    "promoPrice": 603,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Blanca. 25% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-069",
    "name": "Pink Diamonds® Eau de Parfum, 60 ml",
    "category": "Fragancias",
    "price": 594,
    "promoPrice": 445,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Blanca. 25% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-070",
    "name": "Mary Kay Black Diamonds® Eau de Parfum, 60 ml",
    "category": "Fragancias",
    "price": 554,
    "promoPrice": 415,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Amaderado. 25% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-071",
    "name": "Forever Diamonds® Eau de Toilette, 60 ml",
    "category": "Fragancias",
    "price": 594,
    "promoPrice": 445,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Frutal. 25% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-072",
    "name": "Live Fearlessly® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 729,
    "promoPrice": 583,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Amaderado. 20% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-073",
    "name": "Dream Fearlessly® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 729,
    "promoPrice": 583,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Chipre Oriental. 20% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-074",
    "name": "Love Fearlessly® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 729,
    "promoPrice": 583,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Oriental. 20% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-075",
    "name": "Authentic Hero Bold® Eau de Toilette, 100 ml",
    "category": "Fragancias",
    "price": 694,
    "promoPrice": 555,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Amaderado Aromático. 20% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-076",
    "name": "Authentic Hero® Eau de Toilette, 100 ml",
    "category": "Fragancias",
    "price": 694,
    "promoPrice": 555,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Fougére Amaderado. 20% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-077",
    "name": "Authentic Hero Style® Eau de Toilette, 100 ml",
    "category": "Fragancias",
    "price": 694,
    "promoPrice": 555,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Fougére Aromático. 20% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-078",
    "name": "Upscale Gentleman® Eau de Parfum, 75 ml",
    "category": "Fragancias",
    "price": 644,
    "promoPrice": 547,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Amaderado Aromático. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-079",
    "name": "Mary Kay Magnetic Passion Edge® Eau de Parfum, 75 ml",
    "category": "Fragancias",
    "price": 739,
    "promoPrice": 628,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Amaderado Oriental. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-080",
    "name": "Upscale Black® Eau de Toilette, 75 ml",
    "category": "Fragancias",
    "price": 634,
    "promoPrice": 538,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Oriental Amaderado. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-081",
    "name": "Mary Kay Magnetic Passion® Eau de Parfum, 75 ml",
    "category": "Fragancias",
    "price": 739,
    "promoPrice": 628,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Amaderado Aromático. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-082",
    "name": "Free Spirit® Eau de Toilette, 100 ml",
    "category": "Fragancias",
    "price": 594,
    "promoPrice": 504,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Fougére Acuoso. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-083",
    "name": "Free Spirit Sport® Eau de Toilette, 100 ml",
    "category": "Fragancias",
    "price": 594,
    "promoPrice": 504,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Fougére Cítrico. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-084",
    "name": "Mary Kay Embrace® para él Eau de Toilette, 60 ml",
    "category": "Fragancias",
    "price": 599,
    "promoPrice": 509,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Oriental Fougére. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-085",
    "name": "Free Spirit Ocean® Eau de Toilette, 100 ml",
    "category": "Fragancias",
    "price": 594,
    "promoPrice": 504,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Cítrico Marino. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-086",
    "name": "Mary Kay At Play Pink® Eau de Toilette, 50 ml",
    "category": "Fragancias",
    "price": 494,
    "promoPrice": 419,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Chipre Oriental. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-087",
    "name": "Mary Kay Wish® Eau de Toilette, 60 ml",
    "category": "Fragancias",
    "price": 664,
    "promoPrice": 564,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Frutal. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-088",
    "name": "Mary Kay Embrace® para ella Eau de Toilette, 60 ml",
    "category": "Fragancias",
    "price": 599,
    "promoPrice": 509,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Frutal. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-089",
    "name": "Hello Brilliant® Eau de Toilette, 50 ml",
    "category": "Fragancias",
    "price": 514,
    "promoPrice": 436,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Frutal. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-090",
    "name": "True Passion L'Eau® Eau de Toilette, 60 ml",
    "category": "Fragancias",
    "price": 584,
    "promoPrice": 496,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Oriental Floral. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-091",
    "name": "True Passion® Eau de Toilette, 60 ml",
    "category": "Fragancias",
    "price": 584,
    "promoPrice": 496,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Frutal. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-092",
    "name": "Modern Charm Glam® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 719,
    "promoPrice": 611,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Oriental Floral. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-093",
    "name": "Modern Charm® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 719,
    "promoPrice": 611,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Chipre Floral. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-094",
    "name": "Mary Kay Garden Scent® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 524,
    "promoPrice": 445,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Frutal. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-095",
    "name": "Mary Kay Joy Emotion Scent® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 544,
    "promoPrice": 462,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Frutal Floral. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-096",
    "name": "Mary Kay Velvet Scent® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 524,
    "promoPrice": 445,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Oriental Floral. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-097",
    "name": "Mary Kay Blush Scent® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 524,
    "promoPrice": 445,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Chipre Floral. 15% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-098",
    "name": "MK High Intensity® Sport para él Eau de Cologne, 73 ml",
    "category": "Fragancias",
    "price": 794,
    "promoPrice": 714,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Amaderado Fresco. 10% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-099",
    "name": "Domain® para él Eau de Cologne, 73 ml",
    "category": "Fragancias",
    "price": 784,
    "promoPrice": 705,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Fougére Fresco. 10% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-100",
    "name": "MK High Intensity® para él Eau de Cologne, 73 ml",
    "category": "Fragancias",
    "price": 794,
    "promoPrice": 714,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Oriental Ambarado. 10% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-101",
    "name": "Cityscape® para él Eau de Cologne, 59 ml",
    "category": "Fragancias",
    "price": 994,
    "promoPrice": 894,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Amaderado Aromático. 10% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-102",
    "name": "Belara® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 734,
    "promoPrice": 660,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Gourmand. 10% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-103",
    "name": "Mary Kay Confidently You® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 774,
    "promoPrice": 696,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Oriental. 10% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-104",
    "name": "Bella Belara® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 734,
    "promoPrice": 660,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Frutal. 10% de descuento.",
    "shades": [],
    "edition": null,
    "validUntil": "2026-12-31",
    "unitsLimit": 1000
  },
  {
    "id": "tlk-105",
    "name": "Mary Kay True Optimism® Eau de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 774,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Cítrica Amaderada. El regalo perfecto.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-106",
    "name": "Mary Kay Illuminea® Extrait de Parfum, 50 ml",
    "category": "Fragancias",
    "price": 1714,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Floral Oriental.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-107",
    "name": "Mary Kay If You Believe® Eau de Toilette, 60 ml",
    "category": "Fragancias",
    "price": 664,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Familia olfativa: Cítrico Amaderado.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-108",
    "name": "Tónico Facial Revitalizante TimeWise®",
    "category": "Cuidado de la piel",
    "price": 399,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Luminosidad",
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "¡Nuevo! Esencial multibeneficios: ayuda a equilibrar la piel, iluminar, reafirmar y mejorar la apariencia de la textura. Impulsado por el ABC del cuidado de la piel: antioxidantes (extracto de Myrtus communis), brillo (vitamina B3 / niacinamida) y colágeno (extractos de Myrtus communis y semilla de lenteja), con hialuronato de sodio.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-109",
    "name": "Limpiadora Facial 4 en 1 TimeWise®",
    "category": "Cuidado de la piel",
    "price": 514,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Limpieza"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 1, Limpia: limpia, refresca, exfolia, ilumina y prepara la piel para los siguientes pasos de la Rutina Ideal TimeWise®. Disponible en fórmula Normal a Seca y Combinada a Grasa.",
    "shades": [
      "Normal a Seca",
      "Combinada a Grasa"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-110",
    "name": "Gel Facial de Recuperación Nocturna TimeWise®",
    "category": "Cuidado de la piel",
    "price": 589,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad",
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 2, Recupera: actúa durante la noche para revelar una piel revitalizada y suaviza la apariencia de los signos visibles de envejecimiento y líneas de expresión.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-111",
    "name": "Loción Facial Humectante con Antioxidantes TimeWise®",
    "category": "Cuidado de la piel",
    "price": 602,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación",
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 2/3, Humecta: con el Complejo TimeWise 3D®. Ayuda a mejorar la apariencia de las líneas de expresión y la firmeza de la piel, y proporciona hasta 12 horas de humectación. Disponible en fórmula Normal a Seca y Combinada a Grasa.",
    "shades": [
      "Normal a Seca",
      "Combinada a Grasa"
    ],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-112",
    "name": "Loción Facial Protectora de Día con FPS 30 TimeWise®",
    "category": "Cuidado de la piel",
    "price": 494,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Protección solar",
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 3, Protege: ayuda a reducir la apariencia de las líneas de expresión y bloquea los daños de los rayos UVA/UVB.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-113",
    "name": "Crema para el Contorno de los Ojos TimeWise®",
    "category": "Cuidado de la piel",
    "price": 499,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 4, dale un plus a tu rutina: ayuda a mejorar el aspecto de múltiples signos visibles de envejecimiento en el área de los ojos (líneas de expresión, falta de luminosidad, firmeza y textura).",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-114",
    "name": "Espuma Limpiadora Facial Volu-Firm® TimeWise® Repair",
    "category": "Cuidado de la piel",
    "price": 559,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Limpieza"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 1, Revitalizar: limpiadora que ayuda a mantener el equilibrio de hidratación e ilumina la piel.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-115",
    "name": "Loción Facial Efecto Reafirmante Volu-Firm® TimeWise® Repair",
    "category": "Cuidado de la piel",
    "price": 1024,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 2, Elevar: suero con efecto lifting visible en mejillas y mandíbula.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-116",
    "name": "Crema Facial para el Día Efecto Reparador FPS 30 Volu-Firm® TimeWise® Repair",
    "category": "Cuidado de la piel",
    "price": 864,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad",
      "Protección solar"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 3, Restaurar: la elasticidad natural de la piel y el tono uniforme.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-117",
    "name": "Crema Facial Nocturna Efecto Reparador Volu-Firm® TimeWise® Repair",
    "category": "Cuidado de la piel",
    "price": 864,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 3, Mejorar: la apariencia de diversos signos visibles del envejecimiento, con las propiedades del retinoide. Con el Complejo Volu-Firm® (péptido biomimético, extracto de hoja de alpinia galanga y células madre vegetales).",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-118",
    "name": "Crema de Acción Renovadora para el Contorno de los Ojos Volu-Firm® TimeWise® Repair",
    "category": "Cuidado de la piel",
    "price": 729,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 4, Reafirmar: reafirma y tonifica la piel del contorno de los ojos en tan solo dos semanas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-119",
    "name": "Mascarilla Facial Efecto Lifting Bio-Cellulose® TimeWise® Repair",
    "category": "Cuidado de la piel",
    "price": 2049,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Complementa tu rutina, 2 veces por semana.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-120",
    "name": "Gel Facial Efecto Peeling Revealing Radiance® TimeWise® Repair",
    "category": "Cuidado de la piel",
    "price": 1019,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Complementa tu rutina, 2 a 3 veces por semana.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-121",
    "name": "Crema Efecto Rellenador de Arrugas Volu-Fill® TimeWise® Repair",
    "category": "Cuidado de la piel",
    "price": 644,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Crema efecto rellenador de arrugas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-122",
    "name": "Limpiadora Facial Hidratante Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 319,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Seca",
      "Normal",
      "Sensible"
    ],
    "needs": [
      "Limpieza",
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 1, Limpia. Fórmula hidratante para piel normal a seca. Contiene aceite de girasol; ayuda a eliminar impurezas y brillo facial para que la piel se sienta hidratada, sin sensación de rigidez o resequedad. Con vitamina E y glicerina.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-123",
    "name": "Limpiadora Facial Matificante Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 319,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Mixta",
      "Normal"
    ],
    "needs": [
      "Limpieza",
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 1, Limpia. Fórmula matificante para piel combinada a grasa. Ayuda a eliminar impurezas y exceso de grasa facial; la piel se siente fresca, suave y con apariencia mate. Con glicerina.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-124",
    "name": "Exfoliante Facial Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 329,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Limpieza"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 2, Exfolia. 2 a 3 veces por semana, ideal para todo tipo de piel. Ayuda a eliminar las células muertas y limpiar poros, para que la piel luzca suave, tersa y profundamente limpia.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-125",
    "name": "Tónico Balanceador Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 319,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Limpieza"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 3, Tonifica. Ideal para todo tipo de piel. Contiene un antioxidante que ayuda a restaurar el equilibrio de la piel sin resecarla; contribuye a una apariencia cuidada y radiante.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-126",
    "name": "Parches de Hidrogel para Ojos Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 899,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación",
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 4, Refresca. Ayudan a mejorar la apariencia de ojos cansados; revitalizan la apariencia con solo 20 minutos, dos veces por semana. Tono rosa con brillos.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-127",
    "name": "Crema Facial Hidratante Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 314,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Seca",
      "Normal",
      "Sensible"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 5, Humecta. Fórmula hidratante para piel normal a seca. Contiene antioxidantes como la vitamina E; sensación de hidratación por la mañana y por la noche.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-128",
    "name": "Crema Facial Matificante Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 314,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Mixta",
      "Normal"
    ],
    "needs": [
      "Hidratación",
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 5, Humecta. Fórmula matificante para piel combinada a grasa. Contiene antioxidantes, es de rápida absorción y no es grasosa; deja la piel con apariencia mate.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-129",
    "name": "Gel Limpiador Facial MK Men®",
    "category": "Hombre",
    "price": 349,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Limpieza",
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 1, Limpia. Limpia profundamente la piel, reduce visiblemente el exceso de grasa y la prepara para el afeitado.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-130",
    "name": "Crema de Afeitar 2 en 1 MK Men®",
    "category": "Hombre",
    "price": 409,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Paso 2, Afeita y calma. Combina confort con un acabado refrescante para el afeitado y protección del enrojecimiento y el ardor por el rastrillo.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-131",
    "name": "Loción Facial Hidratante Intensiva MK Men®",
    "category": "Hombre",
    "price": 454,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 3, Hidrata. Aumenta la hidratación por 12 horas; incluye resveratrol (antioxidante) y extracto de plancton (calmante).",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-132",
    "name": "Loción Facial Hidratante Intensiva FPS 30 MK Men®",
    "category": "Hombre",
    "price": 439,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación",
      "Protección solar"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Humecta y ayuda a proteger tu piel de los rayos UVA/UVB.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-133",
    "name": "Gel Limpiador para Cutis con Tendencia al Acné Clear Proof®",
    "category": "Cuidado de la piel",
    "price": 359,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Mixta"
    ],
    "needs": [
      "Limpieza",
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 1, Limpia. Ayuda a eliminar suciedad, grasa facial e impurezas del rostro. Con ácido salicílico.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-134",
    "name": "Loción Refrescante Profunda para Cutis con Tendencia al Acné Clear Proof®",
    "category": "Cuidado de la piel",
    "price": 294,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Mixta"
    ],
    "needs": [
      "Limpieza",
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 2, Refresca. Limpia y exfolia el rostro mientras ayuda a minimizar la apariencia del exceso de grasa facial.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-135",
    "name": "Crema Focalizada para Cutis con Tendencia al Acné Clear Proof®",
    "category": "Cuidado de la piel",
    "price": 279,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Mixta"
    ],
    "needs": [
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 3, Controla. Ayuda a reducir y prevenir los puntos negros y espinillas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-136",
    "name": "Crema Humectante para Cutis con Tendencia al Acné Libre de Aceite Clear Proof®",
    "category": "Cuidado de la piel",
    "price": 299,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Mixta"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Paso 4, Humecta. Ayuda a mantener el nivel de humectación en la piel.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-137",
    "name": "Mascarilla Facial de Limpieza Profunda con Carbón Clear Proof®",
    "category": "Cuidado de la piel",
    "price": 429,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Mixta"
    ],
    "needs": [
      "Limpieza",
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Complementa tu rutina, 2 a 3 veces por semana. Con carbón activo: ayuda a limpiar los poros, absorber el exceso de grasa facial y reducir el brillo facial.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-138",
    "name": "Aceite Nutriente Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 619,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Ligero aceite multiusos con vitamina E y aceite de almendras; deja la piel hidratada y suave. Con aceite de oliva, aceite de almendras dulces, aceite de sésamo, escualano y manteca de karité.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-139",
    "name": "Brocha Aplicadora de Mascarilla Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 284,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Brocha aplicadora de mascarilla.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-140",
    "name": "Mascarilla Hidratante en Crema Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 399,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Mascarilla sin enjuague con glicerina y ácido hialurónico. Un refresh rápido, un glow-up antes del maquillaje o un boost de hidratación nocturna.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-141",
    "name": "Loción Desmaquillante de Ojos Libre de Aceite Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 414,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Limpieza"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Agita para remover todo tipo de maquillaje de ojos, incluso si es a prueba de agua.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-142",
    "name": "Agua Micelar Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 394,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Limpieza"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Opción de limpieza suave con micelas que ayudan a retirar suavemente restos de maquillaje e impurezas del rostro.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-143",
    "name": "Sistema para Microexfoliación Plus TimeWise®",
    "category": "Cuidado de la piel",
    "price": 964,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Ayuda a proporcionar una apariencia más suave y luminosa de la piel. Exfoliante avanzado que usa ingredientes que ayudan a remover efectivamente las impurezas de la superficie de la piel.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-144",
    "name": "Minimizador de Poros TimeWise®",
    "category": "Cuidado de la piel",
    "price": 487,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Control de grasa"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Ayuda a reducir los poros visibles para una piel con apariencia más suave.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-145",
    "name": "Microexfoliante Refinador TimeWise®",
    "category": "Cuidado de la piel",
    "price": 477,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Ayuda a refrescar y humectar tu piel con ingredientes que le aportan grandes beneficios.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-146",
    "name": "Mascarilla Humectante en Gel Efecto Renovador TimeWise®",
    "category": "Cuidado de la piel",
    "price": 524,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Ayuda a refrescar y humectar tu piel con ingredientes que le aportan grandes beneficios.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-147",
    "name": "Concentrado PHA + AHA Exfoliante Mary Kay Clinical Solutions®",
    "category": "Cuidado de la piel",
    "price": 639,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Renovación de tu piel, 2 a 3 veces por semana. Polihidroxiácidos (PHA), alfa hidroxiácidos (AHA) y glicerina. Ayuda a acelerar la renovación superficial y a mejorar la textura con ácidos de doble función.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-148",
    "name": "Concentrado Iluminador de Ácido Ferúlico + Niacinamida Mary Kay Clinical Solutions®",
    "category": "Cuidado de la piel",
    "price": 639,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Un boost de luminosidad. Ácido ferúlico, niacinamida (vitamina B3) y extracto de alubia blanca. Ayuda a reducir visiblemente la apariencia de manchas oscuras y aporta una apariencia luminosa.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-149",
    "name": "Concentrado C + Resveratrol para Reducción de Finas Líneas Mary Kay Clinical Solutions®",
    "category": "Cuidado de la piel",
    "price": 639,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Aborda las finas líneas en otro nivel. Vitamina C, resveratrol y acetil hexapéptido-8. Beneficios que abordan la mejora visible de líneas de expresión.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-150",
    "name": "Concentrado HA + Ceramida para la Humectación Mary Kay Clinical Solutions®",
    "category": "Cuidado de la piel",
    "price": 639,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Un boost de humectación. Ácido hialurónico, ceramida y extracto de verbena officinalis. Con ácido hialurónico de doble acción y potentes agentes humectantes.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-151",
    "name": "Crema Facial con Efecto Tensor de Líneas de Expresión Dinámicas Mary Kay Clinical Solutions®",
    "category": "Cuidado de la piel",
    "price": 769,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "¡A precio especial! Tecnología de patente pendiente “Botanical Wrinkle-Limiting Technology”: en 8 semanas, resultados comparables con los tratamientos inyectables para relajar las líneas de expresión dinámicas. Con extracto de lavanda francesa, margarita eléctrica y romero.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-152",
    "name": "Loción Facial Restauradora de Barrera 1:1:3 Mary Kay Clinical Solutions®",
    "category": "Cuidado de la piel",
    "price": 699,
    "promoPrice": 594,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "¡A precio especial! Diseñada para reforzar y mantener una barrera de la piel más fuerte. Tecnología Barrier Restore: imita la proporción natural de lípidos (1 parte ácidos grasos, 1 parte ceramidas, 3 partes colesterol).",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-153",
    "name": "Gel Refrescante para Párpados Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 284,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Fórmula sin fragancia que proporciona una sensación refrescante y confortable al contorno de los ojos, con extracto de té verde, extracto de pepino y extracto de rosa canina.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-154",
    "name": "Crema Facial Hidratante Libre de Aceite Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 519,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Mixta",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Crema facial hidratante libre de aceite, para piel normal a grasa.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-155",
    "name": "Crema de Extra Hidratación Intensiva Mary Kay®",
    "category": "Cuidado de la piel",
    "price": 519,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Seca",
      "Normal",
      "Sensible"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Crema de extra hidratación intensiva, para piel seca.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-156",
    "name": "Loción Facial Regeneradora C+E TimeWise®",
    "category": "Cuidado de la piel",
    "price": 984,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad",
      "Luminosidad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Cuando se combina la vitamina E con la vitamina C, tu piel recibe un impulso adicional en su lucha contra los signos visibles del envejecimiento.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-157",
    "name": "Estuche para el Cuidado de las Manos Satin Hands® Libre de Fragancia",
    "category": "Cuerpo",
    "price": 764,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Una experiencia de spa para tus manos. Incluye: crema protectora restauradora para manos, crema exfoliante refinadora para manos con karité Satin Smoothie® y crema para manos con karité. La crema para manos también se vende por separado a $244.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-158",
    "name": "Crema para Manos con Karité Satin Hands® Libre de Fragancia",
    "category": "Cuerpo",
    "price": 244,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Humecta la piel de las manos hasta por 24 horas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-159",
    "name": "Mascarilla Exfoliante para Labios con Karité Satin Lips®",
    "category": "Cuerpo",
    "price": 238,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Ayuda a exfoliar suavemente los labios con cristales naturales de azúcar.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-160",
    "name": "Crema Humectante para Labios con Karité Satin Lips®",
    "category": "Cuerpo",
    "price": 238,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Enriquecida con antioxidantes de la manteca de karité que ayudan a retener la humectación de los labios.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-161",
    "name": "Mascarilla Revitalizadora para Cuerpo con Karité Satin Body®",
    "category": "Cuerpo",
    "price": 409,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Exfolia tu cuerpo para revitalizar la piel.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-162",
    "name": "Crema Limpiadora Refrescante para Cuerpo con Karité Satin Body®",
    "category": "Cuerpo",
    "price": 409,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Limpieza"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Ayuda a limpiar y lucir una piel con sensación de suavidad y luminosidad.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-163",
    "name": "Loción Corporal Sedosa con Karité Satin Body®",
    "category": "Cuerpo",
    "price": 409,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Conforta la piel y la deja humectada hasta por 24 horas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-164",
    "name": "Protector Solar Facial Mineral con FPS 30 Mary Kay®",
    "category": "Sol",
    "price": 519,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Protección solar"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Protección mineral: gentil en la piel, pero efectivo contra el daño solar. Enriquecido 100% con óxido de zinc.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-165",
    "name": "Gel Corporal Restaurador para Después de Asolearse Mary Kay®",
    "category": "Sol",
    "price": 354,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Calma y refresca tu piel tras una larga exposición solar.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-166",
    "name": "Protector Solar FPS 50+ Mary Kay®",
    "category": "Sol",
    "price": 499,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Protección solar"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Protección completa y resistente al agua durante un largo día de diversión bajo el sol.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-167",
    "name": "Gel para Ducha con Aroma Mary Kay® Berry & Vanilla",
    "category": "Cuerpo",
    "price": 279,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Gel para ducha con aroma Berry & Vanilla.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-168",
    "name": "Loción Corporal con Aroma Mary Kay® Berry & Vanilla",
    "category": "Cuerpo",
    "price": 279,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Loción corporal con aroma Berry & Vanilla.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-169",
    "name": "Gel para Ducha con Aroma Mary Kay® Apple & Almond",
    "category": "Cuerpo",
    "price": 279,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Gel para ducha con aroma Apple & Almond.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-170",
    "name": "Loción Corporal con Aroma Mary Kay® Apple & Almond",
    "category": "Cuerpo",
    "price": 279,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Loción corporal con aroma Apple & Almond.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-171",
    "name": "Gel para Ducha con Aroma Mary Kay® Lavender & Coconut",
    "category": "Cuerpo",
    "price": 279,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Gel para ducha con aroma Lavender & Coconut.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-172",
    "name": "Loción Corporal con Aroma Mary Kay® Lavender & Coconut",
    "category": "Cuerpo",
    "price": 279,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Loción corporal con aroma Lavender & Coconut.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-173",
    "name": "Loción Reafirmante Corporal TimeWise Targeted-Action®",
    "category": "Cuerpo",
    "price": 584,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Antiedad"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Loción reafirmante corporal TimeWise Targeted-Action®.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-174",
    "name": "Loción Humectante para Pies y Piernas Mary Kay®",
    "category": "Cuerpo",
    "price": 239,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Loción humectante para pies y piernas.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-175",
    "name": "Crema Extra Emoliente de Noche Mary Kay®",
    "category": "Cuerpo",
    "price": 234,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [
      "Hidratación"
    ],
    "durationDays": null,
    "rating": null,
    "description": "Crema extra emoliente de noche.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-176",
    "name": "Resveratrol con Vitamina A, C y E Mary Kay®",
    "category": "Suplementos",
    "price": 524,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Suplemento alimenticio a base de extractos de semilla de uva con vitaminas A, C, E y zinc. 1 cápsula al día. No recomendado durante el embarazo o lactancia. El consumo es responsabilidad de quien lo recomienda y de quien lo usa. Este producto no es un medicamento.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  },
  {
    "id": "tlk-177",
    "name": "Colágeno Mary Kay®",
    "category": "Suplementos",
    "price": 1199,
    "promoPrice": null,
    "stock": null,
    "cost": null,
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "needs": [],
    "durationDays": null,
    "rating": null,
    "description": "Suplemento alimenticio a base de colágeno marino, biotina y vitamina C. 1 cucharada al día mezclada con tu bebida favorita. No recomendado durante el embarazo o lactancia. Contiene ingredientes de origen marino que pueden ocasionar reacciones alérgicas. Este producto no es un medicamento.",
    "shades": [],
    "edition": null,
    "validUntil": null,
    "unitsLimit": null
  }
]

export const ROUTINES = [
  {
    "id": "r-tlk-1",
    "name": "Rutina Básica TimeWise®",
    "goal": "Antiedad",
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "productIds": [
      "tlk-109",
      "tlk-112",
      "tlk-111"
    ],
    "specialPrice": 1116,
    "description": "Lo esencial para comenzar a cuidar tu piel: limpiadora 4 en 1, loción protectora de día FPS 30 y loción humectante con antioxidantes."
  },
  {
    "id": "r-tlk-2",
    "name": "Set Día y Noche TimeWise®",
    "goal": "Antiedad",
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "productIds": [
      "tlk-109",
      "tlk-112",
      "tlk-110",
      "tlk-111"
    ],
    "specialPrice": 1083,
    "description": "Cuida tu piel con soluciones específicas para el día y la noche."
  },
  {
    "id": "r-tlk-3",
    "name": "Rutina Ideal TimeWise®",
    "goal": "Antiedad",
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "productIds": [
      "tlk-109",
      "tlk-112",
      "tlk-110",
      "tlk-111"
    ],
    "specialPrice": 2084,
    "description": "Una rutina completa en 3 sencillos pasos, 2 veces al día. ¡A precio especial! Precio regular: $2,199."
  },
  {
    "id": "r-tlk-4",
    "name": "Rutina Ideal Plus TimeWise®",
    "goal": "Antiedad",
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "productIds": [
      "tlk-109",
      "tlk-112",
      "tlk-110",
      "tlk-111",
      "tlk-113"
    ],
    "specialPrice": 2429,
    "description": "Dale un plus a tu rutina cuidando la delicada área de alrededor de los ojos. ¡A precio especial! Precio regular: $2,698."
  },
  {
    "id": "r-tlk-5",
    "name": "Set Mary Kay If You Believe®",
    "goal": "Regalo",
    "skinTypes": [
      "Grasa",
      "Seca",
      "Mixta",
      "Sensible",
      "Normal"
    ],
    "productIds": [
      "tlk-067"
    ],
    "specialPrice": 999,
    "description": "Incluye Mousse Corporal Mary Kay If You Believe® + Eau de Toilette 60 ml de Edición Limitada. Precio regular: $1,163."
  },
  {
    "id": "r-tlk-6",
    "name": "Set Facial Hidratante",
    "goal": "Hidratación",
    "skinTypes": [
      "Grasa",
      "Mixta",
      "Normal"
    ],
    "productIds": [
      "tlk-153",
      "tlk-154"
    ],
    "specialPrice": 722,
    "description": "Para piel normal a grasa. Incluye gel refrescante para párpados y crema facial hidratante libre de aceite. Precio regular: $803."
  },
  {
    "id": "r-tlk-7",
    "name": "Set Facial Hidratación Plus",
    "goal": "Hidratación",
    "skinTypes": [
      "Seca",
      "Normal",
      "Sensible"
    ],
    "productIds": [
      "tlk-153",
      "tlk-155"
    ],
    "specialPrice": 722,
    "description": "Para piel seca. Incluye gel refrescante para párpados y crema de extra hidratación intensiva. Precio regular: $803."
  }
]

export function routineTotal(routine) {
  return routine.productIds.reduce((sum, id) => {
    const product = PRODUCTS.find((p) => p.id === id)
    return sum + (product ? (product.promoPrice || product.price) : 0)
  }, 0)
}

export const CLIENTS = [
  {
    "id": "c1",
    "name": "Ana Torres",
    "phone": "55 1234 5678",
    "skinType": "Mixta",
    "status": "activa",
    "lastPurchase": "2026-11-02",
    "favoriteProductId": "tlk-002",
    "purchases": 6,
    "totalSpent": 1840,
    "daysLeft": 5,
    "lastProduct": "Gel Humectante con Colágeno Mary Kay®"
  },
  {
    "id": "c2",
    "name": "Laura Méndez",
    "phone": "55 8765 4321",
    "skinType": "Seca",
    "status": "activa",
    "lastPurchase": "2026-10-28",
    "favoriteProductId": "tlk-127",
    "purchases": 4,
    "totalSpent": 1210,
    "daysLeft": 12,
    "lastProduct": "Crema Facial Hidratante Mary Kay®"
  },
  {
    "id": "c3",
    "name": "Carmen Ruiz",
    "phone": "55 2345 6789",
    "skinType": "Grasa",
    "status": "inactiva",
    "lastPurchase": "2026-09-15",
    "favoriteProductId": "tlk-137",
    "purchases": 3,
    "totalSpent": 640,
    "daysLeft": 0,
    "lastProduct": "Mascarilla Facial de Limpieza Profunda con Carbón Clear Proof®"
  },
  {
    "id": "c4",
    "name": "Sofía Herrera",
    "phone": "55 3456 7890",
    "skinType": "Sensible",
    "status": "activa",
    "lastPurchase": "2026-11-04",
    "favoriteProductId": "tlk-166",
    "purchases": 2,
    "totalSpent": 488,
    "daysLeft": 28,
    "lastProduct": "Protector Solar FPS 50+ Mary Kay®"
  },
  {
    "id": "c5",
    "name": "Mariana Vega",
    "phone": "55 4567 8901",
    "skinType": "Normal",
    "status": "nueva",
    "lastPurchase": "2026-11-05",
    "favoriteProductId": "tlk-001",
    "purchases": 1,
    "totalSpent": 159,
    "daysLeft": 40,
    "lastProduct": "Bálsamo Limpiador Facial Mary Kay®"
  },
  {
    "id": "c6",
    "name": "Paola Díaz",
    "phone": "55 5678 9012",
    "skinType": "Mixta",
    "status": "inactiva",
    "lastPurchase": "2026-09-30",
    "favoriteProductId": "tlk-117",
    "purchases": 5,
    "totalSpent": 1520,
    "daysLeft": 0,
    "lastProduct": "Crema Facial Nocturna Efecto Reparador Volu-Firm® TimeWise® Repair"
  }
]

export const SALES_SUMMARY = {
  today: 1248,
  week: 6890,
  pendingPayments: 860,
  netProfit: 3120,
  averageTicket: 416,
  ordersToday: 3
}

export const WEEKLY_SALES = [
  { day: 'Lun', amount: 640 },
  { day: 'Mar', amount: 980 },
  { day: 'Mié', amount: 720 },
  { day: 'Jue', amount: 1248 },
  { day: 'Vie', amount: 1100 },
  { day: 'Sáb', amount: 1450 },
  { day: 'Dom', amount: 752 }
]

export const BEST_SELLERS = [
  {
    "productId": "tlk-044",
    "units": 18
  },
  {
    "productId": "tlk-001",
    "units": 15
  },
  {
    "productId": "tlk-002",
    "units": 12
  },
  {
    "productId": "tlk-109",
    "units": 10
  }
]

export const SUPPLIER_SUGGESTIONS = [
  {
    "productId": "tlk-003",
    "suggestedQty": 12,
    "reason": "Edición Especial K-Beauty con vigencia al 31 de diciembre; alta demanda de temporada."
  },
  {
    "productId": "tlk-024",
    "suggestedQty": 8,
    "reason": "Paleta de Sombras de Edición Limitada (1,000 unidades); precio especial de $419."
  },
  {
    "productId": "tlk-044",
    "suggestedQty": 10,
    "reason": "Base TimeWise 3D, la más vendida; 26 tonos entre mate y luminoso."
  }
]
