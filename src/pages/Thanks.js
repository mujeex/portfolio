import React from 'react'
import {Link} from 'gatsby'

import styles from '../components/pageStyles/thanks.module.css'
import Button from '../components/sharedComp/button/button'

const Thanks=()=>(
        <div className={styles.container}>
            <h2>Thank you for getting in touch, I will be sure to reply back to you 🙏</h2> 
        <div className={styles.buttons}>
             <Button><Link to='/about'>Home</Link></Button>
             <Button><Link to='/contact'>Back to Contacts</Link></Button>
        </div>
        </div>


)

export default Thanks