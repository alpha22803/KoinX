import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientRangeBar = styled(Box)(({ theme }) => ({
  height: 4,
  width: '100%',
  borderRadius: 2,
  position: 'relative',
  background: 'linear-gradient(90deg, #FF4949 0%, #FF8D4C 25%, #FFE73B 50%, #7FFF7F 75%, #00FF00 100%)',
  margin: '8px 0',
  '& .indicator': {
    position: 'absolute',
    top: -6,
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderBottom: '6px solid black',
  }
}));

const RangeIndicator = ({ lowValue, highValue, currentValue }) => {
  const calculatePosition = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <Box sx={{ width: '100%', position: 'relative', py: 2 }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Box>
            <Typography variant="body2" color="text.secondary">Today's Low</Typography>
            <Typography variant="body2">{lowValue}</Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <GradientRangeBar>
            <Box 
              className="indicator"
              sx={{ left: `${calculatePosition(currentValue, lowValue, highValue)}%` }} 
            >
                <Typography sx={{fontSize: 13, mt: .8, position: 'absolute', left: "-2rem"}}>
                    {`$${currentValue}`}
                </Typography>
            </Box>
          </GradientRangeBar>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" color="text.secondary">Today's High</Typography>
            <Typography variant="body2">{highValue}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RangeIndicator;