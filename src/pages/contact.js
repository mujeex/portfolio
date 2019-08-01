import React from 'react'
import styles from '../components/pageStyles/contactStyles.module.css'
import Layout from '../components/layout'

const contact=()=>(
    <Layout>
         <div className={styles.contact_container}>

         <div className={styles.contact_content}>
            <h2>Hit me up if you ever have anything you want to talk about.</h2>
            <ul><li><a href="">Facebook</a></li>
            <li><a href="">Github</a></li>
            <li><a href="">Wechat</a></li>
            </ul>
         </div>
    </div>
    </Layout>
   
)

export default contact