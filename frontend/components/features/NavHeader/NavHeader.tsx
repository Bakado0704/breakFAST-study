import styles from './NavHeader.module.scss';

const NavHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.nav}>Nav</div>
      </div>
    </div>
  );
};

export default NavHeader;
