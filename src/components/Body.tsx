import React from 'react';

import { Card } from './Card';

export const FirstRow = () => (
  <div className="bg-bkg-4 rounded-md grid grid-rows-2 gap-y-4 py-5 justify-center align-center w-full">
    <Card
      title="BASIC ACTIONS"
      btn1="Conect"
      btn2="ETH_ACCOUNTS"
      output="eth_accounts result"
    />
    <Card
      title="PERMISSIONS ACTIONS"
      btn1="Conect"
      btn2="Request Permissions"
      output="Permissions result:"
    />
  </div>
);

export const SecondRow = () => (
  <div className="bg-bkg-3">SEND TOKENS ASSETS</div>
);
