import React from 'react';

interface IButton {
  disabled?: boolean;
  id?: string;
  loading?: boolean;
  onClick?: () => any;
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  width?: string;
}

export const PrimaryButton: React.FC<IButton> = ({
  disabled = false,
  id = '',
  loading = false,
  onClick,
  text,
  type = 'submit',
}) => (
  <button
    className="bg-bkg-4 py-1.5 rounded-md cursor-pointer h-max"
    disabled={disabled || loading}
    onClick={onClick}
    type={type}
    id={id}
  >
    {text}
  </button>
);

interface IOutput {
  text: string;
  output?: string | number;
}

export const Output: React.FC<IOutput> = ({ output, text }) => (
  <div className="border-2 border-bkg-4 bg-bkg-6 text-left px-4 py-1 rounded-md h-max">
    {text}
    {output}
  </div>
);
