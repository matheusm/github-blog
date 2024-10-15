import styled from "styled-components";

export const ProfileContainer = styled.section`
  margin-top: -60px;

  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 10px;
  gap: 16px;
  padding: 24px 16px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    object-fit: cover;
    align-self: center;
  }
  
  .profile-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    h2 {
      font-size: 24px;
      color: ${(props) => props.theme["gray-100"]};
    }

    &__description {
      font-size: 16px;
      color: ${(props) => props.theme["gray-300"]};
    }

    &__title {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: bold;
      gap: 4px;
      color: ${(props) => props.theme["brand-500"]};

      a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${(props) => props.theme["brand-500"]};
        font-size: 16px;
        text-decoration: none;
      }
    }

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 16px;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        svg {
          color: ${(props) => props.theme["gray-500"]};
        }

        span {
          color: ${(props) => props.theme["gray-200"]};
        }
      }
    }
  }

  @media screen and (min-width: 769px) {
    margin-top: -120px;

    flex-direction: row;
    padding: 32px 40px;
    gap: 32px;

    .profile-content {
      text-align: left;
      justify-content: space-between;

      &__title {
        flex-direction: row;
        justify-content: space-between;
      }

      ul {
        justify-content: flex-start;
      }
    }
  }
`