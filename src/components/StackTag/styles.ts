import styled from 'styled-components'

export const StackTagContainer = styled.a`
  height: 3rem;
  padding: 12px 16px;
  cursor: pointer;
  color: var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 14rem;
  white-space: nowrap;

  border-radius: 4px;
  transition: 0.5s all;
  &:hover {
    background-color: var(--gray-800);
    color: var(--orange-700);
  }
`
