import React from 'react';
import { Header, Titulo } from './../elementos/Header';
import { Helmet } from 'react-helmet';
import BtnRegresar from '../elementos/BtnRegresar';
import { useAuth } from '../contextos/AuthContext';
import BarraTotalGastado from './BarraTotalGastado';
import useObtenerGasto from '../hooks/useObtenerGasto';
import {
    Lista,
    ElementoLista,
    Categoria,
    Descripcion,
    Valor,
    ContenedorBotones,
    BotonAccion,
    BotonCargarMas,
    ContenedorBotonCentral,
    ContenedorSubtitulo,
    Subtitulo,
    Fecha
} from '../elementos/ElementosDeLista';
import convertirAMoneda from '../funciones/convertirAMoneda';
import { Link } from 'react-router-dom';
import Boton from '../elementos/Boton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons';
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';
import borrarGasto from '../firebase/borrarGasto';

const ListaDeGastos = () => {
    const { usuario } = useAuth();
    const [gastos,obtenerMasGasto, hayMasPorCargar] = useObtenerGasto();

    
    const formatearFecha = (fecha) => {
        return format(fromUnixTime(fecha), "dd 'de' MMMM 'del' yyyy", { locale: es });
    }

    // Agrupar los gastos por fecha
    const gastosPorFecha = gastos.reduce((acumulador, gasto) => {
        const fechaFormateada = formatearFecha(gasto.fecha);
        if (!acumulador[fechaFormateada]) {
            acumulador[fechaFormateada] = [];
        }
        acumulador[fechaFormateada].push(gasto);
        return acumulador;
    }, {});

    return (
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>

            <Lista>
                {Object.keys(gastosPorFecha).map((fecha, index) => (
                    <div key={index}>
                        <Fecha>{fecha}</Fecha>
                        {gastosPorFecha[fecha].map((gasto) => (
                            <ElementoLista key={gasto.id}>
                                <Categoria>{gasto.categoria}</Categoria>
                                <Descripcion>{gasto.descripcion}</Descripcion>
                                <Valor>{convertirAMoneda(gasto.cantidad)}</Valor>
                                <ContenedorBotones>
                                    <BotonAccion  as={Link} to={`/editar/${gasto.id}`}><FontAwesomeIcon icon={faPenToSquare} /></BotonAccion>
                                    <BotonAccion onClick={() => borrarGasto(gasto.id)} ><FontAwesomeIcon icon={faX} /></BotonAccion>
                                </ContenedorBotones>
                            </ElementoLista>
                        ))}
                    </div>
                ))}
                {hayMasPorCargar &&
                    <ContenedorBotonCentral>
                        <BotonCargarMas onClick={() => obtenerMasGasto ()}>Cargar más</BotonCargarMas>
                    </ContenedorBotonCentral>
                }
                

                {gastos.length === 0 && (
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay gastos por mostrar</Subtitulo>
                        <Boton as={Link} to="/">Agregar gasto</Boton>
                    </ContenedorSubtitulo>
                )}
            </Lista>

            <BarraTotalGastado />
        </>
    );
}

export default ListaDeGastos;
