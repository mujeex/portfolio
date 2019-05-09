import React from 'react'
import { graphql} from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import styles from './blog-post.module.css'


//component to customize bold marks and text nodes

const Bold = ({ children }) => <p className={styles.boldType}>{children}</p>;

const Text = ({ children }) => <p className="align-center">{children}</p>;

// const CustomComponent = ({ file, title}) => (
//      <img className={className} src={file.url} alt={title} />
//   );

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
        return <img className={styles.images} src={node.data.target.fields.file['en-US'].url} alt='apple'/>
      }
  },
  renderText: text => text.replace('!', '?'),
};


const blogPost=({data})=>{

    console.log(data.contentfulBlog.content)

    return (
        <div className={styles.blogContainer}>
            {data.contentfulBlog.author}
            <div>
            {documentToReactComponents(data.contentfulBlog.content.json,options)}
            </div>
            
        </div>
    )
}

export default blogPost
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