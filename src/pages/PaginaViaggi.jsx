import React from 'react'
import tripsArray from '../../data.js'
import Navbar from '../componenti/Navbar.jsx'
import { Link } from 'react-router-dom'


const PaginaViaggi = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh">
            <div className="iphone">
                <div className="iphone-screen">
                    <div className="container bg text-center rounded-4 shadow">
                        <Navbar />
                        <div className="row mt-5 justify-content-center px-5 pb-5">
                            <h1 className="mb-3 color">Lista Viaggi</h1>
                            {tripsArray.map((trip, id) => (
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaViaggi
