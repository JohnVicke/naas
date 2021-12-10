import styled from "@emotion/styled";
import { Analytics, Apps, Home, People, Router } from "@mui/icons-material";
import { Drawer, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SideMenuListItem } from "./SideMenuListItem";

interface SideMenuProps {
  width: number;
}

interface StyledDrawerProps extends SideMenuProps {}

const StyledDrawer = styled(Drawer)<StyledDrawerProps>`
  & .MuiDrawer-paper {
    width: ${({ width }) => width}px;
  }
`;

export const SideMenu: React.FC<SideMenuProps> = ({ width }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const router = useRouter();
  const goTo = (route: string, params?: string) => {
    router.push(route, params);
  };

  const sideMenuList = [
    {
      active: false,
      icon: <Home />,
      text: "Home",
      route: "/",
      goToRoute: () => goTo("/"),
    },
    {
      active: false,
      icon: <Apps />,
      text: "Applications",
      route: "/applications",
      goToRoute: () => goTo("/applications"),
    },
    {
      active: false,
      icon: <People />,
      text: "Users",
      route: "/users",
      goToRoute: () => goTo("/users"),
    },
    {
      active: false,
      icon: <Analytics />,
      text: "Analytics",
      route: "/analytics",
      goToRoute: () => goTo("/analytics"),
    },
  ];

  return (
    <StyledDrawer
      width={width}
      variant="permanent"
      open={open}
      onClose={toggleOpen}
    >
      <Box display="flex" flexDirection="column">
        <List>
          {sideMenuList.map((item, i) => (
            <>
              <ListItem button onClick={item.goToRoute}>
                <SideMenuListItem
                  {...item}
                  key={item.text + i}
                  active={router.asPath === item.route}
                />
              </ListItem>
            </>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};
