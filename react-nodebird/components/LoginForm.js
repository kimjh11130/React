import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    //Antd에서 onFinish는 e.preventdefault()가 적용 되어있음
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <Button>회원가입</Button>
        </Link>
      </ButtonWrapper>
    </Form>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;