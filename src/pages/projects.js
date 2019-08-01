import React from 'react'
import Layout from '../components/layout'
import styles from '../components/pageStyles/projectStyles.module.css'
import {Link,graphql} from 'gatsby'

const project=({data})=>(
    <Layout>
    <div className={styles.projectsContainer}>

    {/* {data.allContentfulProjects.edges.map(({node})=>(
        <article key={node.id}>
             <Link to={node.slug} className={styles.projectContainer}>

            <div>
                <p>{node.niche}</p>
                <p>{node.siteType}</p>
            </div>
            <div className={styles.projectNumber}>1</div>

        </Link>
        </article>
       
    ))} */}
       <article  className={styles.projectContainer}>
        <figure className={styles.thumbnail} >
            <image></image>
        </figure>
        <Link className={styles.details}>
        <div>
            <h3>Fluffy Dreams</h3>
            <h4>React-Native, Javascript</h4>
            <p>An e-commerce application that gives users the best possible options.</p>
        </div>
        </Link>
        </article>
        <article  className={styles.projectContainer}>
        <figure className={styles.thumbnail} >
            <image></image>
        </figure>
        <Link className={styles.details}>
        <div>
        <p>e-commerce</p>
        <p>landing page</p>
        </div>
        </Link>
        </article>
        <article  className={styles.projectContainer}>
        <figure className={styles.thumbnail} >
            <image></image>
        </figure>
        <Link className={styles.details}>
        <div>
        <p>e-commerce</p>
        <p>landing page</p>
        </div>
        </Link>
        </article>
        <article  className={styles.projectContainer}>
        <figure className={styles.thumbnail} >
            <image></image>
        </figure>
        <Link className={styles.details}>
        <div>
        <p>e-commerce</p>
        <p>landing page</p>
        </div>
        </Link>
        </article>
        <article  className={styles.projectContainer}>
        <figure className={styles.thumbnail} >
            <image></image>
        </figure>
        <Link className={styles.details}>
        <div>
        <p>e-commerce</p>
        <p>landing page</p>
        </div>
        </Link>
        </article>
    

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