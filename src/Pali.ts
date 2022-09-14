const { provider, pali } = window;

const _provider = provider || pali;

export const isInstalled = () => _provider !== undefined;

//* Event listeners
if (isInstalled()) {
  _provider.on('connect', () => console.log('on connect'));
  _provider.on('disconnect', () => console.log('on disconnect'));
  _provider.on('accountChange', () => console.log('on accountChange'));
  _provider.on('chainChange', () => console.log('on chainChange'));
}

//* Default methods
export const isConnected = async () => _provider.isConnected();
export const connect = async () => _provider.enable();
export const disconnect = async () => _provider.disable();

//* Requests
export const request = async (method: string, args?: any[]) =>
  _provider.request({ method, args });

export const changeAccount = () => request('wallet_changeAccount');

export const getAccount = () => request('sys_getAccount');
export const getNetwork = () => request('sys_getNetwork');

export const signTypedDataV4 = (params: any) =>
  request('eth_signTypedData_v4', [params]);
