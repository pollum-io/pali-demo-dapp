import React from 'react';

interface IButton {
  className?: string;
  disabled?: boolean;
  id?: string;
  loading?: boolean;
  onClick?: () => any;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  width?: string;
}

export const PrimaryButton: React.FC<IButton> = ({
  disabled = false,
  id = '',
  loading = false,
  onClick,
  text,
  type = 'button',
}) => (
  <button
    className="bg-bkg-4 py-1.5 rounded-full cursor-pointer h-max font-poppins hover:bg-brand-royalblue"
    disabled={disabled || loading}
    onClick={onClick}
    type={type}
    id={id}
  >
    {text}
  </button>
);

interface IInput {
  placeholder: string;
  disabled?: boolean;
}

export const Input: React.FC<IInput> = ({ disabled = false, placeholder }) => (
  <input
    className="border border-bkg-4 bg-bkg-6 font-poppins text-left px-4 py-1 rounded-full h-max hover:border-fields-input-borderfocus focus:border-fields-input-borderfocus outline-none"
    disabled={disabled}
    placeholder={placeholder}
  />
);
