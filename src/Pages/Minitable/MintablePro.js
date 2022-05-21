import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import minitablePicture from "../../image/Mini-table/Minitable.png";
import crown from "../../image/Mini-table/crown.png";
import p1 from "../../image/Mini-table/p1.png";
import p2 from "../../image/Mini-table/p2.png";
import p3 from "../../image/Mini-table/p3.png";

const MintablePro = () => {
  const minitableBG = {
    background: `url(${minitablePicture})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    padding: "40px 0px 40px 0px",
    width: "100%",
    height: "100%",
    marginTop: "-24px",
  };

  return (
    <Box style={minitableBG}>
      <Container>
        <Box sx={{ background: "#fff", borderRadius: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px 0px",
            }}
          >
            <img src={crown} alt="Mini table pro" />
            <Typography
              sx={{
                marginLeft: "16px",
                fontWeight: "bold",
                color: "#2D2D2D",
                
              }}
              variant="h4"
            >
              Mintable Pro
            </Typography>
          </Box>

          <Box sx={{ paddingBottom: "50px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box>
                  <Box
                    sx={{
                      backgroundColor: "#c9c9ff",
                      alignItems: "center",
                      borderRadius: "100%",
                      boxShadow:
                        "0 0.375rem 0.9375rem -0.25rem rgb(0 0 0 / 20%)",
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
                    sx={{ fontWeight: "700", margin: "20px 0px", textAlign: "center", }}
                    variant="subtitle2"
                  >
                    Advertising
                  </Typography>
                  <Typography
                    sx={{ color: "#7D7D7D", textAlign: "center", }}
                    variant="body2"
                    gutterBottom
                  >
                    Get eyes on your items and increase total sales
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box>
                  <Box
                    sx={{
                      backgroundColor: "#c9c9ff",
                      alignItems: "center",
                      borderRadius: "100%",
                      boxShadow:
                        "0 0.375rem 0.9375rem -0.25rem rgb(0 0 0 / 20%)",
                      display: "flex",
                      height: "7.5rem",
                      width: "7.5rem",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                  >
                    <img src={p2} alt="Nft cards" />
                  </Box>
                  <Typography
                    sx={{ fontWeight: "700", margin: "20px 0px" , textAlign: "center",}}
                    variant="subtitle2"
                  >
                    Custom Stores
                  </Typography>
                  <Typography
                    sx={{ color: "#7D7D7D", textAlign: "center",  }}
                    variant="body2"
                    gutterBottom
                  >
                    Custom designed store pages just for you
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box>
                  <Box
                    sx={{
                      backgroundColor: "#c9c9ff",
                      alignItems: "center",
                      borderRadius: "100%",
                      boxShadow:
                        "0 0.375rem 0.9375rem -0.25rem rgb(0 0 0 / 20%)",
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
                    sx={{ fontWeight: "700", margin: "20px 0px" ,  textAlign: "center",}}
                    variant="subtitle2"
                  >
                    VIP Treatment
                  </Typography>
                  <Typography
                    sx={{ color: "#7D7D7D",  textAlign: "center", }}
                    variant="body2"
                    gutterBottom
                  >
                    24/7 customer service for all your Mintable needs
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              backgroundColor: "#FCBA17",
              padding: "8px 0",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
           <Box sx={{textAlign:'center'}}>
           <a
              style={{
                textDecoration: "none",
                color: "#550DED",
                fontSize: "20px",
                
              }}
              href="https://www"
            >
              Discover The Pro Plan
            </a>
           </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MintablePro;
