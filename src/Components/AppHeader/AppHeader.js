import React from "react";
import {
  Container,
  Image,
  Menu,
  Header
} from 'semantic-ui-react'
import './Styles.scss'
export const AppHeader = () => {
  // const LogoUri = "images/AyusLogo.png";
  return (
    // <Header as="h2">
    //   <Image src={LogoUri} />
    //   <Header.Content>
    //     Ayus Ayurveda, Poovattuparamba
    //     <Header.Subheader>Book your Appoinment</Header.Subheader>
    //   </Header.Content>
    // </Header>
    <Menu fixed='top' >
    <Container className="appHeader">
      <Menu.Item as='a' header>
        <Image size='tiny' src='/images/AyusLogo.png' style={{ marginRight: '1.5em' }} />
        <Header as='h2' className="mainHeading">Book your Appoinment</Header>
      
      </Menu.Item>
      {/* <Menu.Item as='a' position="right">Home</Menu.Item> */}
    </Container>
  </Menu>
  );
};
