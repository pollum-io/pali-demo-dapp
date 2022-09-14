import React, { createContext, useContext, useEffect, useState } from 'react';
import { initialActiveAccountState, initialNetworksState } from '../data';

const defaultValue = { provider: window.pali ?? undefined, setProvider: ((state: any) => (state)) as any, setPrefix: ((state: any) => (state)) as any, state: { prefix: 'sys', account: initialActiveAccountState, network: initialNetworksState} };

const ProviderContext = createContext(defaultValue);

export const PaliWalletProvider = ({ children }: { children: any; }) => {
  const { pali } = window;

  const [account, setAccount] = useState(initialActiveAccountState);
  const [network] = useState(initialNetworksState);
  const [prefix, setPrefix] = useState('sys');
  const [provider, setProvider] = useState(pali ?? undefined);
  const [hydrated, setHydrated] = useState(false);


  useEffect(() => {
    const _provider = prefix === 'sys' ? window.pali : window.ethereum;

    setProvider(_provider);

    window.provider = _provider;

    _provider.request('sys_getAccount').then((response: any) => setAccount(response));
  }, [prefix]);

  useEffect(() => {
    setHydrated(true);
    setProvider(provider);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <ProviderContext.Provider value={{ provider, setProvider, setPrefix, state: { prefix, account, network } }}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useProviderContext = () => useContext(ProviderContext);
export const provider = window.provider;