import {
    BENEFICIARIES_FORM,
    BENEFICIARIES_INITAL_VALUES,
    BENEFICIARIES_SCHEMA,
} from "./beneficiariesFormData";
import FormikComponent from "../formik/FormikComponent";

function BeneficiariesFormComponent() {
    /**
     * Gets the form field data from the back end
     * TODO: complete the function
     */
    const getData = () => {
        return {
            form: BENEFICIARIES_FORM,
            initialValues: BENEFICIARIES_INITAL_VALUES,
            schema: BENEFICIARIES_SCHEMA,
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