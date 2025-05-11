import React, { useEffect, useState } from 'react';
import Agregar from './components/agregar';
import Listar from './components/listar';

export default function App() {
  const [lista, setLista] = useState(()=>{
    //si hay informacion intentamos cargar la lista desde el localStorage
    const listaGuardada = localStorage.getItem('listaVideos');
    return listaGuardada ? JSON.parse(listaGuardada) : [];
  });
  const [videoActivo, setVideoActivo] = useState(null);

 

  //Guardar la lista en el localStorage cuando se actualiza
  useEffect(() => {
    localStorage.setItem('listaVideos', JSON.stringify(lista));
  }, [lista]);

    return (
      <>
        <Agregar setLista={setLista} lista={lista}/>
        <Listar lista={lista} setLista={setLista} videoActivo={videoActivo} setVideoActivo={setVideoActivo}/>
      </>  
    )
}

