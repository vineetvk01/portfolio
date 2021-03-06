import React from 'react';
import './css/home.css';
import Bubble from './Bubble';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {
    
    render() {
        const ArrowDown = <FontAwesomeIcon icon={faArrowDown} />
        const screenWidth = window.screen.width;
        let src = './images/laptop_console.png';
        if(screenWidth < 700){
            src = './images/ipad_console.png';
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
                        wrapper={<div id="welcome" className="box" />}
                    >
                        <Tween
                            from={{ x: '0%' }}
                            to={{ x: '85%' }}
                        >
                            <div>
                                <div id="coloumn1" />
                                <div id="coloumn2">
                                    <p id="scrollMe" className="vertical">SCROLL</p>
                                    <p id="arrowDown" className="vertical">{ArrowDown}</p>
                                </div>
                            </div>
                        </Tween>
                        <Tween
                            from={{ css: { opacity: "0" } }}
                            to={{ css: { opacity: "1" } }}
                        >
                            <div id="laptopScreen">
                                <img src={src} alt="laptop" />
                            </div>
                        </Tween>
                        <Timeline
                            target={
                                <div id="Message">
                                    <h1>𝗛𝗘</h1>
                                    <h1>𝗟𝗟𝗢<span className="redText">&#9679;</span></h1>
                                </div>
                            }
                        >
                            <Tween
                                from={{ css: { transform: "scale(0.9)", color: "#000", marginLeft: "0" } }}
                                to={{ css: { transform: "scale(0.6)", color: "#fff", marginLeft: "-10%" } }}
                            />
                        </Timeline>
                        <Timeline
                            target={
                                <div class="about">
                                    <Bubble message="Hi there, I'm Vineet Srivastav." />
                                </div>
                            }
                        >
                            <Tween
                                from={{ css: { opacity: "0" } }}
                                to={{css:{opacity:"1"}}}
                            />
                            <Tween />
                        </Timeline>
                        <Timeline
                            target={
                                <div class="about" id="second-message">
                                    <Bubble message="... I'm a Software Developer." />
                                </div>
                            }
                        >
                            <Tween
                                from={{ css: { opacity: "0" } }}
                                to={{css:{opacity:"1"}}}
                            />
                            <Tween />
                        </Timeline>
                        <Timeline
                            target={
                                <div class="about" id="third-message">
                                    <Bubble message="Scroll to know more... &#128521;" />
                                </div>
                            }
                        >
                            <Tween
                                from={{ css: { opacity: "0"} }}
                                to={{css:{opacity:"1"}}}
                            />
                            <Tween />
                        </Timeline>
                    </Timeline>
                </Scene>
            </Controller>
            </div>
        )
    }
}
