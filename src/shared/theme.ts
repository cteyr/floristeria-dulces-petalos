import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { SetColors } from "./colors";

const colors = SetColors();

const breakpoints = {
  sm: "30em",  // 480px
  md: "48em",  // 768px
  lg: "62em",  // 992px
  xl: "80em",  // 1280px
  "2xl": "96em", // 1536px
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
    heading: `'Nunito', sans-serif`,
    body: `'DM Sans', sans-serif`,
  };

const theme = extendTheme({
  breakpoints,
  config,
  fonts,
  semanticTokens: { colors },
});

export default theme;