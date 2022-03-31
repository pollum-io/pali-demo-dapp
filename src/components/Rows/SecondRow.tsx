import React from 'react';

import { Card } from '../Card';
import { PrimaryButton, Output } from '../Button';

export const SecondRow = () => (
  <div className="bg-bkg-3 md:rounded-md grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-4 py-5 justify-center align-center w-full h-max">
    <Card title="SEND ETH">
      <div className="grid grid-rows-1 gap-y-3 rounded-md">
        <PrimaryButton text="SEND" type="button" />
      </div>
    </Card>
    <Card title="SEND TOKENS">
      <div className="grid grid-rows-7 gap-y-3 rounded-md">
        <Output text="Token:" output="" />
        <PrimaryButton text="Create Token" type="button" />
        <PrimaryButton text="Add token to wallet" type="button" />
        <PrimaryButton text="Transfer token" type="button" />
        <PrimaryButton text="Approve tokens" type="button" />
        <PrimaryButton text="Transfer token without GAS" type="button" />
        <PrimaryButton text="Approve token without GAS" type="button" />
      </div>
    </Card>
    <Card title="ASSETS">
      <div className="grid grid-rows-3 gap-y-3 rounded-md">
        <PrimaryButton text="Mint" type="button" />
        <PrimaryButton text="Amount:" type="button" />
        <Output text="Assets:" output="" />
      </div>
    </Card>
  </div>
);