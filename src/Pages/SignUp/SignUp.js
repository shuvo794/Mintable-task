import React from 'react';
import './SignUp.css'
import Grid from '@mui/material/Grid';
import bg from '../../image/bg.png'
import { Box,Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Checkbox from '@mui/material/Checkbox';
import {  FaGoogle,FaFacebook} from 'react-icons/fa';
// import bg from '../../image/background.png';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const steps = [
  'Password Strength',
  'Combination  ',
  'Mixture '
  
  
];
const SignUp = () => {
  const handelSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <img src={bg} alt="" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          sx={{ marginTop: "3px", fontWeight: "bold", textAlign: "center" }}
          variant="h3"
          gutterBottom
        >
          Create Account
        </Typography>
        <Typography
          sx={{ marginTop: "0px", textAlign: "center" }}
          variant="subtitle1"
          gutterBottom
        >
          Start creating and selling NFTs with Mintable
        </Typography>
        <form onSubmit={handelSignUp}>
          <Box sx={{ textAlign: "center", width: "100%", marginTop: "30px" }}>
            <TextField
              id="standard-basic"
              label="Username"
              sx={{ width: "60%", marginBottom: "5px" }}
              variant="standard"
            />
            <br />
            <TextField
              id="standard-basic"
              label="Email"
              sx={{ width: "60%", marginBottom: "5px" }}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Confirm Email"
              sx={{ width: "60%", marginBottom: "5px" }}
              variant="standard"
            />
            <br />
            <TextField
              id="standard-basic"
              label="Password"
              sx={{ width: "60%", marginBottom: "5px" }}
              variant="standard"
            />
            <br />
            <TextField
              id="standard-basic"
              label="Confirm Password"
              sx={{ width: "60%", marginBottom: "5px" }}
              variant="standard"
            />
          </Box>
          <Box sx={{ width: "60%", margin: "6px auto" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <Box sx={{ width: "60%", margin: "6px auto" }}>
            <Box sx={{ display: "flex", marginBottom: "6px" }}>
              <Checkbox {...label} Checked />
              <Typography variant="caption">
                By registering you agree with our{" "}
                <a href="#">terms and conditions</a> and{" "}
                <a href="#">privacy policy</a>.
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Checkbox {...label} Checked />
              <Typography variant="caption">
                Don't send me any emails, including when my NFTs sell or when I
                buy some
              </Typography>
            </Box>
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
              Create Account
            </Button>

            <Typography
              sx={{ textAlign: "center", margin: "0px 0px" }}
              variant="subtitle1"
            >
              Or
            </Typography>
          </Box>
          <Box sx={{ width: "80%", margin: "0px auto" }}>
            <Button
              // onClick={googleHandel}
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

export default SignUp;