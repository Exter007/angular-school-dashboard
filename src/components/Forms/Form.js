import React from "react";
const Form = ({ formData }) => {
    const [page, setPage] = useState(0);
    const [currentPageData, setCurrentPageData] = useState(formData[page]);
    const onSubmit = e => {
        e.preventDefault();
        // todo - send data somewhere
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>{currentPageData.label}</h2>
            {currentPageData.fields.map(field => {
                switch (field.component) {
                    case "field_group":
                        return (
                            <FieldGroup
                                key={field._uid}
                                field={field}
                                fieldChanged={fieldChanged}
                                values={values}
                            />
                        );
                    case "options":
                        return (
                            <Option
                                key={field._uid}
                                field={field}
                                fieldChanged={fieldChanged}
                                value={values[field._uid]}
                            />
                        );
                    default:
                        return (
                            <Field
                                key={field._uid}
                                field={field}
                                fieldChanged={fieldChanged}
                                value={values[field._uid]}
                            />
                        );
                }
            })}
        </form>
    );
};
export default Form;