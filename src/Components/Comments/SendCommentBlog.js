import React, { useEffect, useState, useRef } from "react";

// Mui
import {
  Box,
  Button,
  Typography,
  TextField,
  styled,
  IconButton,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

// Graph Ql
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../GraphQl/mutation";

// Mui Icons
import { MutatingDots } from "react-loader-spinner";
import CloseIcon from "@mui/icons-material/Close";

// jalaali
import jalaali from "jalaali-js";

// toast
import { ToastContainer, toast } from "react-toastify";

// Customize Mui Textfield
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "3px solid #f2f2f2 ",
    },

    "&.Mui-focused fieldset": {
      border: "3px solid #666 ",
    },
  },
  "& .muirtl-flo563-MuiFormLabel-root-MuiInputLabel-root": {
    color: "#666 !important",
    fontSize: "14px",
  },
  "& .muirtl-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "#666 !important",
  },
  "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "#666 !important",
  },
});

// Mui toast
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SendCommentBlog = ({ slug }) => {
  const today = new Date();

  // data for send Comment
  const [text, setText] = useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [isvalidateemail, setIsvalidateemail] = useState(false);

  const [date, setDate] = useState("");

  const textHandeler = (e) => {
    setText(e.target.value);
  };

  const nameHandeler = (e) => {
    setName(e.target.value);
  };

  const emailHandeler = (e) => {
    const newemail = e.target.value;
    setEmail(newemail);
    setIsvalidateemail(validateemail(newemail));
  };

  const validateemail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const { jy, jm, jd } = jalaali.toJalaali(today);

    setDate(`${jy}-${jm}-${jd}`);
  }, []);

  // build toast by Mui

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };
  const handleClose3 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen3(false);
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

  const action2 = (
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

  const action3 = (
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
  // get data and post data
  const [sendcomment, { data, loading, error }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
      date,
    },
  });

  useEffect(() => {
    if (data) {
      setOpen(true);
    }
  }, [data]);

  const sendHandeler = (e) => {
    if (name && text && email && isvalidateemail) {
      sendcomment();
    }

    if (name === "" || text === "" || email === "") {
      setOpen2(true);
    }

    if (name && text && email && !isvalidateemail) setOpen3(true);
  };
  return (
    <>
      <Typography
        component="h4"
        variant="h5"
        color="#666"
        fontWeight="bold"
        mb={3}
      >
        ثبت دیدگاه
      </Typography>
      <Box sx={{ width: "100%", height: "100%" }}>
        <CssTextField
          label="لطفا نظر خود را وارد نمایید ..."
          id="custom-css-outlined-input"
          fullWidth
          multiline
          rows={4}
          value={text}
          onChange={textHandeler}
        />
        <Box
          sx={{
            maxWidth: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: `${loading && "0.3"}`,
            position: "relative",
          }}
          mt={2}
        >
          {loading && (
            <Box
              sx={{
                zIndex: "99",
                position: "absolute",
                top: "-50%",
                right: "50%",
                transform: "translateX(50%) translateY(-50%)",
              }}
            >
              <MutatingDots
                height="100"
                width="100"
                color="#666"
                secondaryColor="#666"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </Box>
          )}
          <CssTextField
            id="custom-css-outlined-input"
            label="نام و نام خانوادگی"
            sx={{ width: "49%" }}
            value={name}
            onChange={nameHandeler}
          />
          <CssTextField
            id="custom-css-outlined-input"
            label="ایمیل خود را وارد نمایید"
            fullWidth
            value={email}
            sx={{ width: "49%" }}
            onChange={emailHandeler}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#00e676",
            "&:hover": {
              backgroundColor: "#00c853 !important",
            },
            fontWeight: "bold",
            alignSelf: "flex-start",
            marginTop: "16px",
          }}
          onClick={sendHandeler}
        >
          ثبت دیدگاه
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          رفیق ، نظرت ثبت شد و منتظر تایید مدیره
        </Alert>
      </Snackbar>

      <Snackbar
        open={open2}
        autoHideDuration={6000}
        onClose={handleClose2}
        action={action2}
      >
        <Alert onClose={handleClose2} severity="error" sx={{ width: "100%" }}>
          لطفا همه فیلد ها رو پر کن
        </Alert>
      </Snackbar>

      <Snackbar
        open={open3}
        autoHideDuration={6000}
        onClose={handleClose3}
        action={action3}
      >
        <Alert onClose={handleClose3} severity="error" sx={{ width: "100%" }}>
          لطفا ایمیل رو بدرستی پر کن
        </Alert>
      </Snackbar>
      {console.log(validateemail())}
    </>
  );
};

export default SendCommentBlog;
