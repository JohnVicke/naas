import { StyledOptions } from "@emotion/styled";
import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import { ToggleColorModeButton } from "./ToggleColorModeButton";

interface TopBarProps {}

const StyledAppBar = styled(AppBar)<{ darkMode: boolean }>`
  background: ${(props) => props.theme.palette.background.paper};
  color: ${(props) => props.theme.palette.text.primary};
`;

export const TopBar: React.FC<TopBarProps> = ({}) => {
  return (
    <StyledAppBar position="static" darkMode={true} elevation={0}>
      <Toolbar>
        <Typography flexGrow={1}>hej</Typography>
        <Box>
          <ToggleColorModeButton />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
