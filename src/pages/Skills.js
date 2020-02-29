import React,{ useState } from 'react';
import { Icon } from 'semantic-ui-react';

import './sidebar.scss';

const Skills = props => {
    return(
        <div className='skills'>
            <div className='header'>
                <h2>Skills</h2>
                <Icon name='cancel' size='large' onClick={()=>{props.setShowSkills(false)}}/>
            </div>
        </div>
    )
}

export default Skills