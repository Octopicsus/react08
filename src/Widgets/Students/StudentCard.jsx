import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import dayjs from "dayjs";

export default function StudentCard({ onEdit, onDelete, ...student }) {
  return (
    <CardContainer>
      <CardContent>
        <p>
          <strong>Full Name:</strong> {student.fullName}
        </p>
        <p>
          <strong>Date of Birth:</strong>{" "}
          {student.dateOfBirth
            ? dayjs(student.dateOfBirth).format("DD/MM/YYYY")
            : "N/A"}
        </p>
        <p>
          <strong>Gender:</strong> {student.gender}
        </p>
        <p>
          <strong>City:</strong> {student.city}
        </p>

        {student.linkedin && (
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={student.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {student.linkedin}
            </a>
          </p>
        )}

        {student.facebook && (
          <p>
            <strong>Facebook:</strong>{" "}
            <a
              href={student.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              {student.facebook}
            </a>
          </p>
        )}
      </CardContent>
      <ButtonContainer>
        <StyledButton type="primary" onClick={() => onEdit(student.id)}>
          Edit
        </StyledButton>
        <StyledButton danger onClick={() => onDelete(student.id)}>
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

  a {
    color: #1890ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
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
