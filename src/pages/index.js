import React from "react"
import { Link } from "gatsby"
import {Helmet} from 'react-helmet'

import Layout from "../components/layout"
import styles from '../components/pageStyles/indexStyles.module.css'

const homePage = () => (
    <>
  <Layout>
    <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
          </Helmet>
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>
          <span>w</span>
          <span>e</span>
          <span>b</span>
          <span className={styles.empty}>k </span>
          <span>d</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </h1>
      </header>
      <div className={styles.intro}>
        <h3>Hello! Mujahid Bappai here. I am a front-end engineer and a UX/UI engineer with deep
          passion and curiosity towards the web technology. I am currently working freelance. Some of my project   
          are available here along
          with my <Link to='/resume'> <span className={styles.link}>resume </span></Link>. 
          Feel free to contact to me at any time.
        </h3>
      </div>
    </section>
  </Layout>
  </>
)

export default homePage
