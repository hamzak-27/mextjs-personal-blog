import styles from '@/ui/homepage/bloglist/singleblog/singleblog.module.css'
import Link from 'next/link';
import Image from 'next/image';
// pages/blog/[id]/page.jsx or app/blog/[id]/page.jsx

import { blogs_data } from "@/assets/assets";

export default function BlogPost({ params }) {
  const { id } = params;
  const blog = blogs_data.find(blog => blog.id.toString() === id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const extendedDescriptions = {
    1: `Next.js has become a popular framework for building React applications, offering a powerful set of features out of the box. This comprehensive guide will walk you through the process of setting up your first Next.js project, understanding the file-based routing system, and creating your first pages. We'll cover important concepts such as the differences between server-side and client-side rendering, and how Next.js optimizes your application for performance. By the end of this guide, you'll have a solid foundation to start building robust web applications with Next.js.`,
    2: `API routes are a powerful feature in Next.js that allow you to create serverless API endpoints within your application. This tutorial will guide you through the process of creating your first API route, handling different HTTP methods, and integrating your API with your front-end components. We'll also cover best practices for structuring your API, error handling, and how to use middleware for tasks like authentication. Whether you're building a full-stack application or just need a simple backend for your Next.js project, this guide will give you the tools you need to get started.`,
    3: `Server-Side Rendering (SSR) is one of the key features that sets Next.js apart from traditional React applications. In this in-depth article, we'll explore what SSR is, how it works in Next.js, and when you should use it. We'll cover the benefits of SSR, such as improved SEO and faster initial page loads, as well as potential drawbacks. Through practical examples, you'll learn how to implement SSR in your Next.js projects, how to fetch data on the server, and how to optimize your SSR implementation for performance.`,
    4: `Static Site Generation (SSG) in Next.js allows you to pre-render your pages at build time, resulting in extremely fast and SEO-friendly websites. This guide will dive deep into the world of SSG, explaining how it differs from server-side rendering and when it's the right choice for your project. We'll walk through the process of implementing SSG in Next.js, including how to use getStaticProps and getStaticPaths for dynamic content. You'll also learn about Incremental Static Regeneration, a powerful feature that allows you to update static content without rebuilding your entire site.`,
    5: `Deploying a Next.js application can seem daunting at first, but with the right approach, it can be a smooth and straightforward process. This comprehensive guide will walk you through deploying your Next.js application to various platforms, including Vercel (the creators of Next.js), Netlify, and Amazon Web Services (AWS). We'll cover the steps for each platform, discuss the pros and cons of each option, and provide tips for optimizing your deployment process. You'll also learn about important considerations such as environment variables, serverless functions, and continuous deployment.`,
    6: `Performance is crucial for providing a great user experience and improving your site's SEO. In this in-depth article, we'll explore various techniques and best practices for optimizing the performance of your Next.js applications. Topics covered will include code splitting, lazy loading, image optimization, and caching strategies. We'll also dive into Next.js-specific optimizations like automatic prefetching and how to leverage the Image component for optimal image loading. You'll learn how to use tools like Lighthouse and Chrome DevTools to measure your app's performance and identify areas for improvement.`
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/homepage/bloglist" className={styles.backLink}>
          &larr; Back to Blog List
        </Link>
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.imageContainer}>
          <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" />
        </div>
        <p className={styles.description}>{extendedDescriptions[blog.id]}</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogs_data.map((blog) => ({
    id: blog.id.toString(),
  }));
}