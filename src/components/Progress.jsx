import React from 'react'
import { Box } from "@mui/material"

const Progress = (props) => {
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,

    } = props
    const circumference = 360
    const offset = 360 - (progress * 360)


    return (
        <Box>
            <svg
                width={size}
                height={size}
            >
                <circle
                    stroke={circleOneStroke}
                    cx="48"
                    cy="48"
                    r="37"
                    strokeWidth={strokeWidth}
                >
                </circle>
                <circle
                    stroke={circleTwoStroke}
                    cx="48"
                    cy="48"
                    r="37"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                >

                </circle>
            </svg>
        </Box>
    )
}

export default Progress