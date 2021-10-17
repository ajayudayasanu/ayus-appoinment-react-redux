import React from 'react'
import { Container, Header,Icon } from 'semantic-ui-react'
import './ThankyouStyle.scss'
export const ThankYouForBookingAppoinment = () => {
    return (
        <Container style={{ marginTop: '10rem' }}>
           <Header as='h2' textAlign="center" className='sucessHeader'>
                 <Icon name='check' className='sucessLogo' />
                     <Header.Content>
                         Appoinment Booked
                         <Header.Subheader>Review your Booking details</Header.Subheader>
                     </Header.Content>
             </Header>
        </Container>
    )
}
