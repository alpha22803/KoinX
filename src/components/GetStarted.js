import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const GetStarted = ({ windowSize }) => {
    const isMobile = windowSize.width < 480;
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
                const data = await response.json();

                // Extract top 3 coins and format their details
                const formattedCoins = data.coins.slice(0, 3).map((coin) => ({
                    name: `${coin.item.name} (${coin.item.symbol.toUpperCase()})`,
                    image: coin.item.thumb,
                    increment: coin.item.data?.price_change_percentage_24h?.usd?.toFixed(2) || "0.00",
                }));

                setTrendingCoins(formattedCoins);
            } catch (error) {
                console.error("Error fetching trending coins:", error);
                setTrendingCoins([
                    { name: "Bitcoin (BTC)", image: "./Bitcoin.svg", increment: "5.24%" },
                    { name: "Ethereum (ETH)", image: "./Ethereum.svg", increment: "8.21%" },
                    { name: "Polygon (MATIC)", image: "./Polygon.svg", increment: "6.12%" },
                ]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrendingCoins();
    }, []);

    return (
        <Grid container rowGap={2.5}>
            <Grid
                xs={12}
                sx={{
                    backgroundColor: "#0052FE",
                    p: 2,
                    borderRadius: 4,
                    textAlign: "center",
                }}
            >
                {isMobile && (
                    <Box sx={{ mt: 4 }}>
                        <img src="./GetStarted.svg" alt="getStarted" />
                    </Box>
                )}
                <Box sx={{ px: 4 }}>
                    <Typography
                        sx={{
                            color: "white",
                            mb: 2,
                            fontSize: 21,
                            fontWeight: 600,
                            mt: 2,
                        }}
                    >
                        Get Started with KoinX for FREE
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "white",
                            mb: 4,
                            fontWeight: 500,
                            textAlign: "center",
                        }}
                    >
                        With our range of features that you can equip for free, KoinX allows you to
                        be more educated and aware of your tax reports.
                    </Typography>
                </Box>
                {!isMobile && (
                    <Box sx={{ mt: 4 }}>
                        <img src="./GetStarted.svg" alt="getStarted" />
                    </Box>
                )}
                <Button
                    variant="contained"
                    sx={{
                        background: "#fff",
                        color: "#0B1426",
                        fontWeight: 600,
                        my: 3,
                        borderRadius: 2,
                        py: 1.5,
                        boxShadow: 0,
                    }}
                >
                    Get started for free &nbsp;
                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                </Button>
            </Grid>

            <Grid
                xs={12}
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    p: 2,
                    px: 3,
                    mb: 3,
                }}
            >
                <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 20 }}>
                    Trending Coins (24H)
                </Typography>
                <Box>
                    {isLoading ? (
                        <Typography>Loading trending coins...</Typography>
                    ) : (
                        trendingCoins.map((coin, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mt: 2,
                                    borderRadius: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={coin.image}
                                        alt={coin.name}
                                        sx={{ width: 30, height: 30, borderRadius: 5 }}
                                    />
                                    <Typography sx={{ fontWeight: 500 }}>
                                        {coin.name}
                                    </Typography>
                                </Box>

                                <Typography
                                    sx={{
                                        fontSize: 13,
                                        fontWeight: 500,
                                        backgroundColor: "#EBF9F4",
                                        borderRadius: 1,
                                        color: "#14B079",
                                        display: "flex",
                                        alignItems: "center",
                                        pr: 1,
                                        ml: 3,
                                    }}
                                >
                                    <ArrowDropUpIcon sx={{ mt: 0.1 }} />
                                    {coin.increment}%
                                </Typography>
                            </Box>
                        ))
                    )}
                </Box>
            </Grid>
        </Grid>
    );
};

export default GetStarted;
