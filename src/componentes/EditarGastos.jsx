import React from 'react';
import {Header,Titulo,ContenedorHeader,ContenedorBotones} from './../elementos/Header'
import { Helmet } from 'react-helmet';
import BtnRegresar from '../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import FormularioGasto from './FormularioGasto';
import { useParams } from 'react-router-dom';
import useObtenerUnGasto from '../hooks/useObtenerUnGasto';

const EditarGastos = () => {
    const{id} = useParams();
    const gasto = useObtenerUnGasto(id);

    return (  
        <>
        <Helmet>
            <title>Editar Gasto</title>
        </Helmet>

        <Header>
            <BtnRegresar ruta='/lista' />
            <Titulo>Editar Gasto</Titulo>
        </Header>
        <FormularioGasto gasto={gasto} />

        <BarraTotalGastado />
    </>    );
}

export default EditarGastos;