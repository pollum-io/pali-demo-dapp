const commonFields = {
  advanced: null, // optional
  description: 'pali demo dapp token creation test #1', // optional
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
    ...commonFields,
    maxsupply: 200000,
    precision: 8,
    receiver: null, // optional, if null it is set to connected account address,
    symbol: 'pali#1', // max 8 characters
    initialSupply: 0, // optional
  },
  updateToken: {
    ...commonFields,
    assetGuid: '',
    assetWhiteList: '', // optional
    capabilityflags: '127',
    contract: '', // optional
  },
  mintToken: {
    amount: 1,
    assetGuid: '',
  },
  createNft: {
    description: 'pali demo dapp nft creation test #1',
    precision: 8,
    receivingAddress: '',
    symbol: 'nft#1',
  },
  mintNft: {
    amount: 1,
    assetGuid: '',
  },
  sign: null,
  signAndSend: null,
};
