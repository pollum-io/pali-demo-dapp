import React from 'react';

import { Card } from '../Card';
import { PrimaryButton, Input, Output } from '../Button';

export const ThirdRow = () => (
  <div className="bg-bkg-4 md:rounded-md grid lg:grid-cols-3 gap-y-4 py-5 justify-center align-center w-full h-max">
    <Card title="VALIDATE ADDRESS">
      <div className="grid grid-rows-3 gap-y-3 rounded-full">
        <Input placeholder="Validate Address" />
        <PrimaryButton text="Validate" type="button" />
        <Output text="eth_accounts result:" output="" />
      </div>
    </Card>
    <Card title="GET TOKEN">
      <div className="flex flex-col gap-y-3 rounded-full">
        <Input placeholder="Token ID:" />
        <PrimaryButton text="Get token data" type="button" />
        <div className="border border-bkg-4 bg-bkg-6 text-left px-4 py-1 rounded-md font-poppins">
          Tokenid:xxxx decimals:xxxx, symbol:xxxx, Tokenid:xxxx decimals:xxxx,
          symbol:xxxx,
        </div>
      </div>
    </Card>
    <Card title="VALIDATE RPC URL">
      <div className="flex flex-col gap-y-3 rounded-full">
        <Input placeholder="URL:" />
        <PrimaryButton text="Validate" type="button" />
        <Output text="RPC is valid" />
        <div className="border border-bkg-4 bg-bkg-6 text-left px-4 py-1 font-poppins rounded-md">
          Tokenid:xxxx decimals:xxxx, symbol:xxxx, Tokenid:xxxx decimals:xxxx,
          symbol:xxxx,
        </div>
      </div>
    </Card>
  </div>
);
