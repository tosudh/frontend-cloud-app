import React from 'react'
import Navbar from './components/Header';
import Body from './components/Body';
import './mainStyle.scss';

function Main() {
    return (
        <div id='mainRoute'>
        <Navbar/>
        <Body/>
        </div>
    )
}

export default Main
