import React from "react";
import {
  VOLUNTEER_FORM,
  VOLUNTEER_INITAL_VALUES,
  VOLUNTEER_SCHEMA,
} from "./VolunteerRequestData";
import FormikComponent from "../formik/FormikComponent";

function VolunteerRequestComponent() {
  /**
   * Gets the form field data from the back end
   * TODO: complete the function
   */
  const getData = () => {
    return {
      form: VOLUNTEER_FORM,
      initialValues: VOLUNTEER_INITAL_VALUES,
      schema: VOLUNTEER_SCHEMA,
    };
  };

  const { form: formSections, initialValues, schema } = getData();

  return (
    <>
      <h1>Volunteer Application Form</h1>
      <p>Thank you for your interest in volunteering for us! Please fill out our volunteer form so we can start matching you with tasks.</p>
      <FormikComponent
        formSections={formSections}
        initialValues={initialValues}
        schema={schema}
      />
    </>
  );
}

export default VolunteerRequestComponent;
