import React from 'react'
import trips from '../../data.js'
import Navbar from '../componenti/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'





const PaginaViaggi = () => {


    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="container text-center rounded-4 shadow p-5">
                <Navbar />
                <div className="row mt-5 justify-content-center">
                    <h1 className="mb-3 color ">Lista Viaggi</h1>
                    {trips.map((trip, id) => (
                        <div className="col-12 my-3" key={id}>
                            <div className="card p-4 border-0">
                                <h5 className="fw-bold">{trip.name}</h5>
                                <p className="text-muted">Partenza {trip.startDate}</p>
                                <p className="text-muted">Ritoro {trip.endDate}</p>
                                <Link className="btn background-color w-100 text-light" to={`/trips/${trip.id}`}>Dettaglio</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaginaViaggi






