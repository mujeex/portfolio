import React from 'react'
import Layout from '../components/layout'
import {graphql,Link} from 'gatsby'
import styles from '../components/pageStyles/blogStyles.module.css'

const blog= ({data})=>(
    <Layout>
         <div className={styles.container}>
        {data.allContentfulBlog.edges.map(({node})=>(
            <article className={styles.blogContainer} key={node.id}>

            <div className={styles.blogDateContainer}>
            <span className={styles.blogDate}>{node.dataObj.month}--{node.dataObj.date}--{node.dataObj.year}</span>
            </div>

            <div className={styles.blogLink}>
            <Link style={{textDecoration:'none'}} to={node.slug} > <h3>{node.title} </h3></Link>
            <p>{node.subtitle}</p>
            </div>
            
            </article>
        ))}
    </div>
    </Layout>
   
)

export default blog

export const pageQuery= graphql`
query{
    allContentfulBlog{
        edges{
          node{
              id
            title
            slug
           subtitle
           dataObj{
               year
               month
               date
           }
          }
        }
      }
}
`