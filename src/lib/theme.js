export const colors = {
  bronze: "#426449",
  bronzeLight: "#789879",
  purple: "#29462E",
  purpleLight: "#5F8563",
  canvas: "#F1ECD9",
  darkSurface: "#29462E",
  card: "#FBF8EB",
  cardBorder: "rgba(35, 61, 41, 0.16)",
  textPrimary: "#233D29",
  textMuted: "#647064",
  worst: "#A5674E",
  base: "#426449",
  best: "#789879",
};

export const gradients = {
  bronzePurple: "linear-gradient(135deg, #29462E 0%, #5F8563 100%)",
  bronzeGlow: "radial-gradient(circle at 30% 20%, rgba(120, 152, 121, 0.30), transparent 60%)",
  purpleGlow: "radial-gradient(circle at 70% 80%, rgba(66, 100, 73, 0.22), transparent 60%)",
  heroCard: "linear-gradient(160deg, #29462E 0%, #36563A 100%)",
};

export const motion = {
  duration: {
    fast: 0.18,
    base: 0.25,
    slow: 0.4,
  },
  spring: {
    type: "spring",
    stiffness: 260,
    damping: 24,
  },
  softSpring: {
    type: "spring",
    stiffness: 180,
    damping: 22,
  },
  hoverLift: -6,
  hoverScale: 1.02,
  tiltMaxDeg: 6,
  floatLoopSeconds: 26,
  counterEase: [0.16, 1, 0.3, 1],
};

export const scenarioColor = (scenarioKey) => colors[scenarioKey] ?? colors.base;

// Shared per-operating-model color, reused by every widget that breaks a
// value down by LTR/STR/Hybrid (Portfolio Snapshot bars, Cash Flow bars, etc.)
export const modelColor = {
  ltr: "#789879",
  str: "#426449",
  hybrid: "#9A906D",
};

// Recharts styling shared by every chart widget - kept in one place so the
// dark-theme tooltip/axis look stays consistent without re-typing it per chart.
export const chartTheme = {
  tooltipContentStyle: {
    backgroundColor: "#FBF8EB",
    border: "1px solid rgba(35,61,41,0.16)",
    borderRadius: 8,
  },
  // Recharts' DefaultTooltipContent otherwise leaves the label/item/wrapper
  // text color unset, which falls back to the browser's default black - all
  // three must be set explicitly so every tooltip's title, item names, and
  // values render in white against the dark background.
  tooltipLabelStyle: { color: "#233D29" },
  tooltipItemStyle: { color: "#233D29" },
  tooltipWrapperStyle: { color: "#233D29" },
  axisTick: { fill: "#647064", fontSize: 11 },
  axisTickSmall: { fill: "#647064", fontSize: 10 },
  axisLine: { stroke: "rgba(35,61,41,0.16)" },
  gridStroke: "rgba(35,61,41,0.1)",
};
