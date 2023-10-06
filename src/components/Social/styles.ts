import styled from 'styled-components'

export const SocialContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  > ul {
    list-style: none;
  }
  a {
    display: inline;
    padding: 8px;
    text-decoration: none;
    cursor: pointer;
    color: var(--gray-300);

    transition: var(--trasition);
    &:hover {
      color: var(--orange-300);
    }
    > svg {
      align-self: center;
    }
  }
  > div {
    width: 1px;
    height: 5rem;
    background-color: var(--gray-700);
  }
  @media (max-width: 768px) {
    > div {
      display: none;
    }
    > ul {
      display: flex;
    }
  }
`
