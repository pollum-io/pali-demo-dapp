import React from 'react';
import { FaDiscord, FaTwitter, FaGlobe } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { TiDocumentText } from 'react-icons/ti';

export const Footer = () => (
  <div className="bottom-0 flex-row items-center bg-bkg-4 h-16 w-full px-2 md:px-8 xl:px-52 2xl:px-72 flex justify-between">
    <div className=" flex items-center h-max flex-row gap-x-3">
      <button className="rounded-full bg-brand-deepPink100 p-2 text-white ">
        <FaGlobe />
      </button>
      <button className="rounded-full bg-brand-deepPink100 p-2 text-white ">
        <FaDiscord />
      </button>
      <button className="rounded-full bg-brand-deepPink100 p-2 text-white ">
        <FaTwitter />
      </button>
    </div>
    <div className=" flex items-center h-max flex-row">
      <button className="rounded-full px-1 text-white text-sm md:text-sm flex flex-row">
        <HiDownload className="text-xl mx-1" />
        DOWNLOAD
      </button>
      <button className="rounded-full px-1 text-white text-sm md:text-sm flex flex-row">
        <TiDocumentText className="text-xl mx-1" />
        DOCS
      </button>
    </div>
  </div>
);
