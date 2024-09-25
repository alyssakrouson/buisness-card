import React from 'react';
import ReactDOM from 'react-dom/client';
import alyssa from './images/alyssa.jpg'; // Importing image
import mailImage from './images/mail.png';
import linkedinImage from './images/linkedin.png';

export default function NameCard() {
    return (
        <header className='NameCard'>
            <img id='profile' src={alyssa}/>
            <p className="main--title">Alyssa Krouson</p>
            <p id='Ocupation'>Computer Science Graduate</p>
            <a href="https://github.com/alyssakrouson" target="_blank"> https://github.com/alyssakrouson </a>

            <div className="buttons">
                <ul>
                    <a href="mailto:alyssakrouson@gmail.com" id = "email"><li><img src={mailImage}/> Email</li></a>
                    <a href="https://www.linkedin.com/in/alyssa-krouson-7a2555236/" target="_blank"><li id='linked'> <img src={linkedinImage}/> Linkedin</li></a>
                </ul>
            </div>

        </header>
    )
}