"use client";
import FormSubmit from "@/components/form-submit";
import { formSubmit } from "@/actions/posts";
import { useFormState } from "react-dom";

export default function NewPostPage() {


  const [state, formAction] = useFormState(formSubmit, { errors: [] });

  return (
    <>
      <h1>Create a new post</h1>
      {/* because we are using useFormState hook we need to pass the formAction to the form element */}
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          {/* this component should be used inside form element because it uses useFormState hook */}
          <FormSubmit formSubmit={formSubmit} />
        </p>
        <p>errors are :{state.errors[0]}</p>
      </form>
    </>
  );
}


