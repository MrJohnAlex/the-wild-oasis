import supabase from "./supabase";

export async function getSettings() {
  let { data, error } = await supabase.from("settings").select("*").single();
  if (error) {
    throw new Error("Failed to fetch settings: " + error.message);
  }
  return data;
}

export async function updateSettings(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();
  if (error) {
    throw new Error("Failed to update settings: " + error.message);
  }
  return data;
}
