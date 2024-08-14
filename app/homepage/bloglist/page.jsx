// Blogcard.js
import BlogCard from "@/ui/homepage/blogcard/blogcard";
import Image from "next/image";
import Link from "next/link";
import styles from '@/ui/homepage/bloglist/bloglist.module.css'
import { blogs_data } from "@/assets/assets";

const BlogList = () => {
  return (
    <div>
      
      <div className={styles.grid}>
        {blogs_data.map((item) => (
          <BlogCard 
            key={item.id}
            id = {item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;