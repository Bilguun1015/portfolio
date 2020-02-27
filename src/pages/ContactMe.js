import React, {useState} from 'react';
import { withFormik, Form, Field } from 'formik';

import { Icon } from 'semantic-ui-react';
import './sidebar.scss'

const ContactMe = props => {

    const [message, setMessage] = useState({
        sender: '',
        email: '',
        text: ''
    });

    const handleChange = e => {
        setMessage({...message, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(message)
    }

    const handleReset = e => {
        e.preventDefault();
        setMessage({
            sender:'',
            email:'',
            text:''
        })
    }

    return (
        // <Form>
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
                    <input type='text' name='sender' value={message.sender} onChange={handleChange}/>
                    <input type='email' name='email' value={message.email} onChange={handleChange}/>
                </div>
                <div className='labels'>
                <label>Message</label>
                </div>
                <div className='inputs big'> 
                    <textarea name='text' value={message.text} onChange={handleChange}>
                    </textarea>
                </div>
                <div className='buttons'>
                    <button type='submit' onClick={handleSubmit}>SEND MESSAGE</button>
                    <button type='reset' onClick={handleReset}>RESET</button>
                </div>
                <div className='links'>
                    <a href='https://github.com/Bilguun1015' target='_blank'><Icon name='github' size='big' /></a>
                    <a href='https://www.linkedin.com/in/bilguun-nomch/' target='_blank'><Icon name='linkedin' size='big' /></a>
                    <a href='mailto:bbg.1015@gmail.com'><Icon name='mail' size='big' target='_blank'/></a>
                </div>
            </div>
        </div>
        // </Form>
    )
}

export default ContactMe