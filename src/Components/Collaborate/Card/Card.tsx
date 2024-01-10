import React from 'react';
import Image from 'next/image';

export const Card = ({ icon, heading, body, timing }) => {
  return (
    <div
      className=" md:w-[100%] h-[full] px-10  flex flex-row 
    justify-center bg-[#29282b] ; text-white"
    >
      <div>
        <Image
          src={icon}
          alt="Lighting Icon"
          width={30}
          height={30}
          className="mb-6 mt-36 md:mt-20 "
        />
        <h2 className="mb-6 text-10 text-white text-left m-0 text-3xl md:text-2xl ;">
          {heading}
        </h2>
        <p className="mb-6 text-6xl md:text-1xl">{body}</p>
        <p className="mb-36 text-6xl md:text-1xl mb-20">Timing: {timing}</p>
      </div>
    </div>
  );
};
