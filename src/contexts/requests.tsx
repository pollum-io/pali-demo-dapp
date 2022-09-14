import React, { createContext, useContext } from 'react';
import { useProviderContext } from './provider';

// todo: add types
const defaultValue: any = {};

const PaliMethodsContext = createContext(defaultValue);

export const PaliMethodsProvider = ({ children }: { children: any; }) => {
  const { provider } = useProviderContext();

  const isInstalled = () => provider !== undefined;

  //* Event listeners
  if (isInstalled()) {
    provider.on('connect', () => console.log('on connect'));
    provider.on('disconnect', () => console.log('on disconnect'));
    provider.on('accountChange', () => console.log('on accountChange'));
    provider.on('chainChange', () => console.log('on chainChange'));
  }

  //* Default methods
  const isConnected = async () => provider.isConnected();
  const connect = async () => provider.enable();
  const disconnect = async () => provider.disable();

  //* Requests
  const request = async (method: string, args?: any[]) =>
    provider.request({ method, args });

  const changeAccount = () => request('wallet_changeAccount');

  const getAccount = () => request('sys_getAccount');
  const getNetwork = () => request('sys_getNetwork');

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
    <PaliMethodsContext.Provider value={{ ...methods }}>
      {children}
    </PaliMethodsContext.Provider>
  );
};

export const usePaliMethods = () => useContext(PaliMethodsContext);