import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Divider, Typography, Chip, Button } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TradingViewWidget from "./TradingViewChart";

const Bitcoin = ({ windowSize }) => {
    const [bitcoinData, setBitcoinData] = useState({
        usd: 0,
        inr: 0,
        usd_24h_change: 0,
    });
    const [selectedRange, setSelectedRange] = useState('1M');
    const [key, setKey] = useState(0);

    const ranges = [
        { label: '1D', value: '1D' },
        { label: '5D', value: '5D' },
        { label: '1M', value: '1M' },
        { label: '3M', value: '3M' },
        { label: '6M', value: '6M' },
        { label: '1Y', value: '1Y' },
        { label: '5Y', value: '5Y' },
        { label: 'ALL', value: 'ALL' }
    ];

    const handleRangeChange = (range) => {
        setSelectedRange(range);
        setKey(prev => prev + 1);
    };

    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            try {
                const response = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
                );
                const data = await response.json();
                setBitcoinData({
                    usd: data.bitcoin?.usd || 0,
                    inr: data.bitcoin?.inr || 0,
                    usd_24h_change: data.bitcoin?.usd_24h_change || 0,
                });
            } catch (error) {
                console.error("Error fetching Bitcoin price:", error);
            }
        };

        fetchBitcoinPrice();
    }, []);

    return (
        <>
            {windowSize.width < 480 && (
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 2, marginLeft: { xs: 1, lg: 0 } }}>
                    <img src="./Bitcoin.svg" alt="bitcoin" />
                    <Typography sx={{ fontSize: 19, fontWeight: 600, color: '#0B1426', ml: 1 }}>
                        Bitcoin
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#5D667B', ml: 1 }}>
                        BTC
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#5D667B', ml: 3 }}>
                        <Chip label={"Rank #1"} sx={{ background: '#808A9D', color: '#fff', borderRadius: 2 }} />
                    </Typography>
                </Box>
            )}
            <Box sx={{ background: "#fff", p: 3, borderRadius: 2 }}>
                <CssBaseline />
                <Box>
                    <Box>
                        {windowSize.width > 480 && (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img src="./Bitcoin.svg" alt="bitcoin" />
                                <Typography
                                    sx={{ fontSize: 19, fontWeight: 600, color: "#0B1426", ml: 1 }}
                                >
                                    Bitcoin
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 12, fontWeight: 600, color: "#5D667B", ml: 1 }}
                                >
                                    BTC
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 12, fontWeight: 600, color: "#5D667B", ml: 3 }}
                                >
                                    <Chip
                                        label={"Rank #1"}
                                        sx={{
                                            background: "#808A9D",
                                            color: "#fff",
                                            borderRadius: 2,
                                        }}
                                    />
                                </Typography>
                            </Box>
                        )}
                        <Box sx={{ mt: windowSize.width > 480 ? 3 : 0 }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography
                                    sx={{ fontSize: 24, fontWeight: 600, color: "#0B1426" }}
                                >
                                    ${bitcoinData.usd.toLocaleString()}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 500,
                                        backgroundColor: bitcoinData.usd_24h_change >= 0 ? '#EBF9F4' : "#fce6e6",
                                        borderRadius: 1,
                                        color: bitcoinData.usd_24h_change >= 0 ? '#14B079' : "#FF4D4D",
                                        display: "flex",
                                        alignItems: "center",
                                        pr: 1,
                                        ml: 3,
                                    }}
                                >
                                    {bitcoinData.usd_24h_change >= 0 ? (
                                        <ArrowDropUpIcon sx={{ mt: 0.1 }} />
                                    ) : (
                                        <ArrowDropDownIcon sx={{ mt: 0.1 }} />
                                    )}
                                    {Math.abs(bitcoinData.usd_24h_change).toFixed(2)}%
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 12, fontWeight: 500, color: "#768396", ml: 1 }}
                                >
                                    (24H)
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{ fontSize: 15, fontWeight: 500, color: "#0B1426" }}
                                >
                                    ₹{bitcoinData.inr.toLocaleString()}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Divider sx={{ my: 2.5 }} />
                    <Box sx={{ height: '60vh', width: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 2 }}>
                            <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#0B1426' }}>
                                Bitcoin Price Chart (USD)
                            </Typography>
                            <Box>
                                {ranges.map(({ label, value }) => (
                                    <Button
                                        key={value}
                                        onClick={() => handleRangeChange(value)}
                                        sx={{
                                            borderRadius: 4,
                                            color: selectedRange === value ? "darkblue" : "#5D667B",
                                            bgcolor: selectedRange === value ? "#E2ECFE" : "transparent",
                                            p: 0,
                                            m: 0,
                                            minWidth: '40px',
                                            '&:hover': {
                                                bgcolor: selectedRange === value ? "#E2ECFE" : "rgba(0, 0, 0, 0.04)"
                                            }
                                        }}
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                        <TradingViewWidget key={key} range={selectedRange} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Bitcoin;
