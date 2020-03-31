import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Company } from './Company';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import './css/experience.css'

const check = <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4b8b3b" }} />

const Company1 = (props) => {
    return (
        <Company cid="company1" logo='./images/experience/igdm.png' gif='./images/experience/igdm.gif'>
            <div class="content">
                <h5 class="companyInfo">Open source Electron messaging application for supporting Instagram Direct message on Mac/Pc/Linux.</h5>
                <ul class="company-point">
                    <li>{check} Solved Bugs many UI related bugs in the application.</li>
                    <li>{check} Fixed Two Factor Authentication issues happening with instagram in the application.</li>
                    <li>{check} Migrated the application to the latest Instagram Apis in order to function properly.</li>
                </ul>
                <ul class="languages">
                    <li><img src="./images/languages/javascript.svg" class="language" alt="javascript" /></li>
                    <li><img src="./images/languages/electronjs.svg" class="language" alt="electron"/></li>
                    <li><img src="./images/languages/html5.svg" class="language" alt="html5" /></li>
                    <li><img src="./images/languages/css3.svg" class="language" alt="css3"/></li>
                </ul>
            </div>
        </Company>
    )
}

const Company2 = (props) => {
    return (
        <Company cid="company2" logo='./images/experience/zohomdm.png' gif='./images/experience/MDM_Home.gif'>
            <div class="content">
                <h5 class="companyInfo">ManageEngine crafts comprehensive IT management software for all your business needs.</h5>
                <ul class="company-point">
                    <li>{check} Developed Oauth2.0 Framework for the team to maintain hustle free
authentication with various other services including internal Zoho services. </li>
                    <li>{check} Developed Manage Engine’s integration app using JavaScript and Rest API
between services for platforms like JIRA, Zendesk </li>
                    <li>{check} Worked on various Directory services like AZURE AD, Microsoft’s OPAD, Okta, Ping and ZOHO Directory </li>
                </ul>
                <ul class="languages">
                    <li><img src="./images/languages/java.svg" class="language" alt="java"/></li>
                    <li><img src="./images/languages/javascript.svg" class="language" alt="js"/></li>
                    <li><img src="./images/languages/html5.svg" class="language" alt="html"/></li>
                    <li><img src="./images/languages/css3.svg" class="language" alt="css"/></li>
                </ul>
            </div>
        </Company>
    )
}

const Company3 = (props) => {
    return (
        <Company cid="company3" logo='./images/experience/cognizanttravellers.png' gif='./images/experience/travellers.gif'>
            <div class="content">
                <h5 class="companyInfo">Travelers, is an American insurance company. It is the second-largest writer of U.S. commercial property casualty insurance, and the third-largest writer of U.S. personal insurance through independent agents.</h5>
                <ul class="company-point">
                    <li>{check} Exposer to Spring Boot and Maven application framework.</li>
                    <li>{check} Coding complex bug fixes in Java for calculations by understanding the
business logic. </li>
                    <li>{check} Experience of Software delivery in agile framework (i.e. Kan-Ban
framework) </li>
                </ul>
                <ul>
                    <li><img src="./images/languages/spring-3.svg" class="language" alt="spring"/></li>
                    <li><img src="./images/languages/javascript.svg" class="language" alt="js"/></li>
                    <li><img src="./images/languages/html5.svg" class="language" alt="html"/></li>
                    <li><img src="./images/languages/css3.svg" class="language" alt="css"/></li>
                </ul>
            </div>
        </Company>
    )
}

export default function Projects() {
    const screenWidth = window.screen.width;
    if (screenWidth < 768) {
        return (
            <div className="box" style={{height: 'auto'}}>
                <h4 class="head-mobile">EXPERIENCE</h4>
                <Company1 />
                <Company2 />
                <Company3 />
            </div>
        )
    }
    return (
        <div>
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration="2000"
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
                            <div class="experience" id="experience-section">
                                <Company1 />
                                <Company2 />
                                <Company3 />
                            </div>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
        </div >
    )
}