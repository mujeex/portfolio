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
          <span className={styles.empty}> </span>
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
        <p>Hello! Mujahid Bappai here. I am a front-end engineer and a UX/UI engineer with deep
          passion and curiosity towards web technology. I am currently working freelance. Some of my <span className={styles.innerLink}>projects</span> are available here along
          with my <span className={styles.innerLink}>resume</span>. Feel free to  <span className={styles.innerLink}>reach out</span> to me at any time.
        </p>
      </div>
    </section>
  </Layout>
)

export default homePage
