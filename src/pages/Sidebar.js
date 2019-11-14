import React from 'react';
import Projects from './Projects.js'
import { Sticky, Icon, Image, Menu, Segment, Sidebar, Header } from 'semantic-ui-react';

import '../styling/containerStyling.scss'

const SideBar = props => {
    

    return (
        <Sticky>
        <Sidebar.Pushable >
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => props.setVisible(false)}
            vertical
            visible={props.visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={props.visible}>
              <Projects />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </Sticky>
      )
}

export default SideBar