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
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";

// react-router-dom
import { Link } from "react-router-dom";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_POSTS, GET_USER } from "../GraphQl/query";

// CardElement SearchBox
import CardBoxSearch from "../Card/CardBoxSearch";

const Header = () => {
  // Media Query in Mui
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  const cardXS = {
    ...(matchesXS && {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    }),
  };

  const headerPaddingXS = {
    ...(matchesXS && {
      padding: "0 16px !important",
    }),
  };

  const headerPaddingSM = {
    ...(matchesSM && {
      padding: "0 36px !important",
    }),
  };

  const IconMenuXS = {
    ...(matchesXS && {
      display: "flex",
    }),
  };
  const IconMenuMD = {
    ...(matchesMD && {
      display: "none",
    }),
  };

  const TitleMenuXS = {
    ...(matchesXS && {
      display: "none",
    }),
  };
  const TitleMenuMD = {
    ...(matchesMD && {
      display: "flex",
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
  // Get data by GrapgQl
  const { data } = useQuery(GET_POSTS);

  // Mobile Menu in Mui
  const [state, setState] = React.useState({
    left: false,
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
  const listMenu = ["صفحه اصلی", "نویسنده ها", "دسته بندی", "جستجو کن"];
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
                  {index === 3 && <ManageSearchIcon />}
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
                {index === 3 && (
                  <>
                    <ListItemText
                      onClick={() => setOpen(true)}
                      primary={text}
                      color="#666"
                      sx={{
                        fontWeight: "bold !important",
                        marginBottom: "4px",
                      }}
                    />
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

  // beting in search box
  const [open, setOpen] = useState(false);
  const searchBox = useRef();

  useEffect(() => {
    open &&
      document.addEventListener("keydown", (e) => {
        e.key === "Escape" && setOpen(false);
      });
    if (open) document.body.style.overflowY = "hidden";
    if (!open) document.body.style.overflowY = "scroll";
  }, [open]);

  const [search, setSearch] = useState("");

  const closeHandeler = () => {
    setOpen(false);
    setSearch("");
  };
  const searchHandeler = (e) => {
    setSearch(e.target.value);
  };
  const [isfocus, setIsfocus] = useState(false);

  const focusHandeler = () => {
    setIsfocus(true);
  };

  const blurHandeler = () => {
    setIsfocus(false);
  };

  // Get User in LocalStorage
  const email_user = JSON.parse(localStorage.getItem("info_User"));

  // Graph Ql after login to site
  const { data: dataUser, loading: loadingUser } = useQuery(GET_USER, {
    variables: {
      email: `${email_user && email_user.email}`,
    },
  });

  return (
    <>
      <Box maxWidth="100%">
        <AppBar
          sx={{
            backgroundColor: "white !important",
            position: "unset !important",
            borderBottom: "1px solid #f2f2f2",
            boxShadow: "unset !important",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ...headerPaddingXS,
              ...headerPaddingSM,
            }}
          >
            <IconButton
              onClick={toggleDrawer("left", true)}
              size="large"
              edge="start"
              color="white"
              sx={{ padding: "8px", ...IconMenuXS, ...IconMenuMD }}
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
            <Link
              to="/"
              style={{ color: "#666", ...TitleMenuXS, ...TitleMenuMD }}
            >
              <Typography component="h1" mb="4px" variant="h6" color="#666">
                وبلاگ اجلالی
              </Typography>
            </Link>

            <Box
              component="ui"
              variant="ui"
              sx={{ ...TitleMenuXS, ...TitleMenuMD, mb: "5px" }}
            >
              <Box component="li" variant="li">
                <Link to="/">
                  <Button
                    sx={{
                      color: "#666",
                      "&:hover": { backgroundColor: "#f2f2f2 !important" },
                      fontSize: "16px",
                    }}
                  >
                    صفحه اصلی
                  </Button>
                </Link>
              </Box>

              <Box component="li" variant="li">
                <Link to="/authors">
                  <Button
                    sx={{
                      color: "#666",
                      "&:hover": { backgroundColor: "#f2f2f2 !important" },
                      fontSize: "16px",
                    }}
                  >
                    نویسنده ها
                  </Button>
                </Link>
              </Box>

              <Box component="li" variant="li">
                <Link to="/category">
                  <Button
                    sx={{
                      color: "#666",
                      "&:hover": { backgroundColor: "#f2f2f2 !important" },
                      fontSize: "16px",
                    }}
                  >
                    دسته بندی ها
                  </Button>
                </Link>
              </Box>

              <Box component="li" variant="li">
                <Button
                  sx={{
                    color: "#666",
                    "&:hover": { backgroundColor: "#f2f2f2 !important" },
                    fontSize: "16px",
                  }}
                  onClick={() => setOpen(true)}
                >
                  جستجو کن
                </Button>
              </Box>
            </Box>
            {!dataUser ? (
              <Link
                to="/login"
                style={{
                  backgroundColor: "#f2f2f2",
                  borderRadius: "10px",
                  padding: "6px 13px ",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LoginIcon style={{ fontSize: "31.5px", color: "#666" }} />
                <Typography
                  component="span"
                  variant="span"
                  sx={{ color: "#666", ml: "2px" }}
                >
                  ورود
                </Typography>
              </Link>
            ) : dataUser.person !== null ? (
              <Link
                to={`/dashboard`}
                style={{
                  backgroundColor: "#f2f2f2",
                  borderRadius: "10px",
                  padding: "5px 8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="span"
                  variant="span"
                  sx={{ color: "#666", mr: "2px" }}
                >
                  {loadingUser ? "Loading..." : dataUser.person.userName}
                </Typography>
                <PersonIcon style={{ fontSize: "31.5px", color: "#666" }} />
              </Link>
            ) : (
              dataUser.person === null && (
                <Link
                  to="/login"
                  style={{
                    backgroundColor: "#f2f2f2",
                    borderRadius: "10px",
                    padding: "6px 13px ",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LoginIcon style={{ fontSize: "31.5px", color: "#666" }} />
                  <Typography
                    component="span"
                    variant="span"
                    sx={{ color: "#666", ml: "2px" }}
                  >
                    ورود
                  </Typography>
                </Link>
              )
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>

      {/* Search Box Home Page */}
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
              <IconButton size="large" color="white" onClick={closeHandeler}>
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
                  sx={{ px: 2.5, ...formXS, ...formSM, width: "100%" }}
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
                    onBlur={blurHandeler}
                  />

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
                    data.posts.find((post) => post.title.includes(search))
                      ? data.posts
                          .filter((post) => post.title.includes(search))
                          .map((post) => (
                            <CardBoxSearch
                              setopen={setOpen}
                              key={post.id}
                              {...post}
                            />
                          ))
                      : isfocus &&
                        search !== "" && (
                          <Typography
                            component="span"
                            fontWeight="bold"
                            color="#ff4c60"
                            variant="span"
                          >
                            متاسفانه مطلبی یافت نشد !!!
                          </Typography>
                        )}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} height="fit-content" pb={5}>
              <Typography
                component="h4"
                variant="h6"
                sx={{ textAlign: "center !important", color: "#666" }}
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
