import React from 'react';
import styles from './Blog.module.scss';

import blogData from "../blog/blogData.json";
import { Link } from "react-router-dom";

import BasePage from './BasePage.tsx';

const BlogContent = () => (
    <>
        <p className={styles["blog-blob"]}>I got tired of just reading other people's thoughts and thought I'd give the internet a piece of my mind.</p>
        <div className={styles["article-list"]}>
            {blogData.slice(0).reverse().map((post) => (
            <div className={styles.preview}>
                <p className={styles.title}>
                    <Link className={styles.title} to={`/blog/${post.slug}`}>{post.title}</Link>
                </p>
                <div className={styles.date}>
                    {post.date}
                </div>
                <p>{post.preview}</p>
            </div>
            ))}
        </div>
    </>
);

const Blog = () => {
    return (
        <BasePage title="WELCOME TO MY BLOG" children={<BlogContent/>}/>
    );
};

export default Blog;