import React,{useState} from 'react'
import styles from '../components/pageStyles/contactStyles.module.css'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import Modal from '../components/contactComp/wechat'

const contact=({data})=>{

    const [modal,setModal]=useState(false)
    
    const infos= data.contentfulContact
    return(
    <Layout>
         <div className={styles.contact_container}>
        <Modal wechatId={infos.wechatId}/>
         <div className={styles.contact_content}>
            <h2>Hit me up if you ever have anything you want to talk about.</h2>
            <ul><li><a target='_blank' href={`${infos.facebookLink}`}>Facebook</a></li>
            <li><a target='_blank' href={`${infos.githubLink}`}>Github</a></li>
            <li><a  href="">Wechat</a></li>
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
      }
}`