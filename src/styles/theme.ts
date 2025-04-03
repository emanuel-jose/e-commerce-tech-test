interface Colors {
  primary: string;
  primaryBg: string;
  primaryGradient: string;
  primaryShadow: string;
  white: string;
  border: string;
}

interface Typography {
  small: string;
  medium: string;
  large: string;
}

interface Spacing {
  small: string;
  medium: string;
  large: string;
}

export interface Theme {
  title: "light" | "dark";
  colors: Colors;
  fontSizes: Typography;
  spacing: Spacing;
}

export const lightTheme: Theme = {
  title: "light",
  colors: {
    primary: "#ee4d2d",
    primaryBg: "#fef6f5",
    primaryGradient: "linear-gradient(#ee4d2d, #ff7337)",
    primaryShadow: "rgba(238, 77, 45, 0.5)",
    white: "#fff",
    border: "rgba(0, 0, 0, 0.09);",
  },
  fontSizes: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
  },
  spacing: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },
};

export const darkTheme: Theme = {
  title: "dark",
  colors: {
    primary: "#ee4d2d",
    primaryBg: "#fef6f5",
    primaryGradient: "linear-gradient(#ee4d2d, #ff7337)",
    primaryShadow: "rgba(238, 77, 45, 0.5)",
    white: "#fff",
    border: "rgba(0, 0, 0, 0.09);",
  },
  fontSizes: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
  },
  spacing: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },
};
