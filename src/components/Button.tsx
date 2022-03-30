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
    className="bg-bkg-4 py-1.5 rounded-md cursor-pointer"
    disabled={disabled || loading}
    onClick={onClick}
    type={type}
    id={id}
  >
    {text}
  </button>
);
