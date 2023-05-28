import React, { useEffect, useRef, useState } from "react";
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
  Grid,
  TextField,
  Button,
  Slide,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// ICons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Groups2Icon from "@mui/icons-material/Groups2";
import TuneIcon from "@mui/icons-material/Tune";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";

// react-router-dom
import { Link } from "react-router-dom";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../GraphQl/query";

// CardElement SearchBox
import CardBoxSearch from "../Card/CardBoxSearch";

const Header = () => {
  const [isfocus, setIsfocus] = useState(false);

  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));

  const cardXS = {
    ...(matchesXS && {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    }),
  };

  const cardSM = {
    ...(matchesSM && {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
    }),
  };

  const formXS = {
    ...(matchesXS && {
      maxWidth: "100vw",
    }),
  };

  const formSM = {
    ...(matchesSM && {
      maxWidth: "60vw",
    }),
  };

  const { data } = useQuery(GET_POSTS);
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
  const [open, setOpen] = useState(false);
  const searchBox = useRef();

  useEffect(() => {
    open &&
      document.addEventListener("keydown", (e) => {
        e.key === "Escape" && setOpen(false);
      });
  }, [open]);

  const [search, setSearch] = useState("");

  const searchHandeler = (e) => {
    setSearch(e.target.value);
  };

  const focusHandeler = () => {
    setIsfocus(true);
  };
  return (
    <>
      <Box maxWidth="100%" position="sticky" sx={{ top: 0, zIndex: "999" }}>
        <AppBar
          sx={{
            boxShadow: "0 3px 6px 0 hsl(0deg 0% 51.8% / 15%)",
            backgroundColor: "white !important",
            position: "unset !important",
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

            <IconButton size="large" color="white">
              <ManageSearchIcon
                onClick={() => setOpen(true)}
                style={{ fontSize: "35px", color: "#666" }}
              />
            </IconButton>
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

      <Slide direction="up" in={open}>
        <Box
          maxWidth="100%"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            transition: "all 0.4s ease",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: "9999",
            backgroundColor: "#f2f2f2",
            overflowY: "scroll",
          }}
          ref={searchBox}
        >
          <Grid container height="100%">
            <Grid item xs={12} height="fit-content">
              <IconButton
                size="large"
                color="white"
                onClick={() => setOpen(false)}
              >
                <CloseIcon style={{ fontSize: "35px", color: "#666" }} />
              </IconButton>
            </Grid>
            <Grid item xs={12} height="fit-content">
              <Box
                sx={{
                  minHeight: "fit-content",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Typography
                  mb={5}
                  mt={3}
                  component="h4"
                  variant="h6"
                  color="#666"
                >
                  <Typography
                    component="span"
                    fontWeight="bold"
                    ml="3px"
                    variant="h6"
                    color="#ff4c60"
                  >
                    Esc
                  </Typography>
                  را فشار دهید تا بسته شود
                </Typography>
                <Box
                  component="form"
                  sx={{ px: 5, ...formXS, ...formSM, width: "100%" }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    type="search"
                    variant="standard"
                    placeholder="شروع به جستجو کنید ..."
                    fullWidth
                    fontWeight="bold"
                    onChange={searchHandeler}
                    value={search}
                    onFocus={focusHandeler}
                  />
                  {search === "" && isfocus && (
                    <Typography
                      component="span"
                      variant="span"
                      fontWeight="bold"
                      color="#ff4c60"
                    >
                      شما هنوز جست جویی انجام ندادید
                    </Typography>
                  )}
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      ...cardXS,
                      ...cardSM,
                      maxWidth: "100%",
                      width: "100%",
                    }}
                    my={3}
                  >
                    {data &&
                      search &&
                      data.posts
                        .filter((post) => post.title.includes(search))
                        .map((post) => (
                          <CardBoxSearch key={post.id} {...post} />
                        ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} height="fit-content" pb={5}>
              <Typography
                component="h4"
                variant="h6"
                sx={{ textAlign: "center", color: "#666" }}
              >
                یا دسته بندی های محبوب ما را بررسی کنید...
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                mt={2}
              >
                <Link
                  to="/blogs/category/programming"
                  style={{
                    color: "#666",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Button
                    disabled={false}
                    size="medium"
                    variant="elevated"
                    sx={{
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "#f2f2f2" },
                    }}
                  >
                    <CircleIcon
                      style={{
                        fontSize: "10px",
                        marginLeft: "4px",
                        color: "#49dfd4",
                      }}
                    />{" "}
                    برنامه نویسی
                  </Button>
                </Link>
                <Link
                  to="/blogs/category/technology"
                  style={{
                    color: "#666",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Button
                    disabled={false}
                    size="medium"
                    variant="elevated"
                    sx={{
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "#f2f2f2" },
                    }}
                  >
                    <CircleIcon
                      style={{
                        fontSize: "10px",
                        marginLeft: "4px",
                        color: "#85b2f4",
                      }}
                    />{" "}
                    تکنولوژی
                  </Button>
                </Link>
                <Link
                  to="/blogs/category/digital-world"
                  style={{ color: "#666", fontWeight: "bold" }}
                  onClick={() => setOpen(false)}
                >
                  <Button
                    disabled={false}
                    size="medium"
                    variant="elevated"
                    sx={{
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "#f2f2f2" },
                    }}
                  >
                    <CircleIcon
                      style={{
                        fontSize: "10px",
                        marginLeft: "4px",
                        color: "#c5c5fe",
                      }}
                    />{" "}
                    دنیای دیجیتال
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Slide>
    </>
  );
};

export default Header;
