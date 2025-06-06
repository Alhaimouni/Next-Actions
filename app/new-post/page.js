import FormSubmit from "@/components/form-submit";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export default function NewPostPage() {

  async function formSubmit(formData) {
    'use server'
    // store post in database is async operation
    // so we need to await it
    await storePost({
      title: formData.get("title"),
      content: formData.get("content"),
      imageUrl: "https://placehold.co/600x400",
      userId: 1,
    });

    //add redirect to home page
    redirect("/feed");
  }

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formSubmit}>
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
      </form>
    </>
  );
}


