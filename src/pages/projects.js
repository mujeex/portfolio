import React from 'react'
import Layout from '../components/layout'
import styles from '../components/pageStyles/projectStyles.module.css'

const project=()=>(
    <Layout>
    <div className={styles.projectsContainer}>

    <article className={styles.projectContainer}>
        <p className={styles.projectName}>Ice cream project</p>
        <div className={styles.projectNumber}>1</div>
    </article>

    </div>
    </Layout>
   
)

export default project