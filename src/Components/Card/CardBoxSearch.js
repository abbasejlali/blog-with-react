import React from "react";

// Mui
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardBoxSearch = ({ title, slug, coverphoto, author }) => {
  // Media Query in Mui
  const theme = useTheme();
  const MatchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const MatchesSM = useMediaQuery(theme.breakpoints.up("sm"));
  const MatchesMD = useMediaQuery(theme.breakpoints.up("md"));

  const sizeXS = {
    ...(MatchesXS && {
      width: "65%",
    }),
  };
  const sizeSM = {
    ...(MatchesSM && {
      width: "45%",
    }),
  };
  const sizeMD = {
    ...(MatchesMD && {
      width: "30%",
    }),
  };
  return (
    <>
      <Grid item sx={{ ...sizeXS, ...sizeSM, ...sizeMD }} mb={2}>
        <Card
          sx={{
            maxWidth: "100%",
            width: "100%",
            boxShadow: "0px 2px 15px 1px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Link
            style={{ maxWidth: "100%", width: "100%" }}
            to={`/blogs/${slug}`}
          >
            <CardMedia
              component="img"
              height="100"
              image={coverphoto.url}
              alt={title}
            />
            <CardContent p={1}>
              <Typography
                variant="h6"
                component="div"
                fontWeight="bold"
                color="#666"
                fontSize="16px"
                pb={1}
                sx={{
                  whiteSpace: "nowrap",
                  overflowX: "scroll",
                  "&::-webkit-scrollbar": {
                    width: "80%",
                    height: "7px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: `${
                      title.length > 20 ? "#f2f2f2" : "#fff"
                    }`,
                    borderRadius: "25px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: `${title.length > 20 ? "#666" : "#fff"}`,
                    borderRadius: "25px",
                  },
                }}
              >
                {title}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Grid>
    </>
  );
};

export default CardBoxSearch;
