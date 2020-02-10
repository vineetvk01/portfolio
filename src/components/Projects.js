import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import './css/projects.css'

export default function Projects() {
    return (
        <React.Fragment>
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration="3000"
                    pin
                >
                    <Timeline
                        wrapper={<div id="projects" className="box" />}
                    >
                        <div class="head">PROJECTS</div>
                        <Tween
                            from={{ x: '0%' }}
                            to={{ x: '-55%' }}
                        >
                            <div class="experience" style={{ zIndex: "10" }}>
                                <div id="project1">
                                    <img class="gifs" src="./images/experience/zendesk_app.gif" alt="Manage Engine" />
                                    <div class="content">
                                        <img class="companyLogo" src="./images/experience/zohomdm.png" alt="Zoho" />
                                        <h5 class="projectInfo">ManageEngine crafts comprehensive IT management software for all your business needs.</h5>
                                        <ul>
                                            <li><img src="./images/languages/javascript.svg" class="language" /></li>
                                            <li><img src="./images/languages/html5.svg" class="language" /></li>
                                            <li><img src="./images/languages/css3.svg" class="language" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="space">
                                    .
                                </div>
                                <div id="project2">
                                    <img class="gifs" src="./images/experience/verticalned.png" alt="Verticalned" />
                                    <div class="content">
                                        <h5 class="projectName">VerticalNed</h5>
                                        <h5 class="projectInfo">A platform to share college notes between staff and college students.</h5>
                                        <ul>
                                        <li><img src="./images/languages/php.svg" class="language" /></li>
                                        <li><img src="./images/languages/jquery.svg" class="language" /></li>
                                            <li><img src="./images/languages/javascript.svg" class="language" /></li>
                                            <li><img src="./images/languages/html5.svg" class="language" /></li>
                                            <li><img src="./images/languages/css3.svg" class="language" /></li>
                                            <li><img src="./images/languages/mysql-5.svg" class="language" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
        </React.Fragment>
    )
}