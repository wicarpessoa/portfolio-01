import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > h2 {
    font-size: 2rem;
    display: flex;
    position: relative;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-100);
  }
  > h2::before {
    content: '02. ';
    font-family: 'Roboto', sans-serif;
    color: var(--orange-300);
    font-size: 1rem;
    text-align: left;
    margin: auto 0;
  }
  > h2::after {
    content: '';
    background-color: var(--gray-700);
    height: 1px;
    width: 100%;
    margin: auto 0;
  }
`
