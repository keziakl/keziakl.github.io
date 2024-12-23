import React from "react";

import styles from "./BasePage.module.scss";

interface BasePageProps {
    title: string;
    children: React.ReactNode;
}

const BasePage = ({ title, children }: BasePageProps) => {
    return (
        <div className={styles.container}>
            <div className={styles["container-2"]}>
            <h1 className={styles.title}>{title}</h1>
            {children}
            </div>
        </div>
    );
};

export default BasePage;