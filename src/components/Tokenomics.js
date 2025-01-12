import React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';

const Tokenomics = (props) => {

    const investorsData = [
        {
            label: 'Crowdsale Investors: 80%',
            value: 80,
        },
        {
            label: 'Foundation: 20%',
            value: 20,
        },
    ];
    const valueFormatter = (item) => `${item.value}%`;

    return (
        <Box sx={{ background: "#fff", p: 2, borderRadius: 2, mt: 2 }}>
            <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 20 }}>
                Tokenomics
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: 18 }}>
                Initial Distribution
            </Typography>

            <Box>
                <PieChart
                    height={200}
                    width={530}
                    series={[
                        {
                            data: investorsData,
                            innerRadius: 70,
                            // arcLabel: (params) => params.label ?? '',
                            arcLabelMinAngle: 20,
                            valueFormatter,
                            cx: 150,
                            cy: 100,
                        },
                    ]}
                    skipAnimation={false}

                />
            </Box>

            <Typography sx={{ fontSize: 15, color: '#1f283b', mt: 2, mb: 3 }}>
                Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
            </Typography>
        </Box>
    );
}

export default Tokenomics;