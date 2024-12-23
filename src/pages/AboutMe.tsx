import React from "react";

import donut1 from "../images/donut_1.jpg";
import donut2 from "../images/donut_2.jpg";
import donut3 from "../images/donut_3.jpg";

import styles from "./AboutMe.module.scss";

import BasePage from "./BasePage.tsx";
import ImageScrollList from "../components/ImageScrollList.tsx";

const AboutMeContent = () => (
    <>
    <ImageScrollList images={[donut1, donut2, donut3]} />
    <div className={styles.spacing}>
        <p>
            I'm currently based in NYC. I am from Texas, went to school at Stanford University in California, and did an exchange at the Chinese Universty of Hong Kong.
        </p>
        <p>
            You can find me across the globe usually.
        </p>
        <p>
            I used to play piano, DJ, and dance latin/pole. I still like to do so sometimes, and I'm always looking for an excuse to get back into it.
        </p>
        <p>
            I love rock climbing and doing the NYT words games (spoiler alert: I'm not afraid to do things that I suck at).
        </p>
        <p>
            My passion is NLP. It's the love of my life.
        </p>
        <p>
            I hope to be a professor one day.
        </p>
    </div>
    </>
);


const AboutMe = () => {
    return (
        <BasePage title="About Me" children={<AboutMeContent />} />
    );
};

export default AboutMe;