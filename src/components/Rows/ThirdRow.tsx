import React, { useState } from 'react';

import { Card } from '../Card';
import { Output } from '../Output';
import { PrimaryButton, Input } from '../Buttons/Button';
// import {
//   isValidEthereumAddress,
//   isValidSYSAddress,
// } from '@pollum-io/sysweb3-utils';
// import { validateEthRpc, validateSysRpc } from '@pollum-io/sysweb3-network';

export const ThirdRow = () => {
  const [currentInputValue, setCurrentInputValue] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleMethods = (method: string) => {
    switch (method) {
      // case 'validateEthAddress':
      //   const isValidEthAddress = isValidEthereumAddress(currentInputValue);
      //   setOutput(JSON.stringify({ isValidEthAddress }));
      //   break;
      // case 'validateSysAddress':
      //   const isValidSysAddress = isValidSYSAddress(currentInputValue, 57);
      //   setOutput(JSON.stringify({ isValidSysAddress }));
      //   break;
      // case 'validateSysRpc':
      //   const isValidSysRpc = validateSysRpc(currentInputValue);
      //   setOutput(JSON.stringify({ isValidSysRpc }));
      //   break;
      // case 'validateEthRpc':
      //   const isValidEthRpc = validateEthRpc(currentInputValue);
      //   setOutput(JSON.stringify({ isValidEthRpc }));
      //   break;
    }
  };
  return (
    <div className="bg-bkg-4 md:rounded-md grid lg:grid-cols-3 gap-y-4 py-5 justify-center align-center w-full h-max">
      <Card title="SYSWEB3 - VALIDATE ETH ADDRESS">
        <div className="grid grid-rows-3 gap-y-3 rounded-full">
          <Input
            placeholder="Validate Address"
            onChange={(e) => setCurrentInputValue(e.target.value)}
          />
          <PrimaryButton
            text="Validate"
            type="button"
            onClick={() => handleMethods('validateEthAddress')}
          />
          <Output output="true" />
        </div>
      </Card>

      <Card title="SYSWEB3 - VALIDATE SYS ADDRESS">
        <div className="grid grid-rows-3 gap-y-3 rounded-full">
          <Input
            placeholder="Validate Address"
            onChange={(e) => setCurrentInputValue(e.target.value)}
          />
          <PrimaryButton
            text="Validate"
            type="button"
            onClick={() => handleMethods('validateSysAddress')}
          />
          <Output output="true" />
        </div>
      </Card>

      <Card title="SYSWEB3 - VALIDATE SYS RPC URL">
        <div className="flex flex-col gap-y-3 rounded-full">
          <Input
            placeholder="URL:"
            onChange={(e) => setCurrentInputValue(e.target.value)}
          />
          <PrimaryButton text="Validate" type="button" />

          <Output output="true" />
        </div>
      </Card>
      <Card title="SYSWEB3 - VALIDATE ETH RPC URL">
        <div className="flex flex-col gap-y-3 rounded-full">
          <Input
            placeholder="URL:"
            onChange={(e) => setCurrentInputValue(e.target.value)}
          />
          <PrimaryButton text="Validate" type="button" />

          <Output output="true" />
        </div>
      </Card>
    </div>
  );
};
