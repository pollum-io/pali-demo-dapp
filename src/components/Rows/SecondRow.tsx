import React, { useState } from 'react';

import { Card } from '../Card';
import { Output } from '../Output';
import { PrimaryButton, Input } from '../Buttons/Button';
import { data } from '../../data';
import { useProviderContext } from '../../contexts/provider';
import { usePaliMethods } from '../../contexts/requests';

export const SecondRow = () => {
  const { prefix } = useProviderContext();
  const { request } = usePaliMethods();
  
  const [output, setOutput] = useState('');

  const onSubmit = (type: string) => {
    const tx = data[type];

    const method = `${prefix}_${type}`;

    request(method, [tx]).then((response) =>
      setOutput(JSON.stringify(response))
    );
  };

  return (
    <div className="bg-bkg-3 md:rounded-md grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-4 py-5 justify-center align-center w-full h-max">
      <Card title="SEND ETH">
        <div className="grid grid-rows-1 gap-y-3 rounded-full">
          <PrimaryButton text="Send" type="button" />

          <Output output="{}" />
        </div>
      </Card>

      <Card title="TOKENS">
        <div className="grid grid-rows-7 gap-y-3 rounded-full">
          <Input placeholder="Token:" />

          <PrimaryButton text="Add token to wallet" type="button" />
          <PrimaryButton text="Transfer token" type="button" />

          <Output output="{}" />
        </div>
      </Card>

      <Card title="SYSCOIN CORE - ASSETS">
        <div className="grid grid-rows-3 gap-y-3 rounded-full">
          <PrimaryButton
            onClick={() => onSubmit('createToken')}
            text="Create asset"
            type="button"
          />

          <PrimaryButton
            onClick={() => onSubmit('mintToken')}
            text="Mint"
            type="button"
          />

          <PrimaryButton
            onClick={() => onSubmit('updateToken')}
            text="Update asset"
            type="button"
          />

          <PrimaryButton
            onClick={() => onSubmit('send')}
            text="Send asset"
            type="button"
          />

          <PrimaryButton
            onClick={() => onSubmit('mintNft')}
            text="Mint NFT"
            type="button"
          />

          <PrimaryButton
            onClick={() => onSubmit('createNft')}
            text="Create minted NFT"
            type="button"
          />

          <Output output={output || ' '} />
        </div>
      </Card>
    </div>
  );
};
