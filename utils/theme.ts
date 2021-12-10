import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          divider: undefined,
          background: {
            default: "#171923",
            paper: "#1A202C",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
          appbar: {},
        }),
  },
});
