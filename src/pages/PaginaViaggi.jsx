import React, { useState, useEffect } from 'react';
import Navbar from '../componenti/Navbar.jsx';
import { Link } from 'react-router-dom';

const PaginaViaggi = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const savedTrips = localStorage.getItem("trips");
        if (savedTrips) {
            setTrips(JSON.parse(savedTrips));
        }
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center my-5">

            <div className="container bg text-center rounded-4 shadow">
                <Navbar />
                <div className="row mt-5 justify-content-center px-5 pb-5">
                    <h1 className="mb-3 color">Lista Viaggi</h1>
                    {trips.map((trip, id) => (
                        <div className="col-12 my-3" key={id}>
                            <div className="card p-4 border-0">
                                <h5 className="fw-bold">{trip.city} - {trip.name}</h5>
                                <p className="text-muted">Partenza {trip.startDate}</p>
                                <p className="text-muted">Ritorno {trip.endDate}</p>
                                <Link className="btn background-color w-100 text-light" to={`/trips/${trip.id}`}>
                                    Dettaglio
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className="col-12">
                        <Link className="btn background-color text-light" to="/form">Aggiungi Viaggio</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaginaViaggi
