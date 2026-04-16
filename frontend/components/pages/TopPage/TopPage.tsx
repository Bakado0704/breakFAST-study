import { FlexBox, Typography } from '@/components/common';

import styles from './TopPage.module.scss';
import { useTopPage } from './useTopPage.hooks';

const TopPage = () => {
  const { user, navigateToInput } = useTopPage();

  return (
    <FlexBox flexDirection="column" gap="2.4rem" className={styles.container}>
      <FlexBox flexDirection="column" gap="1.6rem">
        <Typography className={styles.text}>name: {user?.name}</Typography>
        <Typography className={styles.text}>email: {user?.email}</Typography>
      </FlexBox>
      <FlexBox
        alignItems="center"
        justifyContent="center"
        className={styles.button}
        onClick={navigateToInput}
      >
        <Typography color="w1">入力する</Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default TopPage;
