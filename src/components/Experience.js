import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './css/experience.css'

const check = <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4b8b3b" }} />
const left = <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#4b8b3b" }} />

export default function Projects() {
    return (
        <div>
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration="3000"
                    pin
                >
                    <Timeline
                        wrapper={<div id="projects" className="box" />}
                    >
                        <div class="head">EXPERIENCE</div>
                        <Tween
                            from={{ x: '0%' }}
                            to={{ x: '-65%' }}
                        >
                            <div class="experience">
                            <div id="company1">
                                    <img class="companyLogo" src="./images/experience/zohomdm.png" alt="Zoho" />
                                    <div class="gifs">
                                        <img src="./images/experience/MDM_Home.gif" alt="Manage Engine" />
                                    </div>
                                    <div class="content">
                                        <h5 class="companyInfo">ManageEngine crafts comprehensive IT management software for all your business needs.</h5>
                                        <ul>
                                            <li>{check} Developed Oauth2.0 Framework for the team to maintain hustle free
authentication with various other services including internal Zoho services. </li>
                                            <li>{check} Developed Manage Engine’s integration app using JavaScript and Rest API
between services for platforms like JIRA, Zendesk </li>
                                            <li>{check} Developed Restful APIs for Backend for easy Ember Client interactions. </li>
                                            <li>{check} Integration of AZURE AD, Microsoft’s OPAD and ZOHO Directory for syncing
organization users into our service. </li>
                                            <li>{check} Designed and developed SSO application for SAML authentication for our
service using a IdP( Identity provider ) like Okta, Ping. </li>
                                        </ul>
                                        <ul class="languages">
                                            <li><img src="./images/languages/java.svg" class="language" /></li>
                                            <li><img src="./images/languages/javascript.svg" class="language" /></li>
                                            <li><img src="./images/languages/html5.svg" class="language" /></li>
                                            <li><img src="./images/languages/css3.svg" class="language" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="company2">
                                    <img class="companyLogo" src="./images/experience/zohomdm.png" alt="Zoho" />
                                    <div class="gifs">
                                        <img src="./images/experience/MDM_Home.gif" alt="Manage Engine" />
                                    </div>
                                    <div class="content">
                                        <h5 class="companyInfo">ManageEngine crafts comprehensive IT management software for all your business needs.</h5>
                                        <ul>
                                            <li>{check} Developed Oauth2.0 Framework for the team to maintain hustle free
authentication with various other services including internal Zoho services. </li>
                                            <li>{check} Developed Manage Engine’s integration app using JavaScript and Rest API
between services for platforms like JIRA, Zendesk </li>
                                            <li>{check} Developed Restful APIs for Backend for easy Ember Client interactions. </li>
                                            <li>{check} Integration of AZURE AD, Microsoft’s OPAD and ZOHO Directory for syncing
organization users into our service. </li>
                                            <li>{check} Designed and developed SSO application for SAML authentication for our
service using a IdP( Identity provider ) like Okta, Ping. </li>
                                        </ul>
                                        <ul class="languages">
                                            <li><img src="./images/languages/java.svg" class="language" /></li>
                                            <li><img src="./images/languages/javascript.svg" class="language" /></li>
                                            <li><img src="./images/languages/html5.svg" class="language" /></li>
                                            <li><img src="./images/languages/css3.svg" class="language" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="company3">
                                    <img class="companyLogo" src="./images/experience/cognizanttravellers.png" alt="Cognizant" />
                                    <div class="gifs">
                                        <img class="gifs" src="./images/experience/travellers.gif" alt="Manage Engine" />
                                    </div>
                                    <div class="content">
                                        <h5 class="companyInfo">Travelers, is an American insurance company. It is the second-largest writer of U.S. commercial property casualty insurance, and the third-largest writer of U.S. personal insurance through independent agents.</h5>
                                        <ul>
                                            <li>{check} Exposer to Spring Boot and Maven application framework.</li>
                                            <li>{check} Coding complex bug fixes in Java for calculations by understanding the
business logic. </li>
                                            <li>{check} Experience of Software delivery in agile framework (i.e. Kan-Ban
framework) </li>
                                        </ul>
                                        <ul>
                                            <li><img src="./images/languages/spring-3.svg" class="language" /></li>
                                            <li><img src="./images/languages/javascript.svg" class="language" /></li>
                                            <li><img src="./images/languages/html5.svg" class="language" /></li>
                                            <li><img src="./images/languages/css3.svg" class="language" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
        </div>
    )
}