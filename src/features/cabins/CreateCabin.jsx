import styled from "styled-components";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useUpdateCabin } from "./useUpdateCabin";

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px;
  max-width: fit-content;
  margin: 0 auto;
`;
export default function CreateCabin({ cabinEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinEdit;
  const isEditingForm = Boolean(editId);
  const { isCreating, createCabinMutate } = useCreateCabin();
  const { isEditing, updateCabinMutate } = useUpdateCabin();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditingForm ? editValues : {},
  });
  const { errors } = formState;

  const isWorking = isCreating || isEditing;
  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditingForm)
      updateCabinMutate(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabinMutate(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Maximum Capacity" error={errors?.max_capacity?.message}>
        <Input
          type="number"
          id="max_capacity"
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
        ></textarea>
      </FormRow>
      <FormRow label="Cabin Photo" error={errors?.image?.message}>
        <Input
          type="file"
          id="image"
          disabled={isWorking}
          {...register("image", {
            required: isEditingForm ? false : "This field is required",
          })}
        ></Input>
      </FormRow>
      <FormRow>
        <Button
          size="small"
          variant="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Clear
        </Button>
        <Button disabled={isWorking} size="small" type="submit">
          {isEditingForm ? "Edit cabin" : "Create Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}
