import UpdateSettingFrom from "../features/settings/UpdateSettingFrom";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

export default function Settings() {
  return (
    <Row type="vertical">
      <Heading>Update Hotel Setting</Heading>
      <UpdateSettingFrom />
    </Row>
  );
}
