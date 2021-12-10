/* eslint-disable no-console */
import React from 'react';
import * as Yup from 'yup';
import { AnyObject } from 'yup/lib/types';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Style from './formikStyle.module.css';
import FieldComponent from './fieldComponents/FieldComponent';
import { FormField } from './types';

interface Props {
  formFields: FormField[];
  initialValues: Record<string, unknown>;
  schema: Yup.ObjectSchema<AnyObject>;
}

function FormikComponent(props: Props) {
  const { formFields, initialValues, schema } = props;
  const history = useHistory();

  let previousSection: string = '';

  return (
    <div className={Style.formikForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          history.push(`${history.location.pathname}/submitted`);
          setSubmitting(false);
        }}
      >
        <Form>
          {formFields.map((formField) => {
            if (
              formField.sectionTitle
              && formField.sectionTitle !== previousSection
            ) {
              previousSection = formField.sectionTitle;
              return (
                <>
                  <h2 className={Style.formFieldHeader}>
                    {formField.sectionTitle}
                  </h2>
                  <FieldComponent key={formField.name} formField={formField} />
                </>
              );
            }
            return (
              <FieldComponent key={formField.name} formField={formField} />
            );
          })}
          <button type="submit" className={Style.submit}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikComponent;
