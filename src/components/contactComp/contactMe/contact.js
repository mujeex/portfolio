import React from 'react'
import Button from '../../sharedComp/button/button'
import styles from './contact.module.css'
import Modal from '../../sharedComp/modal/modal'

const contact=({onToggle})=>{
    return (
        <Modal onToggle={onToggle}>
        <div className={styles.formContainer}>
            <form name='contact'
                 method='POST'
                 data-netlify="true" 
                 data-netlify-honeypot="bot-field"
                 >

             <input hidden name="bot-field" />        
            <fieldset className={styles.fieldset}>
                <legend>email</legend>
                <input className={styles.input} type="email" name='email'  placeholder='name@name.com' required/>
            </fieldset>

                <fieldset className={styles.fieldset}>
                <legend>message</legend>
                <textarea className={styles.textarea} placeholder='message...' name="textarea"   cols="30" rows="10"></textarea>
                </fieldset>

                <div className={styles.buttonContainer}>
                <Button type='submit' rel="noopener noreferrer">Submit</Button>
                </div>

            </form>
        </div> 
        </Modal>
    )
}

export default contact