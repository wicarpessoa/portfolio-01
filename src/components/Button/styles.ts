import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: #111111;
  border: 1px solid #fa4500;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  color: #fa4500;
  position: relative;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;

  &:focus,
  &:hover {
    transform: translate(-5px, 5px);
    box-shadow: 4px 4px 0 0 #fa4500;
  }
`
