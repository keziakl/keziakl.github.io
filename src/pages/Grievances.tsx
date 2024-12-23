import React from "react";
import styles from "./Grievances.module.scss";

import BasePage from "./BasePage.tsx";

const GrievancesContent = () => (
    <div className={styles.spacing}>
        <p>Feel free to shoot me an email or a text message or a call with any grievances, paper recommendations, or just to chit chat.</p>
        <p>I'm sometimes flakey about responding (this is something I'm trying to actively change!), so I may need a reminder or a bump if it's important or urgent.</p>
        <p>You can reach me at my full name + adding a 123 + appending @ gmail.com</p>
        <p>I guess now in the age of chat gpt, let's hope that's enough to keep the bots and crawlies away.</p>
    </div>
);


const Grievances = () => {
    return (
        <BasePage title="Grievances (read: Contact page)" children={<GrievancesContent/>}/>
    );
};

export default Grievances;