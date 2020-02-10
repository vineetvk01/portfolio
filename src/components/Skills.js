import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

import './css/skills.css'

const mobile = <FontAwesomeIcon icon={faMobile} style={{ color: "#999" }} />
const laptop = <FontAwesomeIcon icon={faLaptop} style={{ color: "#999" }} />

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
                        wrapper={<div id="skills" className="box" />}
                        target={
                            <div id="tableStand" style={{ zIndex: "10" }}>
                            --Table
                            </div>
                        }
                    >
                        <div class="head">SKILLS</div>
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                            
                        >
                            <Tween
                            from={{ opacity: 0}}
                            to={{opacity: 1}}
                        >
                            <div id="laptopIcon" style={{ zIndex: "10" }}>
                                <img src="./images/experience/laptop.svg" width="34%" />
                            </div>
                        </Tween>   
                        </Tween>
                        
                    </Timeline>
                </Scene>
            </Controller>
        </React.Fragment>
    )
}