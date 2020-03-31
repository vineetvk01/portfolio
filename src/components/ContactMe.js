import React from 'react';
import SocialMedia from './SocialMedia'
import './css/contactMe.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
const gitHub = <FontAwesomeIcon icon={faGithubSquare} />
const resume = <FontAwesomeIcon icon={faFileDownload} />


export default function ContactMe() {
    const screenWidth = window.screen.width;
    return (
        <div id="contactMe" className="box">
            <h1>Reach Out to Me !</h1>
            <div className="formContainer">
                <form>
                    <input type="text" name="name" placeholder="Name (Required)" />
                    <input type="text" name="email" placeholder="Email (Required)" />
                    <textarea style={{"height":"200px"}} name="message" placeholder="Message (Required)" ></textarea>
                    <input type="submit" value="Ping Me now !" />
                </form>
            </div>
            <img id="messageWrite" src="./images/notes.svg" />
            {screenWidth < 768 ? (<div class="social-media-list">
                <div id="linkedIn">{linkedIn}</div>
                <div id="gitHub">{gitHub}</div>
                <div id="resume">{resume}</div>
            </div>): ''}
            
        </div>
    )
}