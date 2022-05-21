import React from "react";
import { Box, CardMedia, Grid } from "@mui/material";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/styles";

const Advicement = ({ adviceMent }) => {
  const { title,  img } = adviceMent;
  // const useStyles = makeStyles({
  //   CardBox: {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     padding: "35px 25px",
  //   },
  // });
  // const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={4} >
      <Box sx={{
        display:'flex',
        alignItems:'center',
        boxShadow:'10px 10px 20px 5px #eee',
        borderRadius:'10px',
        padding:'8px 20px',
      }} >
        <CardMedia
            style={{ width: "10%", height: "10%" }}
            component="img"
            image={img}
            alt="service talk"
          />
        <CardContent >
              <Typography sx={{color:"#000", marginTop:'12px'}}  gutterBottom variant="h5" component="div">
                {title}
              </Typography>
             
             
            </CardContent>
      </Box>
    </Grid>
  );
};

export default Advicement;
