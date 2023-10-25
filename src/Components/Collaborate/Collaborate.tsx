import React from 'react';
import lightIcon from '../../../public/Lightning_Icon.png';
import projectIcon from '../../../public/Project_Icon.png';
import businessIcon from '../../../public/Business_Icon.png';
import './Collaborate.css';
import line from '../../../public/Dash.png';
import Image from 'next/image';
import { Card } from './Card/Card';

export const Collaborate = () => {
  return (
    <div className="collaborate-container">
      <div className="text-container">
        <h1>
          {' '}
          Let&apos;s collaborate <Image src={line} alt="dash" />
        </h1>
      </div>
      <div className="row">
        <Card
          icon={ lightIcon }
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
