import React from 'react';

import logo from '../assets/images/logo.svg';

import { FirstRow } from './Rows/FirstRow';
import { SecondRow } from './Rows/SecondRow';
import { ThirdRow } from './Rows/ThirdRow';
import { FourthRow } from './Rows/FourthRow';

export const Body = () => (
  <div className="grid md:gap-y-3 text-center w-full h-max">
    <FirstRow />
    <SecondRow />

    <ThirdRow />
    <FourthRow />

    <div className="flex flex-row items-center justify-center w-full py-4">
      <img src={logo} alt="" className="w-32 md:w-40" />
    </div>
  </div>
);
