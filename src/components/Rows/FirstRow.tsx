import React from 'react';

import { Card } from '../Card';
import { PrimaryButton, Output } from '../Button';

export const FirstRow = () => (
  <div className="bg-bkg-3 md:rounded-md grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-4 py-5 justify-center align-center w-full h-max">
    <Card title="BASIC ACTIONS">
      <div className="grid grid-rows-3 gap-y-3 rounded-full">
        <PrimaryButton text="Connect" type="button" />
        <PrimaryButton text="Get account" type="button" />
        <PrimaryButton text="Change account" type="button" />
        <PrimaryButton text="Disconnect" type="button" />

        <Output output="{}" />
      </div>
    </Card>

    <Card title="PERMISSIONS ACTIONS">
      <div className="grid grid-rows-3 gap-y-3 rounded-full">
        <PrimaryButton text="Request permissions" type="button" />
        <PrimaryButton text="Get permissions" type="button" />

        <Output output="{}" />
      </div>
    </Card>

    <Card title="SIGN ACTIONS">
      <div className="grid grid-rows-3 gap-y-3 rounded-full">
        <PrimaryButton text="Sign PSBT" type="button" />
        <PrimaryButton text="Get signed PSBT" type="button" />

        <Output output="{}" />
      </div>
    </Card>
  </div>
);
