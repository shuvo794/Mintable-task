import React from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import {  FaGoogle,FaFacebook} from 'react-icons/fa';
import bg from '../../image/bg.png'

const Login = () => {
    const handelLogin=e=>{
        e.preventDefault()
      }
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={bg} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ marginTop: "10%", fontWeight: "bold", textAlign: "center" }}
            variant="h3"
            gutterBottom
          >
            Welcome Back
          </Typography>
          <Typography
            sx={{ marginTop: "5px", textAlign: "center" }}
            variant="subtitle1"
            gutterBottom
          >
            Start creating and selling NFTs with Mintable
          </Typography>
          <form onSubmit={handelLogin}>
            <Box sx={{ textAlign: "center", width: "100%", marginTop: "30px" }}>
              <TextField
                id="standard-basic"
                label="E-mail/Username"
                sx={{ width: "60%", marginBottom: "8px" }}
                variant="standard"
              />

              <TextField
                id="standard-basic"
                label="Password"
                sx={{ width: "60%", marginBottom: "8px" }}
                variant="standard"
              />
            </Box>

            <Box sx={{ width: "60%", margin: "0px auto" }}>
              <Button
                sx={{
                  backgroundColor: "#8858F4",
                  color: "#fff",
                  width: "100%",
                }}
                color="inherit"
                variant="contained"
              >
                Log in
              </Button>

              <Typography
                sx={{ textAlign: "center", margin: "10px 0px" }}
                variant="subtitle1"
              >
                Or
              </Typography>
            </Box>
            <Box sx={{ width: "80%", margin: "0px auto" }}>
              <Button
                sx={{
                  backgroundColor: "#DB4437",
                  color: "#fff",
                  padding: "6px",
                }}
                color="inherit"
                variant="contained"
              >
                <FaGoogle className="footer-icons" /> Google
              </Button>

              <Button
                sx={{
                  backgroundColor: "#4267B2",
                  color: "#fff",
                  marginLeft: "10px",
                  padding: "6px",
                }}
                color="inherit"
                variant="contained"
              >
                <FaFacebook className="footer-icons" /> Facebook
              </Button>
              <Typography
                sx={{ color: "gray", marginTop: "10px" }}
                variant="body1"
              >
                Already have an account?
              </Typography>
              <Button href="/login" sx={{ width: "60%", margin: "0px auto" }}>
                Login >
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    );
};

export default Login;