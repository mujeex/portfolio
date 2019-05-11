/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path= require('path')

exports.createPages=({graphql,actions})=>{
    const {createPage}=actions

    const blogPost= path.resolve('./src/components/blogComponents/blog-post.js')
    return new Promise((resolve,reject)=>{
        graphql(`
        {
            allContentfulBlog{
                edges{
                  node{
                    slug
                  }
                }
              }
        }
    `).then(results=>{
        // console.log(results)
        if(results.error){
            reject(results.error)
        }
          // create blog post pages
    const posts=results.data.allContentfulBlog.edges
    // console.log(post)

    posts.forEach((post,index)=>{
        console.log(`showing slugs: ${post.node.slug}`)
        // const previous= index === posts.length-1?null: posts[index+1].node
        // const next= index === 0?null: posts[index-1].node

       createPage({
            path:`/${post.node.slug}`,
            component:blogPost ,
            context:{
                slug:post.node.slug,
                // previous,
                // next
            } 
        })

        })
    
    }) .then(resolve)
    }) 

    // exports.createPages=({graphql,actions})=>{
    //     const {createPage}=actions
    
    //     const blogPost= path.resolve('./src/components/blogComponents/blog-post.js')
    //     return new Promise((resolve,reject)=>{
    //         graphql(`
    //         {
    //             allContentfulBlog{
    //                 edges{
    //                   node{
    //                     slug
    //                   }
    //                 }
    //               }
    //         }
    //     `)



  
      

}