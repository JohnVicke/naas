import "../styles/globals.css";
import type { AppProps } from "next/app";
import { getDesignTokens } from "../utils/theme";
import { useEffect, useMemo, useState } from "react";
import { ColorModeContext } from "../context/ColorModeContext";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("dark");
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
