import React from 'react'
import styles from './button.module.css'


const button =({children})=>(
        <div className={styles.buttonContainer}>
            {children}
        </div>
)


export default button