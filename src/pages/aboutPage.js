import React from 'react'
import Layout from '../components/layout'
import styles from '../components/pageStyles/aboutStyles.module.css'

const About= ()=>(
    <Layout>
        <div className={styles.aboutContainer}>
            <blockquote className={styles.quote}>"If you are the smartest person in the room, then you are in the wrong room"</blockquote>

            <div className={styles.gridContainer}>
            <article>
                <h4>Who Am I?</h4>
                <p>My name is Mujahid Bappai, a recent computer science graduate.
                    I am a front-end developer with primary experience in building front-end interfaces
                    using react framework for the web and react-native for mobile experience.
                </p>
            </article>
            <article>
                <h4>What i do</h4>
                <p>
                    I am currently i China freelancing for an import and export company and also focusing on my side projects
                    that will one day change the world. I am also studying mandarin which takes up most of my time, but it doesn't 
                    stop me from making the web great and accessible to my clients.
                </p>
            </article>
            <article>
                <h4>What drives me?</h4>
                <p>
                    Nothing gives me pleasure like creating something functional and operational out of Nothing. I find the whole
                    process right from the project brainstorming all the way to creating visuals very rewarding.
                </p>
            </article>
            <article>
                <h4>What am i looking for?</h4>
                <p>
                    I believe that learning truly never stops, therefore i hope to find myself in a competitive and challenging environment
                    where i can learn from creative and innovative minds in order to also make a meaningful contribution to the web one day.
                </p>
            </article>
            <article>
                <h4>Tech stack</h4>
                <p>Javascript, React, React-Native, HTML5, CSS, Gatsby, graphql</p>
            </article>
            <article>
                <h4>About this site</h4>
                <p>
                I personally challenge myself to build a site in a simple yet elegantly sophisticated way. I hope the blog the blog snippet
                section would be greatly taken advantage of by a lot of developers later onwards.
                PS: This site uses the gatsby technology.
                </p>
            </article>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Resume</button>
            </div>
            </div>
        </div>
    </Layout>
   
)

export default About