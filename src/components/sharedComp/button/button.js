import React from 'react'
import styles from './button.module.css'


const button =({children,click})=>(
        <div onClick={click?click:null} className={styles.buttonContainer}>
            {children}
        </div>
)


export default button