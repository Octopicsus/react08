import { Button } from "antd";
import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";

export default function CourseCard({ onEdit, onDelete, ...course }) {
  return (
    <CardContainer>
      <CardContent>
        <p>
          <strong>Name:</strong> {course.name}
        </p>
        <p>
          <strong>Description:</strong> {course.description}
        </p>
        <p>
          <strong>Lesson Count:</strong> {course.lessonCount}
        </p>
        <p>
          <strong>Course Start:</strong>{" "}
          {course.courseStart
            ? dayjs(course.courseStart).format("DD/MM/YYYY")
            : "N/A"}
        </p>
      </CardContent>
      <ButtonContainer>
        <StyledButton type="primary" onClick={() => onEdit(course.id)}>
          Edit
        </StyledButton>
        <StyledButton danger onClick={() => onDelete(course.id)}>
          Delete
        </StyledButton>
      </ButtonContainer>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardContent = styled.div`
  margin-bottom: 20px;

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #333;

    strong {
      color: #000000;
      padding-right: 10px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  &:hover {
    opacity: 0.9;
  }
`;