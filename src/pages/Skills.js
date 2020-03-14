import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';

import './main.scss';

const Skills = props => {

    useEffect(() => {
        window.addEventListener('keyup', e => {
            if(e.keyCode === 27){
                props.setShowSkills(false)
            }
        })
    },[])

    return (
        <div className='skills'>
            <div className='header'>
                <h2>Skills</h2>
                <Icon name='cancel' size='large' onClick={() => { props.setShowSkills(false) }} />
            </div>
            <div className='skill_icons'>
                <div className = 'each_icon'>
                    <Icon name='python' size='big' />
                    <h4>Python</h4>
                </div>
                <div className = 'each_icon'>
                    <Icon name='database' size='big' />
                    <h4>SQL</h4>
                </div>
                <div className = 'each_icon'>
                    <Icon name='js' size='big' />
                    <h4>JavaScript</h4>
                </div>
                <div className = 'each_icon'>
                    <Icon name='html5' size='big' />
                    <h4>HTML</h4>
                </div>
                <div className = 'each_icon'>
                    <Icon name='css3' size='big' />
                    <h4>CSS</h4>
                </div>
                <div className = 'each_icon'>
                    <Icon name='sass' size='big' />
                    <h4>Sass</h4>
                </div>
                <div className = 'each_icon'>
                    <Icon name='less' size='big' />
                    <h4>Less</h4>
                </div>
                <div className = 'each_icon'>
                    <Icon name='node js' size='big' />
                    <h4>Node.JS</h4>
                </div>
                <div className = 'each_icon'>
                    <Icon name='react' size='big' />
                    <h4>React.JS</h4>
                </div>
            </div>
        </div>
    )
}

export default Skills