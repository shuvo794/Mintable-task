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
          padding: "40px",
          borderRadius: "10px",
        }}
        sx={{ backgroundColor: "#975CF1" }}
        item
        xs={12}
        md={6}
      >
        <Typography
          sx={{ marginTop: "2px", fontWeight: "bold", textAlign: "center" }}
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
          <Box sx={{ textAlign: "center", width: "100%", marginTop: "10px" }}>
            <TextField
              id="standard-basic"
              label="Your Name"
              sx={{
                width: "100%",
                marginBottom: "8px",
                input: { border: "2px solid #fff", color: "#fff" },
              }}
            />
            <br />
            <TextField
              className="inputText"
              id="standard-basic"
              label="Your Email"
              type="text"
              sx={{
                width: "100%",
                marginBottom: "8px",
                input: {
                  border: "2px solid #fff",
                  color: "#fff",
                },
              }}
            />
          </Box>

          <Box sx={{ width: "30%", margin: "0px auto", padding: "10px 0px" }}>
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "#975CF1",
                width: "100%",
                padding: "10px 14px",
                fontSize: "16px",
              }}
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
