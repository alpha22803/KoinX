import React from 'react';
import { Box, Typography, Grid, Stack, Tooltip, Button } from '@mui/material';
import RangeIndicator from './RangeIndicator';
import InfoIcon from '@mui/icons-material/Info';

const KeyValuePair = ({ label, value, subValue, textColor, date }) => (
  <Box sx={{ borderBottom: '1px solid', borderColor: 'grey.200', py: 2 }}>
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography color="text.secondary" variant="body2" sx={{color: '#768396', fontSize: 13}}>
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Typography color={textColor || 'text.primary'} variant="body2" sx={{color: "#111827", fontSize: 14}}>
          {value}
          {subValue && (
            <Typography component="span" variant="caption" sx={{ ml: 1, color: textColor !== "success.main" ? 'red' : 'green' }}>
              {subValue}
              <Box sx={{fontSize: 10, color: "text.primary"}}>{date}</Box>
            </Typography>
          )}
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

const Performance = ({windowSize}) => {

  return (
    <Box sx={{ background: "#fff", p: 2, borderRadius: 2, mt: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Performance
      </Typography>

      <RangeIndicator
        lowValue={46930.22}
        highValue={49343.83}
        currentValue={48637.83}
      />

      <RangeIndicator
        lowValue={16930.22}
        highValue={49743.83}
        currentValue={48637.83}
      />

      <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
        <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 16.5, color: '#44475B' }}>
          Fundamentals
          <Tooltip disableFocusListener title="Hello World">
            <Button>
              <InfoIcon sx={{ color: '#808A9D', fontSize: 15 }} />
            </Button>
          </Tooltip>
        </Typography>
      </Stack>

      <Grid container spacing={windowSize.width > 480 ? 4 : 0}>
        <Grid item xs={12} md={6}>
          <KeyValuePair
            label="Bitcoin Price"
            value="$16,815.46" 
          />
          <KeyValuePair
            label="24h Low / 24h High"
            value="$16,382.07 / $16,874.12"
          />
          <KeyValuePair
            label="7d Low / 7d High"
            value="$16,382.07 / $16,874.12"
          />
          <KeyValuePair
            label="Trading Volume"
            value="$23,249,202,782"
          />
          <KeyValuePair
            label="Market Cap Rank"
            value="#1"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <KeyValuePair
            label="Market Cap"
            value="$323,507,290,047"
          />
          <KeyValuePair
            label="Market Cap Dominance"
            value="38.343%"
          />
          <KeyValuePair
            label="Volume / Market Cap"
            value="0.0718"
          />
          <KeyValuePair
            label="All-Time High"
            value="$69,044.77"
            textColor="error.main"
            subValue="-75.6%"
            date="Nov 10, 2021 (about 1 year)"
          />
          <KeyValuePair
            label="All-Time Low"
            value="$67.81"
            textColor="success.main"
            subValue="24729.1%"
            date="Jul 06, 2013 (over 9 years)"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Performance;