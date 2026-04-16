import { forwardRef } from 'react';

import type { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    dataTestId,
    label,
    required,
    className,
    error,
    hideLabel,
    explanation,
    ...inputProps
  } = props;

  return (
    <div>
      {!hideLabel && label && <label>{label}</label>}
      <input
        data-testid={dataTestId}
        ref={ref}
        required={required}
        className={className}
        {...inputProps}
      />
      {explanation && <span>{explanation}</span>}
      {error && <span>{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export const mockInput = {
  __esModule: true as const,
  Input,
};

export default mockInput;
