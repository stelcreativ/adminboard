import React from 'react'
import { Box, IconButton, useTheme, styled, Typography, Avatar } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material/InputBase"
import LightModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"

const Topbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)


    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "10px"

    }))

    return (
        <Box display="flex" justifyContent="space-between" p={3}>
            {/* SEARCH BAR */}
            <Box
                display="flex"
                backgroundColor={colors.black[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />

                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            { /* PROFILE */}

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}

                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>

            <UserBox display="flex" justifyContent="center" alignItems="center">
                <Avatar
                    sx={{ width: 60, height: 60 }}
                    src={`../../assets/janeprofil.jpg`}
                    alt="user-profil"
                    style={{ cursor: "pointer" }}
                />
                <Typography variant="span">Jane</Typography>
            </UserBox>
        </Box>


    )
}

export default Topbar