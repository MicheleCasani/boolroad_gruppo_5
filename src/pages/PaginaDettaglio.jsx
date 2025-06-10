import React from 'react';
import Navbar from '../componenti/Navbar';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PaginaDettaglio = () => {
    const [search, setSearch] = useState('');
    const { id } = useParams();

    // Modifica: ora prende i dati dal localStorage
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    const trip = savedTrips.find(t => t.id === parseInt(id));

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredParticipant = trip ? trip.participants.filter(participant =>
        participant.name.toLowerCase().includes(search.toLowerCase()) ||
        participant.cognome.toLowerCase().includes(search.toLowerCase()) ||
        participant.email.toLowerCase().includes(search.toLowerCase()) ||
        participant.codiceFiscale.toLowerCase().includes(search.toLowerCase()) ||
        participant.telefono.toLowerCase().includes(search.toLowerCase())
    ) : [];

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center vh">
                <div className="container text-center rounded-4 shadow bg">
                    <Navbar />

                    <div className="row mt-5 justify-content-center px-5 pb-5">
                        <div className="col-12 mb-4">
                            <h2> Partecipanti al viaggio: <strong>{trip ? trip.name : "Viaggio non trovato"}</strong></h2>
                        </div>
                        <div className="col-12">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Cerca l'utente"
                                aria-label="Search"
                                value={search}
                                onChange={handleChange}
                            />
                        </div>

                        {filteredParticipant.map((participant, index) => (
                            <div className="col-12 my-3" key={index}>
                                <div className="accordion" id={`accordionExample-${index}`}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse-${index}`}
                                                aria-expanded="false"
                                                aria-controls={`collapse-${index}`}>
                                                <p>{participant.name} {participant.cognome}</p>
                                            </button>
                                        </h2>
                                        <div id={`collapse-${index}`} className="accordion-collapse collapse">
                                            <div className="accordion-body text-start">
                                                <div><strong>Telefono: </strong> <a href={`tel:${participant.telefono}`}>{participant.telefono}</a></div>
                                                <div><strong>Email: </strong> <a href={`mailto:${participant.email}`}>{participant.email}</a></div>
                                                <div><strong>Codice fiscale: </strong> {participant.codiceFiscale}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-12">
                            <Link className="btn background-color text-light mx-2" to="/">Torna alla lista viaggi</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaginaDettaglio;