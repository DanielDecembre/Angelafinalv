import React from 'react';
import './Connect.css';
import line from '../../../../public/Dash.png';
import Image from 'next/image';
import { Header } from '../../Header/Header';

export const Connect = () => {
  return (
    <div>
      <div className="px-[10px] py-20px;">
        <Header>Get in touch</Header>
      </div>
      <div className="flex-col px-20px py-70px">
        <p className="mb-6 px-[15px] py-20px">
          Based in Silicon Valley, working remotely with global clients.
        </p>
        <p className="px-[15px] py-20px">+1.515.208.2306</p>
      </div>
    </div>
  );
};
