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
          {/* <span className={styles.empty}></span> */}
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
        <p></p>
      </div>
    </section>
  </Layout>
)

export default homePage
