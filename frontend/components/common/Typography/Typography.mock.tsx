import type { TypographyProps } from './Typography.types';

const Typography = (props: TypographyProps) => {
  const { children, id, className, dataTestId } = props;
  return (
    <span id={id} data-testid={dataTestId} className={className}>
      {children}
    </span>
  );
};

export const mockTypography = {
  __esModule: true as const,
  Typography,
};

export default mockTypography;
