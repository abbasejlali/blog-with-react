import React from "react";

// function
import { fistename } from "../../js/function";

// Mui
import {
  Box,
  Grid,
  Typography,
  Divider,
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
  styled,
  Avatar,
} from "@mui/material";

// Mui Icons
import PersonIcon from "@mui/icons-material/Person";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ForumIcon from "@mui/icons-material/Forum";
import LogoutIcon from "@mui/icons-material/Logout";

// Redux
import { useSelector } from "react-redux";

// Graph QL
import { useQuery } from "@apollo/client";
import { GET_USER_DASHBOARD } from "../GraphQl/query";

// Customize Mui
const Customize_ListItemText = styled(ListItemText)({
  "& span": {
    fontWeight: "bold",
    color: "#666",
    fontSize: "15px !important",
  },
});

const DashboardUser = () => {
  // Redux
  const user_login = useSelector((state) => state.userState.user);

  // Get User
  const { loading, error, data } = useQuery(GET_USER_DASHBOARD, {
    variables: { email: user_login.email },
  });

  if (user_login.length === 0)
    return <Typography>شما هنوز وارد سایت نشدید!!!</Typography>;

  if (loading) return <Typography>Loading ...</Typography>;
  if (data)
    return (
      <Box
        maxWidth="100%"
        mx="auto"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid
          container
          spacing={2}
          mx="auto"
          my={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            xs={12}
            md={2.5}
            item
            sx={{
              minHeight: "fit-content",
              height: "100%",
              padding: "8px !important",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "rgb(233 233 233) 0px 8px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            mr={2}
          >
            <Avatar
              sx={{
                backgroundColor: "#BDBDBD",
                color: "#fff",
                fontWeight: "bold",
                width: "100px",
                height: "100px",
                fontSize: "3rem",
                marginBottom: "16px",
              }}
            >
              {fistename(data.person.userName)}
            </Avatar>
            <Typography
              component="span"
              sx={{ fontWeight: "bold" }}
              color="#666"
              variant="h6"
            >
              {data.person.userName}
            </Typography>
            <Typography component="span" color="#666" variant="span">
              {data.person.email}
            </Typography>
            <Divider variant="middle" sx={{ width: "100%" }} py={2} />
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton sx={{ borderRadius: "5px" }}>
                <ListItemIcon
                  sx={{
                    marginRight: "8px",
                    color: "#666",
                    minWidth: "fit-content !important",
                  }}
                >
                  <PersonIcon />
                </ListItemIcon>
                <Customize_ListItemText primary="حساب کاربری" />
              </ListItemButton>
              <ListItemButton sx={{ borderRadius: "5px" }}>
                <ListItemIcon
                  sx={{
                    marginRight: "8px",
                    color: "#666",
                    minWidth: "fit-content !important",
                  }}
                >
                  <TurnedInIcon />
                </ListItemIcon>
                <Customize_ListItemText primary="پست های مورد علاقه" />
              </ListItemButton>
              <ListItemButton sx={{ borderRadius: "5px" }}>
                <ListItemIcon
                  sx={{
                    marginRight: "8px",
                    color: "#666",
                    minWidth: "fit-content !important",
                  }}
                >
                  <PeopleAltIcon />
                </ListItemIcon>
                <Customize_ListItemText primary="نویسنده های مورد علاقه" />
              </ListItemButton>
              <ListItemButton sx={{ borderRadius: "5px" }}>
                <ListItemIcon
                  sx={{
                    marginRight: "8px",
                    color: "#666",
                    minWidth: "fit-content !important",
                  }}
                >
                  <ForumIcon />
                </ListItemIcon>
                <Customize_ListItemText primary="تیکت" />
              </ListItemButton>
              <ListItemButton sx={{ borderRadius: "5px" }}>
                <ListItemIcon
                  sx={{
                    marginRight: "8px",
                    color: "#ff6347",
                    minWidth: "fit-content !important",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <Customize_ListItemText
                  sx={{ color: "#ff6347" }}
                  primary="خروج"
                />
              </ListItemButton>
            </List>
          </Grid>
          <Grid
            xs={12}
            md={8.5}
            item
            sx={{
              height: "fit-content",
              padding: "16px !important",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "rgb(233 233 233) 0px 8px 24px",
            }}
            ml={2}
          >
            <Typography component="h6" variant="h6" fontWeight="bold">
              سلام {data.person.userName} عزیز❤️
            </Typography>
            <Typography component="span" variant="span">
              به پنل خودت خوش اومدی
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
};

export default DashboardUser;
