import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoursesList from "./CoursesList";
import { selectAll } from "../../Store/selectors/coursesSelectors";
import { Button, Modal } from "antd";
import CourseForm from "./CourseForm";
import { deleteItem } from "../../Store/features/CoursesSlice";

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

  console.log(data);
  return (
    <div>
      <h3>Courses Page</h3>
      <Button type="primary" onClick={showAddCourseForm}>
        Add Course
      </Button>

      {isAddFormShown && <CourseForm onSave={hideAddCourseForm} />}
      <CoursesList
        items={data}
        onEdit={handleCourseEdit}
        onDelete={handleCourseDelete}
      />

      <Modal
        title="Edit Course"
        open={isEditModalShown}
        onCancel={hideEditModal}
      >
        <CourseForm courseId={editCourseId} onSave={hideEditModal} />
      </Modal>
    </div>
  );
}
