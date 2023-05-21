import React from "react";

// Mui
import { Box, Grid, Typography, Tabs, Tab, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// react router dom
import { Link } from "react-router-dom";

// Icons
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      variant="h6"
      sx={{ fontSize: "16px", fontWeight: "bold", color: "#dadada !important" }}
      {...props}
    />
  );
}
const Footer = (props) => {
  // Media Query
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const dynamicStyles = {
    ...(matchesXS && { mb: "1rem" }),
    ...(matchesMD && { mb: "0rem" }),
  };
  const dynamicStyles2 = {
    ...(matchesXS && { display: "none" }),
    ...(matchesSM && { display: "flex" }),
  };
  const dynamicStyles3 = {
    ...(matchesXS && {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    ...(matchesMD && {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }),
  };
  const dynamicStyles4 = {
    ...(matchesXS && { alignSelf: "center", width: "100%" }),
    ...(matchesMD && { alignSelf: "end" }),
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box maxWidth="100%" sx={{ background: "#666" }}>
      <Grid
        container
        px={4}
        pt={4}
        pb={1}
        sx={{
          ...dynamicStyles3,
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <Grid item xs={12} md={4} lg={2} sx={{ ...dynamicStyles }}>
          <Typography
            component="h2"
            fontWeight="bold"
            color="#dadada"
            variant="h4"
          >
            وبلاگ اجلالی
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{ ...dynamicStyles, ...dynamicStyles2 }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="صفحه اصلی" href="#" />
            <LinkTab label="نویسنده ها" href="#" />
            {/* href="/blogs/category" */}
            <LinkTab label="دسته بندی" href="#" />
          </Tabs>
        </Grid>
        <Grid
          item
          xs={8}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            ...dynamicStyles4,
          }}
        >
          <Typography
            coponent="a"
            variant="h6"
            href="/https://www.telegram.org/abbas_ejlali"
            sx={{
              color: "#dadada",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "#0088BB" },
            }}
            target="_blank"
          >
            <TelegramIcon />
          </Typography>
          <Typography
            coponent="a"
            variant="h6"
            href="/https://www.instagram.com/abbas_ejlali1"
            sx={{
              color: "#dadada",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "#E1306C" },
            }}
            target="_blank"
          >
            <InstagramIcon />
          </Typography>
          <Typography
            coponent="a"
            variant="h6"
            href="/https://ir.linkedin.com/in/abbas-ejlali-30541520b?original_referer=https%3A%2F%2Fwww.google.com%2F"
            sx="_blank"
            sx={{
              color: "#dadada",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "#0077B5" },
            }}
          >
            <LinkedInIcon />
          </Typography>
          <Typography
            coponent="a"
            variant="h6"
            href="/https://wa.me/989199294036"
            sx={{
              color: "#dadada",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "rgb(45, 183, 66)" },
            }}
            target="_blank"
          >
            <WhatsAppIcon />
          </Typography>
          <Typography
            coponent="a"
            variant="h6"
            href="/https://github.com/abbasejlali"
            sx={{
              color: "#dadada",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "#4078c0" },
            }}
            target="_blank"
          >
            <GitHubIcon />
          </Typography>
        </Grid>
        <Grid
          item
          pt={2}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color="#dadada"
            component="h2"
            variant="h6"
            sx={{ fontSize: "14px" }}
          >
            کدنویسی با <span style={{ color: "red" }}>&#x2764;</span> توسط عباس
            اجلالی
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
