import React from 'react'
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { tokens } from "../../theme"
import { mockDataContacts } from "../../data/mockData"
import { useTheme } from "@mui/material"

const Contacts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column-cell"
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left"
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
        },

        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.green[600]
                                : colors.green[700]
                        }
                    >

                    </Box>
                )
            }
        }



    ]

    return (
        <Box m="20px">
            <Box m="40 0 0 0" height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        color: colors.green[700]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blue[700],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.indigo[100]} !important`,
                    }
                }}

            >
                <DataGrid rows={mockDataContacts} columns={columns} />
            </Box>
        </Box>
    )
}

export default Contacts