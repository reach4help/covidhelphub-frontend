import React from 'react';
import {
  BENEFICIARIES_FORM,
  BENEFICIARIES_INITIAL_VALUES,
  BENEFICIARIES_SCHEMA,
} from './BeneficiariesFormData';
import FormikComponent from '../formik/FormikComponent';

function BeneficiariesFormComponent() {
  /**
   * Gets the form field data from the back end
   * TODO: complete the function
   */
  const getData = () => ({
    name: 'Beneficiaries form',
    form: BENEFICIARIES_FORM,
    initialValues: BENEFICIARIES_INITIAL_VALUES,
    schema: BENEFICIARIES_SCHEMA,
  });

  const { form, initialValues, schema } = getData();

  return (
    <>
      <h1>Beneficiaries Form</h1>
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

export default BeneficiariesFormComponent;
