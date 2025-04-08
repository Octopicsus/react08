import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoursesList from "./CoursesList";
import { selectAll } from "../../Store/selectors/coursesSelectors";
import { Button, Modal } from "antd";
import CourseForm from "./CourseForm";
import { deleteItem } from "../../Store/features/CoursesSlice";
import styled from "styled-components";

export default function CoursesPage() {
  const data = useSelector(selectAll);
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);
  const [editCourseId, setEditCourseId] = useState(null);

  const dispatch = useDispatch();

  const showAddCourseForm = () => {
    setIsAddFormShown(true);
  };

  const hideAddCourseForm = () => {
    setIsAddFormShown(false);
  };

  const handleCourseEdit = (courseId) => {
    setIsEditModalShown(true);
    setEditCourseId(courseId);
  };

  const handleCourseDelete = (courseId) => {
    dispatch(deleteItem(courseId));
  };

  const hideEditModal = () => {
    setIsEditModalShown(false);
  };

  return (
    <PageContainer>
      <PageHeader>Courses Page</PageHeader>
      <StyledButton type="primary" onClick={showAddCourseForm}>
        Add Course
      </StyledButton>

      {isAddFormShown && <CourseForm onSave={hideAddCourseForm} />}
      <CoursesList
        items={data}
        onEdit={handleCourseEdit}
        onDelete={handleCourseDelete}
      />

      <StyledModal
        title="Edit Course"
        open={isEditModalShown}
        onCancel={hideEditModal}
        footer={null}
      >
        <CourseForm courseId={editCourseId} onSave={hideEditModal} />
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