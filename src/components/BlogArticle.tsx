import React from "react";

import styles from "./BlogArticle.module.scss";
import { useParams } from "react-router-dom";
import blogData from "../blog/blogData.json";

import BasePage from "../pages/BasePage.tsx";

type BlogArticle = {
    id: number;
    slug: string;
    title: string;
    date: string;
    preview: string;
    content: string;
};

const BlogEntryContent = ({article}: {article: BlogArticle}) => {
    return (
        <div className={styles.spacing}>
            <p className={styles.date}>{article.date}</p>
            <p className={styles.content}>{article.content}</p>
        </div>
    );
};


const BlogEntry = () => {
    const { slug } = useParams();

    const article = blogData.find((post) => post.slug === slug);

    if (!article) {
        return <h1>Article not found</h1>;
    }

    return (
        <BasePage title={article.title} children={<BlogEntryContent article={article} />} />
    );
};

export default BlogEntry;