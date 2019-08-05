import React from 'react'
import Img from 'gatsby-image'
import styles from './wechat.module.css'
import Button from '../sharedComp/button/button'

const modal=({imageFluid,wechatId,onToggle})=>(
    <article className={styles.modal}>
    <div className={styles.buttonContainer}>
        <Button click={onToggle}>Back</Button>
    </div>
        <div className={styles.modal_content}>
            <figure className={styles.modal_content__image}> 
                <Img className={styles.image} fluid={imageFluid}/>
            </figure>
            <div className={styles.modal_content__id}>
            <h4>WechatID:</h4>
            <p>{wechatId}</p>
            </div>
        </div>
    </article>
)
export default modal