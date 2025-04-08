import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentsList from "./StudentsList";
import { Button, Modal } from "antd";
import StudentForm from "./StudentForm";
import { deleteStudent } from "../../Store/features/StudentsSlice";
import { studentsAdapter } from "../../Store/features/StudentsSlice";
import styled from "styled-components";

export default function StudentsPage() {
  const students = useSelector((state) =>
    studentsAdapter.getSelectors().selectAll(state.students)
  );
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);
  const [editStudentId, setEditStudentId] = useState(null);

  const dispatch = useDispatch();

  const showAddStudentForm = () => {
    setIsAddFormShown(true);
  };

  const hideAddStudentForm = () => {
    setIsAddFormShown(false);
  };

  const handleStudentEdit = (studentId) => {
    setIsEditModalShown(true);
    setEditStudentId(studentId);
  };

  const handleStudentDelete = (studentId) => {
    dispatch(deleteStudent(studentId));
  };

  const hideEditModal = () => {
    setIsEditModalShown(false);
  };

  return (
    <PageContainer>
      <PageHeader>Students Page</PageHeader>
      <StyledButton type="primary" onClick={showAddStudentForm}>
        Add Student
      </StyledButton>

      {isAddFormShown && <StudentForm onSave={hideAddStudentForm} />}
      <StudentsList
        items={students}
        onEdit={handleStudentEdit}
        onDelete={handleStudentDelete}
      />

      <StyledModal
        title="Edit Student"
        open={isEditModalShown}
        onCancel={hideEditModal}
        footer={null}
      >
        <StudentForm studentId={editStudentId} onSave={hideEditModal} />
      </StyledModal>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const PageHeader = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
  }
`;
