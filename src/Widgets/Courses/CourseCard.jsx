import { Button } from "antd";
import React from "react";

export default function CourseCard({ onEdit, onDelete, ...course }) {
  console.log(course);

  return (
    <div>
      {course.name}
      <Button type="primary" onClick={() => onEdit(course.id)}>
        Edit
      </Button>
      <Button color="danger" onClick={() => onDelete(course.id)}>
        Delete
      </Button>
    </div>
  );
}
