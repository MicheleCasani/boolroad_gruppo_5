import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../componenti/Navbar';
import tripsArray from '../../data';

const FormViaggi = () => {
    const [trips, setTrips] = useState(() => {
        const savedTrips = localStorage.getItem("trips");
        return savedTrips ? JSON.parse(savedTrips) : tripsArray;
    });

    const [trip, setTrip] = useState({
        name: '',
        city: '',
        startDate: '',
        endDate: '',
        participants: [],
    });

    const [participant, setParticipant] = useState({
        name: '',
        cognome: '',
        telefono: '',
        email: '',
        codiceFiscale: '',
    });

    useEffect(() => {
        localStorage.setItem("trips", JSON.stringify(trips));
    }, [trips]);

    const handleTripChange = (e) => {
        setTrip({ ...trip, [e.target.name]: e.target.value });
    };

    const handleParticipantChange = (e) => {
        setParticipant({ ...participant, [e.target.name]: e.target.value });
    };

    const addParticipant = () => {
        setTrip((prevTrip) => ({
            ...prevTrip,
            participants: [...prevTrip.participants, participant]
        }));

        setParticipant({
            name: '',
            cognome: '',
            telefono: '',
            email: '',
            codiceFiscale: '',
        });
    };

    const handleSaveTrip = () => {
        const newTrip = { ...trip, id: trips.length + 1 };
        setTrips([...trips, newTrip]);

        setTrip({
            name: '',
            city: '',
            startDate: '',
            endDate: '',
            participants: []
        });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh">

            <div className="container bg text-center rounded-4 shadow ">
                <Navbar />
                <div className="row mt-5 justify-content-center px-5 pb-5">
                    <h2 className="text-center mb-4 color">Aggiungi un nuovo viaggio</h2>

                    <form className="p-4 border rounded-3 shadow-sm bg-white">
                        <h4 className="mb-3 text-center color">Viaggio</h4>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label fw-bold">Nome viaggio</label>
                                <input type="text" className="form-control" name="name" value={trip.name} onChange={handleTripChange} />
                            </div>

                            <div className="mb-3 col-md-6">
                                <label className="form-label fw-bold">Città</label>
                                <input type="text" className="form-control" name="city" value={trip.city} onChange={handleTripChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label fw-bold">Data Inizio</label>
                                <input type="date" className="form-control" name="startDate" value={trip.startDate} onChange={handleTripChange} />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label fw-bold">Data Fine</label>
                                <input type="date" className="form-control" name="endDate" value={trip.endDate} onChange={handleTripChange} />
                            </div>
                        </div>

                        <hr className="my-4" />
                        <h4 className="mb-3 text-center color">Partecipanti</h4>

                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label fw-bold">Nome</label>
                                <input type="text" className="form-control" name="name" value={participant.name} onChange={handleParticipantChange} />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label fw-bold">Cognome</label>
                                <input type="text" className="form-control" name="cognome" value={participant.cognome} onChange={handleParticipantChange} />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Telefono</label>
                            <input type="text" className="form-control" name="telefono" value={participant.telefono} onChange={handleParticipantChange} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <input type="email" className="form-control" name="email" value={participant.email} onChange={handleParticipantChange} />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Codice Fiscale</label>
                            <input type="text" className="form-control" name="codiceFiscale" value={participant.codiceFiscale} onChange={handleParticipantChange} />
                        </div>

                        <div className="d-grid mb-4">
                            <button type="button" className="btn btn-outline-success fw-bold" onClick={addParticipant}>Aggiungi partecipante</button>
                        </div>

                        <div className="d-grid">
                            <button type="button" className="btn btn-outline-success fw-bold" onClick={handleSaveTrip}>Salva Viaggio</button>
                        </div>

                        <div className="d-grid mt-4">
                            <Link className="btn background-color w-100 text-light" to="/">Torna alla lista viaggi</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormViaggi;