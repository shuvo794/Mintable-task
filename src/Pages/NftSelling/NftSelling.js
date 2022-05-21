import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import p1 from "../../image/NFT-Images/p1.png";
import p2 from "../../image/NFT-Images/p2.png";
import p3 from "../../image/NFT-Images/p3.png";

const NftSelling = () => {
  return (
    <Box sx={{ background: "#D4D4EB", paddingTop: "20px" }}>
      <Container>
        <Box>
          <Typography
            sx={{ fontWeight: "bold", color: "#2D2D2D", paddingBottom: "10px", textAlign:'center' }}
            variant="h4"
          >
            {" "}
            Start Selling Your NFTs
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", color: "#2D2D2D", paddingBottom: "50px", textAlign:'center' }}
            variant="h6"
          >
            Mint for free | Earn $MINT | Instant payments
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
                  Mint your NFTs with no fees
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
                    boxShadow: "0 0.375rem 0.9375rem -0.25rem rgb(0 0 0 / 20%)",
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
                  sx={{ fontWeight: "700", marginTop: "20px" , textAlign:'center'}}
                  variant="subtitle2"
                >
                  Put NFTs on sale or on auction
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
                  Get paid for your digital collectables
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

       <Box sx={{textAlign:'center'}}>
       <Button
          style={{
            background: "#550DED",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "30px",
            textTransform: "capitalize",
            padding: "10px 60px",
            fontSize: "16px",
          }}
          variant="contained"
          color="inherit"
        >
          Get Started
        </Button>
       </Box>
      </Container>
    </Box>
  );
};

export default NftSelling;
