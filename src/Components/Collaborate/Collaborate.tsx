import React from 'react';
import lightIcon from '../../../public/Lightning_Icon.png';
import projectIcon from '../../../public/Project_Icon.png';
import businessIcon from '../../../public/Business_Icon.png';
import './Collaborate.css';
import line from '../../../public/Dash.png';
import Image from 'next/image';
import { Card } from './Card/Card';
import { Header } from '../Header/Header';

export const Collaborate = () => {
  return (
    <div className="flex w-full h-auto flex-col justify-center items-start gap-2 text-full mt-20 mb-40 mx-auto px-[12px] py-[30px];">
      <div
        className="text-justify text-[#29282b];
  direction: ltr;"
      >
        <Header> Let&apos;s collaborate</Header>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-[100%] h-[100%]">
        <Card
          icon={lightIcon}
          heading={'Sprint'}
          body={
            'Task-oriented relationships focused on a near-term needs. Based on an hourly/day rate.'
          }
          timing={'Typically 2-6 weeks'}
        />
        <Card
          icon={projectIcon}
          heading={'Project'}
          body={
            'Objective-oriented relationships focused on more complex challenges. Based on a project fee.'
          }
          timing={'Typically 3-4 months'}
        />
        <Card
          icon={businessIcon}
          heading={'Dedicated Business Leader'}
          body={
            'Fully-invested business leader focused on the intersection of user x brand x product.'
          }
          timing={'Determined by the scope of the work '}
        />
      </div>
    </div>
  );
};
