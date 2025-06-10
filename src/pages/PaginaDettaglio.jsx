// Importo tutto quello che mi serve per questa pagina
import React from 'react'
import tripsArray from '../../data' // Array con tutti i viaggi
import Navbar from '../componenti/Navbar' // Navbar che uso ovunque
import { useState } from 'react' // Per gestire lo stato della ricerca
import { useParams } from 'react-router-dom' // Per prendere l'id dall'URL
import { Link } from 'react-router-dom' // Per tornare alla home

const PaginaDettaglio = () => {

    // Stato per tenere traccia di quello che scrivo nella barra di ricerca
    const [search, setSearch] = useState('')

    // Funzione che si attiva ogni volta che scrivo qualcosa nella ricerca
    const handleChange = (event) => {
        setSearch(event.target.value); // Aggiorno lo stato con quello che ho scritto
    };

    // Prendo l'id del viaggio dall'URL (tipo /dettaglio/5)
    const { id } = useParams();

    // Cerco il viaggio specifico nell'array usando l'id
    const trip = tripsArray.find(t => {
        return t.id === parseInt(id); // Converto l'id in numero perché nell'URL è stringa
    });

    // Filtro i partecipanti in base a quello che scrivo nella ricerca
    // Cerco sia nel nome che nel cognome, tutto in minuscolo per non avere problemi
    const filteredParticipant = trip.participants.filter(participant =>
        participant.name.toLowerCase().includes(search.toLowerCase()) ||
        participant.cognome.toLowerCase().includes(search.toLowerCase()) ||
        participant.email.toLowerCase().includes(search.toLowerCase()) ||
        participant.codiceFiscale.toLowerCase().includes(search.toLowerCase()) ||
        participant.telefono.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* Container principale centrato verticalmente e orizzontalmente */}
            <div className="d-flex flex-column justify-content-center align-items-center vh">
                {/* Box principale con ombra e bordi arrotondati */}
                <div className="container text-center rounded-4 shadow bg">
                    <Navbar />

                    <div className="row mt-5 justify-content-center px-5 pb-5">
                        <div className="col-12 mb-4">
                            <h2> Partecipanti al viaggio: <strong>{trip.name}</strong></h2>
                        </div>
                        <div className="col-12">
                            {/* Barra di ricerca per filtrare i partecipanti */}
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Cerca l'utente"
                                aria-label="Search"
                                value={search} // Collegato al mio stato
                                onChange={handleChange} // Funzione che si attiva quando scrivo
                            />
                        </div>

                        {/* Mappo tutti i partecipanti filtrati */}
                        {filteredParticipant.map((participant, index) => (
                            <div className="col-12 my-3 " key={index}>
                                {/* Ogni accordion ha un ID unico per evitare conflitti */}
                                <div className="accordion" id={`accordionExample-${index}`}>
                                    <div className="accordion-item ">
                                        <h2 className="accordion-header  ">
                                            {/* Bottone per aprire/chiudere l'accordion */}
                                            <button
                                                className="accordion-button collapsed" // "collapsed" = chiuso di default
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse-${index}`} // Punta al div giusto
                                                aria-expanded="false" // Per accessibilità: false = chiuso
                                                aria-controls={`collapse-${index}`}>
                                                {/* Mostro nome e cognome nel bottone */}
                                                <p>{participant.name} {participant.cognome}</p>
                                            </button>
                                        </h2>
                                        {/* Div che si apre/chiude quando clicco il bottone */}
                                        <div
                                            id={`collapse-${index}`} // ID unico che corrisponde al data-bs-target
                                            className="accordion-collapse collapse" // "collapse" senza "show" = chiuso di default
                                            data-bs-parent={`#accordionExample-${index}`}> {/* Collegato al suo accordion */}
                                            <div className="accordion-body text-start">
                                                {/* Dettagli del partecipante */}
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
                            {/* Bottone per tornare alla home */}
                            <Link className="btn background-color text-light mx-2" to="/">Torna alla lista viaggi</Link>
                            <Link className="btn background-color text-light mx-2" to="/form">Pagina Form Viaggi</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginaDettaglio