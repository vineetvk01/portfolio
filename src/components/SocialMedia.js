import React from 'react';
import "./css/socialMedia.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default class SocialMedia extends React.Component {
    

    render() {
        const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
        const gitHub = <FontAwesomeIcon icon={faGithubSquare} />
        const medium = <FontAwesomeIcon icon={faMedium} />
        const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
        const instagram = <FontAwesomeIcon icon={faInstagram} />
        const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
        
        return (
        <div id="sideBar">
            <a href="https://www.linkedin.com/in/vineetsrivastav/" target="_blank" rel="noopener noreferrer"><div className="icon" id="linkedIn">{linkedIn}</div></a><br/>
            <a href="https://github.com/vineetvk01" target="_blank" rel="noopener noreferrer"><div className="icon" id="gitHub">{gitHub}</div></a><br/>
            <a href="https://medium.com/@vineetvk01" target="_blank" rel="noopener noreferrer"><div className="icon" id="medium">{medium}</div></a><br/>
            <a href="https://www.facebook.com/vineet.srivastav1" target="_blank" rel="noopener noreferrer"><div className="icon" id="facebook">{facebook}</div></a><br/>
            <a href="https://www.instagram.com/i.amvineet/" target="_blank" rel="noopener noreferrer"><div className="icon" id="instagram">{instagram}</div></a><br/>
            <a href="https://twitter.com/vineetvk01" target="_blank" rel="noopener noreferrer"><div className="icon" id="twitter">{twitter}</div></a><br/>
        </div>)
    }
}