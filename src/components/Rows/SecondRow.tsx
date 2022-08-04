import React, { useState } from 'react';

import { Card } from '../Card';
import { PrimaryButton, Input, Output } from '../Buttons/Button';
import { confirmTokenCreation } from '../../Pali';

export const SecondRow = () => {
  const [output, setOutput] = useState('');

  const handleExecution = async (fn: () => any) => {
    const data = await fn();
    setOutput(JSON.stringify(data));
  };

  return (
    <div className="bg-bkg-3 md:rounded-md grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-4 py-5 justify-center align-center w-full h-max">
      <Card title="SEND ETH">
        <div className="grid grid-rows-1 gap-y-3 rounded-full">
          <PrimaryButton text="Send" type="button" />

          <Output output="{}" />
        </div>
      </Card>

      <Card title="SEND TOKENS">
        <div className="grid grid-rows-7 gap-y-3 rounded-full">
          <Input placeholder="Token:" />

          <PrimaryButton text="Add token to wallet" type="button" />
          <PrimaryButton text="Transfer token" type="button" />

          <Output output="{}" />
        </div>
      </Card>

      <Card title="ASSETS">
        <div className="grid grid-rows-3 gap-y-3 rounded-full">
          <PrimaryButton
            onClick={() => handleExecution(confirmTokenCreation)}
            text="Create SPT"
            type="button"
          />
          <PrimaryButton text="Mint SPT" type="button" />
          <PrimaryButton text="Update SPT" type="button" />
          <PrimaryButton text="Send SPT" type="button" />
          <PrimaryButton text="Mint NFT" type="button" />
          <PrimaryButton text="Create minted NFT" type="button" />

          <Output output={output || '{}'} />
        </div>
      </Card>
    </div>
  );
};
