import React from 'react'
import { Button,Form} from 'semantic-ui-react'
import {Form as FinalForm ,Field} from 'react-final-form'
import './styles.scss'

//components
import InputField from '../Inputs/InputField'
import PrimarySelect from '../Inputs/PrimarySelect'


const BookingForm = () => {


   const consultationOptions= [
      {key:"hospitalVisit", value:"Hospital Visit",text:"Hospital Visit"},
      {key:"videoCall", value:"Video Call",text:"Video Call"},
      {key:"voiceCall", value:"Voice Call",text:"Voice Call"},
      {key:"other", value:"Other",text:"Other"},
    ]
  
    const medicalConcernOptions=[
      {key:"generalHealth", value:"General Health",text:"General Health"},
      {key:"psychological", value:"Psychological",text:"Psychological"},
      {key:"covidRelated", value:"Covid Related",text:"Covid Related"},
      {key:"other", value:"Other",text:"Other"},
    ]

  const onSubmit = async (value)=>{
   console.log(value)
    const appoinmentDetails={
      fullName:value.fullName,
      address:value.address,
      phoneNumber:value.phoneNumber,
      consultationType:value.consultationType,
      medicalConcern:value.medicalConcern
    }
    //console.log(appoinmentDetails)
  }
    return (
      <div className="booking-final-form">
        <FinalForm
        onSubmit={onSubmit}
        render={({handleSubmit,form,submitting,pristine,invaild,values})=>(
          <Form onSubmit={handleSubmit} className='appoinment-booking-form'>
            <Field name='fullName'>
              {({input,meta})=>(
                <InputField
                 required
                 meta={meta}
                 {...input} 
                 height={50}
                placeholder="Please enter your full name"
                topLabel="Full name"
                onChange={(value)=>input.onChange(value)}
                />)}
            </Field>

            <Field name='address'>
              {({input,meta})=>(
              <InputField meta={meta} 
              topLabel="Address"
              {...input} height={50}
               placeholder="Please enter your full address"/>)}
            </Field>

            <Field name='phoneNumber'>
              {({input,meta})=>(
              <InputField
               meta={meta}
                {...input} 
                height={50} 
                topLabel="Phone number"
                placeholder="Please enter your Phone number"/>)}
            </Field>
            {/* <Field name='consultationType' 
            options={consultationOptions}>
              {({input,meta,options})=>(
              <PrimarySelect
               meta={meta}
               {...input}
                height={50}
               options={options}
               onBlur={(value) =>input.onChange(value)}
               placeholder="Consultation Type Required"
               />)}
            </Field> */}

            {/* <Field name='medicalConcern' options={medicalConcernOptions}>
              {({input,meta,options})=><PrimarySelect meta={meta}
               {...input} height={50} 
               options={options}
              // handleOnChange={(value) =>input.onChange(value)}
               placeholder="Select Medical concern"/>}
            </Field> */}

            <div className="submit-btn-container">
            <Button text="submit" width={52} fontSize={16}>
              Submit
              </Button>
            </div>
          </Form>
        )}
        >
      
      </FinalForm>
      </div>
    )
}

export default BookingForm
