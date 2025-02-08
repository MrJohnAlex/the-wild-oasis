import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: updateCabinMutate, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      queryClient.invalidateQueries("cabins");
      toast.success("Cabin updated successfully!");
    },
    onError: (error) => {
      toast.error(`Error updating cabin: ${error.message}`);
    },
  });
  return { isEditing, updateCabinMutate };
}
