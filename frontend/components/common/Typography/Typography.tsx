import classNames from 'classnames';

import styles from './Typography.module.scss';

import type { TypographyProps } from './Typography.types';

const Typography = (props: TypographyProps) => {
  const {
    children,
    dataTestId,
    id,
    color = 'b1',
    bgColor,
    className,
    ellipsis,
    lineNum = 1,
    ...styleProps
  } = props;
  const style = {
    '--color': `var(--${color})`,
    '--bg-color': `var(--${bgColor})`,
    '--line-num': lineNum,
    ...styleProps,
  };

  return (
    <span
      id={id}
      data-testid={dataTestId}
      className={classNames(
        styles.root,
        className,
        ellipsis && styles.ellipsis,
        lineNum > 1 && styles.multiLine,
      )}
      style={style}
    >
      {children}
    </span>
  );
};

export default Typography;
