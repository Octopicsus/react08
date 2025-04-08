import React from "react";
import { Form, Input, InputNumber, Button, DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem } from "../../Store/features/CoursesSlice";
import { selectById } from "../../Store/selectors/coursesSelectors";
import dayjs from "dayjs";
import styled from "styled-components";

export default function CourseForm({ onSave, courseId }) {
  const dispatch = useDispatch();
  const currentCourse = useSelector((state) => selectById(state, courseId));

  const handleCourseSaveNew = (values) => {
    const id = Date.now();
    const formattedValues = {
      ...values,
      courseStart: values.courseStart ? values.courseStart.toISOString() : null,
    };
    dispatch(addItem({ ...formattedValues, id }));
    onSave();
  };

  const handleCourseSaveEdit = (values) => {
    const formattedValues = {
      ...values,
      courseStart: values.courseStart ? values.courseStart.toISOString() : null,
    };
    dispatch(editItem({ ...formattedValues, id: courseId }));
    onSave();
  };

  return (
    <StyledForm
      name="course"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={!courseId ? handleCourseSaveNew : handleCourseSaveEdit}
      initialValues={
        currentCourse
          ? {
              ...currentCourse,
              courseStart: currentCourse.courseStart
                ? dayjs(currentCourse.courseStart)
                : null,
            }
          : { lessonCount: 0 }
      }
    >
      <Form.Item
        label="Course Name"
        name="name"
        rules={[{ required: true, message: "Please input the course name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input the description!" }]}
      >
        <TextArea />
      </Form.Item>

      <Form.Item
        label="Lesson Count"
        name="lessonCount"
        rules={[{ required: true, message: "Please input the lesson count!" }]}
      >
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item
        label="Course Start"
        name="courseStart"
        rules={[{ required: true, message: "Please select the start date!" }]}
      >
        <DatePicker />
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
  max-width: 100%; 
 
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
