'use server';
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function formSubmit(prevState, formData) {
    //errors is an array of strings


    let errors = [];

    if (formData.get("title").trim().length === 0) {
        errors.push("Title is required");
    }

    if (formData.get("content").trim().length === 0) {
        errors.push("Content is required");
    }

    if (errors.length > 0) {
        return { errors };
    }

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