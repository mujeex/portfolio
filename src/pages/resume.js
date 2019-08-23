import React from 'react'
import Layout from '../components/layout'
import styles from '../components/pageStyles/resumeStyles.module.css'
import Button from '../components/sharedComp/button/button'
import {graphql}from 'gatsby'


const resume=({data})=>{
    
    data=data.contentfulResume.entry
    return(
    <Layout>
 <div className={styles.resume_container}>
 <h1>{data.intro.heading}</h1>
<p>{data.intro.content}
</p>

<h2>{data.skills.heading}</h2>
<ul>
    {data.skills.content.map(skill=>(<li key={Math.random()}>{skill}</li>))}
</ul>
<h2>{data.education.heading}</h2>
<ul>
  {data.education.content.map(edu=>(<li key={Math.random()}>{edu}</li>))}
</ul>

<h2>{data.work.heading}</h2>
<ul>
   {data.work.content.map(work=>(<li key={Math.random()}>{work}</li>))}
</ul>

<h2>{data.professional.heading}</h2>
<ul>
    {data.professional.content.map(prof=>(<li key={Math.random()}>{prof}</li>))}
</ul>

<h2>{data.honors.heading}</h2>
<ul>
    {data.honors.content.map(honor=>(<li key={Math.random()}>{honor}</li>))}
</ul>
</div>
    </Layout>
   
)}

export default resume

export const query=graphql`
{
    contentfulResume {
      entry {
            intro{
                heading
                content
            }
         skills{
          heading
          content
        }
        work {
          content
          heading
        }
        professional{
            heading
            content
        }
        honors{
            heading
            content
        }
        education{
          heading
          content
        }
      }
    }
  }
`