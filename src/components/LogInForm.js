import Form from "./Form";
import TextInput from "./TextInput";
import { MdMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LoginForm() {
  return (
    <Form style={{ height: "250px", "margin-top": "7rem" }}>
      <TextInput
        type="email"
        name="email"
        placeholder="Enter Email"
        icon={<MdMarkEmailRead />}
        required
      />
      <TextInput
        type="password"
        name="password"
        placeholder="Enter Password"
        icon={<RiLockPasswordFill />}
        required
      />
      <button type="submit">Log In</button>
    </Form>
  );
}
