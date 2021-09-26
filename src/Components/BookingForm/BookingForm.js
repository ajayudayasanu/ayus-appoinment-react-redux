import React from 'react'
import { Button,Form} from 'semantic-ui-react'
import {Form as FinalForm ,Field} from 'react-final-form'
import './styles.scss'

//components
import InputField from '../Inputs/InputField'


const BookingForm = () => {

  const onSubmit =(value)=>{
    console.log(value)
  }
    return (
      <div className="booking-final-form">
        <FinalForm
        onSubmit={onSubmit}
        render={({handleSubmit,form,submitting,pristine,invaild,values})=>(
          <Form onSubmit={handleSubmit} className='appoinment-booking-form'>
            <Field name='fullName'>
              {({input,meta})=><InputField meta={meta} {...input} height={50} placeholder="full name"/>}
            </Field>
            <Field name='address'>
              {({input,meta})=><InputField meta={meta} {...input} height={50} placeholder="address"/>}
            </Field>
            <Field name='phoneNumber'>
              {({input,meta})=><InputField meta={meta} {...input} height={50} placeholder="Phone number"/>}
            </Field>
          </Form>
        )}
        >
      
      </FinalForm>
      </div>
    )
}

export default BookingForm
