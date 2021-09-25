import React from "react";
import { Route, Switch } from "react-router-dom";
import BookAppoinment from "./BookAppoinment";
import { ThankYouForBookingAppoinment } from "./ThankYouForBookingAppoinment";

function Routes() {
  return( <Switch>
      <Route path="/" exact component={BookAppoinment}/>
      <Route path="/thank-you-for-booking-appoinment" component={ThankYouForBookingAppoinment}/>
  </Switch>
  )
}

export default Routes