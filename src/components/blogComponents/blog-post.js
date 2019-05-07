import React from 'react'
import { graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'


const blogPost=({data,pageContext})=>{

    console.log(data.contentfulBlog.content)

    return (
        <div>
            {data.contentfulBlog.author}
            {/* {pageContext.slug} */}
            <div>
            {documentToReactComponents(data.contentfulBlog.content.json)}
            </div>
            
            new page created
        </div>
    )
}

export default blogPost
// export const pageQuery= graphql`
// query ($slug: String!){
//     allContentfulBlog (filter:{slug:{eq: $slug }}) {
//         edges{ 
//           node{
//               slug
//               author
//            content{
//                content
//            }
//           }
//         }
//       }
// }
// `

export const query= graphql`
query($slug: String!){
    contentfulBlog(slug:{eq: $slug}){
        author
        slug
        content{
          json
        }
      }
}
`