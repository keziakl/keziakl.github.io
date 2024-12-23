/**
 * Home page for keziakl.github.io
 * Let's try to make the best first impression!!
 */

import React from "react";
import styles from "./Home.module.scss";
import halloween from "../images/kezia_halloween.jpg"
import roof from "../images/roof.jpg"
import rug from "../images/rug_sewing.jpg"

import ImageScrollList from "../components/ImageScrollList.tsx";
import BasePage from "./BasePage.tsx";

const HomeContent = () => (
    <>
        <ImageScrollList images={[halloween, rug, roof]} />
        <div className={styles["about-me-container"]}>
            <h2 className={styles["about-me"]}>My name is Kezia Lopez,</h2>
            <p className={styles["about-me-list"]}>and I'm a</p>
            <p className={styles["about-me-list"]}>
            software engineer,
            </p>
            <p className={styles["about-me-list"]}>
            AI research enthusiast,
            </p>
            <p className={styles["about-me-list"]}>
            linguistics nerd,
            </p>
            <p className={styles["about-me-list"]}>
            and at least one more thing, but I forgot.
            </p>
        </div>
    </>
);


const Home = () => {
    return (
        <BasePage title="Hi, I'm Kezia!" children={<HomeContent />}/>
    );
};
export default Home;