import "./NavBar.css"
import * as React from 'react';
import { Box, IconButton, Button, useTheme, Typography } from '@mui/material';
import { ColorModeContext } from '../../App';
import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";


export const NavBar = () => {
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box className='navbar'>
            <a href="/" className="NullNews"><Typography>Null News</Typography></a>
            <a href="/tech" className="Tech">Tech</a>
            <a href="/gadgets" className="Gadgets">Gadgets</a>
            <a href="/science" className="Science">Science</a>
            <a href="/more" className="More">More</a>
            <Box>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {useTheme().palette.mode === 'light' ? <LightModeOutlined /> : <DarkModeOutlined />}
                </IconButton>
                <button className="signUp">Sign up</button>
            </Box>
        </Box>
    )
}

export default NavBar;