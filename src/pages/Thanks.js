import React from 'react'
import Button from '../components/sharedComp/button/button'
import {Link} from 'gatsby'

const Thanks=()=>(
    <div>
        Thank you for visitiing
        <Button><Link to='/'>Home</Link></Button>
        <Button><Link to='/contacts'>Back to Contacts</Link></Button>
    </div>
)

export default Thanks