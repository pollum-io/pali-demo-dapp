import React from 'react';

import Globe from '../assets/icons/Globe.svg';
import Discord from '../assets/icons/Discord.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Download from '../assets/icons/Download.svg';
import Document from '../assets/icons/Document.svg';

export const Footer = () => (
  <div className="bottom-0 flex-row items-center bg-bkg-4 h-16 w-full px-2 md:px-8 xl:px-52 2xl:px-72 flex justify-between">
    <div className=" flex items-center h-max flex-row gap-x-2 md:gap-x-3">
      <button className="rounded-full bg-brand-deepPink100 w-8 h-8 md:w-9 md:h-9 text-center text-white flex justify-center items-center hover:bg-brand-royalblue">
        <img src={Globe} alt="" className="w-4 md:w-5" />
      </button>

      <button className="rounded-full bg-brand-deepPink100 w-8 h-8 md:w-9 md:h-9 text-center text-white flex justify-center items-center hover:bg-brand-royalblue">
        <img src={Discord} alt="" className="w-4 md:w-5" />
      </button>

      <button className="rounded-full bg-brand-deepPink100 w-8 h-8 md:w-9 md:h-9 text-center text-white flex justify-center items-center hover:bg-brand-royalblue">
        <img src={Twitter} alt="" className="w-4 md:w-5" />
      </button>
    </div>

    <div className="flex items-center h-max flex-row gap-4">
      <div className="flex items-center h-max flex-row hover:text-white">
        <button className="rounded-full px-1 md:px-3 text-gray-100 font-poppins text-sm flex flex-row items-center">
          <img
            src={Download}
            alt="Download Pali"
            className="mr-1.5 w-4 md:w-5"
          />
          DOWNLOAD
        </button>
      </div>

      <div className="flex items-center h-max flex-row hover:text-white">
        <button className="rounded-full px-1 text-gray-100 font-poppins text-sm flex flex-row items-center">
          <img src={Document} alt="Docs Pali" className="mr-1.5 w-4 md:w-5" />
          DOCS
        </button>
      </div>
    </div>
  </div>
);
