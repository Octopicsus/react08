import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import Auth from "./Widgets/Auth";
import { Routes, Route, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import CoursesPage from "./Widgets/Courses/CoursesPage";
import StudentsPage from "./Widgets/Students/StudentsPage";

const { Header, Content, Sider } = Layout;

export default function App() {
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  const items = [
    { key: "courses", label: "Courses" },
    { key: "students", label: "Students" },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(`/${key}`);
  };

  return (
    <StyledLayout>
      <StyledHeader isAuth={user.isAuth}>
        <Auth />
      </StyledHeader>
      <StyledLayout>
        {user.isAuth && (
          <StyledSider>
            <StyledMenu
              mode="inline"
              items={items}
              onClick={handleMenuClick}
              defaultSelectedKeys={["courses"]}
            />
          </StyledSider>
        )}
        <StyledContent>
          {!user.isAuth && <p>You need to sign in</p>}
          {user.isAuth && (
            <Routes>
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/students" element={<StudentsPage />} />
            </Routes>
          )}
        </StyledContent>
      </StyledLayout>
    </StyledLayout>
  );
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background-color: #375979;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.isAuth ? "auto" : "300px")};
`;

const StyledSider = styled(Sider)`
  background-color: #f0f2f5;
`;

const StyledMenu = styled(Menu)`
  height: 100%;
  border-right: 1px solid #e8e8e8;
`;

const StyledContent = styled(Content)`
  padding: 20px;
  background-color: #fff;
  min-height: calc(100vh - 64px);
`;