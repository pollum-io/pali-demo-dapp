import React, { useEffect, useState } from 'react';
import { truncate } from '../utils';

import logo from '../assets/images/logo.svg';
import { useWalletContext } from '../contexts/wallet';

export const Header = () => {
  const { providerPrefix, setProvider, account, network } = useWalletContext();

  const options = [
    {
      label: 'Pali - Syscoin',
      value: 'sys',
    },
    {
      label: 'Pali - Ethereum',
      value: 'eth',
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center py-10 md:justify-between align-center">
      <div className="flex flex-row items-center justify-center">
        <img src={logo} alt="" className="w-32 md:w-40" />
        <div className="cursor-default text-brand-royalblue font-poppins text text-2xl md:text-4xl font-bold tracking-wide leading-4">
          Pali Wallet
        </div>
      </div>

      <div className="grid gap-y-2 py-4 justify-center">
        <div className="w-64 bg-brand-deepPink100 px-4 py-1 rounded-full text-sm font-poppins flex items-center">
          Account: {truncate(account.address || '', 14) }
        </div>
        <div className="w-64 bg-brand-royalblue px-4 py-1 rounded-full text-sm font-poppins flex items-center">
          Chain ID: {network.chainId || ''}
        </div>

        <select onChange={(event) => {
          console.log({ event })
          setProvider(event.target.value)

          console.log({ tg: event.target.value })
        }} className="w-64 bg-alert-darkwarning px-4 py-1 rounded-full text-sm font-poppins flex items-center">
          {options.map((option) => (
            <option key={option.value} defaultValue="sys" selected={providerPrefix === option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
