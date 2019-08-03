import React from 'react'
import styles from './wechat.module.css'
import Button from '../sharedComp/button/button'

const modal=({wechatId,onToggle})=>(
    <article className={styles.modal}>
        <Button click={onToggle}>Back</Button>
        <div className={styles.modal_content}>
            <figure className={styles.modal_content__image}> 
                <image className={styles.image} alt='wechatBar' src='../../images/barcode.JPG'></image>
            </figure>
            <div className={styles.modal_content__id}>
            <h4>WechatID:</h4>
            <p>{wechatId}</p>
            </div>
        </div>
    </article>
)

export default modal