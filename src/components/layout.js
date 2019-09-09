/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import {Link} from "gatsby"

import "./layout.css"
import styles from './layout.module.css'


const Layout=({children})=>{

  return(
    <div>
       <header className={styles.header}>
      <nav className={styles.navigation}>
      <div><Link activeClassName={styles.active} to='projects'>Projects</Link></div>
      <div className={styles.logo}><Link to='/'><h4>Mujahid</h4><h4>Bappai</h4></Link></div>
      <div><Link activeClassName={styles.active} to='contact'> Contact</Link></div>
      </nav>
    </header>
    <main className={styles.main}>
      {children}
    </main>
    </div>
   
  )

}

export default Layout
