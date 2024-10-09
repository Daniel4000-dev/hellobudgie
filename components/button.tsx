import { ButtonProps } from '@/types/types';
import React from 'react';

const Button = ({
  title = 'Save',
  className = '',
  variant,
  size,
  onClick,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md bg-[#E8903D] ${className}`}
    >
      {children || title} {/* If children exist, use them; otherwise, fallback to title */}
    </button>
  );
};

export default Button;