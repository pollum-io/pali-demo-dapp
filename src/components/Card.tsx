import React from 'react';

interface ICard {
  children: React.ReactNode;
  title: string;
}

export const Card: React.FC<ICard> = ({ children, title }) => (
  <div className="bg-bkg-2 p-4 w-80 mx-auto 3xl:w-80 md:max-w-md rounded-lg h-max">
    <p className="w-full text-left pb-3 font-poppins cursor-default">{title}</p>
    {children}
  </div>
);
