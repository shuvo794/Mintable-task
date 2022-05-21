import { Grid, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import {  AiOutlineReddit,AiFillTwitterCircle } from 'react-icons/ai';
import logo from '../../image/log.png'
import './Footer.css'
const Footer = () => {
    return (
        <Box className="footerStyle">
       
          <Grid container spacing={1}>
            <Grid item xs={12}  md={3}>
            <Box
            
             sx={{ textAlign: 
             "left",justifyContent:'center',
             alignItems:'center',
              ml: 5 }}>
                {" "}
                <Box
                  sx={{
                    color: "var(--color)",
                    display: "flex",
                    alignItems:'center',
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                 <img style={{marginRight:'10px'}}   src={logo} alt=''/>
                  {" "}
                  <Typography >
Mintable
  
  </Typography>
                </Box>{" "}
                <Typography variant="h6" sx={{  }}>
             Join our Community
             </Typography>
             <Box>
             <a
             style={{marginRight:'-10px'}}
                  target="blank"
                  href="#"
                >
                  <AiFillTwitterCircle className="footer-icons" />
                </a>
                <a style={{marginRight:'-10px'}} target="blank" href="#">
                  <AiOutlineReddit className="footer-icons" />
                </a>
                <a target="#">
                  <FaDiscord className="footer-icons" />
                </a>
             </Box>
              </Box>




              

             
            

            </Grid>
            <Grid  item xs={12}  md={1.5}>
            <List>
              <Typography variant="h6" >
                {" "}
                <Box
                  sx={{
                    color: "var(--color)",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  {/* {" "} */}
                  {" "}
                </Box>{" "}
                My Account
              </Typography>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px',}} href='#'>Create a Store</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>List an Item for Sale</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>  My Profile</a>
                   </ListItem>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'> Browse Digital Items</a>
                   </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12}  md={1.5}>
            <List>
              <Typography variant="h6" >
                {" "}
                <Box
                  sx={{
                    color: "var(--color)",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  {/* {" "} */}
                  {" "}
                </Box>{" "}
                Need Help?
              </Typography>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>Help and Support</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>FAQs</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>  Chat with Us</a>
                   </ListItem>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'> Contact Us</a>
                   </ListItem>
                   <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'> Seller's University</a>
                   </ListItem>
                   <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'> Editorial</a>
                   </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}  md={1.5}>
            <List>
              <Typography variant="h6" sx={{ textAlign: "left", ml: 1 }}>
                {" "}
                <Box
                  sx={{
                    color: "var(--color)",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  {/* {" "} */}
                  {" "}
                </Box>{" "}
                Buy an Item
              </Typography>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>Browse Digital Items</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>FAQs</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>  Browse Stores</a>
                   </ListItem>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'> Where to Buy NFTs</a>
                   </ListItem>
                   
                   
            </List>
          </Grid>
          <Grid item xs={12}  md={1.5}>
            <List>
              <Typography variant="h6" sx={{ textAlign: "left", ml: 1 }}>
                {" "}
                <Box
                  sx={{
                    color: "var(--color)",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  {/* {" "} */}
                  {" "}
                </Box>{" "}
                Go Pro
              </Typography>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>Pro Services</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>College Athletes</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>  NFTs</a>
                   </ListItem>
            
                   
                   
            </List>
          </Grid>
          <Grid item xs={12}  md={1.5}>
            <List>
              <Typography variant="h6" sx={{ textAlign: "left", ml: 1 }}>
                {" "}
                <Box
                  sx={{
                    color: "var(--color)",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  {/* {" "} */}
                  {" "}
                </Box>{" "}
                Resources
              </Typography>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>Press and Media</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>Seller's University</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>  Editorial</a>
                   </ListItem>
            
                   
                   
            </List>
          </Grid>
          <Grid item xs={12}  md={1.5}>
            <List>
              <Typography variant="h6" sx={{ textAlign: "left", ml: 1 }}>
                {" "}
                <Box
                  sx={{
                    color: "var(--color)",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  {/* {" "} */}
                  {" "}
                </Box>{" "}
                Legal
              </Typography>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>Privacy Policy</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff',fontSize:'12px',marginBottom:'-24px'}} href='#'>Terms of Use</a>
                   </ListItem>
              
            
                   
                   
            </List>
          </Grid>
          </Grid>
        
      </Box>
    );
};

export default Footer;