import styled from 'styled-components'
export const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
`

export const ProjectCardTextContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  grid-column: 7 / 1;
  > span {
    color: var(--orange-300);
  }
  > a {
    font-size: 2rem;
    color: var(--gray-300);
    margin-top: 1rem;
    text-decoration: none;
    transition: 0.5s all;
    &:hover {
      color: var(--orange-700);
    }
  }
  > div:nth-child(3) {
    margin-top: 1rem;
    background-color: var(--gray-800);
    padding: 1rem;
    border-radius: 4px;
    color: var(--gray-100);
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
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
  grid-area: 1 / 6 / -1 / -1;
  position: absolute;
  right: 0;
  border-radius: 8px;
  height: 100%;
  > img {
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  > a {
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    border-radius: 8px;

    cursor: pointer;

    background-color: var(--orange-300);
    opacity: 0.3;
    transition: 0.5s all;
    &:hover {
      opacity: 0;
    }
  }
`
