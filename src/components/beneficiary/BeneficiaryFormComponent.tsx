import React from 'react';
import {
  BENEFICIARY_FORM,
  BENEFICIARY_INITIAL_VALUES,
  BENEFICIARY_SCHEMA,
} from './BeneficiaryFormData';
import FormikComponent from '../formik/FormikComponent';

function BeneficiaryFormComponent() {
  /**
   * Gets the form field data from the back end
   * TODO: complete the function
   */
  const getData = () => ({
    name: 'Beneficiary Form',
    form: BENEFICIARY_FORM,
    initialValues: BENEFICIARY_INITIAL_VALUES,
    schema: BENEFICIARY_SCHEMA,
  });

  const { form, initialValues, schema } = getData();

  return (
    <>
      <h1>Beneficiary Form</h1>
      <p>
        Please fill out your information so we can match you with a volunteer to
        fulfill your request.
      </p>
      <FormikComponent
        formFields={form}
        initialValues={initialValues}
        schema={schema}
      />
    </>
  );
}

export default BeneficiaryFormComponent;
