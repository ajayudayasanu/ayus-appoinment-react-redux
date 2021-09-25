import React from "react";
import { Header, Image, Divider } from "semantic-ui-react";

export const AppHeader = () => {
  const LogoUri = "images/AyusLogo.png";
  return (
    <Header as="h2">
      <Image src={LogoUri} />
      <Header.Content>
        Ayus Ayurveda, Poovattuparamba
        <Header.Subheader>Book your Appoinment</Header.Subheader>
      </Header.Content>
    </Header>
  );
};
