import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";
import { IconButton } from "@mui/material";
import { Brightness7, Brightness4 } from "@mui/icons-material";

interface ToggleColorModeButtonProps {}

export const ToggleColorModeButton: React.FC<ToggleColorModeButtonProps> =
  ({}) => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    );
  };
