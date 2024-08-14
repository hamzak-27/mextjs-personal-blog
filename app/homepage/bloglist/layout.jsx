import Header from '@/app/header/header';
import styles from '@/ui/homepage/main.module.css'
import BlogList from './page';

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Header/>

      </div>

      <div className={styles.content}>
        
        {children}

      </div>
        
        
    </div>
  )
}
  
  export default Layout;