import Image from 'next/image';
import { assets, blogs_data } from '@/assets/assets';
import styles from './BlogCard.module.css';
import Link from 'next/link';



const BlogCard = ({ id, image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={`/homepage/bloglist/${id}`}>
          <Image src={image} alt={title} width={200} height={150} className={styles.image} />
        </Link>
      </div>
      
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
        <Link href={`/homepage/bloglist/${id}`} className={styles.readMore}>
          Read More 
        </Link>
      </div>
    </div>
  );
};

export default BlogCard