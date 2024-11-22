import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";

export interface SignupProps {
  email: string;
  password: string;
}

function Signup() {

  const { userSignup } = useAuth();

  const { 
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    userSignup(data);
  }

  return (
    <>
      <Title size="large">회원가입</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText 
              inputType="email" 
              {...register("email", { required: true })}
              placeholder="이메일"
            />
            { errors.email && <p className="error-text">이메일을 입력해주세요.</p> }
          </fieldset>
          <fieldset>
            <InputText 
              inputType="password"
              {...register("password", { required: true })}
              placeholder="비밀번호" 
            />
            { errors.password && <p className="error-text">비밀번호를 입력해주세요.</p> }
          </fieldset>
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">회원가입</Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  )
}

export const SignupStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin: 80px auto;

  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    .error-text {
      color: red;
    }
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }

  .info {
    text-align: center;
    padding: 16px 0 0 0;
  }
`;

export default Signup;