import React from 'react'
import Layout from '../components/layout'
import styles from '../components/pageStyles/projectStyles.module.css'
import {Link,graphql} from 'gatsby'
import Img from 'gatsby-image'

const project=({data})=>(
    <Layout >
    <div className={styles.projectsContainer}>

    {data.allContentfulProjects.edges.map(({node})=>(
 <Link  key={node.id} to={node.slug} className={styles.details}>
 <article className={styles.projectContainer}  >
 <figure className={styles.thumbnail} >
     <Img fluid={node.thumbnail.fluid} className={styles.image}/>
 </figure>
 <div>
     <h3>{node.projectName}</h3>
     <h4>Niche: {node.niche}</h4>
     <p>{node.description}</p>
 </div>
 </article>
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
             projectName
             slug
             id
             description
             thumbnail{
                fluid{
                    ...GatsbyContentfulFluid
                }
           }
        } 
      }
    }
}`