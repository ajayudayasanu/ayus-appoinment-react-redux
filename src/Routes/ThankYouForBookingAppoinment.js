import React from "react";
import { Container, Header, Icon, Table } from "semantic-ui-react";
import "./ThankyouStyle.scss";
export const ThankYouForBookingAppoinment = () => {
  return (
    <Container style={{ marginTop: "10rem" }}>
      <Header as="h2" textAlign="center" className="sucessHeader">
        <Icon name="check" className="sucessLogo" />
        <Header.Content>
          Appoinment Booked
          <Header.Subheader>Review your Booking details</Header.Subheader>
        </Header.Content>
      </Header>

      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Booking details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Icon name="user" class="tableIcon" color="olive"/> Name
            </Table.Cell>
            <Table.Cell>Kenton L Green</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Icon name="address book" color="olive" /> Address
            </Table.Cell>
            <Table.Cell>2791 Eva Pearl Street,Baton Rouge</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Icon name="phone" color="olive"/> Phone Number
            </Table.Cell>
            <Table.Cell>9847870772</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Icon name="hospital outline" color="olive"/> Consultation Type
            </Table.Cell>
            <Table.Cell>Hospital Visit</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Icon name="doctor"color="olive" /> Medical Concerne
            </Table.Cell>
            <Table.Cell>General Health</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
};
