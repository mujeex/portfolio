import React from 'react'
import { graphql} from 'gatsby'


const blogPost=({pageContext})=>{

    return (
        <div>
            {pageContext.slug}
            new page created
        </div>
    )
}

export default blogPost
export const pageQuery= graphql`
query ($slug: String!){
    allContentfulBlog (filter:{slug:{eq: $slug }}) {
        edges{ 
          node{
              slug
              author
           content{
               content
           }
          }
        }
      }
}
`