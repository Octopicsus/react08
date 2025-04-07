import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addItem, editItem } from "../../Store/features/CoursesSlice";
import { selectById } from "../../Store/selectors/coursesSelectors";

export default function CourseForm({ onSave, courseId }) {
  const dispatch = useDispatch();

  const currentCourse = useSelector((state) => selectById(state, courseId));

  const handleCourseSaveNew = (values) => {
    console.log(values);
    const id = Date.now();
    dispatch(addItem({ ...values, id }));
    onSave();
  };

  const handleCourseSaveEdit = (values) => {
    dispatch(editItem({ ...values, id: courseId }));
    onSave();
  };

  return (
    <div>
      <Form_s
        name="course"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={!courseId ? handleCourseSaveNew : handleCourseSaveEdit}
        autoComplete="off"
      >
        <h3>Create Course Form</h3>

        <Form.Item
          label="Name"
          name="name"
          initialValue={courseId && currentCourse.name}
          rules={[
            { required: true, message: "Please input your course Title!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          initialValue={courseId && currentCourse.description}
          rules={[
            { required: false, message: "Please input your course Title!" },
          ]}
        >
          <TextArea />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form_s>
    </div>
  );
}

const Form_s = styled(Form)`
  color: white;
`;
