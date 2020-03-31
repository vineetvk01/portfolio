import React from 'react';
import './css/contactMe.css';

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
                <form action="mailto:vineetvk01@gmail.com" method="post" enctype="text/plain">
                    <input type="text" name="name" placeholder="Name (Required)" />
                    <input type="text" name="email" placeholder="Email (Required)" />
                    <textarea style={{"height":"200px"}} name="message" placeholder="Message (Required)" ></textarea>
                    <input type="submit" value="Ping Me now !" />
                </form>
            </div>
            <img id="messageWrite" src="./images/notes.svg" alt="notes" />
            {screenWidth < 768 ? (<div class="social-media-list">
            <a href="https://www.linkedin.com/in/vineetsrivastav/" target="_blank" rel="noopener noreferrer"><div id="linkedIn">{linkedIn}</div></a>
            <a href="https://github.com/vineetvk01" target="_blank" rel="noopener noreferrer"><div id="gitHub">{gitHub}</div></a>
                <div id="resume">{resume}</div>
            </div>): ''}
            
        </div>
    )
}