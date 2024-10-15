import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 24px;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["gray-600"]};
    background-color: ${props => props.theme["gray-950"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${props => props.theme["brand-500"]};
    color: ${props => props.theme["brand-500"]};
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${props => props.theme["brand-500"]};
      border-color: ${props => props.theme["brand-500"]};
      color: ${props => props.theme.white};
      transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    }
  }

  @media screen and (max-width: 768px) {
    button {
      justify-content: center;
      flex: 1;
    }
  }
`
