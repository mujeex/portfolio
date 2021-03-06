import React from 'react'
import Layout from '../components/layout'
import styles from '../components/pageStyles/projectStyles.module.css'
import {Link,graphql} from 'gatsby'

const project=({data})=>(
    <Layout>
    <div className={styles.projectsContainer}>

    {data.allContentfulProjects.edges.map(({node})=>(
        <article key={node.id}>
             <Link to={node.slug} className={styles.projectContainer}>

            <p className={styles.projectName}>{node.projectName}</p>
            <div>
                <p>{node.niche}</p>
                <p>{node.siteType}</p>
            </div>
            <div className={styles.projectNumber}>1</div>

        </Link>
        </article>
       
    ))}
    
    

    </div>
    </Layout>
   
)

export default project

export const query=graphql`
query{
    allContentfulProjects{
        edges{
            node{
                niche
             siteType
             projectName
             slug
             id
           }
        }
       
      }
}`