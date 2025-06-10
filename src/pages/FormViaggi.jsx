import React from 'react';
import Navbar from '../componenti/Navbar';
import tripsArray from '../../data';
import { useState } from 'react';



const FormViaggi = () => {

    const [trips, setTrips] = useState([]);

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

    const handleTripChange = (e) => {
        setTrip({ ...trip, [e.target.name]: e.target.value });
    };

    const handleParticipantChange = (e) => {
        setParticipant({ ...participant, [e.target.name]: e.target.value });
    };

    const addParticipant = () => {
        setTrip((prevTrip) => {
            return {
                ...prevTrip,
                participants: [...prevTrip.participants, participant]
            }
        })



        setParticipant(() => {
            return {
                name: '',
                cognome: '',
                telefono: '',
                email: '',
                codiceFiscale: '',
            }
        })
    };

    const handleSaveTrip = () => {
        setTrips((prevTrips) => [...prevTrips, trip]);
        setTrip({
            name: '',
            city: '',
            startDate: '',
            endDate: '',
            participants: []
        });
    };




    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="mb-4 text-center">Aggiungi un nuovo viaggio</h2>
                <form className="p-4 rounded shadow bg-light">
                    <div className="mb-3">
                        <label className="form-label">Nome viaggio</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={trip.name}
                            onChange={handleTripChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">città</label>
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            value={trip.city}
                            onChange={handleTripChange} />
                    </div>

                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Data Inizio</label>
                            <input
                                type="date"
                                className="form-control"
                                name="startDate"
                                value={trip.startDate}
                                onChange={handleTripChange} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Data Fine</label>
                            <input
                                type="date"
                                className="form-control"
                                name="endDate"
                                value={trip.endDate}
                                onChange={handleTripChange} />
                        </div>
                    </div>

                    <hr className="my-4" />
                    <h4 className="mb-3">Partecipante</h4>

                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={participant.name}
                                onChange={handleParticipantChange} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Cognome</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cognome"
                                value={participant.cognome}
                                onChange={handleParticipantChange} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Telefono</label>
                        <input
                            type="text"
                            className="form-control"
                            name="telefono"
                            value={participant.telefono}
                            onChange={handleParticipantChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={participant.email}
                            onChange={handleParticipantChange} />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Codice Fiscale</label>
                        <input
                            type="text"
                            className="form-control"
                            name="codiceFiscale"
                            value={participant.codiceFiscale}
                            onChange={handleParticipantChange} />
                    </div>

                    <div className="d-grid mb-4">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={addParticipant}>Aggiungi partecipante</button>
                    </div>

                    <div className="d-grid">
                        <button type="button" className="btn btn-primary" onClick={handleSaveTrip}>
                            Salva Viaggio
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormViaggi;