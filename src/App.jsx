import { useState, useEffect, useCallback } from "react";
import { TRONCO_COMUN, ORIENTACIONES } from "./data/materias";

// ─── constantes ──────────────────────────────────────────────────────────────
const ESTADO = { SIN_CURSAR: "sin_cursar", REGULARIZADA: "regularizada", APROBADA: "aprobada" };

// ─── helpers ─────────────────────────────────────────────────────────────────
const cumple = (e, cond) => {
  if (cond === "regularizada") return e === ESTADO.REGULARIZADA || e === ESTADO.APROBADA;
  if (cond === "aprobada")     return e === ESTADO.APROBADA;
  return false;
};

const todosLosMaterias = (orientacionId) => [
  ...TRONCO_COMUN.filter(m => !m.esEspecial),
  ...(ORIENTACIONES[orientacionId]?.materias || []),
];

const puedesCursar = (materia, estados) =>
  materia.correlativasCursar.every(r => cumple(estados[r.id] || ESTADO.SIN_CURSAR, r.condicion));

const calcProgress = (estados, orientacionId) => {
  const total     = todosLosMaterias(orientacionId).length;
  const aprobadas = todosLosMaterias(orientacionId).filter(m => (estados[m.id] || ESTADO.SIN_CURSAR) === ESTADO.APROBADA).length;
  return total > 0 ? Math.round((aprobadas / total) * 100) : 0;
};

const nombreCorto = (n, max = 22) => n.length > max ? n.slice(0, max - 1) + "…" : n;

// ─── TEMA ────────────────────────────────────────────────────────────────────
const T = {
  dark: {
    appBg:          "linear-gradient(160deg,#04090f 0%,#050d12 60%,#04090f 100%)",
    headerBg:       "rgba(4,9,15,0.88)",
    headerBorder:   "rgba(255,255,255,0.05)",
    text:           "#f1f5f9",
    textSub:        "#64748b",
    textMuted:      "#334155",
    textCode:       "#475569",
    cardSin:        { bg:"rgba(30,41,59,0.85)",  border:"rgba(100,116,139,0.4)" },
    cardReg:        { bg:"rgba(120,53,15,0.35)",  border:"rgba(245,158,11,0.55)" },
    cardApr:        { bg:"rgba(6,78,59,0.35)",    border:"rgba(16,185,129,0.55)" },
    colHeaderBg:    "rgba(30,41,59,0.4)",
    colHeaderBorder:"rgba(51,65,85,0.5)",
    btnInactive:    "rgba(15,23,42,0.7)",
    btnInactiveBorder:"rgba(51,65,85,0.6)",
    btnInactiveText:"#64748b",
    divider:        "rgba(255,255,255,0.05)",
    footerBg:       "rgba(4,9,15,0.9)",
    footerBorder:   "rgba(255,255,255,0.05)",
    resetBorder:    "rgba(185,28,28,0.3)",
    resetText:      "rgba(239,68,68,0.5)",
    progressTrack:  "rgba(255,255,255,0.07)",
    statsText:      "#475569",
    filterBg:       "rgba(255,255,255,0.03)",
    filterBorder:   "rgba(255,255,255,0.06)",
    yearBg0:        "rgba(255,255,255,0.03)",
    yearBgReg:      "rgba(245,158,11,0.08)",
    yearBgApr:      "rgba(16,185,129,0.1)",
    selectorBg:     "rgba(15,23,42,0.95)",
    selectorCard:   "rgba(30,41,59,0.8)",
    selectorBorder: "rgba(255,255,255,0.07)",
    idiomaBg:       "linear-gradient(135deg,rgba(14,165,233,0.06),rgba(4,9,15,0.5))",
    idiomaBorder:   "rgba(14,165,233,0.2)",
  },
  light: {
    appBg:          "linear-gradient(160deg,#f0fdf4 0%,#ecfdf5 60%,#f0fdf4 100%)",
    headerBg:       "rgba(255,255,255,0.92)",
    headerBorder:   "rgba(0,0,0,0.07)",
    text:           "#0f172a",
    textSub:        "#475569",
    textMuted:      "#94a3b8",
    textCode:       "#94a3b8",
    cardSin:        { bg:"#ffffff",               border:"rgba(148,163,184,0.5)" },
    cardReg:        { bg:"rgba(254,243,199,0.8)",  border:"rgba(245,158,11,0.6)" },
    cardApr:        { bg:"rgba(209,250,229,0.8)",  border:"rgba(16,185,129,0.6)" },
    colHeaderBg:    "rgba(241,245,249,0.8)",
    colHeaderBorder:"rgba(203,213,225,0.7)",
    btnInactive:    "rgba(241,245,249,0.9)",
    btnInactiveBorder:"rgba(203,213,225,0.7)",
    btnInactiveText:"#94a3b8",
    divider:        "rgba(0,0,0,0.06)",
    footerBg:       "rgba(240,253,244,0.95)",
    footerBorder:   "rgba(0,0,0,0.06)",
    resetBorder:    "rgba(185,28,28,0.2)",
    resetText:      "rgba(220,38,38,0.6)",
    progressTrack:  "rgba(0,0,0,0.08)",
    statsText:      "#94a3b8",
    filterBg:       "rgba(0,0,0,0.03)",
    filterBorder:   "rgba(0,0,0,0.07)",
    yearBg0:        "rgba(0,0,0,0.03)",
    yearBgReg:      "rgba(245,158,11,0.1)",
    yearBgApr:      "rgba(16,185,129,0.12)",
    selectorBg:     "rgba(240,253,244,0.98)",
    selectorCard:   "#ffffff",
    selectorBorder: "rgba(0,0,0,0.08)",
    idiomaBg:       "linear-gradient(135deg,rgba(14,165,233,0.08),rgba(240,253,244,0.6))",
    idiomaBorder:   "rgba(14,165,233,0.25)",
  },
};

// ─── Pantalla selector de orientación ────────────────────────────────────────
function SelectorOrientacion({ onSelect, darkMode, tk }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ background: tk.selectorBg }}>

      {/* Decoración de fondo */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #10b981, transparent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🧬</div>
          <h1 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: tk.text }}>
            Correlativas
          </h1>
          <p className="text-base font-semibold text-emerald-500 mb-1">
            Lic. en Ciencias Biológicas
          </p>
          <p className="text-sm" style={{ color: tk.textSub }}>
            Seleccioná tu orientación para ver tu plan de estudios
          </p>
        </div>

        {/* Cards de orientaciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {Object.values(ORIENTACIONES).map(ori => (
            <button
              key={ori.id}
              onClick={() => onSelect(ori.id)}
              className="group rounded-2xl border-2 p-5 text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{
                background:   tk.selectorCard,
                borderColor:  ori.color.border,
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{ori.emoji}</span>
                <div>
                  <p className="font-black text-base" style={{ color: tk.text }}>
                    Orientación {ori.nombre}
                  </p>
                  <p className="text-xs" style={{ color: tk.textSub }}>
                    {ori.materias.length} materias específicas
                  </p>
                </div>
              </div>
              <div
                className="h-1 w-full rounded-full mt-3 opacity-60"
                style={{ background: `linear-gradient(90deg, ${ori.color.from}, ${ori.color.to})` }}
              />
            </button>
          ))}
        </div>

        <p className="text-center text-xs" style={{ color: tk.textMuted }}>
          Podés cambiar de orientación en cualquier momento desde el simulador
        </p>
      </div>
    </div>
  );
}

// ─── MateriaCard ─────────────────────────────────────────────────────────────
function MateriaCard({ materia, estado, onChange, estados, isHovered, onHover, tk, accentColor }) {
  const cursar = puedesCursar(materia, estados);

  const todasLasMaterias = [...TRONCO_COMUN, ...Object.values(ORIENTACIONES).flatMap(o => o.materias)];
  const requisitos = materia.correlativasCursar.map(r => ({
    ...r,
    nombre: todasLasMaterias.find(m => m.id === r.id)?.nombre || r.id,
    ok: cumple(estados[r.id] || ESTADO.SIN_CURSAR, r.condicion),
  }));

  const cardStyle = {
    [ESTADO.SIN_CURSAR]:   tk.cardSin,
    [ESTADO.REGULARIZADA]: tk.cardReg,
    [ESTADO.APROBADA]:     tk.cardApr,
  }[estado];

  const topBar = {
    [ESTADO.SIN_CURSAR]:   accentColor
      ? `linear-gradient(90deg, ${accentColor.from}33, ${accentColor.to}33)`
      : "rgba(100,116,139,0.3)",
    [ESTADO.REGULARIZADA]: "linear-gradient(90deg,#f59e0b,#fbbf24)",
    [ESTADO.APROBADA]:     "linear-gradient(90deg,#10b981,#34d399)",
  }[estado];

  const BOTONES = [
    { e: ESTADO.SIN_CURSAR,   label: "—",   title: "Sin cursar",   active: "bg-slate-500 text-white" },
    { e: ESTADO.REGULARIZADA, label: "Reg", title: "Regularizada", active: "bg-amber-500 text-white" },
    { e: ESTADO.APROBADA,     label: "Apr", title: "Aprobada",     active: "bg-emerald-500 text-white" },
  ];

  return (
    <div
      className={`rounded-2xl border-2 overflow-hidden transition-all duration-200 ${
        isHovered ? "scale-[1.02] shadow-xl" : "hover:scale-[1.01]"
      }`}
      style={{ background: cardStyle.bg, borderColor: cardStyle.border }}
      onMouseEnter={() => onHover(materia.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="h-1 w-full" style={{ background: topBar }} />
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-wider" style={{ color: tk.textCode }}>
            {materia.id}
          </span>
          <span className={`text-sm ${cursar ? "text-emerald-500" : "opacity-30"}`}
            title={cursar ? "Podés cursar" : "Faltan correlativas"}>
            {cursar ? "🔓" : "🔒"}
          </span>
        </div>

        <p className="text-sm font-bold leading-snug min-h-[2.4rem]" style={{ color: tk.text }}>
          {materia.nombre}
        </p>

        {!cursar && requisitos.filter(r => !r.ok).length > 0 && (
          <div className="space-y-0.5">
            {requisitos.filter(r => !r.ok).slice(0, 2).map(r => (
              <div key={r.id} className="flex items-center gap-1 text-[10px]" style={{ color: tk.textSub }}>
                <span className="text-red-500/70 shrink-0">✕</span>
                <span className="truncate">{nombreCorto(r.nombre)}</span>
                <span className="shrink-0 opacity-60">({r.condicion.slice(0, 3)})</span>
              </div>
            ))}
            {requisitos.filter(r => !r.ok).length > 2 && (
              <div className="text-[10px] opacity-50" style={{ color: tk.textSub }}>
                +{requisitos.filter(r => !r.ok).length - 2} más
              </div>
            )}
          </div>
        )}

        <div className="flex gap-1 pt-1">
          {BOTONES.map(btn => (
            <button
              key={btn.e}
              title={btn.title}
              onClick={() => onChange(materia.id, btn.e)}
              className={`flex-1 text-[11px] font-bold py-1.5 rounded-lg transition-all duration-150 cursor-pointer border ${
                estado === btn.e ? btn.active + " border-transparent" : "border-transparent"
              }`}
              style={estado !== btn.e ? {
                background:  tk.btnInactive,
                borderColor: tk.btnInactiveBorder,
                color:       tk.btnInactiveText,
              } : {}}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Columna cuatrimestre ─────────────────────────────────────────────────────
function Columna({ titulo, materias, estados, onChange, hoveredId, onHover, tk, accentColor }) {
  return (
    <div className="flex flex-col gap-3 w-full sm:w-[250px] sm:shrink-0">
      <div className="text-center py-2 px-3 rounded-xl border"
        style={{ background: tk.colHeaderBg, borderColor: tk.colHeaderBorder }}>
        <p className="text-[11px] font-extrabold uppercase tracking-widest" style={{ color: tk.textSub }}>
          {titulo}
        </p>
      </div>
      {materias.map(m => (
        <MateriaCard
          key={m.id}
          materia={m}
          estado={estados[m.id] || ESTADO.SIN_CURSAR}
          onChange={onChange}
          estados={estados}
          isHovered={hoveredId === m.id}
          onHover={onHover}
          tk={tk}
          accentColor={accentColor}
        />
      ))}
    </div>
  );
}

// ─── Sección de año ───────────────────────────────────────────────────────────
function SeccionAnio({ anio, materias, estados, onChange, hoveredId, onHover, tk, accentColor, esOrientacion }) {
  const c1 = materias.filter(m => m.cuatrimestre === 1);
  const c2 = materias.filter(m => m.cuatrimestre === 2);
  if (c1.length === 0 && c2.length === 0) return null;

  const aprobAnio = materias.filter(m => (estados[m.id] || ESTADO.SIN_CURSAR) === ESTADO.APROBADA).length;
  const pctAnio   = materias.length > 0 ? Math.round((aprobAnio / materias.length) * 100) : 0;

  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black border shrink-0"
          style={{
            background:  pctAnio === 100 ? tk.yearBgApr : pctAnio > 0 ? tk.yearBgReg : tk.yearBg0,
            borderColor: pctAnio === 100 ? "rgba(16,185,129,0.4)" : pctAnio > 0 ? "rgba(245,158,11,0.3)" : tk.divider,
            color:       pctAnio === 100 ? "#34d399" : pctAnio > 0 ? "#fbbf24" : tk.textSub,
          }}>
          {anio}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest" style={{ color: tk.text }}>
              {anio}° Año
            </h2>
            {esOrientacion && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full border"
                style={{
                  background:  accentColor?.glow || "transparent",
                  borderColor: accentColor?.border || tk.divider,
                  color:       accentColor?.from || tk.textSub,
                }}>
                orientación
              </span>
            )}
          </div>
          <p className="text-[10px]" style={{ color: tk.textMuted }}>
            {aprobAnio}/{materias.length} aprobadas · {pctAnio}%
          </p>
        </div>
        <div className="flex-1 h-px"
          style={{ background: `linear-gradient(90deg, ${tk.divider}, transparent)` }} />
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-8">
        {c1.length > 0 && (
          <Columna titulo="1° Cuatrimestre" materias={c1} estados={estados}
            onChange={onChange} hoveredId={hoveredId} onHover={onHover}
            tk={tk} accentColor={accentColor} />
        )}
        {c1.length > 0 && c2.length > 0 && (
          <>
            <div className="block sm:hidden h-px w-full" style={{ background: tk.divider }} />
            <div className="hidden sm:block self-stretch w-px mx-1 shrink-0"
              style={{ background: `linear-gradient(180deg,transparent,${tk.divider},transparent)` }} />
          </>
        )}
        {c2.length > 0 && (
          <Columna titulo="2° Cuatrimestre" materias={c2} estados={estados}
            onChange={onChange} hoveredId={hoveredId} onHover={onHover}
            tk={tk} accentColor={accentColor} />
        )}
      </div>
    </section>
  );
}

// ─── App principal ────────────────────────────────────────────────────────────
export default function App() {
  const [orientacionId, setOrientacionId] = useState(() =>
    localStorage.getItem("bio-orientacion") || null
  );
  const [estados, setEstados] = useState(() => {
    try { return JSON.parse(localStorage.getItem("bio-correlativas-v3") || "{}"); }
    catch { return {}; }
  });
  const [darkMode, setDarkMode] = useState(() => {
    const s = localStorage.getItem("bio-theme");
    return s !== null ? s === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [hoveredId, setHoveredId] = useState(null);
  const [filtro, setFiltro]       = useState("todos");

  const tk  = darkMode ? T.dark : T.light;
  const ori = orientacionId ? ORIENTACIONES[orientacionId] : null;

  useEffect(() => { localStorage.setItem("bio-correlativas-v3", JSON.stringify(estados)); }, [estados]);
  useEffect(() => { localStorage.setItem("bio-theme", darkMode ? "dark" : "light"); }, [darkMode]);
  useEffect(() => {
    if (orientacionId) localStorage.setItem("bio-orientacion", orientacionId);
  }, [orientacionId]);

  const handleChange = useCallback((id, nuevo) => {
    setEstados(prev => ({ ...prev, [id]: nuevo }));
  }, []);

  const resetAll = () => {
    if (window.confirm("¿Resetear todos los estados?")) setEstados({});
  };

  // Si no hay orientación elegida → mostrar selector
  if (!orientacionId) {
    return <SelectorOrientacion onSelect={setOrientacionId} darkMode={darkMode} tk={tk} />;
  }

  const progress = calcProgress(estados, orientacionId);
  const todasMaterias = todosLosMaterias(orientacionId);

  const stats = {
    total:         todasMaterias.length,
    aprobadas:     todasMaterias.filter(m => (estados[m.id] || ESTADO.SIN_CURSAR) === ESTADO.APROBADA).length,
    regularizadas: todasMaterias.filter(m => (estados[m.id] || ESTADO.SIN_CURSAR) === ESTADO.REGULARIZADA).length,
    disponibles:   todasMaterias.filter(m =>
      puedesCursar(m, estados) && (estados[m.id] || ESTADO.SIN_CURSAR) === ESTADO.SIN_CURSAR
    ).length,
  };

  const filtrarMaterias = (lista) => {
    if (filtro === "disponibles")
      return lista.filter(m => puedesCursar(m, estados) && (estados[m.id] || ESTADO.SIN_CURSAR) === ESTADO.SIN_CURSAR);
    if (filtro === "aprobadas")
      return lista.filter(m => (estados[m.id] || ESTADO.SIN_CURSAR) === ESTADO.APROBADA);
    return lista;
  };

  const ANIOS_COMUN = [1, 2, 3];
  const ANIOS_ORI   = [4, 5];

  return (
    <div className="min-h-screen" style={{ background: tk.appBg }}>

      {/* Fondo decorativo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: `radial-gradient(circle, ${ori.color.from}, transparent)` }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      </div>

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b backdrop-blur-xl"
        style={{ background: tk.headerBg, borderColor: tk.headerBorder }}>

        {/* Fila 1 */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pt-2.5 pb-1.5 flex items-center gap-3 flex-wrap">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-sm border"
              style={{ background: ori.color.glow, borderColor: ori.color.border }}>
              {ori.emoji}
            </div>
            <div>
              <h1 className="text-xs sm:text-sm font-black tracking-tight leading-none" style={{ color: tk.text }}>
                Correlativas
              </h1>
              <p className="text-[9px] sm:text-[10px] font-semibold mt-0.5" style={{ color: ori.color.from }}>
                Lic. Cs. Biológicas · {ori.nombre}
              </p>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="flex items-center gap-2 flex-1 min-w-[120px] max-w-[220px]">
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: tk.progressTrack }}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg,${ori.color.from},${ori.color.to})`,
                  boxShadow: progress > 0 ? `0 0 8px ${ori.color.glow}` : "none",
                }} />
            </div>
            <span className="text-xs font-black tabular-nums w-8 text-right" style={{ color: ori.color.from }}>
              {progress}%
            </span>
          </div>

          <div className="flex-1 hidden sm:block" />

          {/* Cambiar orientación */}
          <button
            onClick={() => setOrientacionId(null)}
            className="text-xs font-bold px-2.5 py-1.5 rounded-xl border transition-all"
            style={{ borderColor: ori.color.border, color: ori.color.from, background: ori.color.glow }}
          >
            Cambiar orientación
          </button>

          {/* Tema */}
          <button
            onClick={() => setDarkMode(d => !d)}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-base transition-all border"
            style={{
              background:  darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
              borderColor: darkMode ? "rgba(255,255,255,0.1)"  : "rgba(0,0,0,0.1)",
              color: tk.textSub,
            }}
            title={darkMode ? "Modo claro" : "Modo oscuro"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Reset */}
          <button onClick={resetAll}
            className="text-xs font-bold px-2.5 py-1.5 rounded-xl border transition-all"
            style={{ borderColor: tk.resetBorder, color: tk.resetText }}>
            Reset
          </button>
        </div>

        {/* Fila 2: stats + filtros */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-2 flex items-center gap-3 flex-wrap">
          <div className="flex gap-3 sm:gap-5 text-xs">
            <span><b className="text-emerald-500 font-black">{stats.aprobadas}</b><span className="ml-1" style={{ color: tk.statsText }}>aprobadas</span></span>
            <span><b className="text-amber-500 font-black">{stats.regularizadas}</b><span className="ml-1" style={{ color: tk.statsText }}>regulares</span></span>
            <span><b className="text-sky-500 font-black">{stats.disponibles}</b><span className="ml-1" style={{ color: tk.statsText }}>disponibles</span></span>
          </div>
          <div className="flex-1" />
          <div className="flex gap-1 p-1 rounded-xl border" style={{ background: tk.filterBg, borderColor: tk.filterBorder }}>
            {[
              { k: "todos",       label: "Todas" },
              { k: "disponibles", label: "Disponibles" },
              { k: "aprobadas",   label: "Aprobadas" },
            ].map(f => (
              <button key={f.k} onClick={() => setFiltro(f.k)}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all duration-150 ${
                  filtro === f.k ? "text-white shadow-md" : ""
                }`}
                style={filtro === f.k
                  ? { background: `linear-gradient(90deg,${ori.color.from},${ori.color.to})` }
                  : { color: tk.textSub }
                }>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── PRUEBA DE IDIOMA ────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pt-4">
        <div className="rounded-2xl border p-3 sm:p-4 flex items-center gap-3 flex-wrap"
          style={{ background: tk.idiomaBg, borderColor: tk.idiomaBorder }}>
          <div className="w-8 h-8 rounded-xl border border-sky-400/25 flex items-center justify-center text-base shrink-0"
            style={{ background: "rgba(14,165,233,0.1)" }}>📖</div>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] sm:text-[10px] font-extrabold text-sky-500 uppercase tracking-widest mb-0.5">Requisito especial</p>
            <p className="text-sm font-bold" style={{ color: tk.text }}>
              Prueba de Idioma <span className="font-mono text-xs text-sky-500/60">EXAG-143</span>
            </p>
            <p className="text-xs hidden sm:block" style={{ color: tk.textSub }}>
              Requerida para iniciar el ciclo de especialización (4° y 5° año).
              {ori.nota && <span className="ml-1 text-amber-500">{ori.nota}</span>}
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            {[
              { e: ESTADO.SIN_CURSAR, label: "Pendiente", icon: "⏳" },
              { e: ESTADO.APROBADA,   label: "Aprobada",  icon: "✓" },
            ].map(btn => {
              const activo = (estados["EXAG-143"] || ESTADO.SIN_CURSAR) === btn.e;
              return (
                <button key={btn.e} onClick={() => handleChange("EXAG-143", btn.e)}
                  className="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all border"
                  style={{
                    background:  activo ? (btn.e === ESTADO.APROBADA ? "rgba(16,185,129,0.15)" : darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)") : "transparent",
                    borderColor: activo ? (btn.e === ESTADO.APROBADA ? "rgba(16,185,129,0.4)" : tk.headerBorder) : tk.filterBorder,
                    color:       activo ? (btn.e === ESTADO.APROBADA ? "#34d399" : tk.text) : tk.textSub,
                  }}>
                  {btn.icon} {btn.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── GRILLA ──────────────────────────────────────────────── */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-20 pt-6">
        <div className="space-y-10">

          {/* Tronco común */}
          {ANIOS_COMUN.map(anio => {
            const materiasAnio = TRONCO_COMUN.filter(m => m.anio === anio && !m.esEspecial);
            return (
              <SeccionAnio key={anio} anio={anio}
                materias={filtrarMaterias(materiasAnio)}
                estados={estados} onChange={handleChange}
                hoveredId={hoveredId} onHover={setHoveredId}
                tk={tk} accentColor={null} esOrientacion={false} />
            );
          })}

          {/* Divisor tronco → orientación */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: tk.divider }} />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold"
              style={{ background: ori.color.glow, borderColor: ori.color.border, color: ori.color.from }}>
              {ori.emoji} Orientación {ori.nombre}
            </div>
            <div className="flex-1 h-px" style={{ background: tk.divider }} />
          </div>

          {/* Materias de la orientación */}
          {ANIOS_ORI.map(anio => {
            const materiasAnio = ori.materias.filter(m => m.anio === anio);
            return (
              <SeccionAnio key={anio} anio={anio}
                materias={filtrarMaterias(materiasAnio)}
                estados={estados} onChange={handleChange}
                hoveredId={hoveredId} onHover={setHoveredId}
                tk={tk} accentColor={ori.color} esOrientacion={true} />
            );
          })}

          {/* Optativas */}
          {ori.optativas && Object.keys(ori.optativas).length > 0 && (
            <div className="rounded-2xl border p-4"
              style={{ background: ori.color.glow, borderColor: ori.color.border }}>
              <p className="text-xs font-extrabold uppercase tracking-widest mb-3" style={{ color: ori.color.from }}>
                Materias optativas — Orientación {ori.nombre}
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.values(ori.optativas).flat().map((opt, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full border font-medium"
                    style={{ borderColor: ori.color.border, color: tk.textSub, background: tk.selectorCard || "#fff" }}>
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Trabajo final */}
          <div className="rounded-2xl border p-4 flex items-center gap-3"
            style={{ background: tk.yearBg0, borderColor: tk.divider }}>
            <span className="text-2xl">🎓</span>
            <div>
              <p className="text-sm font-bold" style={{ color: tk.text }}>Trabajo Final de Graduación</p>
              <p className="text-xs" style={{ color: tk.textSub }}>Anual · Se requieren 18 materias aprobadas para iniciar</p>
            </div>
          </div>
        </div>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t px-4 sm:px-6 py-4 sm:py-5"
        style={{ background: tk.footerBg, borderColor: tk.footerBorder }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-6 sm:gap-10 flex-wrap justify-center sm:justify-start">
          {[
            { label: "Total",         val: stats.total,         color: tk.text      },
            { label: "Aprobadas",     val: stats.aprobadas,     color: "#10b981"    },
            { label: "Regularizadas", val: stats.regularizadas, color: "#f59e0b"    },
            { label: "Disponibles",   val: stats.disponibles,   color: "#0ea5e9"    },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-xl sm:text-2xl font-black tabular-nums leading-none" style={{ color: s.color }}>{s.val}</p>
              <p className="text-[10px] mt-1 uppercase tracking-wide" style={{ color: tk.statsText }}>{s.label}</p>
            </div>
          ))}

          <div className="flex flex-col items-center sm:items-end gap-1 w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
            <p className="text-[11px] font-semibold" style={{ color: tk.textSub }}>
              Desarrollado por{" "}
              <a href="https://github.com/meliochat" target="_blank" rel="noopener noreferrer"
                className="text-emerald-500 hover:underline font-bold">
                @meliochat
              </a>
            </p>
            <p className="text-[10px]" style={{ color: tk.textMuted }}>
              Idea original:{" "}
              <a href="https://github.com/1Hagi/correlativas_lsi" target="_blank" rel="noopener noreferrer"
                className="text-sky-500 hover:underline">
                @1Hagi
              </a>
              {" "}· Lic. en Sistemas de Información
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
