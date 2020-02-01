import React from 'react';
import './css/home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


export default class Home extends React.Component {
    state = {

    }

    render() {
        const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
        const gitHub = <FontAwesomeIcon icon={faGithubSquare} />
        const medium = <FontAwesomeIcon icon={faMedium} />
        const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
        const instagram = <FontAwesomeIcon icon={faInstagram} />
        const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
        const ArrowDown = <FontAwesomeIcon icon={faArrowDown} />


        return (
            <div id="welcome" className="box">
                <div id="coloumn1">
                    <h1>𝗛𝗘</h1>
                    <h1>𝗟𝗟𝗢<span className="redText">&#9679;</span></h1>
                </div>
                <div id="coloumn2">
                    <p id="scrollMe" className="vertical">SCROLL</p>
                    <p id="arrowDown" className="vertical">{ArrowDown}</p>
                </div>
                <div id="coloumn3">
                    {linkedIn}
                    <br />
                    {gitHub}
                    <br />
                    {medium}
                    <br />
                    {facebook}
                    <br />
                    {instagram}
                    <br />
                    {twitter}
                </div>
            </div>
        )
    }
}
