import React from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import "./JoinOurTeam.css";
const JoinOurTeam = () => {
  const handelLogin = (e) => {
    e.preventDefault();
  };
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      container
      spacing={2}
    >
      <Grid
        style={{
          marginTop: "-150px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        sx={{ backgroundColor: "#975CF1" }}
        item
        xs={12}
        md={6}
      >
        <Typography
          sx={{ marginTop: "10%", fontWeight: "bold", textAlign: "center" }}
          variant="h3"
          gutterBottom
        >
          Join Our Newsletter
        </Typography>
        <Typography
          sx={{ marginTop: "5px", textAlign: "center" }}
          variant="subtitle1"
          gutterBottom
        >
          To get updated on new NFTs, Exclusive Drops, Live Auctions and more!
        </Typography>
        <form onSubmit={handelLogin}>
          <Box sx={{ textAlign: "center", width: "100%", marginTop: "30px" }}>
            <TextField
              id="standard-basic"
              label="Your Name"
              sx={{ width: "70%", marginBottom: "8px" }}
            />

            <TextField
              id="standard-basic"
              label="Your Email"
              sx={{ width: "70%", marginBottom: "8px", color: "#fff" }}
            />
          </Box>

          <Box sx={{ width: "60%", margin: "0px auto" }}>
            <Button
              sx={{ backgroundColor: "#fff", color: "#975CF1", width: "100%" }}
              color="inherit"
              variant="contained"
            >
              Join
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default JoinOurTeam;
