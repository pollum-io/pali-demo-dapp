import React, { createContext, useContext, useState } from 'react';
import { initialNetworksState } from '../data';
import { useProviderContext } from './provider';

// todo: add types
const defaultValue: any = {};

const PaliMethodsContext = createContext(defaultValue);

export const PaliMethodsProvider = ({ children }: { children: any; }) => {
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(initialNetworksState);

  const { provider } = useProviderContext();

  const isInstalled = () => provider !== undefined;

  const setConnectedAccount = () => getAccount().then((response: any) => setAccount(response));

  //* Event listeners
  if (isInstalled()) {
    provider.on('connect', () => setConnectedAccount());
    provider.on('disconnect', () => setAccount(null));
    provider.on('accountChange', () => setConnectedAccount());
    provider.on('chainChange', () => {
      getNetwork().then((response: any) => setNetwork(response));
      setConnectedAccount();
    });
  }

  //* Default methods
  const isConnected = () => provider.isConnected();
  const connect = () => provider.enable();
  const disconnect = () => provider.disable();

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
  }

  return (
    <PaliMethodsContext.Provider value={{
      ...methods, state: { account, network } }}>
      {children}
    </PaliMethodsContext.Provider>
  );
};

export const usePaliMethods = () => useContext(PaliMethodsContext);