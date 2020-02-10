import React from 'react';
import './css/bubble.css'

export default function Bubble(props){
    return (<div class="speech-bubble-ds">
    <p>{props.message}</p>
    <p className="time">02 March 2020, 10:32am</p>
    <div class="speech-bubble-ds-arrow"></div>
</div>)
}