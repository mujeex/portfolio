import React from 'react'
import Button from '../../sharedComp/button/button'
import styles from './contact.module.css'
import Modal from '../../sharedComp/modal/modal'

const contact=({onToggle})=>{
    return (
        <Modal onToggle={onToggle}>
        <div className={styles.formContainer}>
            <form action="">
            <fieldset className={styles.fieldset}>
                <legend>email</legend>
                <input className={styles.input} type="text"/>
            </fieldset>

                <fieldset className={styles.fieldset}>
                <legend>message</legend>
                <textarea className={styles.textarea}  cols="30" rows="10"></textarea>
                </fieldset>
                <div className={styles.buttonContainer}>
                <Button>Submit</Button>
                </div>

            </form>
        </div> 
        </Modal>
    )
}

export default contact