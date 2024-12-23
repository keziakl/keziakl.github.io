import React from "react";

import { Link } from "react-router-dom";
import styles from "./Topbar.module.scss";

const TopBar = () => {
    return (
        <div className={styles.topbar}>
            <Link className={styles.link} to="/">home</Link>
            <Link className={styles.link} to="/blog">blog</Link>
            <Link className={styles.link} to="/projects">projects</Link>
            <Link className={styles.link} to="/contact">grievances</Link>
            <Link className={styles.link} to="/about">about me</Link>
        </div>
    );
};

export default TopBar;