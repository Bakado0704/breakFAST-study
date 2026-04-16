import { forwardRef } from 'react';

import type { IconProps } from './Icon.types';

const Icon = forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const { dataTestId, id, className, iconName, onClick } = props;
  return (
    <div
      data-testid={dataTestId}
      ref={ref}
      id={id}
      className={className}
      onClick={onClick}
      data-icon-name={iconName}
    >
      {iconName}
    </div>
  );
});
Icon.displayName = 'Icon';

export const mockIcon = {
  __esModule: true as const,
  Icon,
};

export default mockIcon;
