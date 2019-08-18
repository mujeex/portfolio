import React from 'react'
import Button from '../button/button'
import styles from './modal.module.css'

const modal=({children,onToggle})=>(
<article className={styles.modal}>
    <div className={styles.buttonContainer}>
        <Button click={onToggle}>Back</Button>
    </div>
        {children}
    </article>
)

export default modal