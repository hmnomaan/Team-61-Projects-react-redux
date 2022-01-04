import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <section class="mustafiz" id="about">

                <img src="https://www.meistertask.com/blog/wp-content/uploads/2020/06/Meeting-Productivity-Tips-scaled.jpg" alt="mustafizur-rahman" loading="lazy" class="mustafiz-img" />




                <div class="bio ">
                    <h2 class="bio-title">About US</h2>
                    <p class="bio-text">
                        This is a Team Projects and we are working together on a Projects
                        react and redux concepts and how to handle it with project management tools like
                        jira. Github is used for collaborating with other team members.

                    </p>
                    <button class="mustafiz-button"> <a
                        href="https://github.com/rahmancoder/Team-61-Projects-react-redux"
                        target="_blank">
                        Our projects Github</a> </button>
                </div>
            </section>
        </div>
    );
};

export default About;