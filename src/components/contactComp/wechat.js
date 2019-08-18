import React from 'react'
import Img from 'gatsby-image'
import styles from './wechat.module.css'
// import Button from '../sharedComp/button/button'
import Modal from '../sharedComp/modal/modal'


const modal=({imageFluid,wechatId,onToggle})=>(
    <Modal onToggle={onToggle}>
        <div className={styles.modal_content}>
            <figure className={styles.modal_content__image}> 
                <Img className={styles.image} fluid={imageFluid}/>
            </figure>
            <div className={styles.modal_content__id}>
            <h4>WechatID:</h4>
            <p>{wechatId}</p>
            </div>
        </div>
    </Modal>
)
export default modal