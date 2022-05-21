import {  Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import p1 from '../../image/Mintable Academy/what_are.png'
import p2 from '../../image/Mintable Academy/create_store.png'
import p3 from '../../image/Mintable Academy/how_sell.png'
import p4 from '../../image/Mintable Academy/how_promote.png'
const MintableAcademy = () => {
    return (
        <Box sx={{  paddingTop: "20px" }}>
      <Container>
        <Box>
          <Typography
            sx={{ fontWeight: "bold", color: "#2D2D2D", paddingBottom: "10px", textAlign:'center' }}
            variant="h4"
          >
            {" "}
            Mintable Academy
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", color: "#2D2D2D", paddingBottom: "50px", textAlign:'center' }}
            variant="h6"
          >
          Learn how to use Mintable to buy/sell digital items and how to get paid for your digital collectables
          </Typography>
        </Box>

        <Box sx={{ paddingBottom: "50px" }}>

          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#c9c9ff",
                    alignItems: "center",
                    borderRadius: "100%",
                    boxShadow: "0 0.375rem 0.9375rem -0.25rem rgb(0 0 0 / 20%)",
                    display: "flex",
                    height: "7.5rem",
                    width: "7.5rem",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <img src={p1} alt="Nft cards" />
                </Box>
                <Typography
                  sx={{ fontWeight: "700", marginTop: "20px", textAlign:'center' }}
                  variant="subtitle2"
                >
                  <a style={{ color:'#000'}} href="#"> What are NFTs (digital items)?</a>
                 
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#c9c9ff",
                    alignItems: "center",
                    borderRadius: "100%",
                    boxShadow: "0 0.375rem 0.9375rem -0.25rem rgb(0 0 0 / 20%)",
                    display: "flex",
                    height: "7.5rem",
                    width: "7.5rem",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <img src={p2} alt="MA cards" />
                </Box>
                <Typography
                  sx={{ fontWeight: "700", marginTop: "20px" , textAlign:'center'}}
                  variant="subtitle2"
                >
                  <a href="#" style={{ color:'#000'}}>
                  How to create a store
                  </a>
                 
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#c9c9ff",
                    alignItems: "center",
                    borderRadius: "100%",
                    boxShadow: "0 0.375rem 0.9375rem -0.25rem rgb(0 0 0 / 20%)",
                    display: "flex",
                    height: "7.5rem",
                    width: "7.5rem",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <img src={p3} alt="Nft cards" />
                </Box>
                <Typography
                  sx={{ fontWeight: "700", marginTop: "20px", textAlign:'center' }}
                  variant="subtitle2"
                >
                  <a style={{ color:'#000'}} href="#">How to sell digital items</a>
                  
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#c9c9ff",
                    alignItems: "center",
                    borderRadius: "100%",
                    boxShadow: "0 0.375rem 0.9375rem -0.25rem rgb(0 0 0 / 20%)",
                    display: "flex",
                    height: "7.5rem",
                    width: "7.5rem",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <img src={p4} alt="Nft cards" />
                </Box>
                <Typography
                  sx={{ fontWeight: "700", marginTop: "20px", textAlign:'center' }}
                  variant="subtitle2"
                >
                 <a href="#" style={{ color:'#000'}}>  How to promote my items for sale?</a>

                </Typography>
              </Box>
            </Grid>
            
          </Grid>
         
          
        </Box>
        
       
      </Container>
    </Box>
    );
};

export default MintableAcademy;