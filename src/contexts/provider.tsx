import React, { createContext, useContext, useEffect, useState } from 'react';

const storedPrefix = window.localStorage && window.localStorage.getItem('pali_provider');

const defaultValue = { provider: window.pali ?? undefined, setProvider: ((state: any) => (state)) as any, setPrefix: ((state: any) => (state)) as any, prefix: storedPrefix || 'sys' };

const ProviderContext = createContext(defaultValue);

export const PaliWalletProvider = ({ children }: { children: any; }) => {
  const { pali } = window;
  
  const [prefix, setPrefix] = useState('sys');
  const [provider, setProvider] = useState(pali ?? undefined);
  const [hydrated, setHydrated] = useState(false);

  const network = provider.request({ method: 'wallet_getNetwork', args: [] });

  useEffect(() => {
    const _provider = prefix === 'sys' ? window.pali : window.ethereum;

    setProvider(_provider);

    window.localStorage.setItem('pali_provider', prefix);
  }, [prefix, network]);

  useEffect(() => {
    setPrefix(storedPrefix);
    setHydrated(true);
    setProvider(provider);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <ProviderContext.Provider value={{ provider, setProvider, setPrefix, prefix }}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useProviderContext = () => useContext(ProviderContext);