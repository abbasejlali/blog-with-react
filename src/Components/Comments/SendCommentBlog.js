import React, { useState } from "react";

// Mui
import {
  Avatar,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Button,
  Typography,
  IconButton,
  Divider,
  TextField,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Graph Ql
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../GraphQl/mutation";

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

const SendCommentBlog = ({ slug }) => {
  const today = new Date();
  const date1 = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  // send Comment
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  //   const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const [date, setDate] = useState("");

  const textHandeler = (e) => {
    setText(e.target.value);
  };

  const nameHandeler = (e) => {
    setName(e.target.value);
  };

  const dateeHandeler = (e) => {
    const date_main = String(`${year}-${month}-${date1}`);
    setDate(date_main);
  };

  const emailHandeler = (e) => {
    setEmail(e.target.value);
  };

  // get data and post data
  const [sendcomment, { data, loading, error }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
      date: date,
    },
  });

  if (data) {
    alert("نظرات با موفقیت ثبت شد و منتظر تایید می باشد");
    console.log(data);
  }

  const sendHandeler = () => {
    if (name && text && email) {
      sendcomment();
    } else {
      alert("لطفا همه ی فیلد ها را پر کنید");
    }
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
      {console.log(date)}
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
        }}
        mt={2}
      >
        <CssTextField
          id="custom-css-outlined-input"
          label="نام و نام خانوادگی"
          sx={{ width: "49%" }}
          value={name}
          onChange={nameHandeler}
        />
        <CssTextField
          id="custom-css-outlined-input"
          label="تاریخ"
          type="text"
          sx={{ width: "49%" }}
          value={date}
          onClick={dateeHandeler}
        />
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mt={2}
      >
        <CssTextField
          id="custom-css-outlined-input"
          label="ایمیل خود را وارد نمایید"
          fullWidth
          value={email}
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
    </>
  );
};

export default SendCommentBlog;
