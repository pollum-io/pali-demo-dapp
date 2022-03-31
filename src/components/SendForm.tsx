import React from 'react';

import { PrimaryButton } from './Button';

interface IInput {
  placeholder: string;
}

const Input: React.FC<IInput> = ({ placeholder }) => (
  <input
    className="border-2 border-bkg-4 bg-bkg-6 text-left px-4 py-1 rounded-md h-max"
    placeholder={placeholder}
  />
);

export const SendForm = () => (
  <div className="flex flex-col gap-y-3 rounded-md">
    <Input placeholder="From" />
    <Input placeholder="To" />
    <Input placeholder="Ammount" />
    <Input placeholder="Type" />
    <Input placeholder="Gas Price" />
    <Input placeholder="Data" />
    <PrimaryButton text="Submit" type="submit" />
  </div>
);
