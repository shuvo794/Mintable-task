import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import bg from '../../image/background.png'
import cardbg from '../../image/Cardbg.png'
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg={
background:`url(${bg})`,
backgroundColor:'#CECED2',
backgroundBlendMode:'soft-light',
backgroindPosition:'center center'

  }

  const verticalAlgin={
    display:'flex',
    alginItems:'center',
    hight:'450'
  }

const Banner = () => {
    return (
        <Box style={bannerBg} container  sx={{ flexGrow: 1 ,marginTop:'65px'}}>
         
       <Container>
       <Grid sx={{
         marginTop:'10px',
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         paddingTop:'20px'
      }} container spacing={2}>
          <Grid style={verticalAlgin} item xs={12} md={7}>
         <Box >
         <Typography sx={{color:'#550DED', fontWeight:'500'}} variant='h3'>
          Mint your NFT on the <br/>
           Blockchain for Free!
          </Typography>
          <br/>
<Typography variant="h6" sx={{textDecoration:'underline', color:'#7768E1'}}>
Find it. Buy it. Flip it.
</Typography>
<br/>
<Button sx={{background:'#550DED',width:'120px',color:'#fff', padding:'14px 24px', fontSize:'18px'}} >MINT</Button>
<Button sx={{background:'#5168E1',color:'#fff',marginLeft:'20px' ,width:'120px',  padding:'14px 24px' ,fontSize:'18px'}}>SHOP</Button>

         </Box>
          </Grid>
          <Grid item xs={12} md={5}>
          <Card sx={{ 
            
            marginBottom:'50px',  
            borderBottomLeftRadius:'20px',
          borderBottomRightRadius:'20px', 
          }}>
      <CardMedia
        component="img"
        // height="20%"
        // width='70%'
        image={bg}
        border='Rounded'
        alt=""
      />
      <Box sx={{
          display:'flex',
          alignItems:'center',
          padding:'20px 10px',
          justifyContent:'space-between'
         
        }}>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          
        }}>
        <CardMedia
       
       component="img"
        style={{width:'14%', height:'14%', borderRadius:'100%', marginRight:'14px' }}
        image={cardbg}
        border='Rounded'
        alt=""
      />
      <Typography>
         ziggy123
     </Typography>
        </Box>
        <Box>
        <Typography sx={{fontWeight:'bold'}} variant="body1">
        MURI [652] 
       </Typography>
       <Typography sx={{fontWeight:'900', textAlign:'end'}} variant="subtitle1">
       Ξ1.35
       </Typography>
        </Box>
      </Box>
      
     
    </Card>
           
          </Grid>
          
         
        </Grid>
       </Container>
      </Box>
    );
};

export default Banner;