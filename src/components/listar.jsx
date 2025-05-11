import React, { useState } from "react";
import Video from "./video";

export default function Listar({
  lista,
  setLista,
  videoActivo,
  setVideoActivo,
}) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const handleManejarReproducir = (id) => {
    const nuevaLista = lista.map((video) => {
      if (video.id === id) {
        return { ...video, contador: video.contador + 1 };
      }
      return video;
    });

    setLista(nuevaLista);

    if (videoActivo === id) {
      setMostrarModal(false);
      setVideoActivo(null);
    } else {
      setVideoActivo(id);
      setMostrarModal(true);
    }
  };

  const handleCerrarModal = () => {
    setMostrarModal(false);
    setVideoActivo(null);
  };

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const listaFiltrada = lista
    .filter((video) =>
      video.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
    .sort((a, b) => b.contador - a.contador);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Buscar canción"
        value={busqueda}
        onChange={handleBusqueda}
        className="input"
      />
      <h2 className="title">Lista de Canciones</h2>
      <ul className="song-list">
        {listaFiltrada.map((video) => (
          <li key={video.id} className="song-item">
            <span className="song-name">{video.nombre}</span>
            <span className="counter">Reproducciones: {video.contador}</span>
            <button
              className="play-btn"
              onClick={() => handleManejarReproducir(video.id)}
            >
              Reproducir
            </button>
          </li>
        ))}
      </ul>

      {mostrarModal && videoActivo && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCerrarModal}>
              Cerrar
            </button>
            <Video videoId={videoActivo} />
          </div>
        </div>
      )}
    </div>
  );
}
