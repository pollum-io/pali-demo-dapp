import React from 'react';

import { PrimaryButton } from './Button';

interface ICard {
  title: string;
  btn1: string;
  btn2: string;
  output: string;
}

export const Card: React.FC<ICard> = ({ title, btn1, btn2, output }) => (
  <div className="bg-bkg-2 p-4 w-72 mx-auto md:w-80 md:max-w-md rounded-lg">
    <p className="w-full text-left pb-3">{title}</p>
    <div className="grid grid-rows-3 gap-y-3 rounded-md">
      <PrimaryButton text={btn1} type="button" />
      <PrimaryButton text={btn2} type="button" />
      <div className="border-2 border-bkg-4 bg-bkg-6 text-left px-4 py-1 rounded-md">
        {output}
      </div>
    </div>
  </div>
);
