import React from 'react';

import { PrimaryButton, Output } from './Button';

interface IBGCard {
  children: React.ReactNode;
  title: string;
}

export const BGCard: React.FC<IBGCard> = ({ children, title }) => (
  <div className="bg-bkg-2 p-4 w-72 mx-auto 3xl:w-80 md:max-w-md rounded-lg h-max">
    <p className="w-full text-left pb-3">{title}</p>
    {children}
  </div>
);

interface ICard {
  title: string;
  btn1: string;
  btn2: string;
  text: string;
}

export const Card: React.FC<ICard> = ({ title, btn1, btn2, text }) => (
  <BGCard title={title}>
    <div className="grid grid-rows-3 gap-y-3 rounded-md">
      <PrimaryButton text={btn1} type="button" />
      <PrimaryButton text={btn2} type="button" />
      <Output text={text} output="" />
    </div>
  </BGCard>
);
