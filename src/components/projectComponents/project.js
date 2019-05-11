import React from 'react'
import {graphql} from 'gatsby'

const projectPage= ({data})=>{
    return(
        <div>
            {data.contentfulProjects.slug}
        </div>
    )
}

export default projectPage
export const query= graphql`
query($slug: String!){
    contentfulProjects (slug:{eq: $slug}){
        role
       stack
       projectName
       client
       niche
       github
       site
       siteType
       slug
       }
}`