import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 8rem 0;

  > div {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    > ul {
      list-style: none;
      border-left: 2px solid var(--gray-700);
    }
  }
  > h2 {
    font-size: 2rem;
    display: flex;
    position: relative;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-100);
  }
  > h2::before {
    content: '01. ';
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
`
export const ExperienceContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 12px;

  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    opacity: 1;

    > h3 {
      color: var(--gray-100);
    }
    > span {
      color: var(--orange-100);
    }
    p {
      color: var(--gray-600);
      &::before {
        content: '- ';
      }
    }
  }
`