import styled from "styled-components";

export const ArticlesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  min-height: 0;
  min-width: 0;
`

export const ArticleCard = styled.a`
  overflow: hidden;
  min-width: 0;

  background-color: ${({ theme }) => theme["gray-700"]};
  border-radius: 10px;
  padding: 32px;
  
  text-decoration: none;
  color: ${({ theme }) => theme.white};

  h2 {
    color: ${({theme})=>theme["gray-100"]};
    margin-bottom: 1.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  p {
    color: ${({theme})=>theme["gray-200"]};
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%; 
  }
`