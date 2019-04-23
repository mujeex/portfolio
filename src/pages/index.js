import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from '../components/pageStyles/indexStyles.module.css'

const homePage = () => (
  <Layout>
    <section className={styles.container}>
    <div className={styles.intro}>
      <p>Hello</p>
      <p>My name is Mujahid Bappai, a front-end engineer and a creative procrastinator</p>
    </div>
    </section>
  </Layout>
)

export default homePage
