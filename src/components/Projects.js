import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Company } from './Company';
import './css/projects.css'

const Project1 = (props) => {
    return (
        <Company cid="company1" logo='./images/experience/zohomdm.png' gif="./images/experience/zendesk_app.gif">
            <div class="content">
                <h5 class="projectInfo">ManageEngine crafts comprehensive IT management software for all your business needs.</h5>
                <ul class="languages">
                    <li><img src="./images/languages/javascript.svg" class="language" alt="js" /></li>
                    <li><img src="./images/languages/html5.svg" class="language"  alt="html5"/></li>
                    <li><img src="./images/languages/css3.svg" class="language" alt="css" /></li>
                </ul>
            </div>
        </Company>
    )
}

const Project2 = (props) => {
    return (
        <Company cid="company2" logo='./images/experience/verticalnedlogo.png' gif="./images/experience/verticalned.png">
            <div class="content">
                <h5 class="projectInfo">A platform to share college notes between staff and college students.</h5>
                <ul class="languages">
                    <li><img src="./images/languages/php.svg" class="language" alt="php" /></li>
                    <li><img src="./images/languages/jquery.svg" class="language" alt="jquery"/></li>
                    <li><img src="./images/languages/javascript.svg" class="language" alt="js"/></li>
                    <li><img src="./images/languages/html5.svg" class="language" alt="html"/></li>
                    <li><img src="./images/languages/css3.svg" class="language" alt="css"/></li>
                    <li><img src="./images/languages/mysql-5.svg" class="language" alt="mysql"/></li>
                </ul>
            </div>
        </Company>
    )
}

export default function Projects() {
    const screenWidth = window.screen.width;
    if (screenWidth < 768) {
        return (
            <div id="projects" className="box" style={{ height: 'auto' }}>
                <h4 class="head-mobile">PROJECTS</h4>
                <Project1 />
                <Project2 />
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
                        <div class="head">PROJECTS</div>
                        <Tween
                            from={{ x: '0%' }}
                            to={{ x: '-35%' }}
                        >
                            <div class="experience" id="project-section">
                                <Project1 />
                                <Project2 />
                            </div>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
        </div>
    )
}