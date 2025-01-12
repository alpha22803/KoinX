import React from "react";
import { Box, Typography, Tooltip, Button, Stack, LinearProgress } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';

// Custom styled LinearProgress
const CustomLinearProgress = styled(LinearProgress)(({ theme, barcolor }) => ({
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.palette.grey[100],
    '& .MuiLinearProgress-bar': {
        borderRadius: 4,
        backgroundColor: barcolor,
    },
}));

// Styled circular percentage display
const CircularPercentage = styled(Box)(({ theme }) => ({
    width: 144,
    height: 144,
    borderRadius: '50%',
    backgroundColor: '#EBF9F4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .percentage': {
        color: '#00B386',
        display: 'flex',
        alignItems: 'baseline',
    },
}));

const Sentiment = (props) => {
    const estimates = [
        { type: 'Buy', percentage: 76, color: '#00B386' },
        { type: 'Hold', percentage: 8, color: '#C7C8CE' },
        { type: 'Sell', percentage: 16, color: '#F7324C' }
    ];

    return (
        <Box sx={{ background: "#fff", p: 2, borderRadius: 2, mt: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Sentiment
            </Typography>
            <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 16.5, color: '#44475B' }}>
                Key Events
                <Tooltip disableFocusListener title="Hello World">
                    <Button>
                        <InfoIcon sx={{ color: '#808A9D', fontSize: 15 }} />
                    </Button>
                </Tooltip>
            </Typography>

            <Box sx={{ display: 'flex', overflowX: 'scroll' }}>
                <Box sx={{ display: 'flex', mb: 2, background: '#E8F4FD', borderRadius: 2, p: 2, minWidth: {lg: "30vw", xs: "80vw"}, mr: 1 }}>
                    <Box>
                        <Box sx={{ background: '#2979ff', p: 1, borderRadius: 10 }}>
                            <img src="./Reciept.svg" alt="reciept" />
                        </Box>
                    </Box>
                    <Box sx={{ ml: 2 }}>
                        <Typography sx={{ color: "#000", fontSize: 14 }}>
                            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                        </Typography>
                        <Typography sx={{ color: "#757575", fontSize: 14, my: 1 }}>
                            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', mb: 2, background: '#EBF9F4', borderRadius: 2, p: 2, minWidth: {lg: "30vw", xs: "80vw"}, mr: 1 }}>
                    <Box>
                        <Box sx={{ background: '#00B386', p: 1, borderRadius: 10 }}>
                            <img src="./Increment.svg" alt="Increment" />
                        </Box>
                    </Box>
                    <Box sx={{ ml: 2 }}>
                        <Typography sx={{ color: "#000", fontSize: 14 }}>
                            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                        </Typography>
                        <Typography sx={{ color: "#757575", fontSize: 14, my: 1 }}>
                            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 16.5, color: '#44475B' }}>
                Analytic Estimates
                <Tooltip disableFocusListener title="Hello World">
                    <Button>
                        <InfoIcon sx={{ color: '#808A9D', fontSize: 15 }} />
                    </Button>
                </Tooltip>
            </Typography>


            <Box>

                <Stack direction="row" spacing={4} alignItems="center">
                    <CircularPercentage>
                        <Box className="percentage">
                            <Typography variant="h3" component="span" fontWeight={600}>
                                76
                            </Typography>
                            <Typography variant="h4" component="span" ml={0.5}>
                                %
                            </Typography>
                        </Box>
                    </CircularPercentage>

                    <Box sx={{ flex: 1 }}>
                        {estimates.map(({ type, percentage, color }) => (
                            <Stack
                                key={type}
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                mb={2}
                                sx={{ '&:last-child': { mb: 0 } }}
                            >
                                <Typography sx={{ width: 40 }} color="text.secondary">
                                    {type}
                                </Typography>
                                <Box sx={{ flex: 1 }}>
                                    <CustomLinearProgress
                                        variant="determinate"
                                        value={percentage}
                                        barcolor={color}
                                    />
                                </Box>
                                <Typography sx={{ width: 48 }} color="text.secondary">
                                    {percentage}%
                                </Typography>
                            </Stack>
                        ))}
                    </Box>
                </Stack>
            </Box>

        </Box>
    );
}

export default Sentiment;