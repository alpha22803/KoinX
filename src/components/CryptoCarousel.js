/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CircularProgress,
  Alert,
  Skeleton
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { styled } from '@mui/material/styles';

// Styled components
const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  gap: theme.spacing(2),
  padding: theme.spacing(1),
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
}));

const CryptoCard = styled(Card)(({ theme }) => ({
  minWidth: 250,
  boxShadow: theme.shadows[1],
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
  zIndex: 1,
}));

const CryptoCarousel = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?' +
          new URLSearchParams({
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: true,
            price_change_percentage: '24h',
            locale: 'en'
          })
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setCryptoData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const SparklineChart = ({ data, positive }) => {
    if (!data?.length) return null;

    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const range = maxValue - minValue;
    
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((value - minValue) / range) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <Box sx={{ width: '100%', height: 60 }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
          <polyline
            points={points}
            fill="none"
            stroke={positive ? '#14B079' : '#FF4D4D'}
            strokeWidth="1"
          />
        </svg>
      </Box>
    );
  };

  const CryptoCardComponent = ({ data }) => (
    <CryptoCard>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Box
            component="img"
            src={data.image}
            alt={data.symbol}
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            {data.symbol}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: data.price_change_percentage_24h >= 0 ? '#14B079' : '#FF4D4D',
            }}
          >
            {data.price_change_percentage_24h >= 0 ? '+' : ''}
            {data.price_change_percentage_24h?.toFixed(2)}%
          </Typography>
        </Box>
        <Typography variant="h6" component="div">
          ${data.current_price.toLocaleString(undefined, {
            minimumFractionDigits: data.current_price < 1 ? 6 : 2,
            maximumFractionDigits: data.current_price < 1 ? 6 : 2
          })}
        </Typography>
        {data.sparkline_in_7d?.price && (
          <SparklineChart
            data={data.sparkline_in_7d.price}
            positive={data.price_change_percentage_24h >= 0}
          />
        )}
      </CardContent>
    </CryptoCard>
  );

  const CarouselSection = ({ title, data }) => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
      if (scrollRef.current) {
        const scrollAmount = direction === 'left' ? -300 : 300;
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    };

    return (
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          {title}
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <NavigationButton
            onClick={() => scroll('left')}
            sx={{ left: 0 }}
          >
            <ChevronLeft />
          </NavigationButton>
          <ScrollContainer ref={scrollRef}>
            {data.map((item) => (
              <CryptoCardComponent key={item.id} data={item} />
            ))}
          </ScrollContainer>
          <NavigationButton
            onClick={() => scroll('right')}
            sx={{ right: 0 }}
          >
            <ChevronRight />
          </NavigationButton>
        </Box>
      </Box>
    );
  };

  if (loading) {
    return (
      <Box sx={{ p: 2 }}>
        <Skeleton variant="text" width={200} height={40} sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          {[...Array(4)].map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={250}
              height={160}
              sx={{ borderRadius: 1 }}
            />
          ))}
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">Error loading data: {error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: '100%', px: {xs: 3, lg: 10}, py: 3, background: '#fff' }}>
      <CarouselSection title="You May Also Like" data={cryptoData} />
      <CarouselSection title="Trending Coins" data={cryptoData} />
    </Box>
  );
};

export default CryptoCarousel;