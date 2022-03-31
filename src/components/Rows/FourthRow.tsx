import React from 'react';

import { Card } from '../Card';
import { SendForm } from '../SendForm';

export const FourthRow = () => (
  <div className="bg-bkg-3 md:rounded-md py-5 justify-center align-center w-full h-max">
    <Card title="SEND FORM">
      <SendForm />
    </Card>
  </div>
);
