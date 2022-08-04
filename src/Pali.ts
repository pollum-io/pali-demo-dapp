import { jsonPsbt, tokenCreationMock } from './components/mocks';

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

//* Transactions
export const confirmMintNFT = async (data: any) => {
  const request = await pali.request({
    method: 'sys_confirmMintNFT',
    args: data,
  });

  console.log({ request });
};

export const signTransaction = async () => {
  const request = await pali.request({
    method: 'sys_signTransaction',
    args: [jsonPsbt, false, false],
  });

  console.log({ request });
};

export const confirmTokenCreation = async () => {
  const request = await pali.request({
    method: 'sys_confirmTokenCreation',
    args: [tokenCreationMock],
  });

  console.log({ request });
};
