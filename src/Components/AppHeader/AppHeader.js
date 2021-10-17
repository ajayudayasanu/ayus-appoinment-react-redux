import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
export const AppHeader = () => {
  const LogoUri = "images/AyusLogo.png";
  return (
    // <Header as="h2">
    //   <Image src={LogoUri} />
    //   <Header.Content>
    //     Ayus Ayurveda, Poovattuparamba
    //     <Header.Subheader>Book your Appoinment</Header.Subheader>
    //   </Header.Content>
    // </Header>
    <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Image size='mini' src='/images/AyusLogo.png' style={{ marginRight: '1.5em' }} />
        Book your Appoinment
      </Menu.Item>
      <Menu.Item as='a'>Home</Menu.Item>

      <Dropdown item simple text='Dropdown'>
        <Dropdown.Menu>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <i className='dropdown icon' />
            <span className='text'>Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
  );
};
