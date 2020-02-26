import React from 'react';
import { withFormik, Form, Field } from 'formik';

import { Icon } from 'semantic-ui-react';
import './sidebar.scss'

const ContactMe = props => {

    return (
        <div className='contact'>
            <div className='header'>
                <h2>Contact</h2>
                <Icon name='cancel' size='large' onClick={()=>{props.setShowContact(false)}}/>
            </div>
            <div className='send_form'>
                <div className='labels'>
                    <label>Name</label>
                    <label>Email</label>
                </div>
                <div className='inputs'>
                    <input type='text'/>
                    <input type='text'/>
                </div>
                <div className='labels'>
                <label>Message</label>
                </div>
                <div className='inputs big'> 
                    <textarea type='text'>
                    </textarea>
                </div>
                <div className='buttons'>
                    <button>SEND MESSAGE</button>
                    <button>RESET</button>
                </div>
                <div className='links'>
                    <a href='https://github.com/Bilguun1015' target='_blank'><Icon name='github' size='big' /></a>
                    <a href='https://www.linkedin.com/in/bilguun-nomch/' target='_blank'><Icon name='linkedin' size='big' /></a>
                    <a href='mailto:bbg.1015@gmail.com'><Icon name='mail' size='big' target='_blank'/></a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe