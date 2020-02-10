import React from 'react';

import './css/contactMe.css'

export default function ContactMe() {
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
        </div>
    )
}