import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSetting";
import { useUpdateSetting } from "./useUpdateSettings";
export default function UpdateSettingFrom() {
  const {
    isLoading,
    settings: {
      min_booking_length,
      max_booking_length,
      max_guess_per_booking,
      breakfast_price,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();
  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;

    updateSetting({ [field]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={min_booking_length}
          onBlur={(e) => handleUpdate(e, "min_booking_length")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={max_booking_length}
          onBlur={(e) => handleUpdate(e, "max_booking_length")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="min-guests"
          defaultValue={max_guess_per_booking}
          onBlur={(e) => handleUpdate(e, "max_guess_per_booking")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Breakfast Price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfast_price}
          onBlur={(e) => handleUpdate(e, "breakfast_price")}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}
