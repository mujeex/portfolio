import React from 'react'
import Layout from '../components/layout'
import styles from '../components/pageStyles/projectStyles.module.css'
import {Link,graphql} from 'gatsby'

const project=({data})=>(
    <Layout>
    <div className={styles.projectsContainer}>

    {data.allContentfulProjects.edges.map(({node})=>(
        <Link className={styles.projectContainer}>
        {/* <article > */}
            <p className={styles.projectName}>{node.projectName}</p>
            <div>
                <p>{node.niche}</p>
                <p>{node.siteType}</p>
            </div>
            <div className={styles.projectNumber}>1</div>
        {/* </article> */}
        </Link>
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