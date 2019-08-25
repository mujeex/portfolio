import React from "react"
import { Link} from "gatsby"
import Helmet from 'react-helmet'

import Layout from "../components/layout"
import styles from '../components/pageStyles/indexStyles.module.css'

const HomePage = ({data}) => (

  <Layout>
    <Helmet defer={false}>
            {/* General tags */}
            <title>A portfolio website for a front-end developer named Mujahid Bappai</title>
            <meta name="description" content="A website to host all my projects on front-end developer alongside my resume." />
          </Helmet>
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>
          <span>w</span>
          <span>e</span>
          <span>b</span>
          <span className={styles.empty}>k </span>
          <span>e</span>
          <span>n</span>
          <span>g</span>
          <span>i</span>
          <span>n</span>
          <span>e</span>
          <span>e</span>
          <span>r</span>
        </h1>
      </header>
      <div className={styles.intro}>
        <h3>Hello! Mujahid Bappai here. I am a front-end engineer with deep
          passion and curiosity towards the web technology. I am currently working freelance. All my relevant experiences  
          both personal and professional can be found here in my
           <Link to='/resume'> <span className={styles.link}>resume </span></Link>. 
          <br/>
          Nothing gives me pleasure like creating something functional and operational out of nothing.
          I find the whole process very rewarding.
          <br/>
          Feel free to <Link className={styles.link}>contact</Link> to me if you have any project or just to say hi 😁 .
        </h3>
      </div>
    </section>
  </Layout>

)

// export const query=graphql`
// {
//    site{
//      siteMetadata{
//        title
//        description
//      }
//    }
//  }
// `
export default HomePage
