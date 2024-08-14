import styles from '@/ui/homepage/homepage.module.css'
import Link from 'next/link'

const Homepage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.intro}>
            <h2>Hamza Khan's NextJS Blog</h2>
            <p> Here you will find a variety of blogs written by none other than Mr Hamza Khan. </p>
        </div>
        <div className={styles.btn}>
            <Link href="/homepage/bloglist">
            <button>Visit Blogs</button>
            </Link>
            
        </div>

    </div>
  )
}

export default Homepage