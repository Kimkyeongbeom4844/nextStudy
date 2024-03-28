"use server";

export const formAction = (formData: FormData) => {
  try {
    console.log(formData.get("name"));
    throw new Error("에러발생!");
  } catch (error: any) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
