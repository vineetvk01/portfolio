import React, { useState, useEffect } from 'react';

import './css/navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Bars = <FontAwesomeIcon icon={faBars} />
const Cross = <FontAwesomeIcon icon={faTimes} />

export default function Navigation() {
    let [open, setOpen] = useState(false);

    useEffect(() => {
        // console.log(open);
    });

    return <div id="nav-container" className={(open)?'nav-open':'nav-closed'}>
        <nav>
        <button id="nav-button" onClick={()=>setOpen(!open)}>{(open)?Cross:Bars}</button>
        <ul className={(open)?'menu-open':'menu-closed'}>
            <li><a href="#welcome">Home</a></li>
            <li><a href="#experience-section">Experience</a></li>
            <li><a href="#project-section">Project</a></li>
            <li><a href="#contactMe">Contact</a></li>
        </ul>
        </nav>
    </div>
}