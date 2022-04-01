import React from 'react';

import logo from '../assets/images/logo.svg';

export const Header = () => (
  <div className="flex flex-col md:flex-row justify-center py-10  md:justify-between align-center">
    <div className="flex flex-row items-center justify-center">
      <img src={logo} alt="" className="w-32 md:w-40" />
      <div className="text-brand-royalblue font-poppins text text-2xl md:text-4xl font-bold tracking-wide leading-4">
        Pali Wallet
      </div>
    </div>

    <div className="grid gap-y-2 py-4 flex justify-center">
      <div className="w-64 bg-brand-deepPink100 px-4 py-1 rounded-full text-sm flex items-center">
        Accounts:
      </div>
      <div className="w-64 bg-brand-royalblue px-4 py-1 rounded-full text-sm flex items-center">
        Chain ID:
      </div>
      <div className="w-64 bg-alert-darkwarning px-4 py-1 rounded-full text-sm flex items-center">
        Network:
      </div>
    </div>
  </div>
);
