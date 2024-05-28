import React from 'react'
import { Box } from "@mui/material"

const ProgressCircle = ({ size, progress, strokeWidth, circleOneStroke, circleTwoStroke }) => {


    const radius = size / 2 - strokeWidth
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (progress * circumference)

    return (
        <Box
        >
            <svg

                width={size}
                height={size}
            >
                <circle
                    stroke={circleOneStroke}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}

                >
                </circle>
                <circle
                    stroke={circleTwoStroke}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
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

export default ProgressCircle