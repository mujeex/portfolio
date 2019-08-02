import React from 'react'
import Layout from '../components/layout'
import styles from '../components/pageStyles/projectStyles.module.css'
import {Link,graphql} from 'gatsby'

const project=({data})=>(
    <Layout>
    <div className={styles.projectsContainer}>

    {data.allContentfulProjects.edges.map(({node})=>(
 <article  className={styles.projectContainer}>
 <figure className={styles.thumbnail} >
     <image></image>
 </figure>
 <Link to={node.slug} className={styles.details}>
 <div>
     <h3>{node.projectName}</h3>
     <h4>{node.stack}</h4>
     <p>An e-commerce application that gives users the best possible options.</p>
 </div>
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
             stack
           }
        }
       
      }
}`