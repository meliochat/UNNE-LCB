// ─── TRONCO COMÚN (Años 1, 2, 3) ─────────────────────────────────────────────
export const TRONCO_COMUN = [
  // AÑO 1 - C1
  { id: "EXAG-121", nombre: "Matemática",              anio: 1, cuatrimestre: 1, correlativasCursar: [], correlativasAprobar: [] },
  { id: "EXAG-63",  nombre: "Química General",          anio: 1, cuatrimestre: 1, correlativasCursar: [], correlativasAprobar: [] },
  { id: "EXAG-123", nombre: "Introducción a la Biología",anio: 1, cuatrimestre: 1, correlativasCursar: [], correlativasAprobar: [] },
  // AÑO 1 - C2
  { id: "EXAG-124", nombre: "Física General y Biológica", anio: 1, cuatrimestre: 2,
    correlativasCursar:  [{ id: "EXAG-121", condicion: "regularizada" }],
    correlativasAprobar: [{ id: "EXAG-121", condicion: "aprobada" }] },
  { id: "EXAG-141", nombre: "Química Biológica", anio: 1, cuatrimestre: 2,
    correlativasCursar:  [{ id: "EXAG-63", condicion: "regularizada" }],
    correlativasAprobar: [{ id: "EXAG-63", condicion: "aprobada" }] },
  { id: "EXAG-125", nombre: "Geología", anio: 1, cuatrimestre: 2,
    correlativasCursar:  [{ id: "EXAG-63", condicion: "regularizada" }],
    correlativasAprobar: [{ id: "EXAG-63", condicion: "aprobada" }] },

  // AÑO 2 - C1
  { id: "EXAG-126", nombre: "Biología Celular y Molecular", anio: 2, cuatrimestre: 1,
    correlativasCursar: [
      { id: "EXAG-63",  condicion: "aprobada" },
      { id: "EXAG-123", condicion: "aprobada" },
      { id: "EXAG-124", condicion: "regularizada" },
    ],
    correlativasAprobar: [{ id: "EXAG-124", condicion: "aprobada" }] },
  { id: "EXAG-142", nombre: "Bioestadística", anio: 2, cuatrimestre: 1,
    correlativasCursar:  [{ id: "EXAG-121", condicion: "aprobada" }],
    correlativasAprobar: [{ id: "EXAG-121", condicion: "aprobada" }] },
  // AÑO 2 - C2
  { id: "EXAG-128", nombre: "Biología de los Invertebrados", anio: 2, cuatrimestre: 2,
    correlativasCursar: [
      { id: "EXAG-123", condicion: "aprobada" },
      { id: "EXAG-126", condicion: "regularizada" },
    ],
    correlativasAprobar: [] },
  { id: "EXAG-129", nombre: "Morfología Vegetal", anio: 2, cuatrimestre: 2,
    correlativasCursar: [
      { id: "EXAG-123", condicion: "aprobada" },
      { id: "EXAG-126", condicion: "regularizada" },
    ],
    correlativasAprobar: [{ id: "EXAG-126", condicion: "aprobada" }] },

  // AÑO 3 - C1
  { id: "EXAG-132", nombre: "Genética", anio: 3, cuatrimestre: 1,
    correlativasCursar:  [{ id: "EXAG-126", condicion: "aprobada" }],
    correlativasAprobar: [] },
  { id: "EXAG-614", nombre: "Fisiología Vegetal", anio: 3, cuatrimestre: 1,
    correlativasCursar: [
      { id: "EXAG-124", condicion: "aprobada" },
      { id: "EXAG-126", condicion: "aprobada" },
      { id: "EXAG-129", condicion: "regularizada" },
    ],
    correlativasAprobar: [{ id: "EXAG-129", condicion: "aprobada" }] },
  { id: "EXAG-621", nombre: "Fisiología Animal", anio: 3, cuatrimestre: 1,
    correlativasCursar:  [{ id: "EXAG-128", condicion: "regularizada" }],
    correlativasAprobar: [{ id: "EXAG-128", condicion: "aprobada" }] },
  // AÑO 3 - C2
  { id: "EXAG-139", nombre: "Ecología", anio: 3, cuatrimestre: 2,
    correlativasCursar:  [{ id: "EXAG-128", condicion: "aprobada" }],
    correlativasAprobar: [] },
  { id: "EXAG-135", nombre: "Diversidad Vegetal", anio: 3, cuatrimestre: 2,
    correlativasCursar:  [{ id: "EXAG-129", condicion: "aprobada" }],
    correlativasAprobar: [] },
  { id: "EXAG-134", nombre: "Biología de los Cordados", anio: 3, cuatrimestre: 2,
    correlativasCursar:  [{ id: "EXAG-128", condicion: "regularizada" }],
    correlativasAprobar: [{ id: "EXAG-128", condicion: "aprobada" }] },

  // ESPECIAL
  { id: "EXAG-143", nombre: "Prueba de Idioma", anio: 0, cuatrimestre: 0,
    correlativasCursar: [], correlativasAprobar: [], esEspecial: true },
];

// ─── ORIENTACIONES ────────────────────────────────────────────────────────────
export const ORIENTACIONES = {

  // ── GENÉTICA ────────────────────────────────────────────────────────────────
  genetica: {
    id: "genetica",
    nombre: "Genética",
    emoji: "🧬",
    color: { from: "#10b981", to: "#34d399", border: "rgba(16,185,129,0.5)", glow: "rgba(16,185,129,0.15)" },
    materias: [
      // 4° C1
      { id: "OG-137", nombre: "Paleontología", anio: 4, cuatrimestre: 1,
        correlativasCursar: [
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-125", condicion: "aprobada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-134", condicion: "aprobada" },
          { id: "EXAG-135", condicion: "aprobada" },
        ] },
      { id: "OG-620", nombre: "Citogenética", anio: 4, cuatrimestre: 1,
        correlativasCursar:  [{ id: "EXAG-132", condicion: "regularizada" }],
        correlativasAprobar: [{ id: "EXAG-132", condicion: "aprobada" }] },
      // 4° C2
      { id: "OG-102", nombre: "Epistemología y Metodología de la Investigación", anio: 4, cuatrimestre: 2,
        correlativasCursar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ] },
      // 5° C1
      { id: "OG-622", nombre: "Genética Molecular", anio: 5, cuatrimestre: 1,
        correlativasCursar:  [{ id: "OG-620", condicion: "regularizada" }],
        correlativasAprobar: [{ id: "OG-620", condicion: "aprobada" }] },
      // 5° C2
      { id: "OG-623", nombre: "Genética de Poblaciones", anio: 5, cuatrimestre: 2,
        correlativasCursar: [
          { id: "EXAG-139", condicion: "aprobada" },
          { id: "EXAG-132", condicion: "aprobada" },
        ],
        correlativasAprobar: [] },
      { id: "OG-624", nombre: "Genética Evolutiva", anio: 5, cuatrimestre: 2,
        correlativasCursar:  [{ id: "OG-620", condicion: "regularizada" }],
        correlativasAprobar: [{ id: "OG-620", condicion: "aprobada" }] },
    ],
    optativas: {
      "1C_5": ["Antropología Física y Cultural", "Botánica Aplicada", "Ecología del Comportamiento", "Entomología", "Micropaleontología", "Palinología", "Protozoología", "Zoología Agrícola"],
      "2C_4": ["Biología de los Parásitos", "Ecología de la Conservación", "Herpetología"],
      "1C_5_extra": ["Optativa libre (1° C 5°)"],
      "2C_5_extra": [],
    }
  },

  // ── BOTÁNICA ─────────────────────────────────────────────────────────────────
  botanica: {
    id: "botanica",
    nombre: "Botánica",
    emoji: "🌿",
    color: { from: "#22c55e", to: "#86efac", border: "rgba(34,197,94,0.5)", glow: "rgba(34,197,94,0.15)" },
    materias: [
      // 4° C1
      { id: "OB-137", nombre: "Paleontología", anio: 4, cuatrimestre: 1,
        correlativasCursar: [
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-125", condicion: "aprobada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-134", condicion: "aprobada" },
          { id: "EXAG-135", condicion: "aprobada" },
        ] },
      { id: "OB-btbp", nombre: "Biotaxonomía de Briófitas y Pteridófitas", anio: 4, cuatrimestre: 1,
        correlativasCursar:  [{ id: "EXAG-135", condicion: "regularizada" }],
        correlativasAprobar: [{ id: "EXAG-135", condicion: "aprobada" }] },
      // 4° C2
      { id: "OB-102", nombre: "Epistemología y Metodología de la Investigación", anio: 4, cuatrimestre: 2,
        correlativasCursar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ] },
      { id: "OB-bte", nombre: "Biotaxonomía de Espermatófitas", anio: 4, cuatrimestre: 2,
        correlativasCursar: [
          { id: "EXAG-135", condicion: "aprobada" },
          { id: "OB-btbp",  condicion: "regularizada" },
        ],
        correlativasAprobar: [{ id: "OB-btbp", condicion: "aprobada" }] },
      // 5° C1
      { id: "OB-ecv", nombre: "Ecología Vegetal", anio: 5, cuatrimestre: 1,
        correlativasCursar: [
          { id: "EXAG-139", condicion: "regularizada" },
          { id: "EXAG-135", condicion: "regularizada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-139", condicion: "aprobada" },
          { id: "EXAG-135", condicion: "aprobada" },
        ] },
      { id: "OB-fic", nombre: "Ficología", anio: 5, cuatrimestre: 1,
        correlativasCursar:  [{ id: "EXAG-135", condicion: "regularizada" }],
        correlativasAprobar: [{ id: "EXAG-135", condicion: "aprobada" }] },
      // 5° C2
      { id: "OB-mic", nombre: "Micología", anio: 5, cuatrimestre: 2,
        correlativasCursar:  [{ id: "EXAG-135", condicion: "regularizada" }],
        correlativasAprobar: [{ id: "EXAG-135", condicion: "aprobada" }] },
    ],
    optativas: {
      "2C_4": ["Optativa libre (2° C 4°)"],
      "2C_5": ["Biología de los Parásitos", "Ecología de la Conservación", "Herpetología"],
    }
  },

  // ── ECOLOGÍA ──────────────────────────────────────────────────────────────────
  ecologia: {
    id: "ecologia",
    nombre: "Ecología",
    emoji: "🌍",
    color: { from: "#3b82f6", to: "#93c5fd", border: "rgba(59,130,246,0.5)", glow: "rgba(59,130,246,0.15)" },
    materias: [
      // 4° C1
      { id: "OE-137", nombre: "Paleontología", anio: 4, cuatrimestre: 1,
        correlativasCursar: [
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-125", condicion: "aprobada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-134", condicion: "aprobada" },
          { id: "EXAG-135", condicion: "aprobada" },
        ] },
      { id: "OE-eca", nombre: "Ecología Animal", anio: 4, cuatrimestre: 1,
        correlativasCursar: [
          { id: "EXAG-134", condicion: "aprobada" },
          { id: "EXAG-142", condicion: "aprobada" },
          { id: "EXAG-139", condicion: "regularizada" },
        ],
        correlativasAprobar: [{ id: "EXAG-139", condicion: "aprobada" }] },
      { id: "OE-ecv", nombre: "Ecología Vegetal", anio: 4, cuatrimestre: 1,
        correlativasCursar: [
          { id: "EXAG-139", condicion: "regularizada" },
          { id: "EXAG-135", condicion: "regularizada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-139", condicion: "aprobada" },
          { id: "EXAG-135", condicion: "aprobada" },
        ] },
      // 4° C2
      { id: "OE-102", nombre: "Epistemología y Metodología de la Investigación", anio: 4, cuatrimestre: 2,
        correlativasCursar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ] },
      { id: "OE-ecp", nombre: "Ecología de Poblaciones", anio: 4, cuatrimestre: 2,
        correlativasCursar: [
          { id: "EXAG-142", condicion: "aprobada" },
          { id: "OE-eca",   condicion: "regularizada" },
          { id: "OE-ecv",   condicion: "regularizada" },
        ],
        correlativasAprobar: [
          { id: "OE-eca", condicion: "aprobada" },
          { id: "OE-ecv", condicion: "aprobada" },
        ] },
      // 5° C1
      { id: "OE-ecc", nombre: "Ecología de Comunidades", anio: 5, cuatrimestre: 1,
        correlativasCursar: [
          { id: "OE-eca", condicion: "aprobada" },
          { id: "OE-ecv", condicion: "aprobada" },
          { id: "OE-ecp", condicion: "regularizada" },
        ],
        correlativasAprobar: [{ id: "OE-ecp", condicion: "aprobada" }] },
      // 5° C2
      { id: "OE-lim", nombre: "Limnología", anio: 5, cuatrimestre: 2,
        correlativasCursar: [
          { id: "OE-ecp", condicion: "aprobada" },
          { id: "OE-ecc", condicion: "regularizada" },
        ],
        correlativasAprobar: [{ id: "OE-ecc", condicion: "aprobada" }] },
      { id: "OE-mrn", nombre: "Manejo de Recursos Naturales", anio: 5, cuatrimestre: 2,
        correlativasCursar: [
          { id: "OE-ecp", condicion: "aprobada" },
          { id: "OE-ecc", condicion: "regularizada" },
        ],
        correlativasAprobar: [{ id: "OE-ecc", condicion: "aprobada" }] },
    ],
    optativas: {
      "2C_4": ["Optativa libre (2° C 4°)"],
      "2C_5": ["Biología de los Parásitos", "Ecología de la Conservación", "Ecología del Paisaje", "Herpetología", "Legislación de Recursos Naturales"],
    },
    nota: "Necesario aprobar Geología y Prueba de Idioma para iniciar la orientación."
  },

  // ── PALEONTOLOGÍA ─────────────────────────────────────────────────────────────
  paleontologia: {
    id: "paleontologia",
    nombre: "Paleontología",
    emoji: "🦴",
    color: { from: "#f59e0b", to: "#fcd34d", border: "rgba(245,158,11,0.5)", glow: "rgba(245,158,11,0.15)" },
    materias: [
      // 4° C1
      { id: "OP-137", nombre: "Paleontología", anio: 4, cuatrimestre: 1,
        correlativasCursar: [
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-125", condicion: "aprobada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-134", condicion: "aprobada" },
          { id: "EXAG-135", condicion: "aprobada" },
        ] },
      { id: "OP-gh",  nombre: "Geología Histórica", anio: 4, cuatrimestre: 1,
        correlativasCursar:  [{ id: "EXAG-125", condicion: "aprobada" }],
        correlativasAprobar: [] },
      // 4° C2
      { id: "OP-102", nombre: "Epistemología y Metodología de la Investigación", anio: 4, cuatrimestre: 2,
        correlativasCursar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ] },
      { id: "OP-pb",  nombre: "Paleobotánica", anio: 4, cuatrimestre: 2,
        correlativasCursar:  [{ id: "OP-137", condicion: "regularizada" }],
        correlativasAprobar: [{ id: "OP-137", condicion: "aprobada" }] },
      { id: "OP-pi",  nombre: "Paleoinvertebrados", anio: 4, cuatrimestre: 2,
        correlativasCursar:  [{ id: "OP-137", condicion: "regularizada" }],
        correlativasAprobar: [{ id: "OP-137", condicion: "aprobada" }] },
      // 5° C1
      { id: "OP-pv",  nombre: "Paleovertebrados", anio: 5, cuatrimestre: 1,
        correlativasCursar:  [{ id: "OP-137", condicion: "aprobada" }],
        correlativasAprobar: [{ id: "OP-137", condicion: "aprobada" }] },
      { id: "OP-sed", nombre: "Sedimentología", anio: 5, cuatrimestre: 1,
        correlativasCursar:  [{ id: "EXAG-125", condicion: "aprobada" }],
        correlativasAprobar: [] },
      // 5° C2
      { id: "OP-pbg", nombre: "Paleobiogeografía", anio: 5, cuatrimestre: 2,
        correlativasCursar: [
          { id: "OP-gh",  condicion: "regularizada" },
          { id: "OP-sed", condicion: "regularizada" },
        ],
        correlativasAprobar: [] },
    ],
    optativas: {
      "1C_5": ["Antropología Física y Cultural", "Botánica Aplicada", "Ecología del Comportamiento", "Entomología", "Micropaleontología", "Palinología", "Protozoología", "Zoología Agrícola"],
    }
  },

  // ── ZOOLOGÍA ──────────────────────────────────────────────────────────────────
  zoologia: {
    id: "zoologia",
    nombre: "Zoología",
    emoji: "🦎",
    color: { from: "#8b5cf6", to: "#c4b5fd", border: "rgba(139,92,246,0.5)", glow: "rgba(139,92,246,0.15)" },
    materias: [
      // 4° C1
      { id: "OZ-137", nombre: "Paleontología", anio: 4, cuatrimestre: 1,
        correlativasCursar: [
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-125", condicion: "aprobada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-134", condicion: "aprobada" },
          { id: "EXAG-135", condicion: "aprobada" },
        ] },
      { id: "OZ-acc", nombre: "Anatomía Comparada de los Cordados", anio: 4, cuatrimestre: 1,
        correlativasCursar:  [{ id: "EXAG-123", condicion: "aprobada" }],
        correlativasAprobar: [] },
      { id: "OZ-emb", nombre: "Embriología Animal", anio: 4, cuatrimestre: 1,
        correlativasCursar:  [{ id: "EXAG-134", condicion: "regularizada" }],
        correlativasAprobar: [] },
      // 4° C2
      { id: "OZ-102", nombre: "Epistemología y Metodología de la Investigación", anio: 4, cuatrimestre: 2,
        correlativasCursar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ],
        correlativasAprobar: [
          { id: "EXAG-135", condicion: "regularizada" },
          { id: "EXAG-134", condicion: "regularizada" },
          { id: "EXAG-132", condicion: "regularizada" },
        ] },
      { id: "OZ-his", nombre: "Histología Animal", anio: 4, cuatrimestre: 2,
        correlativasCursar:  [{ id: "OZ-emb", condicion: "regularizada" }],
        correlativasAprobar: [] },
      // 5° C1
      { id: "OZ-art", nombre: "Biología de los Artrópodos", anio: 5, cuatrimestre: 1,
        correlativasCursar:  [{ id: "EXAG-128", condicion: "aprobada" }],
        correlativasAprobar: [{ id: "EXAG-128", condicion: "aprobada" }] },
      { id: "OZ-eca", nombre: "Ecología Animal", anio: 5, cuatrimestre: 1,
        correlativasCursar: [
          { id: "EXAG-134", condicion: "aprobada" },
          { id: "EXAG-142", condicion: "aprobada" },
          { id: "EXAG-139", condicion: "regularizada" },
        ],
        correlativasAprobar: [{ id: "EXAG-139", condicion: "aprobada" }] },
    ],
    optativas: {
      "2C_5": ["Biología de los Parásitos", "Ecología de la Conservación", "Ecología del Paisaje", "Herpetología", "Legislación de Recursos Naturales"],
    }
  },
};

export const ORIENTACION_IDS = Object.keys(ORIENTACIONES);
