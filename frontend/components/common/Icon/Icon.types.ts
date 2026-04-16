import { CSSProperties, MouseEventHandler } from 'react';

import type { IconName } from './Icon';

export type IconProps = {
  dataTestId?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  iconName: IconName;
  onClick?: MouseEventHandler<HTMLDivElement>;
  size?: string;
} & CSSProperties;
