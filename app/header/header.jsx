import styles from '@/ui/header/header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        
        <div className={styles.name}>
          <h2>NextJS Blogs</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
