import styled from 'styled-components'

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 8rem 0;

  > h2 {
    font-size: 2rem;
    display: flex;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-100);
  }
  > h3 {
    font-size: 1.5rem;
    display: flex;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-400);
  }
  > h2::before {
    content: '04. ';
    font-family: 'Roboto', sans-serif;
    color: var(--orange-300);
    font-size: 1.2rem;
    text-align: left;
    margin-top: auto;
  }
  > h2::after {
    content: '';
    background-color: var(--gray-700);
    height: 1px;
    width: 100%;
    margin: auto 0;
  }
  > form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    > label {
      color: var(--gray-100);
      margin-bottom: 8px;
    }
    > input {
      width: 100%;
      background-color: var(--gray-700);
      border: none;
      outline: none;
      padding: 12px 16px;
      border: 4px;
      color: var(--gray-100);
      margin-bottom: 16px;
      border-radius: 4px;
      font-size: 1rem;
    }
    > textarea {
      resize: none;
      background-color: var(--gray-700);
      border: none;
      outline: none;
      padding: 12px 16px;
      color: var(--gray-100);
      border-radius: 4px;
      width: 100%;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    > button {
      object-fit: fit-content;
    }
  }
  > div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
    color: var(--gray-100);
    &::before {
      content: '';
      flex: 1;
      background-color: var(--gray-700);
      height: 1px;
    }
    &::after {
      content: '';
      flex: 1;
      background-color: var(--gray-700);
      height: 1px;
    }
  }
`
