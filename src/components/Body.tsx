import React from 'react';

import logo from '../assets/images/logo.svg';

import { BGCard, Card } from './Card';
import { PrimaryButton, Output } from './Button';
import { SendForm } from './SendForm';

const FirstRow = () => (
  <div className="bg-bkg-4 md:rounded-md grid grid-rows-2 gap-y-4 py-5 justify-center align-center w-full h-max">
    <Card
      title="BASIC ACTIONS"
      btn1="Conect"
      btn2="ETH_ACCOUNTS"
      text="eth_accounts result"
    />
    <Card
      title="PERMISSIONS ACTIONS"
      btn1="Conect"
      btn2="Request Permissions"
      text="Permissions result:"
    />
  </div>
);

const SecondRow = () => (
  <div className="bg-bkg-3 md:rounded-md grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 md:gap-x-4 py-5 justify-center align-center w-full h-max">
    <BGCard title="SEND ETH">
      <div className="grid grid-rows-1 gap-y-3 rounded-md">
        <PrimaryButton text="SEND" type="button" />
      </div>
    </BGCard>
    <BGCard title="SEND TOKENS">
      <div className="grid grid-rows-7 gap-y-3 rounded-md">
        <Output text="Token:" output="" />
        <PrimaryButton text="Create Token" type="button" />
        <PrimaryButton text="Add token to wallet" type="button" />
        <PrimaryButton text="Transfer token" type="button" />
        <PrimaryButton text="Approve tokens" type="button" />
        <PrimaryButton text="Transfer token without GAS" type="button" />
        <PrimaryButton text="Approve token without GAS" type="button" />
      </div>
    </BGCard>
    <Card title="ASSETS" btn1="Mint" btn2="Amount:" text="Assets:" />
  </div>
);

const ThirdRow = () => (
  <div className="bg-bkg-4 md:rounded-md grid lg:grid-cols-3 gap-y-4 py-5 justify-center align-center w-full h-max">
    <BGCard title="VALIDATE ADDRESS">
      <div className="grid grid-rows-3 gap-y-3 rounded-md">
        <Output text="Validate Address" output="" />
        <PrimaryButton text="Validate" type="button" />
        <Output text="eth_accounts result:" output="" />
      </div>
    </BGCard>
    <BGCard title="GET TOKEN">
      <div className="flex flex-col gap-y-3 rounded-md">
        <Output text="Token ID:" output="" />
        <PrimaryButton text="Get token data" type="button" />
        <div className="border-2 border-bkg-4 bg-bkg-6 text-left px-4 py-1 rounded-md">
          Tokenid:xxxx decimals:xxxx, symbol:xxxx, Tokenid:xxxx decimals:xxxx,
          symbol:xxxx,
        </div>
      </div>
    </BGCard>
    <BGCard title="VALIDATE RPC URL">
      <div className="flex flex-col gap-y-3 rounded-md">
        <Output text="URL:" output="" />
        <PrimaryButton text="Validate" type="button" />
        <Output text="RPC is valid" />
        <div className="border-2 border-bkg-4 bg-bkg-6 text-left px-4 py-1 rounded-md">
          Tokenid:xxxx decimals:xxxx, symbol:xxxx, Tokenid:xxxx decimals:xxxx,
          symbol:xxxx,
        </div>
      </div>
    </BGCard>
  </div>
);

const FourthRow = () => (
  <div className="bg-bkg-3 md:rounded-md py-5 justify-center align-center w-full h-max">
    <BGCard title="SEND FORM">
      <SendForm />
    </BGCard>
  </div>
);
export const Body = () => (
  <div className="grid md:gap-y-3 flex text-center w-full h-max">
    <FirstRow />
    <SecondRow />

    <ThirdRow />
    <FourthRow />
    <div className="flex flex-row items-center justify-center w-full py-4">
      <img src={logo} alt="" className="w-32 md:w-40" />
    </div>
  </div>
);
