import React, {useState} from 'react';
import * as emailjs from 'emailjs-com';
// import { withFormik, Form, Field } from 'formik';

import { Icon } from 'semantic-ui-react';
import './sidebar.scss'

const ContactMe = props => {

    const [message, setMessage] = useState({
        sender: '',
        email: '',
        text: ''
    });

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = e => {
        setMessage({...message, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (message.sender && message.sender && message.text) {
            let templateParams = {
                from_name: message.sender,
                from_email: message.email,
                subject: `New Message From ${message.sender}`,
                message_html: message.text
            }
            emailjs.send(
                'gmail',
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            ).then(res => {
                if(res.status === 200){
                    setSuccess(true)
                }
            }, err => {
                console.log('failed', err)
            })
        }

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
        // <form>
        <div className='contact'>
            <div className='header'>
                <h2>Contact</h2>
                <Icon name='cancel' size='large' onClick={()=>{props.setShowContact(false)}}/>
            </div>
            {!success ? 
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
            </div> : <>
                    <h3 id='message'>Thank you for your message!</h3>
                    {/* <button>back</button> */}
                    </>
            }
            
        </div>
        // </form>
    )
}

export default ContactMe