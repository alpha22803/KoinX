import './App.css';
import Navbar from './components/Navbar';
import Bitcoin from './components/Bitcoin';
import GetStarted from './components/GetStarted';
import Teams from './components/Teams';
import Tokenomics from './components/Tokenomics';
import AboutBit from './components/AboutBit';
import Sentiment from './components/Sentiment';
import Performance from './components/Performance';
import CryptoCarousel from './components/CryptoCarousel';
import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Box, Toolbar, Typography, Grid, Divider } from '@mui/material';

function App() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <>
      <Navbar windowSize={windowSize} />
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          background: "#EFF2F5",
          px: {
            xs: "1rem",
            md: "1.5rem",
            lg: "4rem",
          },
          pb: windowSize.width > 480 ? 9 : 0
        }}
      >
        <Toolbar />
        <Box sx={{ display: "flex", alignItems: 'center', mt: { xs: '1.8rem', lg: "1.3rem" }, mb: { xs: '1rem', lg: '.8rem' } }}>
          <Typography sx={{ color: '#3E5765', fontSize: 14, fontWeight: "300" }}>Cryptocurrencies</Typography>
          <Typography sx={{ color: '#3E5765', fontSize: 14, fontWeight: "300" }}>&nbsp;&nbsp;{`\>>`}&nbsp;&nbsp;</Typography>
          <Typography sx={{ color: '#0F1629', fontSize: 14, fontWeight: "500" }}>Bitcoin</Typography>
        </Box>
        <Grid container spacing={2.5}>
          <Grid item lg={8} md={12} xs={12}>
            <Bitcoin windowSize={windowSize} />

            <Box sx={{mt: 2, mb: 1, px: .8}}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
              >
                <Tab sx={{fontWeight: 600}} label="Overview" />
                <Tab sx={{fontWeight: 600}} label="Fundamentals" />
                <Tab sx={{fontWeight: 600}} label="News Insights" />
                <Tab sx={{fontWeight: 600}} label="Sentiments" />
                <Tab sx={{fontWeight: 600}} label="Team" />
                <Tab sx={{fontWeight: 600}} label="Technicals" />
                <Tab sx={{fontWeight: 600}} label="Tokenomics" />
              </Tabs>
              <Divider sx={{pb: -2, m: '-.1rem'}} />
            </Box>

            <Performance windowSize={windowSize} />
            <Sentiment windowSize={windowSize} />
            <AboutBit windowSize={windowSize} />
            {windowSize.width > 480 && <Tokenomics windowSize={windowSize} />}
            <Teams windowSize={windowSize} />
            {windowSize.width < 480 && < CryptoCarousel/>}
          </Grid>
          <Grid item lg={4} md={12} xs={12}>
            <GetStarted windowSize={windowSize} />
          </Grid>
        </Grid>
      </Box>
      {windowSize.width > 480 && < CryptoCarousel/>}
    </>
  );
}

export default App;
