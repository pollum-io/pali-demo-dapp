import React, { useEffect } from 'react';
import { Form, Input } from 'antd';

import QuestionCircleOutlined from '../assets/icons/QuestionCircleOutlined.svg';

import { SwitchToggle } from './Switch';
import { PrimaryButton } from './Buttons/Button';
import { MyDropdown } from './Dropdown';
import { Tooltip } from './Tooltip';
import { usePaliMethods } from '../contexts/requests';
import { useProviderContext } from '../contexts/provider';

export const SendForm = () => {
  const { request } = usePaliMethods();
  const { prefix } = useProviderContext();

  const [form] = Form.useForm();

  useEffect(() => {
    const estimateFee = async () => {
      const fee_ = await request('wallet_estimateFee');

      form.setFieldsValue({ fee: fee_ });
    };

    estimateFee();
  }, []);

  const onSubmit = (data: any) => {
    const tx = {
      amount: Number(data.amount),
      fee: data.fee,
      receivingAddress: data.receiver,
      sender: '',
      zDag: true,
      verifyAddress: true,
    };

    request(`${prefix}_sendTransaction`, [tx]);
  };

  return (
    <Form
      className="flex flex-col gap-y-3 justify-center text-center"
      form={form}
      onFinish={onSubmit}
    >
      <Form.Item name="sender" className="w-full">
        <Input
          type="text"
          placeholder="From"
          className="text-white font-poppins text-sm focus:border-fields-input-borderfocus w-full outline-none focus:border bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
        />
      </Form.Item>

      <Form.Item name="receiver" className="w-full">
        <Input
          type="text"
          placeholder="To"
          className="text-white font-poppins text-sm focus:border-fields-input-borderfocus w-full outline-none focus:border bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
        />
      </Form.Item>

      <div className="flex flex-row gap-x-4 lg:gap-x-1.5 2xl:gap-x-4 justify-center">
        <div className="flex flex-row gap-x-2 lg:gap-x-1.5 items-center">
          <Tooltip content="Pali verifies your address to check if it is a valid SYS address. It's useful disable this verification if you want to send to specific type of addresses, like legacy. Only disable this verification if you are fully aware of what you are doing.">
            <img
              src={QuestionCircleOutlined}
              alt=""
              className="w-4 cursor-pointer"
            />
          </Tooltip>
          <p className="text-xs text-brand-royalblue font-poppins">
            Verify Address
          </p>
          <SwitchToggle />
        </div>

        <div className="flex flex-row gap-x-2 lg:gap-x-1.5 items-center">
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
          className="text-white font-poppins text-sm focus:border-fields-input-borderfocus w-full outline-none focus:border bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
        />
      </Form.Item>

      <Form.Item name="type" className="w-full">
        <MyDropdown />
      </Form.Item>

      <Form.Item name="fee" className="w-full" initialValue={0.00001}>
        <Input
          type="text"
          placeholder="Fee | Gas Price"
          className="text-white font-poppins text-sm disabled:opacity-75 focus:border-fields-input-borderfocus w-full outline-none focus:border bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
        />
      </Form.Item>

      <Form.Item name="data" className="w-full">
        <Input
          type="text"
          placeholder="Data"
          className="text-white font-poppins text-sm disabled:opacity-75 focus:border-fields-input-borderfocus w-full outline-none focus:border bg-bkg-6 text-left px-4 py-2 border border-transparent rounded-full h-max"
        />
      </Form.Item>

      <PrimaryButton text="Submit" type="submit">
        Next
      </PrimaryButton>
    </Form>
  );
};
