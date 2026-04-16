import { CSSProperties, ReactNode } from 'react';

export type TypographyProps = {
  children: ReactNode;
  dataTestId?: string;
  id?: string;
  color?: string;
  bgColor?: string;
  className?: string;
  ellipsis?: boolean;
  lineNum?: number;
} & CSSProperties;
