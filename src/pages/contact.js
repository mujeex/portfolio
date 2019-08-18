import React,{useState} from 'react'
import styles from '../components/pageStyles/contactStyles.module.css'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import WechatModal from '../components/contactComp/wechat'
import EmailModal from '../components/contactComp/contactMe/contact'

const contact=({data})=>{

    const [weChatmodal,setweChatModal]=useState(false)
    const [emailModal,setemailModal]=useState(false)

    const toggleEmailModal=(event)=>{
        event.preventDefault()
        setemailModal(!emailModal)
    }

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
       {emailModal?<EmailModal onToggle={toggleEmailModal}/>:null}
         <div className={styles.contact_content}>
            <h2>Hit me up if you ever have anything you want to talk about.</h2>
            <ul className={styles.contactLinks}>
            <li><a target='_blank' href={`${infos.githubLink}`}>Github</a></li>
            <li onClick={toggleWeChatModal}><a  href="">Wechat</a></li>
            <li onClick={toggleEmailModal}><a  href="">Email</a></li>
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