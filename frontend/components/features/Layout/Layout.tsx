import { NavHeader } from '../NavHeader';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <NavHeader />
      <div className={styles.containerInner}>{children}</div>
    </div>
  );
};

export default Layout;
