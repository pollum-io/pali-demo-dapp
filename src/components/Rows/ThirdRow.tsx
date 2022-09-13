import React from 'react';

import { Card } from '../Card';
import { Output } from '../Output';
import { PrimaryButton, Input } from '../Buttons/Button';

export const ThirdRow = () => (
  <div className="bg-bkg-4 md:rounded-md grid lg:grid-cols-3 gap-y-4 py-5 justify-center align-center w-full h-max">
    <Card title="SYSWEB3 - VALIDATE ADDRESS">
      <div className="grid grid-rows-3 gap-y-3 rounded-full">
        <Input placeholder="Validate Address" />
        <PrimaryButton text="Validate" type="button" />
        <Output output="true" />
      </div>
    </Card>

    <Card title="SYSWEB3 - GET TOKEN">
      <div className="flex flex-col gap-y-3 rounded-full">
        <Input placeholder="Token ID:" />
        <PrimaryButton text="Get token data" type="button" />
        <Output output="{}" />
      </div>
    </Card>

    <Card title="SYSWEB3 - VALIDATE RPC URL">
      <div className="flex flex-col gap-y-3 rounded-full">
        <Input placeholder="URL:" />
        <PrimaryButton text="Validate" type="button" />

        <Output output="true" />
      </div>
    </Card>
  </div>
);
