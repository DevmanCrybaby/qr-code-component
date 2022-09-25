import React from 'react';
import './Card.css';

import QR from '../images/image-qr-code.png'

export default props =>
    <div className='main'>
        <img className='img' src={QR} alt="qr-code" />
        <h1 className='title'>Improve your front-end skills by building projects</h1>
        <p className='details'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>