import React from 'react';
import './Connect.css';
import line from '../../../../public/Dash.png';
import Image from 'next/image';

export const Connect = () => {
  return (
    <div className="connect-container">
      <div className="header-container">
        <h1>
          Get in touch <Image src={line} alt="dash"></Image>
        </h1>
      </div>
      <div className="info-container">
        <p>Based in Silicon Valley, working remotely with global clients.</p>
        <p>+1.515.208.2306</p>
      </div>
    </div>
  );
};
