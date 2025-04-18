import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap per gli stili
import "../App.css"; // Importa il file CSS principale per gli stili personalizzati

// Import delle immagini
import chill from "../assets/img/assets/assets/images/chill.png";
import musicaUnoImage from "../assets/img/assets/assets/images/musicaUnoImage.png";
import episodio1 from "../assets/img/assets/assets/images/2a.png";
import episodio2 from "../assets/img/assets/assets/images/2b.png";
import episodio3 from "../assets/img/assets/assets/images/2c.png";
import episodio4 from "../assets/img/assets/assets/images/2d.png";

const AppleMusic = ({ searchQuery }) => {
  const [songs, setSongs] = useState([]);

  // Funzione per recuperare i dati dall'API
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
        );
        if (response.ok) {
          const data = await response.json();
          setSongs(data.data); // Salva i dati delle canzoni nello stato
        } else {
          console.error("Errore nel recupero dei dati");
        }
      } catch (error) {
        console.error("Errore nella chiamata API:", error);
      }
    };

    if (searchQuery) {
      fetchSongs();
    }
  }, [searchQuery]);

  return (
    <main className="main-content container mt-4">
      <section className="novita mb-5">
        <h2 className="mb-4">Novità</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-secondary text-white p-3 mb-3">
              Nuova stazione radio: Chill
              <p>Rilasati, al resto pensiamo noi. ascolta apple music chill</p>
            </div>
            <img
              src={chill}
              alt="Chill"
              className="img-fluid rounded p-3 mb-3"
            />
          </div>

          <div className="col-md-6">
            <div className="card bg-secondary text-white p-3 mb-3">
              Nuova stazione radio: Música Uno
              <p>Ecco la nuova cada della musica latina</p>
            </div>
            <img
              src={musicaUnoImage}
              alt="Música Uno"
              className="img-fluid rounded p-3 mb-3"
            />
          </div>
        </div>
      </section>

      <section className="new-episodes mb-5">
        <h3 className="mb-4">Nuovi episodi radio</h3>
        <div className="row">
          {[episodio1, episodio2, episodio3, episodio4].map((img, index) => (
            <div className="col-md-3" key={index}>
              <div className="card bg-dark text-white p-4 mb-4 border-0">
                <img
                  src={img}
                  alt={`Episodio ${index + 1}`}
                  className="img-fluid rounded mb-3"
                />
                <p className="fw-bold">Episodio {index + 1}</p>
                <p>Descrizione Placeholder</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="new-releases mb-5">
        <h3 className="mb-4">Nuove uscite</h3>
        <div className="row">
          {songs.slice(0, 8).map((song, index) => (
            <div className="col-md-3" key={index}>
              <div className="card bg-dark text-white p-3 mb-3 border-0">
                <img
                  src={song.album.cover_medium}
                  alt={song.title}
                  className="img-fluid rounded mb-2"
                />
                <p>{song.title}</p>
                <p>{song.artist.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="explore-more mb-5">
        <h3 className="mb-4">Altro da esplorare</h3>
        <div className="row">
          <div className="col-md-3 mb-3">
            <button className="btn btn-danger w-100">Esplora per genere</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-danger w-100">Worldwide</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-danger w-100">Video musicali</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-danger w-100">Nuovi artisti</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-danger w-100">Decenni</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-danger w-100">Classifiche</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-danger w-100">
              Attività e stati d'animo
            </button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-danger w-100">Hit del passato</button>
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-danger w-100">Audio spaziale</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppleMusic;
