import React, { useEffect, useState, useLayoutEffect } from "react";

// Mui
import {
  Box,
  Grid,
  Button,
  Typography,
  Snackbar,
  Alert,
  IconButton,
  Skeleton,
  Stack,
} from "@mui/material";

// Mui Icons
import CloseIcon from "@mui/icons-material/Close";
import WestIcon from "@mui/icons-material/West";

// img background
import background_blog from "../../asset/img/background-login1.jpg";

// customize Mui
import { CssTextField } from "../shared/CustomizeMui";

// Graph Ql
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../GraphQl/query";
import { GET_USER } from "../GraphQl/query";

// react router dom
import { Link, useNavigate } from "react-router-dom";

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
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  const handleClose5 = () => {
    setOpen5(false);
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

  // location
  const navigate = useNavigate();

  // Graph Ql
  const { loading, errors, data } = useQuery(GET_USERS);

  const loginHandeler = (e) => {
    if (data) {
      const users = data.persons;

      if (email === "" || pass === "") {
        setOpen2(true);
      }

      const validate_email = (email_txt) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email_txt);
      };

      if (email !== "" && pass !== "" && !validate_email(email)) {
        setOpen5(true);
      }

      if (
        email !== "" &&
        pass !== "" &&
        validate_email(email) &&
        !users.find((user) => user.email === email)
      ) {
        setOpen3(true);
      }

      if (users.find((user) => user.email === email)) {
        let user = users.find((user) => user.email === email);

        if (email === user.email && pass === user.password) {
          setUser_email_main(user.email);
          if (dataUser) setOpen(true);
        }

        if (
          pass !== "" &&
          email !== "" &&
          validate_email(email) &&
          pass !== user.password
        ) {
          setOpen4(true);
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
        if (!JSON.parse(localStorage.getItem("info_User")))
          localStorage.setItem(
            "info_User",
            JSON.stringify({
              email: dataUser.person.email,
            })
          );
        navigate(`/dashboard`);
        console.log(open);
      }
    }
  }, [dataUser]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  // Get email in loacolStorage
  const email_user = JSON.parse(localStorage.getItem("info_User"));
  const { data: dataUserLocal } = useQuery(GET_USER, {
    variables: {
      email: `${email_user && email_user.email}`,
    },
  });

  return (
    <>
      <Box
        maxWidth="100%"
        component="section"
        sx={{ backgroundColor: "white" }}
      >
        {console.log(dataUserLocal)}
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
            {!dataUserLocal ? (
              data ? (
                <>
                  <Box
                    sx={{
                      maxWidth: "340px",
                      width: "100%",
                      minHeight: "fit-content",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      style={{
                        color: "#666",
                        marginBottom: "16px",
                        alignSelf: "flex-start",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                      to="/"
                    >
                      بازگشت به خانه <WestIcon style={{ marginRight: "4px" }} />
                    </Link>

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
                            "&:hover": {
                              backgroundColor: "#68b36b  !important",
                            },
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
                  </Box>
                </>
              ) : (
                <Stack
                  sx={{
                    maxWidth: "340px",
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #f2f2f2",
                    borderRadius: "5px",
                    boxSizing: "bprder-box",
                  }}
                  spacing={2}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Skeleton
                      variant="text"
                      sx={{ marginRight: "8px" }}
                      width={70}
                    />
                    <Skeleton variant="text" width={70} />
                  </Box>
                  <Skeleton variant="rounded" width={312} height={56} />
                  <Skeleton variant="rounded" width={312} height={56} />
                  <Skeleton
                    variant="text"
                    sx={{ textAlign: "center" }}
                    width={120}
                  />
                  <Skeleton variant="rounded" width={312} height={46} />
                </Stack>
              )
            ) : dataUserLocal.person !== null ? (
              <Typography
                component="h6"
                variant="h6"
                color="#666"
                fontWeight="bold"
                sx={{ textAlign: "center !important" }}
              >
                شما قبلا وارد سایت شدید
                <br />
                <Link to="/" style={{ fontSize: "15px" }}>
                  بازگشت به خانه
                </Link>
              </Typography>
            ) : data ? (
              <>
                <Box
                  sx={{
                    maxWidth: "340px",
                    width: "100%",
                    minHeight: "fit-content",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    style={{
                      color: "#666",
                      marginBottom: "16px",
                      alignSelf: "flex-start",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                    to="/"
                  >
                    بازگشت به خانه <WestIcon style={{ marginRight: "4px" }} />
                  </Link>

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
                </Box>
              </>
            ) : (
              <Stack
                sx={{
                  maxWidth: "340px",
                  width: "100%",
                  padding: "12px",
                  border: "2px solid #f2f2f2",
                  borderRadius: "5px",
                  boxSizing: "bprder-box",
                }}
                spacing={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    variant="text"
                    sx={{ marginRight: "8px" }}
                    width={70}
                  />
                  <Skeleton variant="text" width={70} />
                </Box>
                <Skeleton variant="rounded" width={312} height={56} />
                <Skeleton variant="rounded" width={312} height={56} />
                <Skeleton
                  variant="text"
                  sx={{ textAlign: "center" }}
                  width={120}
                />
                <Skeleton variant="rounded" width={312} height={46} />
              </Stack>
            )}
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
        <Snackbar
          open={open2}
          autoHideDuration={3500}
          onClose={handleClose2}
          action={action}
        >
          <Alert onClose={handleClose2} severity="error" sx={{ width: "100%" }}>
            لطفا تمام فیلد ها رو پر کنید
          </Alert>
        </Snackbar>
        <Snackbar
          open={open3}
          autoHideDuration={3500}
          onClose={handleClose3}
          action={action}
        >
          <Alert onClose={handleClose3} severity="error" sx={{ width: "100%" }}>
            لطفا قبل از ورود ثبت نام کنید
          </Alert>
        </Snackbar>
        <Snackbar
          open={open4}
          autoHideDuration={3500}
          onClose={handleClose4}
          action={action}
        >
          <Alert onClose={handleClose4} severity="error" sx={{ width: "100%" }}>
            لطفارمز خود را بدرستی وارد نمایید
          </Alert>
        </Snackbar>
        <Snackbar
          open={open5}
          autoHideDuration={3500}
          onClose={handleClose5}
          action={action}
        >
          <Alert onClose={handleClose5} severity="error" sx={{ width: "100%" }}>
            لطفا ایمیل را صحیح وارد کنید
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Login;
