import React, { createContext, useContext, useEffect, useState } from 'react';
import { initialNetworksState } from '../data';
import { useProviderContext } from './provider';

// todo: add types
const defaultValue: any = {};

const PaliMethodsContext = createContext(defaultValue);

export const PaliMethodsProvider = ({ children }: { children: any }) => {
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(initialNetworksState);
  const prefix = localStorage.getItem('pali_prefix');
  const { provider } = useProviderContext();
  const state = prefix === 'sys' ? '_sysState' : '_state';

  const isInstalled = provider !== undefined;
  const isConnectedInDapp =
    prefix === 'sys'
      ? provider[state].xpub !== null
      : provider[state].isConnected;

  const setupState = async () => {
    const { isBitcoinBased, isUnlocked } = await provider[state];

    const shouldSwitchNetwork =
      (isBitcoinBased && prefix === 'eth') ||
      (!isBitcoinBased && prefix === 'sys');

    switch (shouldSwitchNetwork) {
      case true:
        if (account && isUnlocked) {
          await provider.request({
            method: `${prefix}_changeUTXOEVM`,
            params: [{ chainId: 57 }],
          });
        }
        break;
      case false:
        if (isUnlocked) {
          provider
            .request({ method: 'wallet_getAccount', params: [] })
            .then((account) => {
              setAccount(account);
            });
        }
        break;
    }

    provider
      .request({ method: 'wallet_getNetwork', params: [] })
      .then((currentNetwork) => {
        if (currentNetwork) {
          if (isUnlocked) {
            setNetwork(currentNetwork);
            return;
          }
        }
      });
  };
  //* Event listeners

  useEffect(() => {
    if (isInstalled && isConnectedInDapp) {
      setupState();
    }
  }, [prefix, provider]);

  //* Default methods
  const isConnected = () => provider.isConnected();
  const connect = async () => {
    const account = await provider.request({
      method: `${prefix}_requestAccounts`,
      params: [],
    });
    setupState();
    return account;
  };
  const disconnect = () => {
    setAccount(null);
    setNetwork(initialNetworksState);
    return provider.disable();
  };

  //* Requests
  const request = (method: string, args?: any[]) =>
    provider.request({ method, args });

  const changeAccount = () => request('wallet_changeAccount');
  const getAccount = () => request('wallet_getAccount');
  const getNetwork = () => request('wallet_getNetwork');

  const signTypedDataV4 = (params: any) =>
    request('eth_signTypedData_v4', [params]);

  const methods = {
    isInstalled,
    isConnected,
    connect,
    disconnect,
    request,
    changeAccount,
    getAccount,
    getNetwork,
    signTypedDataV4,
  };

  return (
    <PaliMethodsContext.Provider
      value={{
        ...methods,
        state: { account, network },
      }}
    >
      {children}
    </PaliMethodsContext.Provider>
  );
};

export const usePaliMethods = () => useContext(PaliMethodsContext);