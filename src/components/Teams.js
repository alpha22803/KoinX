import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

function Teams(props) {

    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ background: "#fff", p: 2, borderRadius: 2, mt: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Team
            </Typography>
            <Typography variant="body2" sx={{ color: '#3E424A' }}>
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
            </Typography>
            <Box sx={{ mt: 2, mb: 3 }}>
                <Box
                    sx={{
                        backgroundColor: '#E8F4FD',
                        py: 2,
                        px: 3,
                        borderRadius: 1,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        mb: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: isMobile ? 2 : 0,
                            mx: 'auto'
                        }}
                    >
                        <Box>
                            <img src="./Sandeep.svg" alt="Sandeep" />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600, mt: 0.5 }}>
                                John Smith
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 500, fontSize: 12, color: '#64758b' }}>
                                Designation Here
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ px: isMobile ? 0 : 2 }}>
                        <Typography sx={{ fontSize: 15, color: '#1f283b' }}>
                            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#E8F4FD',
                        py: 2,
                        px: 3,
                        borderRadius: 1,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        mb: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: isMobile ? 2 : 0,
                            mx: 'auto'
                        }}
                    >
                        <Box>
                            <img src="./Elina.svg" alt="Sandeep" />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600, mt: .1, fontSize: 14 }}>
                                Elina Williams
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 500, fontSize: 12, color: "#64758b" }}>
                                Designation Here
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ px: isMobile ? 0 : 2 }}>
                        <Typography sx={{ fontSize: 15, color: '#1f283b' }}>
                            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#E8F4FD',
                        py: 2,
                        px: 3,
                        borderRadius: 1,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        mb: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: isMobile ? 2 : 0,
                            mx: 'auto'
                        }}
                    >
                        <Box>
                            <img src="./John.svg" alt="Sandeep" />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600, mt: .1 }}>
                                John Smith
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 500, fontSize: 12, color: "#64758b" }}>
                                Designation Here
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ px: isMobile ? 0 : 2 }}>
                        <Typography sx={{ fontSize: 15, color: '#1f283b' }}>
                            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}

export default Teams;