import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../image/bg.png'
import Box from '@mui/material/Box'
const SignUp = () => {
    return (
        <Box sx={{ width: '100%' }}>
        <Grid  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={7}>
        <img sx={{width:'100%'}} src={bg} alt='' />
          </Grid>
          <Grid item xs={6} md={5}>
           
          </Grid>
          
          
        </Grid>
      </Box>
    );
};

export default SignUp;