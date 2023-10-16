import { Box, Typography } from "@mui/material"
import React from "react"


export default function Header() {

    return
    (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            height: '100px',
            backgroundColor: '#f5f5f5',
            padding: '20px',
        }}>
            <Typography>Logo</Typography>
            <Typography>MORC</Typography>
            </Box>
    );
}
