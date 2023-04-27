import React from "react";

// Mui
import {
  AppBar,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Drawer,
} from "@mui/material";

// ICons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Groups2Icon from "@mui/icons-material/Groups2";
import TuneIcon from "@mui/icons-material/Tune";

// react-router-dom
import { Link } from "react-router-dom";

const Header = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const listMenu = ["صفحه اصلی", "نویسنده ها", "دسته بندی"];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listMenu.map((text, index) => (
          <React.Fragment key={text}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#666" }}>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <Groups2Icon />}
                  {index === 2 && <TuneIcon />}
                </ListItemIcon>
                {index === 0 && (
                  <>
                    <Link to="/" style={{ color: "#666", marginBottom: "4px" }}>
                      <ListItemText
                        primary={text}
                        color="#666"
                        sx={{ fontWeight: "700 !important" }}
                      />
                    </Link>
                  </>
                )}
                {index === 1 && (
                  <>
                    <Link
                      to="/authors"
                      style={{ color: "#666", marginBottom: "4px" }}
                    >
                      <ListItemText
                        primary={text}
                        color="#666"
                        sx={{ fontWeight: "bold !important" }}
                      />
                    </Link>
                  </>
                )}
                {index === 2 && (
                  <>
                    <Link
                      to="/category"
                      style={{ color: "#666", marginBottom: "4px" }}
                    >
                      <ListItemText
                        primary={text}
                        color="#666"
                        sx={{ fontWeight: "bold !important" }}
                      />
                    </Link>
                  </>
                )}
              </ListItemButton>
            </ListItem>
            {index !== listMenu.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box maxWidth="100%">
        <AppBar
          position="sticky"
          sx={{
            boxShadow: "0 3px 6px 0 hsl(0deg 0% 51.8% / 15%)",
            backgroundColor: "white !important",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={toggleDrawer("right", true)}
              size="large"
              edge="start"
              color="white"
            >
              <MenuIcon
                sx={{
                  color: "#666",
                  fontWeight: "bold",
                  width: "35px",
                  height: "35px",
                }}
              />
            </IconButton>
            <Typography
              component="h1"
              mb="4px"
              variant="h6"
              color="#666"
              pl="12px"
            >
              وبلاگ اجلالی
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default Header;
