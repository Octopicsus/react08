import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Store/features/AccountSlice";
import { Button } from "antd";
import styled from "styled-components";

export default function AccountInfo() {
  const user = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
  };

  return (
    <div>
      <Greetings>Hi, {user.login}</Greetings>
      <StyledButton color="danger" variant="solid" onClick={logout}>
        Sign out
      </StyledButton>
    </div>
  );
}

const Greetings = styled.strong`
  color: #ffffff;
`;

const StyledButton = styled(Button)`
  margin: 0 20px;
`;
