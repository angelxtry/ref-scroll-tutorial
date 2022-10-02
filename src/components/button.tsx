import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
  icon?: JSX.Element;
}
export const Button = ({
  children,
  className = '',
  text,
  to,
  icon,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const navigate = useNavigate();
  return (
    <button
      className={`bg-gray-800 hover:bg-black py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none ${className} ${
        icon && 'flex flex-row items-center justify-center space-x-2'
      }`}
      onClick={to ? () => navigate(to) : onClick}
      {...props}
    >
      {icon && <div>{icon}</div>}
      <div>{text ?? children}</div>
    </button>
  );
};
