import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: flex-start;
  > span {
    color: var(--orange-300);
  }
  > h1 {
    font-size: 5rem;
    margin-top: 1rem;
  }
  > h2 {
    font-size: 5rem;
    color: #4d4d4d;
    margin-bottom: 2rem;
  }
  > p {
    max-width: 30rem;
    margin-bottom: 1rem;
  }
`
