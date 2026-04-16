import { CSSProperties, MouseEvent, ReactNode, UIEvent } from 'react';

export type FlexBoxProps = {
  id?: string;
  dataTestId?: string;
  children?: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onScroll?: (event: UIEvent<HTMLDivElement>) => void;
} & CSSProperties;
