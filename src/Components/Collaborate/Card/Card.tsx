import React from 'react';
import Image from 'next/image';

export const Card = ({ icon, heading, body, timing }) => {
  return (
    <div
      className="w-full md:w-[33%] h-[420px] flex flex-col 
    justify-center bg-[#29282b] px-10 py-0; text-white"
    >
      <div>
        <Image
          src={icon}
          alt="Lighting Icon"
          width={30}
          height={30}
          className="mb-7"
        />
        <h2 className="mb-6 text-10 text-white text-left m-0;">{heading}</h2>
        <p className="mb-6">{body}</p>
        <p>Timing: {timing}</p>
      </div>
    </div>
  );
};
