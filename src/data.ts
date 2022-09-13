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
    assetGuid: '897866765',
  },
  sign: null,
  signAndSend: null,
  signTypedDataV4: {
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' },
      ],
      Person: [
        { name: 'name', type: 'string' },
        { name: 'wallet', type: 'address' }
      ],
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'string' }
      ],
    },
    primaryType: 'Mail',
    domain: {
      name: 'Ether Mail',
      version: '1',
      chainId: 1,
      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    },
    message: {
      from: {
        name: 'Cow',
        wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
      },
      to: {
        name: 'Bob',
        wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      },
      contents: 'Hello, Bob!',
    },
  },
};
