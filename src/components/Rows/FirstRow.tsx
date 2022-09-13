/* eslint-disable camelcase */
import React, { useState } from 'react';
import * as sigUtil from '@metamask/eth-sig-util';
import * as ethUtil from 'ethereumjs-util';

import { Card } from '../Card';
import { PrimaryButton, Output } from '../Buttons/Button';
import {
  changeAccount,
  connect,
  disconnect,
  getAccount,
  // signTypedDataV4,
} from '../../pali';

import typedDataV4 from './typedDataV4';

// const onSign = async () => {
//   const msgParams = /* JSON.stringify( */ {
//     domain: {
//       chainId: 4,
//       name: 'Pali Test',
//       verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
//       version: '2',
//     },

//     message: {
//       contents: 'Hello, Bob!',
//       attachedMoneyInEth: 4.2,
//       from: {
//         name: 'Cow',
//         wallets: [
//           '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
//           '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',
//         ],
//       },
//       to: [
//         {
//           name: 'Bob',
//           wallets: [
//             '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
//             '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
//             '0xB0B0b0b0b0b0B000000000000000000000000000',
//           ],
//         },
//       ],
//     },
//     primaryType: 'Mail',
//     types: {
//       /* EIP712Domain: [
//         { name: 'name', type: 'string' },
//         { name: 'version', type: 'string' },
//         { name: 'chainId', type: 'uint256' },
//         { name: 'verifyingContract', type: 'address' },
//       ], */
//       /* Group: [
//         { name: 'name', type: 'string' },
//         { name: 'members', type: 'Person[]' },
//       ], */
//       Mail: [
//         { name: 'from', type: 'Person' },
//         { name: 'to', type: 'Person[]' },
//         { name: 'contents', type: 'string' },
//       ],
//       Person: [
//         { name: 'name', type: 'string' },
//         { name: 'wallets', type: 'address[]' },
//       ],
//     },
//   };

//   const { address } = await getAccount();

//   signTypedDataV4([address, msgParams], address);
// };

// export const FirstRow = () => (
//   <div className="bg-bkg-3 md:rounded-md grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-4 py-5 justify-center align-center w-full h-max">
//     <BasicActionsCard />

//     <Card title="SIGN ACTIONS">
//       <div className="grid grid-rows-3 gap-y-3 rounded-full">
//         <PrimaryButton text="Sign PSBT" type="button" />
//         <PrimaryButton text="Get signed PSBT" type="button" />
//         <PrimaryButton text="Sign Typed Data V4" onClick={onSign} />

//         <Output output="{}" />
//       </div>
//     </Card>
//   </div>
// );
declare global {
  interface Window {
    sigUtil: any;
  }
}

export const FirstRow = () => {
  /*
  https://docs.metamask.io/guide/signing-data.html#sign-typed-data-v4
  */

  window.sigUtil = sigUtil;

  // const provider = window.ethereum;
  const provider = window.ethereum;
  const providerName = 'ethereum';

  const msgParams = JSON.stringify(typedDataV4);

  function providerRequest(
    method: string,
    params: any[] = [],
    options: any = {}
  ) {
    const payload = {
      method,
      params,
      ...options,
    };
    console.log(`window.${providerName}.request(${JSON.stringify(payload)})
  .then(console.log)
  `);
    return provider.request(payload);
  }

  function eth_signTypedData_v4(event?: any) {
    event.preventDefault();

    const from = provider.getAccount().address;

    const params = [from, msgParams];
    const method = 'eth_signTypedData_v4';

    return provider.request(
      {
        method,
        params,
        from,
      },
      (err: any, result: any) => {
        if (err) return console.dir(err);
        if (result.error) {
          alert(result.error.message);
        }
        if (result.error) return console.error('ERROR', result);
        console.log(`TYPED SIGNED:${JSON.stringify(result.result)}`);

        // const recovered = sigUtil.recoverTypedSignature_v4({
        //   data: JSON.parse(msgParams),
        //   sig: result.result,
        // });

        // if (
        //   ethUtil.toChecksumAddress(recovered) ===
        //   ethUtil.toChecksumAddress(from)
        // ) {
        //   alert(`Successfully recovered signer as ${from}`);
        // } else {
        //   alert(`Failed to verify signer when comparing ${result} to ${from}`);
        // }
      }
    );
  }

  function eth_accounts() {
    return providerRequest('eth_accounts');
  }

  function eth_requestAccounts() {
    return providerRequest('eth_requestAccounts');
  }

  function eth_sendTransaction__approveTokenAmount_max_usdc() {
    return providerRequest('eth_sendTransaction', [
      {
        data: '0x095ea7b3000000000000000000000000e592427a0aece92de3edee1f18e0157c05861564ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        from: '0x67e49a99843325b4a7ed43effb1da911540c86a6',
        gas: '0x99999', // gasLimit
        // 钱包必须选择 rinkeby ，其他链无法显示正确的 USDC token
        // https://rinkeby.etherscan.io/token/0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b
        to: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
      },
    ]);
  }

  function eth_sendTransaction__approveTokenAmount_usdc() {
    return providerRequest('eth_sendTransaction', [
      {
        data: '0x095ea7b3000000000000000000000000e592427a0aece92de3edee1f18e0157c058615640000000000000000000000000000000000000000000000000000000000000010',
        from: '0x67e49a99843325b4a7ed43effb1da911540c86a6',
        gas: '0x99999', // gasLimit
        // https://rinkeby.etherscan.io/token/0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b
        to: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
      },
    ]);
  }

  function cfx_approveTokenAmount() {
    return providerRequest('eth_sendTransaction', [
      {
        storageLimit: '0x4c',
        gas: '0x9e05',
        gasPrice: '0x1',
        from: '0x13226782f7a7ea7b47de4a92a7c16ef0ae754c4b',
        to: 'cfx:aca13suyk7mbgxw9y3wbjn9vd136swu6s21tg67xmb',
        data: '0x095ea7b300000000000000000000000080ae6a88ce3351e9f729e8199f2871ba786ad7c50000000000000000000000000000000000000000000000000aa93bece0031800',
      },
    ]);
  }

  function cfx_approveTokenAmount_max() {
    return providerRequest('eth_sendTransaction', [
      {
        storageLimit: '0x4c',
        gas: '0x9e05',
        gasPrice: '0x1',
        from: '0x13226782f7a7ea7b47de4a92a7c16ef0ae754c4b',
        to: '0x8b8689c7f3014a4d86e4d1d0daaf74a47f5e0f27',
        data: '0x095ea7b300000000000000000000000080ae6a88ce3351e9f729e8199f2871ba786ad7c5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      },
    ]);
  }

  function eth_sendTransaction__swapEthToUsdc() {
    return providerRequest('eth_sendTransaction', [
      {
        gas: '0x27ed9', // gasLimit
        value: '0x1f377610e7e0ef',
        from: '0x67e49a99843325b4a7ed43effb1da911540c86a6',
        to: '0xe592427a0aece92de3edee1f18e0157c05861564',
        data: '0x414bf389000000000000000000000000c778417e063141139fce010982780140aa0cd5ab0000000000000000000000004dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b000000000000000000000000000000000000000000000000000000000000271000000000000000000000000067e49a99843325b4a7ed43effb1da911540c86a60000000000000000000000000000000000000000000000000000000061645a06000000000000000000000000000000000000000000000000001f377610e7e0ef000000000000000000000000000000000000000000000000000000000ea2d3db0000000000000000000000000000000000000000000000000000000000000000',
      },
    ]);
  }

  function eth_sendTransaction__swapCfxToUsdc() {
    return providerRequest('eth_sendTransaction', [
      {
        gas: '0x27ed9', // gasLimit
        value: '0x10a741a462780000',
        from: 'cfxtest:aakwe36c88x8y84h53fkfk8br52m67mpkp63et1ztm',
        to: 'cfxtest:aamr93vsstxs457rnhxe99wbxwy1n2bpuet521n5dw',
        data: '0x414bf389000000000000000000000000c778417e063141139fce010982780140aa0cd5ab0000000000000000000000004dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b000000000000000000000000000000000000000000000000000000000000271000000000000000000000000067e49a99843325b4a7ed43effb1da911540c86a60000000000000000000000000000000000000000000000000000000061645a06000000000000000000000000000000000000000000000000001f377610e7e0ef000000000000000000000000000000000000000000000000000000000ea2d3db0000000000000000000000000000000000000000000000000000000000000000',
      },
    ]);
  }

  function metamask_getProviderState() {
    return providerRequest('metamask_getProviderState');
  }

  function eth_chainId() {
    return providerRequest('eth_chainId');
  }

  const methodsList = {
    eth_requestAccounts,
    eth_accounts,
    eth_signTypedData_v4,
    eth_sendTransaction__approveTokenAmount_usdc,
    eth_sendTransaction__approveTokenAmount_max_usdc,
    cfx_approveTokenAmount,
    cfx_approveTokenAmount_max,
    eth_sendTransaction__swapEthToUsdc,
    eth_sendTransaction__swapCfxToUsdc,
    metamask_getProviderState,
    eth_chainId,
  };

  return (
    <div className="App">
      <BasicActionsCard />

      <h1>eth_signTypedData_v4</h1>

      <p>
        <a href="https://docs.metamask.io/guide/signing-data.html#sign-typed-data-v4">
          https://docs.metamask.io/guide/signing-data.html#sign-typed-data-v4
        </a>
      </p>
      {Object.entries(methodsList).map(([k, v]) => (
        <p key={k}>
          <button
            onClick={() => {
              v().then((res: any) => {
                console.log(`------- ${providerName}.${k} -------`);
                console.log(res);
              });
            }}
          >
            {k}
          </button>
        </p>
      ))}
    </div>
  );
};

const BasicActionsCard = () => {
  const [output, setOutput] = useState('');

  const handleExecution = async (fn: () => any) => {
    const data = await fn();
    setOutput(JSON.stringify(data));
  };

  return (
    <Card title="BASIC ACTIONS">
      <div className="grid grid-rows-3 gap-y-3 rounded-full">
        <PrimaryButton
          text="Connect"
          onClick={() => handleExecution(connect)}
        />

        <PrimaryButton
          text="Get account"
          onClick={() => handleExecution(getAccount)}
        />

        <PrimaryButton
          text="Change account"
          onClick={() => handleExecution(changeAccount)}
        />

        <PrimaryButton
          text="Disconnect"
          onClick={() => handleExecution(disconnect)}
        />

        <Output output={output || ' '} />
      </div>
    </Card>
  );
};
