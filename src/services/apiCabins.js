import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function createCabin(newCabin) {
  try {
    // Generate safe image name
    const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll(
      "/",
      ""
    );
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // 1. Insert cabin data
    const { data, error } = await supabase
      .from("cabins")
      .insert([{ ...newCabin, image: imagePath }])
      .select();

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw new Error(error.message);
    }

    // Extract the cabin ID correctly
    const cabinId = data?.[0]?.id;
    if (!cabinId) {
      throw new Error("Cabin creation failed, ID missing.");
    }

    // 2. Upload the image to storage
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image, {
        cacheControl: "3600",
        upsert: false, // Prevent overwriting existing images
      });

    if (storageError) {
      console.error("Supabase Storage Error:", storageError);

      // If upload fails, delete the cabin
      await supabase.from("cabins").delete().eq("id", cabinId);

      throw new Error(storageError.message);
    }

    return data;
  } catch (err) {
    console.error("Create Cabin Error:", err);
    throw err;
  }
}

export async function deleteCabin(id) {
  let { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Could not delete");
  }
  return data;
}
