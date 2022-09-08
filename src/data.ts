const commonFields = {
  advanced: null, // optional
};

export const data: { [type: string]: any } = {
  send: {
    sender: '',
    amount: 0.00001,
    receivingAddress: '',
    isToken: false,
    rbf: true,
    token: '', // token guid
  },
  createToken: {
    maxsupply: 100,
    precision: 8,
    receiver: '', // optional, if null it is set to connected account address,
    symbol: 'pali1', // max 8 characters
    initialSupply: 0, // optional
    description: 'pali demo dapp token create test 1', // optional
    ...commonFields,
  },
  updateToken: {
    assetGuid: '2028120594',
    assetWhiteList: '', // optional
    capabilityflags: '127',
    contract: '', // optional
    description: 'pali demo dapp token update test 1', // optional
    ...commonFields,
  },
  mintToken: {
    amount: 1,
    assetGuid: '2028120594',
  },
  createNft: {
    description: 'pali demo dapp nft creation test 1',
    precision: 8,
    receivingAddress: '',
    symbol: 'nft1',
  },
  mintNft: {
    amount: 1,
    assetGuid: '',
  },
  sign: null,
  signAndSend: null,
};
