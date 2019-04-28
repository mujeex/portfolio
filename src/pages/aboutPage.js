import React from 'react'
import Layout from '../components/layout'
import styles from '../components/pageStyles/aboutStyles.module.css'
import {graphql} from 'gatsby'

import Article from '../components/aboutComponents/article'

const About= ({data})=>(
    <Layout>
        <div className={styles.aboutContainer}>
            <blockquote className={styles.quote}>"If you are the smartest person in the room, then you are in the wrong room"</blockquote>

            <div className={styles.gridContainer}>
            {data.allContentfulArticles.edges.map(({node})=>(
                <Article key={node.id} question={node.question} answer={node.answer1.answer1}/>
            ))}
            
            
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Resume</button>
            </div>
            </div>
        </div>
    </Layout>
   
)


export default About

export const query=graphql`
    query{
        allContentfulArticles{
            edges{
              node{
                  id
                question
                answer1{
                  answer1
                }
              }
            }
              }
    }
`