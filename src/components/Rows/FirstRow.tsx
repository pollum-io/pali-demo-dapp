import React, { useState } from 'react';

import { Card } from '../Card';
import { PrimaryButton, Output } from '../Buttons/Button';
import {
  changeAccount,
  connect,
  disconnect,
  getAccount,
} from '../../pali';

import typedDataV4 from './typedDataV4';

declare global {
  interface Window {
    sigUtil: any;
  }
}

const onSign = async () => {
  const { address } = await getAccount();

  const from = address;

  const msgParams = JSON.stringify(typedDataV4);

  const params = [from, msgParams];
  const method = 'eth_signTypedData_v4';

  return window.ethereum.request(
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
};

export const FirstRow = () => (
  <div className="bg-bkg-3 md:rounded-md grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-4 py-5 justify-center align-center w-full h-max">
    <BasicActionsCard />

    <Card title="SIGN ACTIONS">
      <div className="grid grid-rows-3 gap-y-3 rounded-full">
        <PrimaryButton text="Sign PSBT" type="button" />
        <PrimaryButton text="Get signed PSBT" type="button" />
        <PrimaryButton text="Sign Typed Data V4" onClick={onSign} />

        <Output output="{}" />
      </div>
    </Card>
  </div>
);


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
