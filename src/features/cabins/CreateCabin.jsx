import styled from "styled-components";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
export default function CreateCabin() {
  const Form = styled.form`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 20px;
    max-width: fit-content;
    margin: 0 auto;
  `;
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries("cabins");
      toast.success("Cabin created successfully!");
      reset();
    },
    onError: (error) => {
      toast.error(`Error creating cabin: ${error.message}`);
    },
  });
  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Maximum Capacity" error={errors?.max_capacity?.message}>
        <Input
          type="number"
          id="max_capacity"
          {...register("max_capacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "The maximum capacity must be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Regular Price" error={errors?.regular_price?.message}>
        <Input
          type="number"
          id="regular_price"
          {...register("regular_price", {
            required: "This field is required",
            min: {
              value: 1,
              message: "The maximum capacity must be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regular_price ||
              "Discount should be less than the regular price.",
          })}
        />
      </FormRow>
      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          id="description"
          {...register("description", {
            required: "This field is required",
          })}
        ></textarea>
      </FormRow>
      <FormRow>
        <label htmlFor="image">Cabin Photo</label>
        <Input type="file" id="image" {...register("image")}></Input>
      </FormRow>
      <FormRow>
        <Button size="small" variant="secondary" type="reset">
          Clear
        </Button>
        <Button disabled={isCreating} size="small" type="submit">
          Create Cabin
        </Button>
      </FormRow>
    </Form>
  );
}
