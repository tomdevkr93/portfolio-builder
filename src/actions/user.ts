import { currentUser } from "@clerk/nextjs/server";
import supabase from "@/config/db";
import { RequestUser } from "./type";

export const saveCurrentUser = async (userData: RequestUser) => {
  try {
    const { data, error } = await supabase.from("user").insert([userData]);

    if (error) {
      throw new Error("Error saving user data");
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};

export const getCurrentUser = async () => {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser) {
      return { success: false, error: "User not authenticated." };
    }

    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("auth_id", clerkUser.id);

    if (error) {
      throw new Error("Error fetching user data");
    }

    const user = data.length > 0 ? data[0] : null;

    if (user) {
      return {
        success: true,
        data: user,
      };
    }

    const userEmail = clerkUser.emailAddresses[0].emailAddress;
    if (!userEmail) {
      return {
        success: false,
        error: "User does not have a primary email address.",
      };
    }

    const userData: RequestUser = {
      name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
      email: userEmail,
      auth_id: clerkUser.id,
    };

    const response = await saveCurrentUser(userData);
    if (response.success) {
      return {
        success: true,
        data: response.data,
      };
    }

    throw new Error("Error saving user data");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error(error);
    return { success: false, error: message };
  }
};
