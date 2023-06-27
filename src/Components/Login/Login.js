import React, { useEffect, useState } from "react";

// Mui
import {
  Box,
  Grid,
  Button,
  Typography,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";

// Mui Icons
import CloseIcon from "@mui/icons-material/Close";

// img background
import background_blog from "../../asset/img/background-login1.jpg";

// customize Mui
import { CssTextField } from "../shared/CustomizeMui";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../GraphQl/query";
import { GET_USER } from "../GraphQl/query";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { infouser } from "../../redux/users/usersActions";

// react router dom
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user_email_main, setUser_email_main] = useState("");

  const emailHandeler = (e) => {
    setEmail(e.target.value);
  };

  const passHandeler = (e) => {
    setPass(e.target.value);
  };

  // alert success to login

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  // Redux
  const dispatch = useDispatch();
  const info_user = useSelector((state) => state.userState);

  // location
  const navigate = useNavigate();

  // Graph Ql
  const { loading, errors, data } = useQuery(GET_USERS);

  const loginHandeler = (e) => {
    if (data) {
      const users = data.persons;
      // if (
      //   users.find((user) => user.email === email) &&
      //   users.find((user) => user.password === pass)
      // ) {
      //   let user = users.find((user) => user.email === email);
      //   dispatch(infouser(user));
      //   if (info_user.user) navigate("/");
      //   if (!JSON.parse(localStorage.getItem("infoUser")))
      //     localStorage.setItem(
      //       "infoUser",
      //       JSON.stringify({
      //         userName: info_user.user.userName,
      //         email: info_user.user.email,
      //         password: info_user.user.password,
      //       })
      //     );
      // }
      if (users.find((user) => user.email === email)) {
        let user = users.find((user) => user.email === email);
        console.log(user);
        if (email === user.email && pass === user.password) {
          setUser_email_main(user.email);
          setOpen(true);
        }
      }
    }
  };

  const {
    loading: loadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery(GET_USER, {
    variables: {
      email: `${user_email_main && user_email_main}`,
    },
  });

  useEffect(() => {
    if (dataUser) {
      if (dataUser.person) {
        dispatch(infouser(dataUser.person));
        navigate(`/dashboard`);
        console.log(open);
      }
    }
  }, [dataUser]);

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("infoUser"))) {
  //     const get_info_user = JSON.parse(localStorage.getItem("infoUser"));
  //     setEmail(get_info_user.email);
  //     setPass(get_info_user.password);
  //   }
  // }, []);

  return (
    <>
      <Box
        maxWidth="100%"
        component="section"
        sx={{ backgroundColor: "white" }}
      >
        <Grid
          container
          sx={{
            height: "100vh",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              sx={{
                maxWidth: "340px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "12px",
                border: "2px solid #f2f2f2",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  maxWidth: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    borderBottom: "2px solid #f2f2f2",
                    fontWeight: "bold",
                    color: "#666",
                    cursor: "pointer",
                    padding: "0  10px 5px 10px",
                    "&:hover": { borderBottom: "2px solid #43a047" },
                    transition: "all 0.3s ease",
                  }}
                >
                  ورود
                </Typography>
                <Typography
                  sx={{
                    borderBottom: "2px solid #f2f2f2",
                    fontWeight: "bold",
                    color: "#666",
                    cursor: "pointer",
                    padding: "0  10px 5px 10px",
                    "&:hover": { borderBottom: "2px solid #43a047" },
                    transition: "all 0.3s ease",
                  }}
                >
                  ثبت نام
                </Typography>
              </Box>
              <Box
                sx={{
                  maxWidth: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                mt={2}
              >
                <CssTextField
                  id="custom-css-outlined-input"
                  label="ایمیل خود را وارد نمایید"
                  fullWidth
                  value={email}
                  sx={{ width: "100%" }}
                  onChange={emailHandeler}
                />
                <CssTextField
                  id="custom-css-outlined-input"
                  label="رمز خود را وارد کنید"
                  fullWidth
                  type="password"
                  value={pass}
                  sx={{ width: "100%", marginTop: "16px" }}
                  onChange={passHandeler}
                />
                <Typography
                  component="a"
                  variant="h6"
                  color="#666"
                  sx={{
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "color 0.4s ease",
                    "&:hover": { color: "blue" },
                    alignSelf: "flex-start",
                  }}
                  my={2}
                >
                  رمز خود را فراموش کردید؟
                </Typography>
                <Button
                  sx={{
                    maxWidth: "100%",
                    width: "100%",
                    backgroundColor: "#43a047",
                    "&:hover": { backgroundColor: "#68b36b  !important" },
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                  onClick={loginHandeler}
                >
                  ورود به سایت
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              height: "100%",
            }}
            item
            xs={12}
            md={6}
          >
            <img
              src={background_blog}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="background-blog"
            />
          </Grid>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={3500}
          onClose={handleClose}
          action={action}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            با موفقیت وارد شدید
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Login;
