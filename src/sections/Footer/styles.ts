import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  color: var(--gray-400);
  height: 6rem;
  @media (max-width: 768px) {
    flex-direction: column;
    > div:first-child {
      position: static;
      flex-direction: row;
    }
  }
`
