import styles from './TopPage.module.scss';
import { useTopPage } from './useTopPage.hooks';

const TopPage = () => {
  const { user } = useTopPage();

  return (
    <div className={styles.container}>
      <div className={styles.text}>name: {user?.name}</div>
      <div className={styles.text}>email: {user?.email}</div>
    </div>
  );
};

export default TopPage;
