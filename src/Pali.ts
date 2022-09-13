const { ethereum } = window;

export const isInstalled = () => ethereum !== undefined;

//* Event listeners
if (isInstalled()) {
  ethereum.on('connect', () => console.log('on connect'));
  ethereum.on('disconnect', () => console.log('on disconnect'));
  ethereum.on('accountChange', () => console.log('on accountChange'));
  ethereum.on('chainChange', () => console.log('on chainChange'));
}

//* Default methods
export const isConnected = async () => ethereum.isConnected();
export const connect = async () => ethereum.enable();
export const disconnect = async () => ethereum.disable();

//* Requests
export const request = async (method: string, args?: any[]) =>
  ethereum.request({ method, args });

export const changeAccount = () => request('wallet_changeAccount');

export const getAccount = () => request('sys_getAccount');

export const signTypedDataV4 = (params: any) =>
  request('eth_signTypedData_v4', [params]);

export const getNetwork = () => request('wallet_getNetwork');
