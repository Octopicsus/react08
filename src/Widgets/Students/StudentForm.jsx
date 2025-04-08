import React from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, editStudent } from "../../Store/features/StudentsSlice";
import { studentsAdapter } from "../../Store/features/StudentsSlice";
import dayjs from "dayjs";
import styled from "styled-components";

const { Option } = Select;

export default function StudentForm({ onSave, studentId }) {
  const dispatch = useDispatch();
  const currentStudent = useSelector((state) =>
    studentsAdapter.getSelectors().selectById(state.students, studentId)
  );

  const handleSaveNew = (values) => {
    const id = Date.now();
    const formattedValues = {
      ...values,
      dateOfBirth: values.dateOfBirth ? values.dateOfBirth.toISOString() : null,
    };
    dispatch(addStudent({ ...formattedValues, id }));
    onSave();
  };

  const handleSaveEdit = (values) => {
    const formattedValues = {
      ...values,
      dateOfBirth: values.dateOfBirth ? values.dateOfBirth.toISOString() : null,
    };
    dispatch(editStudent({ ...formattedValues, id: studentId }));
    onSave();
  };

  return (
    <StyledForm
      name="student"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={!studentId ? handleSaveNew : handleSaveEdit}
      initialValues={
        currentStudent
          ? {
              ...currentStudent,
              dateOfBirth: currentStudent.dateOfBirth
                ? dayjs(currentStudent.dateOfBirth)
                : null,
            }
          : {}
      }
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please input the full name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
        rules={[
          { required: true, message: "Please select the date of birth!" },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: "Please select the gender!" }]}
      >
        <Select>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "Please select the city!" }]}
      >
        <Select>
          <Option value="Odessa">Odessa</Option>
          <Option value="Kiev">Kiev</Option>
          <Option value="Lviv">Lviv</Option>
          <Option value="Warsaw">Warsaw</Option>
          <Option value="Prague">Prague</Option>
          <Option value="Frankfurt">Frankfurt</Option>
          <Option value="Berlin">Berlin</Option>
        </Select>
      </Form.Item>

      <Form.Item label="LinkedIn" name="linkedin">
        <Input />
      </Form.Item>

      <Form.Item label="Facebook" name="facebook">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <StyledButton type="primary" htmlType="submit">
          Save
        </StyledButton>
      </Form.Item>
    </StyledForm>
  );
}

const StyledForm = styled(Form)`
  padding: 20px;
  width: 60%;
  max-width: 600px;
  box-sizing: border-box;
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
