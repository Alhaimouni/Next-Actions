"use client";

import { useFormStatus } from "react-dom";


export default function FormSubmit({ formSubmit }) {
    //useFormStatus hook is used to get the status of the form submission
    //it returns an object with a pending property that is true if the form is submitting
    //and a data property that is the form data no need to pass it as an argument it will know the relevant form data
    //let status = useFormStatus(formSubmit); //this is the old way
    let status = useFormStatus();

    if (status?.pending) {
        return <p>Form is submitting...</p>;
    }


    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    )
}