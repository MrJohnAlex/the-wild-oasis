import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  try {
    // Ensure the image path check works correctly
    const isHasImagePath =
      typeof newCabin.image === "string" &&
      newCabin.image.startsWith(supabaseUrl);
    // const isHasImagePath = newCabin.image?.startsWith(supabaseUrl);
    const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll(
      "/",
      ""
    );
    const imagePath = isHasImagePath
      ? newCabin.image
      : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    let query = supabase.from("cabins");

    let data, error;
    if (!id) {
      ({ data, error } = await query
        .insert([{ ...newCabin, image: imagePath }])
        .select("*"));
    } else {
      ({ data, error } = await query
        .update({ ...newCabin, image: imagePath })
        .eq("id", id)
        .select("*"));
    }

    if (error) {
      console.error("Supabase Insert/Update Error:", error);
      throw new Error(error.message);
    }

    console.log("Returned data:", data);

    // Ensure the ID is present
    const cabinId = data?.[0]?.id;
    if (!cabinId) {
      throw new Error("Cabin creation failed, ID missing.");
    }

    // 2. Upload the image to storage
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image, {
        cacheControl: "3600",
        upsert: false,
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
