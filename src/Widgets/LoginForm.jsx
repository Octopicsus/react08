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
    <StyledForm
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
        <StyledInput />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <StyledPassword />
      </Form.Item>

      <Form.Item label={null}>
        <StyledButton type="primary" htmlType="submit">
          Submit
        </StyledButton>
      </Form.Item>
    </StyledForm>
  );
}

const StyledForm = styled(Form)`
  padding: 30px;
  max-width: 400px;
  margin: 50px auto;
  text-align: center;

  h3 {
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
  }

  .ant-form-item-label > label {
    color: white; 
  }
`;

const StyledInput = styled(Input)`
  color: #000000; 
  background-color: #ffffff; 
  border: 1px solid #1890ff;

  &:hover,
  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 5px rgba(24, 144, 255, 0.5);
  }
`;

const StyledPassword = styled(Input.Password)`
  color: #000000; 
  background-color: #ffffff; 
  border: 1px solid #1890ff;

  &:hover,
  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 5px rgba(24, 144, 255, 0.5);
  }

  input {
    color: white; 
  }
`;

const StyledButton = styled(Button)`
  background-color: #1890ff;
  color: #fff;
  border: none;
  width: 100%;

  &:hover {
    background-color: #40a9ff;
  }
`;