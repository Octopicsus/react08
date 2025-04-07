import { Button, Form, Input } from "antd";
import { signIn } from "../Store/features/AccountSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export default function LoginForm() {
  const dispatch = useDispatch();

  const signIntoSite = (values) => {
    dispatch(signIn({ login: values.username }));
  };

  return (
    <Form_s
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={signIntoSite}
      autoComplete="off"
    >
      <h3>Login Form</h3>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form_s>
  );
}

const Form_s = styled(Form)`
  margin-top: 10px;
`;
