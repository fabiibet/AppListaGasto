import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WebFont from 'webfontloader'
import Contenedor from './elementos/Contenedor.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import EditarGastos from './componentes/EditarGastos.jsx'
import GastosPorCategoria from './componentes/GastosPorCategoria.jsx'
import InicioSesion from './componentes/InicioSesion.jsx'
import ListaDeGastos from './componentes/ListaDeGastos.jsx'
import RegistroUsuarios from './componentes/RegistroUsuarios.jsx'
import {Helmet} from "react-helmet"
import favicon from '/favicon.ico'
import Fondo from './elementos/Fondo.jsx'
import {AuthProvider} from './contextos/AuthContext.jsx'
import RutaPrivada from './componentes/RutaPrivada.jsx';
import { TotalGastadoProvider } from './contextos/TotalGastadoEnElMesContext.jsx';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Helmet>
        <link rel="icon" href={favicon} type="image/x-icon"/>
      </Helmet>
      <AuthProvider>
        <Fondo>
          <TotalGastadoProvider>
            <BrowserRouter>
              <Contenedor>
                <Routes>
                  <Route path="/iniciar-sesion" element={<InicioSesion/>}/>
                  <Route path="/crear-cuenta" element={<RegistroUsuarios/>}/>
                  
                  <Route path="/categorias" element={
                    <RutaPrivada>
                      <GastosPorCategoria />
                    </RutaPrivada>
                  }/>
                  
                  <Route path="/lista" element={
                    <RutaPrivada>
                      <ListaDeGastos />
                    </RutaPrivada>
                  } />

                  <Route path="/editar/:id" element={
                    <RutaPrivada>
                      <EditarGastos />
                    </RutaPrivada>
                  } />

                  <Route path="/" element={
                    <RutaPrivada>
                      <App />
                    </RutaPrivada>
                  } />
                </Routes> 
              </Contenedor>
            </BrowserRouter>
          </TotalGastadoProvider>
        </Fondo>
      </AuthProvider>
    </>
  </React.StrictMode>
);
