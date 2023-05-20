import React from "react";

// Mui
import { Box, Grid, Typography, Tabs, Tab } from "@mui/material";

// react router dom
import { Link } from "react-router-dom";

// Icons
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

function LinkTab(props) {
  return <Tab component="a" variant="h5" {...props} />;
}
const Footer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box maxWidth="100%" sx={{ bgcolor: "#666" }}>
      <Grid
        container
        p={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Grid item xs={12} md={4} lg={3}>
          <Typography
            component="h2"
            fontWeight="bold"
            color="#dadada"
            variant="h4"
          >
            وبلاگ اجلالی
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="صفحه اصلی" href="/" />
            <LinkTab label="نویسنده ها" href="/" />
            <LinkTab label="دسته بندی" href="/blogs/category" />
          </Tabs>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          lg={2}
          sx={{
            alignSelf: "end",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <a
            href="/https://www.telegram.org/abbas_ejlali"
            style={{ color: "#dadada" }}
            target="_blank"
          >
            <TelegramIcon />
          </a>
          <a
            href="/https://www.instagram.com/abbas_ejlali1"
            style={{ color: "#dadada" }}
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a
            href="/https://ir.linkedin.com/in/abbas-ejlali-30541520b?original_referer=https%3A%2F%2Fwww.google.com%2F"
            target="_blank"
            style={{ color: "#dadada" }}
          >
            <LinkedInIcon />
          </a>
          <a
            href="/https://wa.me/989199294036"
            style={{ color: "#dadada" }}
            target="_blank"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="/https://github.com/abbasejlali"
            style={{ color: "#dadada" }}
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
