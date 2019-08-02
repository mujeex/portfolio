import React from 'react'
import {graphql,Link} from 'gatsby'
import styles from './project.module.css'
import Layout from '../layout'
import Button from '../sharedComp/button/button'

const projectPage= ({data})=>{

    const contents=data.contentfulProjects
    return(
        <Layout>
             <div className={styles.container}>
            <Button>
                <div className={styles.back}>
                <Link className={styles.link} to='/projects'>{`< Back to Projects`}</Link>
                </div>
            </Button>
             <h1>{contents.projectName}</h1>
             <p>{contents.story.story}</p>
             <div className={styles.niche}>
             <h2>Niche: </h2>
             <p>{contents.niche}</p>
             </div>
            
             <h2>Technical Stack</h2>
             <ul>
                {contents.techStack.list.map(stack=>(<li key={Math.random()}>{stack}</li>))}
             </ul>
            <div className={styles.buttonsContainer}>
            <Button><a className={styles.sLink} href='www.github.com'>github</a></Button>
            <Button><a className={styles.sLink}  href="www.github.com">Launch Site!</a></Button>
            </div>
            </div>
        </Layout>
       
    )
}

export default projectPage
export const query= graphql`
query($slug: String!){
    contentfulProjects (slug:{eq: $slug}){
        projectName
        role
       techStack{
           list
       }
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