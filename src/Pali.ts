const { pali } = window;

export const isInstalled = () => pali !== undefined;

//* Event listeners
if (isInstalled()) {
  pali.on('connect', () => console.log('on connect'));
  pali.on('disconnect', () => console.log('on disconnect'));
  pali.on('accountChange', () => console.log('on accountChange'));
  pali.on('chainChange', () => console.log('on chainChange'));
}

//* Default methods
export const isConnected = async () => pali.isConnected();
export const connect = async () => pali.enable();
export const disconnect = async () => pali.disable();

//* Requests
export const changeAccount = async () =>
  pali.request({ method: 'wallet_changeAccount' });

export const getAccount = async () =>
  pali.request({ method: 'sys_getAccount' });
