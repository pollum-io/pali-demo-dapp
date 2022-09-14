import React, { useEffect, useState } from 'react';
import { usePaliMethods } from '../contexts/requests';

import logo from '../assets/images/logo.svg';
import { useProviderContext } from '../contexts/provider';

export const Header = () => {
  const [label, setLabel] = useState();

  const { setPrefix, prefix } = useProviderContext();
  const { state: { account, network } } = usePaliMethods();

  const options = {
    sys: {
      label: 'Provider - Syscoin',
      value: 'sys',
    },
    eth: {
      label: 'Provider - Ethereum',
      value: 'eth',
    }
  };

  const stored = window.localStorage.getItem('pali_provider');

  useEffect(() => {
    if (stored !== options[prefix]) setPrefix(stored)
    
    setLabel(options[prefix].label);
  }, []);

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
          Connected: {account ? account.label : 'None'}
        </div>
        <div className="w-64 bg-brand-royalblue px-4 py-1 rounded-full text-sm font-poppins flex items-center">
          Chain ID: {network.chainId || ''}
        </div>

        <select name="provider" onChange={(event) => setPrefix(event.target.value)} className="cursor-pointer w-64 bg-alert-darkwarning px-4 py-1 rounded-full text-sm font-poppins flex items-center">
          <label htmlFor="provider">{label}</label>

          {Object.values(options).map((option) => (
            <option key={option.value} defaultValue={stored} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
