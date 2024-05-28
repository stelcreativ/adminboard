import React from 'react'
import { tokens } from "../theme"
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import Progress from './Progress'

const Insights = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box width="100%" m="0 30px" display="flex" alignItems="center" flexDirection="column"  >
            <Box display="flex" justifyContent="center" position="relative">
                <Box
                    sx={{
                        margin: '20px 25px',
                        display: 'flex',
                        flexDirection: "Column",
                        alignItems: 'center',

                    }}
                    position="absolute"
                >
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.indigo[200] }}

                    >
                        {title}
                    </Typography>
                </Box>
                <Box
                    sx={{ fill: "none", mt: "65px" }}

                >
                    <Progress
                        size={100}
                        progress={progress}
                        strokeWidth={10}
                        circleOneStroke="transparent"
                        circleTwoStroke="#3b82f6"
                    />
                </Box>
            </Box>




            <Box display="flex" alignItems="space-between" m="10px 0px">
                <Typography variant="h5" sx={{ color: colors.green[500] }} >
                    {subtitle}
                </Typography>
                <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: colors.green[600] }}
                >
                    {increase}
                </Typography>

            </Box>
        </Box>
    )
}

export default Insights