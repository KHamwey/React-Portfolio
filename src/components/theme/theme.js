/** Design tokens + styled-components theme */
export const tokens = {
  radii: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    pill: "999px",
  },
  shadows: {
    card: "0 10px 40px rgba(0, 0, 0, 0.25)",
    soft: "0 4px 24px rgba(0, 0, 0, 0.15)",
  },
  space: {
    section: "3rem",
    block: "1.5rem",
  },
};

export const theme = {
  ...tokens,
  primary: "#0b0c10",
  textColor: "#66fcf1",
  titleColor: "#ffc83d",
  surface: "#1f2833",
  accentMuted: "rgba(102, 252, 241, 0.15)",
};
