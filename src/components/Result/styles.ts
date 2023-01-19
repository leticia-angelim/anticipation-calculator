import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 4rem;
  margin-left: 10rem;
  font-style: italic;

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #3d75bb;
    border-bottom: 1px solid #5d9cec;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 46px;
    color: #5d9cec;
  }
`;
