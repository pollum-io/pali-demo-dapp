import React from 'react';

import Globe from '../assets/icons/Globe.svg';
import Discord from '../assets/icons/Discord.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Download from '../assets/icons/Download.svg';
import Document from '../assets/icons/Document.svg';

import { CircleButton, TextButton } from './Buttons/FooterButtons';

export const Footer = () => (
  <div className="bottom-0 flex-row items-center bg-bkg-4 h-16 w-full px-2 md:px-8 xl:px-52 2xl:px-72 flex justify-between">
    <div className=" flex items-center h-max flex-row gap-x-2 md:gap-x-3">
      <CircleButton src={Globe} alt="Globe Icon" />
      <CircleButton src={Discord} alt="Discord Icon" />
      <CircleButton src={Twitter} alt="Twitter Icon" />
    </div>

    <div className="flex items-center h-max flex-row gap-4">
      <TextButton src={Download} text="DOWNLOAD" alt="Download Pali" link="" />
      <TextButton src={Document} text="DOCS" alt="Docs Pali" link="" />
    </div>
  </div>
);
