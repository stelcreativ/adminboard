import React from 'react'
import { tokens } from "../../theme"
import { Box, Typography, useTheme } from '@mui/material'
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import EmailIcon from "@mui/icons-material/Email"
import TrafficIcon from "@mui/icons-material/Traffic"
import ProgressCircle from "../../components/ProgressCircle"
import Insights from "../../components/Insights"
import LineChart from '../../components/LineChart'

const Dashboard = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const state = {
        size: 150,
        progress: 0.80,
        strokeWidth: 15,
        circleOneStroke: "#2587be",
        circleTwoStroke: "#34d1c7"

    }

    return (
        <Box m="20px">
            <Box
                GridColumn="span 8"
                gridRow="span 2"
            >
                <Box
                    mt="25px"
                    p="0 10px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                    >
                        <Typography variant="h3"
                            sx={{ ml: "20px" }}>SALES PROJECTION</Typography>
                        <Typography
                            sx={{ ml: "20px" }}>£510,000</Typography>
                        <Box sx={{ fill: "none" }} >
                            <ProgressCircle {...state} />
                        </Box>
                    </Box>
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography variant="h5" fontWeight="600">
                                Updates
                            </Typography>
                            <Typography variant="h3" fontWeight="500">
                                New trends to follow to scale your Business.
                                3 steps to generate a massive growth.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="220px"
                gap={3}>

                <Box
                    gridColumn="span 10"
                    backgroundColor={colors.black[300]}
                >
                    <Box

                        justifyContent="space-between"
                        display="flex"
                        alignItems="center"
                        height="250px"
                        mt="-20px"
                        p="0 10px"
                    >
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>


                {/*Insights Summary*/}

                <Box

                    gridColumn="span 3"
                    backgroundColor={colors.black[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="wrap"
                >

                    <Insights
                        title="3,361"
                        subtitle="Emails Opened"
                        progress="0.60"
                        increase="+10%"
                        icon={
                            <EmailIcon
                                sx={{ fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.black[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                >
                    <Insights
                        title="131,225"
                        subtitle="Quarterly Sales"
                        progress="0.40"
                        increase="+19%"
                        icon={
                            <PointOfSaleIcon
                                sx={{ fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.black[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Insights
                        title="1,241"
                        subtitle="New Clients"
                        progress="0.50"
                        increase="+15%"
                        icon={
                            <PersonAddIcon
                                sx={{ fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard