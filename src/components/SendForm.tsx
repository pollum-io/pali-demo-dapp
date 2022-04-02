import React from 'react';
import { Form, Input } from 'antd';

import QuestionCircleOutlined from '../assets/icons/QuestionCircleOutlined.svg';

import { SwitchToggle } from './Switch';
import { PrimaryButton } from './Button';
import { MyDropdown } from './Dropdown';
import { Tooltip } from './Tooltip';

// export const Send = () => {
/* const onSubmit = (data: any) => {
    const {sender ,receiver, amount, fee } = data;
    try {
      ({
        tx: {
          fromAddress: sender,
          toAddress: receiver,
          amount,
          fee,
        },
        type: 'sendAsset',
      });
    };
  } catch (error) {
    alert.removeAll();
    alert.error('An internal error has occurred.');
  }
  }; */

export const SendForm = () => (
  <Form
    className="flex flex-col gap-y-3 justify-center text-center"
    //  onFinish={onSubmit}
  >
    <Form.Item name="sender" className="w-full">
      <Input
        type="text"
        placeholder="From"
        className="text-white font-poppins text-sm focus:border-fields-input-borderfocus w-full outline-none focus:border focus:border-brand-royalblue bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
      />
    </Form.Item>

    <Form.Item name="receiver" className="w-full">
      <Input
        type="text"
        placeholder="To"
        className="text-white font-poppins text-sm focus:border-fields-input-borderfocus w-full outline-none focus:border focus:border-brand-royalblue bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
      />
    </Form.Item>

    <div className="flex flex-row gap-x-4 justify-center">
      <div className="flex flex-row gap-x-2 items-center">
        <p className="text-xs text-brand-royalblue font-poppins">
          Verify Address
        </p>
        <SwitchToggle />
      </div>

      <div className="flex flex-row gap-x-2 items-center">
        <Tooltip content="Disable this option for Replace-by-fee (RBF) and enable for Z-DAG, a exclusive Syscoin feature. Z-DAG enables faster transactions but should not be used for high amounts.">
          <img
            src={QuestionCircleOutlined}
            alt=""
            className="w-4 cursor-pointer"
          />
        </Tooltip>

        <p className="text-xs text-brand-royalblue font-poppins">Z-DAG</p>

        <SwitchToggle />
      </div>
    </div>

    <Form.Item name="amount" className="w-full">
      <Input
        type="text"
        placeholder="Amount"
        className="text-white font-poppins text-sm focus:border-fields-input-borderfocus w-full outline-none focus:border focus:border-brand-royalblue bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
      />
    </Form.Item>

    <Form.Item name="type" className="w-full">
      <MyDropdown />
    </Form.Item>

    <Form.Item name="gas price" className="w-full">
      <Input
        type="text"
        placeholder="Gas Price"
        className="text-white font-poppins text-sm disabled:opacity-75 focus:border-fields-input-borderfocus w-full outline-none focus:border focus:border-brand-royalblue bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
      />
    </Form.Item>

    <Form.Item name="data" className="w-full">
      <Input
        type="text"
        placeholder="Data"
        className="text-white font-poppins text-sm disabled:opacity-75 focus:border-fields-input-borderfocus w-full outline-none focus:border focus:border-brand-royalblue bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
      />
    </Form.Item>

    <PrimaryButton text="Submit" type="submit">
      Next
    </PrimaryButton>
  </Form>
);
