import styled from "styled-components";

export const PostContent = styled.section`
  margin-top: 2.5rem;
  width: 100%;
  height: auto;

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({theme})=>theme.text};
    margin-top: 1rem;
    text-align: justify;

  }

  h2 {
    font-size: 1.5rem;
    width: max-content;
    color: ${({theme})=>theme.primary};
    border-bottom: 1px solid ${({theme})=>theme.primary};
    font-weight: 400;
    margin: 2rem 0;
  }

  h3 {
    margin: 1rem 0 0.5rem;
    color: ${({theme})=>`${theme.primary}A9`};
  }

  pre, code {
    border-radius: 6px;
  }

  img {
    width: 100%;
    border-radius: 6px;
  }
`;