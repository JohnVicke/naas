import React from "react";
import { Box, styled } from "@mui/material";
import { SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";

const sideMenuWidth = 240;

const PaddedBox = styled(Box)`
  margin-left: ${sideMenuWidth}px;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <PaddedBox>
        <TopBar />
        {children}
      </PaddedBox>
      <SideMenu width={sideMenuWidth} />
    </>
  );
};
