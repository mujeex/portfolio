import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from '../components/pageStyles/indexStyles.module.css'

const homePage = () => (
  <Layout>
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>
          <span>w</span>
          <span>e</span>
          <span>b</span>
          <span className={styles.empty}>j </span>
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
          passion and curiosity towards the web technology. I am currently working freelance. Some of my  
           <span className={styles.link}>p</span>
          <span className={styles.link}>r</span>
          <span className={styles.link}>o</span>
          <span className={styles.link}>j</span>
          <span className={styles.link}>e</span>
          <span className={styles.link}>c</span>
          <span className={styles.link}>t</span>
          <span className={styles.link}>s</span> 
           are available here along
          with my <span className={styles.link}>r</span>
          <span className={styles.link}>e</span>
          <span className={styles.link}>s</span>
          <span className={styles.link}>u</span>
          <span className={styles.link}>m</span>
          <span className={styles.link}>e</span>. 
          Feel free to  <span className={styles.link}>c</span>
          <span className={styles.link}>o</span>
          <span className={styles.link}>n</span>
          <span className={styles.link}>t</span>
          <span className={styles.link}>a</span>
          <span className={styles.link}>c</span>
          <span className={styles.link}>t</span>
           to me at any time.
        </h3>
      </div>
    </section>
  </Layout>
)

export default homePage
