/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path= require('path')

exports.createPages=({graphql,actions})=>{
    const {createPage}=actions

    const projectPage= path.resolve('./src/components/projectComponents/project.js')
    
    return new Promise((resolve,reject)=>{
        graphql(`
        {
              allContentfulProjects{
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
        //create project pages

        projects= results.data.allContentfulProjects.edges

        projects.forEach(project=>{
            createPage({
                path:`/${project.node.slug}`,
                component:projectPage ,
                context:{
                    slug:project.node.slug,
                 
                } 
            })
        })

    
    }) .then(resolve)
    }) }



  

   