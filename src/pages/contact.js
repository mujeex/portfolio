import React,{useState} from 'react'
import {graphql} from 'gatsby'

import styles from '../components/pageStyles/contactStyles.module.css'
import styleForm from '../components/contactComp/contactMe/contact.module.css'
import Layout from '../components/layout'
import WechatModal from '../components/contactComp/wechat'
import Button from '../components/sharedComp/button/button'

const contact=({data})=>{

    const [weChatmodal,setweChatModal]=useState(false)


    const toggleWeChatModal=(event)=>{
        event.preventDefault()
        setweChatModal(!weChatmodal)
    }


    const infos= data.contentfulContact
    const image=infos.wechat.fluid
    return(
    <Layout>
         <div className={styles.contact_container}>
       { weChatmodal?<WechatModal imageFluid={image} wechatId={infos.wechatId} onToggle={toggleWeChatModal}/>:null}
         <div className={styles.contact_content}>
            <h2>Hit me up if you ever have anything you want to talk about.</h2>
            
            <form name='contact'
                 method='POST'
                 data-netlify="true" 
                 data-netlify-honeypot="bot-field"
                 action='/thanks'
                 >

             <input hidden name="bot-field" />        
            <fieldset className={styleForm.fieldset}>
                <legend>Email</legend>
                <input className={styleForm.input} type="email" name='email'  placeholder='name@name.com' required/>
            </fieldset>

                <fieldset className={styleForm.fieldset}>
                <legend>Message</legend>
                <textarea className={styleForm.textarea} type="textarea" placeholder='message...' name="textarea"   cols="30" rows="10" required></textarea>
                </fieldset>

                <div className={styleForm.buttonContainer}>
                <Button type='submit'>Submit</Button>
                </div>

            </form>

            <ul className={styles.contactLinks}>
            <li><a target='_blank' rel="noopener noreferrer" href={`${infos.githubLink}`}>Github</a></li>
            <li onClick={toggleWeChatModal}><a href='#'>Wechat</a></li>
            </ul>
         </div>
    </div>
    </Layout>
   
)}

export default contact
export const query=graphql`
{
    contentfulContact{
        githubLink
        wechatId
        wechat {
          fluid {
          ...GatsbyContentfulFluid
          }
        }
      }
}`