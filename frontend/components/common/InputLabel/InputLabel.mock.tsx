import type { InputLabelProps } from './InputLabel.types';

const InputLabel = (props: InputLabelProps) => {
  const { label, required, id } = props;

  return (
    <label htmlFor={id}>
      {label}
      {required ? <span>必須</span> : <span>任意</span>}
    </label>
  );
};

InputLabel.displayName = 'InputLabel';

export const mockInputLabel = {
  __esModule: true as const,
  InputLabel,
};

export default mockInputLabel;
