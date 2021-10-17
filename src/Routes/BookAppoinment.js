import React from 'react'
import BookingForm from '../Components/BookingForm/BookingForm'
import Footer from '../Components/Footer/Footer'
import { Container } from 'semantic-ui-react'
const BookAppoinment = () => {
    return (
        <>
         <Container text style={{ marginTop: '7em' }}>
            <BookingForm className="booking-form"/>
         
        </Container>
    <Footer/>
    </>
    )
}

export default BookAppoinment
