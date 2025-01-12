/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Box, Typography, Divider, Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutBit = (props) => {
    return (
        <Box sx={{ background: "#fff", p: 2, borderRadius: 2, mt: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                About Bitcoin
            </Typography>

            <Box>
                <Typography sx={{ fontWeight: 600, mb: 1, fontSize: 15 }}>
                    What is Bitcoin ?
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#1f283b' }}>
                    Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
                </Typography>
            </Box>

            <Divider sx={{ my: 2.5 }} />

            <Box>
                <Typography sx={{ fontWeight: 600, mb: 1, fontSize: 15 }}>
                    Lorem ipsum dolor sit amet
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#1f283b' }}>
                    Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#1f283b', mt: 2 }}>
                    Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#1f283b', mt: 2 }}>
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                </Typography>
            </Box>

            <Divider sx={{ my: 2.5 }} />

            <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Already Holding Bitcoin?
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={12} xs={12}>
                            <Box sx={{ display: 'flex', background: "linear-gradient(135deg , #79F1A4 0%, #0E5CAD 100%)", borderRadius: 2, alignItems: 'center' }}>
                                <Box>
                                    <img src="./StockNoBack.png" alt="photo" height={100} width={100} style={{ margin: 12 }} />
                                </Box>
                                <Box sx={{ml: 2}}>
                                    <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: 18, mb: 1, mr: 15 }}>
                                        Calculate your profits
                                    </Typography>
                                    <Button sx={{background: '#fff', color: '#000', borderRadius: 2, fontSize:12, px: 2, py: .5}}>
                                        Check Now
                                        <ArrowForwardIcon sx={{ fontSize: 20 }} />
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={12} xs={12}>
                            <Box sx={{ display: 'flex', background: "linear-gradient(135deg , #FF9865 0%, #EF3031 100%)", borderRadius: 2, alignItems: 'center' }}>
                                <Box>
                                    <img src="./StockBack.png" alt="photo" height={100} width={100} style={{ margin: 12 }} />
                                </Box>
                                <Box sx={{ml: 2}}>
                                    <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: 18, mb: 1, mr: 15 }}>
                                        Calculate your tax liability
                                    </Typography>
                                    <Button sx={{background: '#fff', color: '#000', borderRadius: 2, fontSize:12, px: 2, py: .5}}>
                                        Check Now
                                        <ArrowForwardIcon sx={{ fontSize: 20 }} />
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Divider sx={{ my: 2.5 }} />

            <Box>
                <Typography sx={{ fontSize: 15, color: '#1f283b', mt: 2 }}>
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                </Typography>
            </Box>
        </Box>
    );
}

export default AboutBit;