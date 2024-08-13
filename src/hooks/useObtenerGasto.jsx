import { useEffect, useState } from 'react';
import { db } from './../firebase/firebaseConfig';
import { useAuth } from '../contextos/AuthContext';
import { collection, onSnapshot, query, orderBy, where, limit,startAfter } from 'firebase/firestore';

const useObtenerGasto = (id) => {
    const { usuario } = useAuth();
    const [gastos, setGastos] = useState([]);
    const [hayMasPorCargar, setHayMasPorCargar] = useState(false);
    const [ultimoGasto, setUltimoGasto] = useState(null);

    

    useEffect(() => {
        const consulta = query(
            collection(db, 'gastos'),
            where('uidUsuario', '==', usuario.uid),
            orderBy('fecha', 'desc'),
            limit(10)
        );

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            if (snapshot.docs.length > 0) {
                setUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
                setHayMasPorCargar(true);
            } else {
                setHayMasPorCargar(false);
            }

            setGastos(snapshot.docs.map((gasto) => {
                return { ...gasto.data(), id: gasto.id };
            }));
        });

        return unsuscribe;
    }, [usuario]);

    const obtenerMasGasto = () => {
        if (ultimoGasto) {
            const consulta = query(
                collection(db, 'gastos'),
                where('uidUsuario', '==', usuario.uid),
                orderBy('fecha', 'desc'),
                startAfter(ultimoGasto),
                limit(10)
            );

            onSnapshot(consulta, (snapshot) => {
                if (snapshot.docs.length > 0) {
                    setUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
                    setGastos(gastos.concat(snapshot.docs.map((gasto) => {
                        return { ...gasto.data(), id: gasto.id };
                    })));
                } else {
                    setHayMasPorCargar(false);
                }
            },error => {console.log(error)});
        }
    };

    return [gastos, obtenerMasGasto, hayMasPorCargar];
};

export default useObtenerGasto;