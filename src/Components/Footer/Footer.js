import React from 'react'
import {
    Container,
    Image,
    List,
    Segment,
  } from 'semantic-ui-react'
  import './styles.scss'
 const Footer = () => {
    return (
    <Segment inverted vertical className='footerContainer'>
      <Container textAlign='center'>
        {/* <Divider inverted section /> */}
        <Image centered size='tiny' src='/images/AyusLogo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
    )
}

export default Footer