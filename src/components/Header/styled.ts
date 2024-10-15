import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: -1;

  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    height: 150px;
  }
`