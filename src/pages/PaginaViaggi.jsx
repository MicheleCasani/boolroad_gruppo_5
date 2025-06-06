import React from 'react'
import trips from '../../data.js'
import Navbar from '../componenti/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'





const PaginaViaggi = () => {


    return (
        <div>
            <div className="container my-5">
                <Navbar />
                <div className="row mt-5">
                    <h1 className='mb-3'>Lista Viaggi</h1>
                    {trips.map((trip, id) => {
                        return (
                            <div className="col-12 my-2" key={id}>
                                <div className="card">
                                    <h5>{trip.name}</h5>
                                    <p>{trip.startDate}</p>
                                    <p>{trip.endDate}</p>
                                    <Link className="btn btn-primary " to={`/trips/${trip.id}`}>Dettaglio</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PaginaViaggi






