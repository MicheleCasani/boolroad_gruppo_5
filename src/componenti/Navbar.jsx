import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar rounded-top-4 shadow">
                <div className="container text-center">
                    <a className="navbar-brand fw-bold mx-auto text-light " href="#">Bool Road</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
