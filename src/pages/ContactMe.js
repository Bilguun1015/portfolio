import React, { useState, useEffect } from 'react';
import * as emailjs from 'emailjs-com';
import { Icon } from 'semantic-ui-react';
import './main.scss'

const ContactMe = props => {

    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const user_id = process.env.REACT_APP_EMAILJS_USER_ID;

    const [message, setMessage] = useState({
        sender: '',
        email: '',
        text: ''
    });

    const [error, setError] = useState({
        sender: false,
        email: false,
        text: false
    })
    const [success, setSuccess] = useState(false)

    const handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const someObj = {
            sender: false,
            email: false,
            text: false
        }
        for(const property in message){
            if(!message[property]){
                someObj[property] = true
            }
        }
        setError(someObj)
        for(const each in someObj){
            if(someObj[each]) return;
        }

        if ((message.email && message.sender && message.text) && (!error.sender && !error.message && !error.text)) {
            let templateParams = {
                from_name: message.sender,
                from_email: message.email,
                subject: `New Message From ${message.sender}`,
                message_html: message.text
            }
            emailjs.send(
                'gmail',
                "template_hwkwMtju",
                templateParams,
                "user_RtbbRJHpns8ZShVVhyfI8"
            ).then(res => {
                if (res.status === 200) {
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
            sender: '',
            email: '',
            text: ''
        })
        setError({
            sender: false,
            email: false,
            text: false
        })
    }

    useEffect(() => {
        window.addEventListener('keyup', e => {
            if(e.keyCode === 27){
                props.setShowContact(false)
            }
        })
    },[])


    return (
        <div className='contact'>
            <div className='header'>
                <h2>Contact</h2>
                <Icon name='cancel' size='large' onClick={() => {props.setShowContact(false)}} />
            </div>
            {!success ?
                <div className='send_form'>
                    <div className='labels'>
                        <label>Name</label>
                        <label>Email</label>
                    </div>
                    <div className='inputs'>
                        <input type='text' name='sender' placeholder={error.sender ? 'Name is required' : null} value={message.sender} onChange={handleChange} />
                        <input type='email' name='email' placeholder={error.email ? 'Email is required' : null} value={message.email} onChange={handleChange} />
                    </div>
                    <div className='labels'>
                        <label>Message</label>
                    </div>
                    <div className='inputs big'>
                        <textarea name='text' placeholder={error.text ? 'Message is required' : null} value={message.text} onChange={handleChange}>
                        </textarea>
                    </div>
                    <div className='buttons'>
                        <button id='submit' type='submit' onClick={handleSubmit}>SEND MESSAGE</button>
                        <button id='reset' type='reset' onClick={handleReset}>RESET</button>
                    </div>
                    <div className='links'>
                        <a href='https://github.com/Bilguun1015' target='_blank' rel='noopener'><Icon name='github' size='big' /></a>
                        <a href='https://www.linkedin.com/in/bilguun-nomch/' target='_blank' rel='noopener'><Icon name='linkedin' size='big' /></a>
                        <a href='mailto:bbg.1015@gmail.com'><Icon name='mail' size='big' target='_blank' rel='noopener'/></a>
                    </div>
                </div> : <>
                    <h3 id='message'>Thank you for your message!</h3>
                    {/* <button>back</button> */}
                </>
            }

        </div>
    )
}

export default ContactMe