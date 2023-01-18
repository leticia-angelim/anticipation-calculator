import styled from "styled-components";

export const ContainerBox = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 5rem 8rem;

  background: #ffffff;
  border: 1px solid #d1dce3;
  border-radius: 4px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 90, 0.25);

  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h2 {
      font-size: 25px;
      font-weight: 800;
    }

    button {
      width: 150px;
      height: 40px;
      margin-left: 4.5rem;

      font-weight: 800;
      font-size: 12px;
      color: #f5f7fa;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 14px;
    color: var(--gray-3);
  }

  input {
    width: 251px;
    height: 37px;
    padding-left: 8px;

    font-size: 14px;
    line-height: 16px;
    color: black;

    background: #ffffff;
    border: 1px solid #dde6e9;
    border-radius: 4px;
  }

  input:focus {
    background: #ffffff;
    border: 1px solid #66afe9;
    border-radius: 4px;
  }

  p {
    font-size: 11px;
    line-height: 13px;
    color: var(--negative);
  }
`;
