import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='bgnav'>
                    <Box className='Cursor' >
                        <Typography variant="h5" color="inherit">
                            Dev Girls
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                            <Link to='/' className='textobranco'>
                                Home
                            </Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                            <Link to='/sobre' className='textobranco'>
                                Sobre
                            </Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                            <Link to='/equipe' className='textobranco'>
                                Equipe
                            </Link>
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;