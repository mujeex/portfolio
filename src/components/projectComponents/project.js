import React from 'react'
import {graphql} from 'gatsby'
import styles from './project.module.css'
import Layout from '../layout'

const projectPage= ({data})=>{

    const contents=data.contentfulProjects
    return(
        <Layout>
             <div className={styles.container}>
             <figure className={styles.projectPhotos}><figcaption>my picture goes here</figcaption></figure>
             <article className={styles.projectStory}>
             <div className={styles.storyHeader}>
             <h2>Story</h2>
             </div>
               <div className={styles.storyContainer}>
               <p>{contents.story.story}</p>
               </div>
                
             </article>
            <article className={styles.projectDetails}>
            <h2>Details</h2>
            <ul>
                <li>role: {contents.role}</li>
                <li>stack: {contents.stack}</li>
                <li>niche: {contents.niche}</li>
                <li>status: {contents.status}</li>
                <li>client: {contents.client}</li>
            </ul>
            <div className={styles.buttonsContainer}>
            <button><a href='www.github.com'>github</a></button>
            <button><a href="www.github.com">Launch Site!</a></button>
            </div>
            
            </article>
        </div>
        </Layout>
       
    )
}

export default projectPage
export const query= graphql`
query($slug: String!){
    contentfulProjects (slug:{eq: $slug}){
        role
       stack
       client
       niche
       github
       site
       story{
           story
       }
       siteType
       slug
       status
       }
}`