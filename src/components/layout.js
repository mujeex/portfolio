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
      <div className={styles.logo}><Link to='/'>Homelogo</Link></div>
      <nav className={styles.navigation}>
        {/* <ul className={styles.navContainer}> */}
          <Link to='/projects'>project</Link>
          <Link to='blog'>blog</Link>
          <Link to='/aboutPage'>about me!</Link>
          <Link to='/contact'>contact</Link>
        {/* </ul> */}
      </nav>
    </header>
    <main>
      {children}
    </main>
    </div>
   
  )

}

export default Layout
