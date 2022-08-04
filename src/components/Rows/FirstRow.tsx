import React, { useState } from 'react';

import { Card } from '../Card';
import { PrimaryButton, Output } from '../Buttons/Button';
import {
  changeAccount,
  connect,
  disconnect,
  getAccount,
  signTransaction,
} from '../../Pali';

export const FirstRow = () => {
  const [output, setOutput] = useState('');

  const handleExecution = async (fn: () => any) => {
    const data = await fn();
    setOutput(JSON.stringify(data));
  };

  return (
    <div className="bg-bkg-3 md:rounded-md grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-4 py-5 justify-center align-center w-full h-max">
      <BasicActionsCard />

      <Card title="SIGN ACTIONS">
        <div className="grid grid-rows-3 gap-y-3 rounded-full">
          <PrimaryButton
            onClick={() => handleExecution(signTransaction)}
            text="Sign PSBT"
            type="button"
          />
          <PrimaryButton text="Get signed PSBT" type="button" />
          <PrimaryButton text="Sign Typed Data V4" type="button" />

          <Output output={output || ' '} />
        </div>
      </Card>
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
