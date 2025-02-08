import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      queryClient.invalidateQueries("settings");
      toast.success("Setting updated successfully!");
    },
    onError: (error) => {
      toast.error(`Error updating cabin: ${error.message}`);
    },
  });
  return { isUpdating, updateSetting };
}
