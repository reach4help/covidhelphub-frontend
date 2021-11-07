import React from "react";
import * as Yup from "yup";
import { AnyObject } from "yup/lib/types";

import Style from "./formikStyle.module.css";
import FieldComponent from "./fieldComponents/FieldComponent";
import { Formik, Form } from "formik";
import { FormSection } from "./types";


interface Props {
  formSections: FormSection[];
  initialValues: Record<string, unknown>;
  schema: Yup.ObjectSchema<AnyObject>;
}

function FormikComponent(props: Props) {
  const { formSections, initialValues, schema } = props;

  return (
    <div className={Style.getInvolved}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        <Form className={Style.volunteerForm}>
          {formSections.map((formSection) => (
            <div key={formSection.id} className={Style.formField}>
              <h2 className={Style.informationCategory}>{formSection.label}</h2>
              <div>
                {formSection.formFields.map((formField) => (
                  <FieldComponent key={formField.name} formField={formField} />
                ))}
              </div>
            </div>
          ))}
          <button type="submit" className={Style.submit}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikComponent;
