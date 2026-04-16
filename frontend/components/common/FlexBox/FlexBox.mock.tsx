import { forwardRef } from 'react';

import type { FlexBoxProps } from './FlexBox.types';

const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>((props, ref) => {
  const { id, dataTestId, children, className, onClick, onScroll } = props;
  return (
    <div
      id={id}
      data-testid={dataTestId}
      ref={ref}
      className={className}
      onClick={onClick}
      onScroll={onScroll}
    >
      {children}
    </div>
  );
});
FlexBox.displayName = 'FlexBox';

export const mockFlexBox = {
  __esModule: true as const,
  FlexBox,
};

export default mockFlexBox;
