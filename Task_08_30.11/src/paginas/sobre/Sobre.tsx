import { Grid } from '@material-ui/core';
import React from 'react';
import './Sobre.css';
import { Box } from '@mui/material';

function Sobre() {
    return (
        <Grid justifyContent='center' alignItems='center'>
            <Box textAlign='center'>
            <h1>Sobre o projeto Dev Girls</h1>
            </Box>
            <Box textAlign='center'>
            <h3>Fórum de interações que abrange a conversação entre mulheres que são da área e mulheres interessadas a ingressar, com foco em perguntas e respostas sobre inovações e conceitos de programação. Visto que há uma desigualdade, esse fórum tem um público alvo pois trata-se de uma ação afirmativa com o intuito de colocar mais mulheres no ramo da tecnologia.</h3>
            </Box>
        </Grid>
    )
}


export default Sobre;