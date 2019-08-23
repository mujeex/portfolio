import React from 'react'
import styles from './button.module.css'


const button =({children,click,disable})=>{

    const classes=[styles.buttonContainer]
    if(disable===true){
        classes.push(styles.buttonInvalid)
    }
    return(
        <div onClick={click?click:null} className={classes.join(' ')}>
            {children}
        </div>
    )
}


export default button