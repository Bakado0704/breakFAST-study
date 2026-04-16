import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div data-testid="loader" className={styles['loading-cover']}>
      <span className={styles.loader} />
    </div>
  );
};

export default Loader;
