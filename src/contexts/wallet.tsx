import React, { createContext, useContext, useEffect, useState } from 'react';
import { initialActiveAccountState, initialNetworksState } from '../data';
import { getAccount } from '../pali';

const defaultValue = { account: initialActiveAccountState, network: initialNetworksState, providerPrefix: 'sys', setProvider: ((state: any) => (state)) as any };

const WalletContext = createContext(defaultValue);

export const WalletProvider = ({ children }: { children: any; }) => {
  const [providerPrefix, setProviderPrefix] = useState('sys');
  const [account, setAccount] = useState(initialActiveAccountState);
  const [network] = useState(initialNetworksState);

  const setProvider = (prefix: string) => {
    setProviderPrefix(prefix);

    const _provider = prefix === 'sys' ? 'pali' : 'ethereum';

    window.provider = window[_provider];

    console.log({ prov: window.provider })

    getAccount().then((response) => setAccount(response));
  };

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setProvider('sys');
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <WalletContext.Provider value={{ account, network, providerPrefix, setProvider }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);
