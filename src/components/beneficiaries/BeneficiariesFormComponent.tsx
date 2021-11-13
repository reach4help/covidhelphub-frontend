import {
    VOLUNTEER_FORM,
    VOLUNTEER_INITAL_VALUES,
    VOLUNTEER_SCHEMA,
} from "./beneficiariesFormData";
import FormikComponent from "../formik/FormikComponent";

function BeneficiariesFormComponent() {
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
        <FormikComponent
            formSections={formSections}
            initialValues={initialValues}
            schema={schema}
        />
    );
}

export default BeneficiariesFormComponent;