import React from "react";
import { Flex, Layout, Menu } from "antd";
import Auth from "./Widgets/Auth";
import "./App.css";
import styled from "styled-components";
import { Routes, Route, useNavigate, Navigate } from "react-router";
import { useSelector } from "react-redux";
import CoursesPage from "./Widgets/Courses/CoursesPage";
import StudentsPage from "./Widgets/Students/StudentsPage";
import Sider from "antd/es/layout/Sider";

const { Header, Content } = Layout;

export default function App() {
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  const items = [
    {
      key: "courses",
      label: "Courses",
    },
    {
      key: "students",
      label: "Students",
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(`/${key}`);
  };

  return (
    <>
      <Layout>
        <HeaderStyled>
          <Auth />
        </HeaderStyled>
      </Layout>
      <Layout>
        <Sider width="20%">
          {user.isAuth && (
            <Menu
              onClick={handleMenuClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["courses"]}
              mode="inline"
              items={items}
            />
          )}
        </Sider>
        <Content>
          {!user.isAuth && <p>You need to sign in</p>}
          {user.isAuth && (
            <>
              <Routes>
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/students" element={<StudentsPage />} />
              </Routes>
            </>
          )}
        </Content>
      </Layout>
    </>
  );
}

const HeaderStyled = styled(Header)`
  color: white;
  min-height: 200px;
  background-color: #dfdfdf;
`;
