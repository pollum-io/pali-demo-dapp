import React, { useState } from 'react';

import { Card } from '../Card';
import { Output } from '../Output';
import { PrimaryButton } from '../Buttons/Button';
import { data } from '../../data';
import { useProviderContext } from '../../contexts/provider';
import { usePaliMethods } from '../../contexts/requests';

export const FirstRow = () => {
  const { 
    request,
   } = usePaliMethods();
  const { prefix } = useProviderContext();

  const [output, setOutput] = useState('');

  const onSubmit = async (type: string) => {
    const message = data[type];
    const method = `${prefix}_${type}`;

    // note: check the data object first to be aware of why this method would not work if called this way
    request(method, [message]).then((response) => {
      setOutput(JSON.stringify(response));
    });
  };

  return (
    <div className="bg-bkg-3 md:rounded-md grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-4 py-5 justify-center align-center w-full h-max">
      <BasicActionsCard />

      <Card title="SIGN ACTIONS">
        <div className="grid grid-rows-3 gap-y-3 rounded-full">
          <PrimaryButton
            onClick={() => onSubmit('signAndSend')}
            text="Sign PSBT"
            type="button"
          />
          <PrimaryButton 
            onClick={() => onSubmit('getSignedPsbt')}
            text="Get signed PSBT"
            type="button"
          />
          <PrimaryButton
            onClick={() => onSubmit('signTypedDataV4')}
            text="Sign Typed Data V4"
            type="button"
          />

          <Output output={output || ' '} />
        </div>
      </Card>
    </div>
  );
};

const BasicActionsCard = () => {
  const {
    changeAccount,
    connect,
    disconnect,
    getAccount,
  } = usePaliMethods();
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