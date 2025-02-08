import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabinMutate, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries("cabins");
      toast.success("Cabin created successfully!");
    },
    onError: (error) => {
      toast.error(`Error creating cabin: ${error.message}`);
    },
  });

  return { isCreating, createCabinMutate };
}
