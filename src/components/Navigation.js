import React from 'react';

import './css/navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Bars = <FontAwesomeIcon icon={faBars} />

export default function Navigation(){
    return <div id="nav"><nav>{Bars}</nav></div>
}