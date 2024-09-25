import React from 'react';
import github from './images/GitHub.png';
import instagram from './images/Instagram.png';
import facebook from './images/Facebook.png';
import ReactDOM from 'react-dom/client';

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/alyssakrouson" target="_blank"><img src={github}/></a>
            <a href="https://www.instagram.com/alyssa_krouson/" target="_blank"><img src={instagram}/></a>
            <a href="https://www.facebook.com/alyssa.krouson/" target="_blank"><img src={facebook}/></a>
        </footer>
    )
}