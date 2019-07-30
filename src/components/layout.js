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
import Github from '../components/svgs/github/github'

const Layout=({children})=>{

  return(
    <div>
       <header className={styles.header}>
      <div className={styles.logo}><Link to='/'><div></div></Link></div>
     
      <nav className={styles.navigation}>
      <div className={styles.svg}><Github/></div>
      <div className={styles.resume}>resume</div>
      </nav>
    </header>
    <main>
      {children}
    </main>
    </div>
   
  )

}

export default Layout
