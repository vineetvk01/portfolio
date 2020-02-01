import React from 'react';
import './css/home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


export default class Home extends React.Component {
    render() {
        const ArrowDown = <FontAwesomeIcon icon={faArrowDown} />
        return (
            <div id="welcome" className="box">
                <div id="coloumn1">
                    <h1><div id="h">𝗛</div>𝗘</h1>
                    <h1><div id="l1">𝗟</div><div id="l2">𝗟</div>𝗢<span className="redText">&#9679;</span></h1>
                </div>
                <div id="coloumn2">
                    <p id="scrollMe" className="vertical">SCROLL</p>
                    <p id="arrowDown" className="vertical">{ArrowDown}</p>
                </div>
            </div>
        )
    }
}
