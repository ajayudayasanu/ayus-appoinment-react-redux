import React from 'react'
import { Button,Form} from 'semantic-ui-react'
import './styles.scss'
import {Form as FinalForm ,Field} from 'react-final-form'
const BookingForm = () => {

  const onSubmit =(value)=>{
    console.log(value)
  }
    return (
        <FinalForm
        onSubmit={onSubmit}
        render={({handleSubmit,form,submitting,pristine,invaild,values})=>(
          <Form onSubmit={handleSubmit} className='appoinment-booking-form'>
            <Field name='fullName'>
              {({input,meta})=><Button/>}
            </Field>
          </Form>
        )}
        >
       
      </FinalForm>
    )
}

export default BookingForm
