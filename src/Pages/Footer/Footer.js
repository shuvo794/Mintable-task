import { Button, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineReddit,AiFillTwitterCircle } from 'react-icons/ai';
import logo from '../../image/log.png'
import './Footer.css'
const Footer = () => {
    return (
        <Box className="footerStyle">
       
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
            <Typography
             variant="h6" 
             sx={{ textAlign: 
             "left",justifyContent:'center',
             alignItems:'center',
              ml: 5 }}>
                {" "}
                <Box
                  sx={{
                    color: "var(--color)",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                 <img  src={logo} alt=''/>
                  {" "}
                </Box>{" "}
                Mintable
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left", ml: 5 }}>
             Join our Community
             </Typography>

             <Box sx={{ ml: 5, mt: 1 }}>
                <a
                  target="blank"
                  href="#"
                >
                  <AiFillTwitterCircle className="footer-icons" />
                </a>
                <a target="blank" href="#">
                  <AiOutlineReddit className="footer-icons" />
                </a>
                <a target="#">
                  <FaDiscord className="footer-icons" />
                </a>
              </Box>
            

            </Grid>
            <Grid item xs={12} sm={6} md={2}>
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
                My Account
              </Typography>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff'}} href='#'>Create a Store</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff'}} href='#'>List an Item for Sale</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff'}} href='#'>  My Profile</a>
                   </ListItem>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff'}} href='#'> Browse Digital Items</a>
                   </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} sm={6} md={2}>
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
                Need Help?
              </Typography>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff'}} href='#'>Help and Support</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff'}} href='#'>FAQs</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff'}} href='#'>  Chat with Us</a>
                   </ListItem>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff'}} href='#'> Contact Us</a>
                   </ListItem>
                   <ListItem className="footer-links">
                   
                   <a style={{color:'#fff'}} href='#'> Seller's University</a>
                   </ListItem>
                   <ListItem className="footer-links">
                   
                   <a style={{color:'#fff'}} href='#'> Editorial</a>
                   </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
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
                   
                   <a style={{color:'#fff'}} href='#'>Browse Digital Items</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff'}} href='#'>FAQs</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff'}} href='#'>  Browse Stores</a>
                   </ListItem>
              <ListItem className="footer-links">
                   
                   <a style={{color:'#fff'}} href='#'> Where to Buy NFTs</a>
                   </ListItem>
                   
                   
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
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
                   
                   <a style={{color:'#fff'}} href='#'>Pro Services</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff'}} href='#'>College Athletes</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff'}} href='#'>  NFTs</a>
                   </ListItem>
            
                   
                   
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
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
                   
                   <a style={{color:'#fff'}} href='#'>Press and Media</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff'}} href='#'>Seller's University</a>
                   </ListItem>
              <ListItem className="footer-links">
                 
                   <a style={{color:'#fff'}} href='#'>  Editorial</a>
                   </ListItem>
            
                   
                   
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
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
                   
                   <a style={{color:'#fff'}} href='#'>Privacy Policy</a>
                   </ListItem>
              <ListItem className="footer-links">
                  
                   <a style={{color:'#fff'}} href='#'>Terms of Use</a>
                   </ListItem>
              
            
                   
                   
            </List>
          </Grid>
          </Grid>
        
      </Box>
    );
};

export default Footer;