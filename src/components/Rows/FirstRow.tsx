import React from 'react';

import { Card } from '../Card';
import { PrimaryButton, Output } from '../Button';

export const FirstRow = () => (
  <div className="bg-bkg-4 md:rounded-md grid grid-rows-2 gap-y-4 py-5 justify-center align-center w-full h-max">
    <Card title="BASIC ACTIONS">
      <div className="grid grid-rows-3 gap-y-3 rounded-full">
        <PrimaryButton text="Connect" type="button" />
        <PrimaryButton text="ETH_ACCOUNTS" type="button" />
        <Output text="eth_accounts result" output="" />
      </div>
    </Card>
    <Card title="PERMISSIONS ACTIONS">
      <div className="grid grid-rows-3 gap-y-3 rounded-full">
        <PrimaryButton text="Request Permissions" type="button" />
        <PrimaryButton text="Get Permissions" type="button" />
        <Output text="Permissions result:" output="" />
      </div>
    </Card>
  </div>
);
