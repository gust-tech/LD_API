import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)! ao fórum</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Peça ajuda e ensine outras mulheres!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" className='botao'>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c7df78a-91b9-47aa-bc98-b6c087fedcf8/ddbn5n3-e06fd431-5b79-4413-ab74-f8c68af64017.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjN2RmNzhhLTkxYjktNDdhYS1iYzk4LWI2YzA4N2ZlZGNmOFwvZGRibjVuMy1lMDZmZDQzMS01Yjc5LTQ0MTMtYWI3NC1mOGM2OGFmNjQwMTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gacBYU4Bg6utjBUarlUpmPV4a8CuTlR1fJECBZ0cGt4" alt="" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} className='postagens'>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;