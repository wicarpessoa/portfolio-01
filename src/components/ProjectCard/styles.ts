import styled from 'styled-components'
export const ProjectCardContainer = styled.div`
  display: flex;
  position: relative;
`

export const ProjectCardTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  > span {
    color: var(--orange-300);
  }
  > h3 {
    font-size: 2rem;
    color: var(--gray-300);
    margin-top: 1rem;
  }
  > div:nth-child(3) {
    margin-top: 1rem;
    background-color: var(--gray-800);
    padding: 1rem;
    border-radius: 4px;
    color: var(--gray-100);
  }
  > ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    color: var(--gray-400);
    margin-top: 2rem;
  }
  div:nth-child(5) {
    margin-top: 8px;
    > a {
      display: inline;
      padding: 8px;
      text-decoration: none;
      cursor: pointer;
      color: var(--gray-300);

      transition: 0.5s all;
      &:hover {
        color: var(--orange-300);
      }
      > svg {
        align-self: center;
      }
    }
  }
`

export const ProjectCardImgContainer = styled.div`
  background-color: red;
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0;
  z-index: -1;
`
