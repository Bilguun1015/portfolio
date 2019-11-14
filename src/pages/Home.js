import React, { useState } from 'react';
import Sidebar from './Sidebar.js';
import { Container, Header, Icon } from 'semantic-ui-react';

const Home = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <Container fluid style={{background: "black"}}>
                <Header as='h3' dividing>
                    Dividing Header
                </Header>
                <Icon name='sidebar' size='big' onClick={() => { setVisible(true) }} 
                    style={{position: "fixed", top:"100px", "z-index": "1000"}}
                    inverted 
                />
                <Sidebar visible={visible} setVisible={setVisible} />
            </Container>
        </>

    )
}

export default Home;