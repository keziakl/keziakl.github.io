import React from 'react';

import BasePage from './BasePage.tsx';

const ProjectContent = () => (
    <p>Check back soon! This page will be updated shortly. In the meantime, feel free to head to the contact page if you have any questions about what I'm currently working on.</p>
);

const Projects = () => {
    return (
        <BasePage title="My Projects" children={<ProjectContent/>}/>
    );
}

export default Projects;