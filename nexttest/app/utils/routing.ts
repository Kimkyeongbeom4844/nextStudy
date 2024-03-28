"use server";
import { revalidatePath } from "next/cache";

export const moving = (pathname: string) => {
  revalidatePath(pathname, "page");
};
