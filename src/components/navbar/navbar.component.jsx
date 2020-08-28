import React from "react"
import {Link} from "react-router-dom"
import "./navbar.style.scss"

const Navbar = () => (
    <div className="navbar">
        <Link className="navbar__item" to="/" >Exrcises List</Link>
        <Link className="navbar__item"  to="create">Create Exrcise</Link>
        <Link className="navbar__item" to="/user">Creat eUser</Link>
        
    </div>
)

export default Navbar