// import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../src/themes/light.theme";
import { darkTheme } from "../src/themes/dark.theme";

/* snipped for brevity */

import { useMemo } from "react";

/* Snipped for brevity */

// Add your theme configurations to an object that you can
// pull your desired theme from.
const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

export const withMuiTheme = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <CSSReset />
//       <Box m="4">
//         <Story />
//       </Box>
//     </ThemeProvider>
//   ),
// ];
