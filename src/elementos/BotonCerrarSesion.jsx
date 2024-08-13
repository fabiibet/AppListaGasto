import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Boton from './Boton';
import {auth} from './../firebase/firebaseConfig';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const BotonCerrarSesion = () => {
	const navigate = useNavigate();

	const cerrarSesion = async() => {
		try {
			await signOut(auth);
			navigate('/iniciar-sesion');
		} catch(error){
			console.log(error);
		}
	}

	return (
        <Boton as="button" onClick={cerrarSesion}>
            <FontAwesomeIcon icon={faSignOutAlt} />
        </Boton>
	);
}
 
export default BotonCerrarSesion;