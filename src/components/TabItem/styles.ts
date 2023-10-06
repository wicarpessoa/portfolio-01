import styled from 'styled-components'

export const TabItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 12px 16px;
  > span {
    color: var(--gray-100);
  }
  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -2px;
    width: 2px;
    background-color: var(--orange-700);
  }
  &:hover {
    background-color: var(--orange-700-70);
  }
`
