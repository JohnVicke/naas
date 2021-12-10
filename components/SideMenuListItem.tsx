import { Box, styled, Typography } from "@mui/material";
import React from "react";

interface SideMenuListItemProps {
  active?: boolean;
  icon: React.ReactNode;
  text: string;
}

const Text = styled(Typography)`
  padding-left: 1em;
`;

const Highlight = styled(Box)`
  background: #d95b5d;
  width: 3px;
  height: 20px;
  position: absolute;
  left: 5px;
`;

export const SideMenuListItem: React.FC<SideMenuListItemProps> = ({
  icon,
  text,
  active,
}) => {
  console.log(text);

  return (
    <>
      {active && <Highlight />}
      {icon}
      <Text variant="button">{text}</Text>
    </>
  );
};
