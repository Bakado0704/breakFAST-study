import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  dataTestId: string;
  label?: ReactNode;
  labelColor?: CSSProperties['color'];
  required?: boolean;
  explanation?: ReactNode;
  hideLabel?: boolean;
  error?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
