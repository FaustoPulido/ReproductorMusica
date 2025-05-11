import React, { useState } from "react";

export default function Agregar({ lista, setLista }) {
  const [nombre, setNombre] = useState("");
  const [link, setLink] = useState("");

  const handleEsUrlValida = (url) => {
    const expresion = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return expresion.test(url);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !link.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (!handleEsUrlValida(link)) {
      alert("La URL debe ser un enlace válido de YouTube");
      return;
    }

    const id = link.split("v=")[1] || link.split("/").pop();
    const existe = lista.some((video) => video.id === id);

    if (existe) {
      alert("Esta canción ya está en la lista");
      return;
    }

    const nuevoVideo = { id, nombre, contador: 0 };
    setLista([...lista, nuevoVideo]);
    setNombre("");
    setLink("");
  };


  return (
    <div className="container">
      <h1 className="ochoa-title">
        8A Reproductor
      </h1>
      <h className="title">Agregar Canción</h>
      <form className="form" onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Nombre de la canción"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Url de la canción"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="input"
        />
        <button type="submit" className="submit-btn">Agregar</button>
      </form>
    </div>
  );
}
