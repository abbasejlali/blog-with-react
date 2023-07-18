import React from "react";

// Mui
import { Box, Grid, Typography, Tabs, Tab, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// Icons
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = (props) => {
  // Media Query
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));

  const dynamicStyles3 = {
    ...(matchesXS && {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    }),
  };

  return (
    <Box
      maxWidth="100%"
      sx={{
        background: "white",
        border: "1px solid #f2f2f2",
      }}
    >
      <Grid
        container
        px={4}
        pt={4}
        pb={1}
        sx={{
          ...dynamicStyles3,
          maxWidth: "100%",
          width: "100%",
          background: "white",
        }}
      >
        <Grid
          item
          xs={8}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
          width="100%"
        >
          <a
            href="https://t.me/abbas_ejlali"
            style={{
              color: "#666",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "#0088BB" },
            }}
            target="_blank"
          >
            <TelegramIcon />
          </a>
          <a
            href="https://www.instagram.com/abbas.ejlali1"
            style={{
              color: "#666",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "#E1306C" },
            }}
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://ir.linkedin.com/in/abbas-ejlali-30541520b?original_referer=https%3A%2F%2Fwww.google.com%2F"
            target="_blank"
            style={{
              color: "#666",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "#0077B5" },
            }}
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://wa.me/989199294036"
            style={{
              color: "#666",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "rgb(45, 183, 66)" },
            }}
            target="_blank"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="https://github.com/abbasejlali"
            style={{
              color: "#666",
              transition: "all ease 0.2s",
              cursor: "pointer",
              "&:hover": { color: "#4078c0" },
            }}
            target="_blank"
          >
            <GitHubIcon />
          </a>
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
            color="#666"
            component="h2"
            variant="h6"
            sx={{
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              wordSpacing: "1px",
            }}
          >
            کد نویسی با{" "}
            <Typography
              color="red"
              fontWeight="bold"
              component="span"
              variant="span"
              mx="3px"
            >
              ❤️
            </Typography>{" "}
            توسط{" "}
            <Typography
              fontWeight="bold"
              color="#666"
              component="a"
              variant="a"
              href="https://github.com/abbasejlali"
              ml="3px"
            >
              عباس اجلالی
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
