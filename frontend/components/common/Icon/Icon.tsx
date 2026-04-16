import { cloneElement, forwardRef } from 'react';

import classNames from 'classnames';

import Attention from '@/assets/attention.svg';
import { CustomCSSProperties } from '@/types/CustomStyle.types';

import styles from './Icon.module.scss';

import type { IconProps } from './Icon.types';

const ICONS = {
  attention: <Attention />,
} as const;

export type IconName = keyof typeof ICONS;

const Icon = forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const {
    dataTestId,
    id,
    className,
    iconName,
    disabled = false,
    color = 'b2',
    size = '2.4rem',
    onClick,
    ...styleProps
  } = props;
  const style: CustomCSSProperties = {
    '--color': `var(--${color})`,
    '--size': size,
    cursor: onClick ? 'pointer' : disabled ? 'not-allowed' : 'inherit',
    ...styleProps,
  };

  return (
    <div
      data-testid={dataTestId}
      ref={ref}
      className={classNames(styles.outer, className)}
      style={style}
      onClick={onClick}
    >
      {cloneElement(ICONS[iconName], { id })}
    </div>
  );
});
Icon.displayName = 'Icon';

export { ICONS as _ICONS };
export default Icon;
