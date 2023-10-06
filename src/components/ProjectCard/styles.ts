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
  align-items: flex-start;

  grid-column: 7 / 1;
  > span {
    color: var(--orange-300);
  }
  > a {
    font-size: 2rem;
    color: var(--gray-300);
    margin-top: 1rem;
    text-decoration: none;
    transition: var(--trasition);
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
    width: 100%;
    display: flex;
    list-style: none;
    gap: 1rem;
    color: var(--gray-400);
    margin-top: 2rem;
    flex-wrap: wrap;
    white-space: nowrap;
    > li {
    }
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
  @media (max-width: 768px) {
    grid-area: 1/1/-1/-1;
    padding: 1rem;
    > div:nth-child(3) {
      background-color: transparent;
    }
  }
`

export const ProjectCardImgContainer = styled.div`
  grid-area: 1 / 6/-1 / -1;
  position: absolute;
  right: 0;
  border-radius: 8px;
  height: 100%;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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

    background-color: var(--orange-700-30);

    transition: 0.5s all;
    &:hover {
      opacity: 0;
    }
  }
  @media (max-width: 768px) {
    grid-area: 1/1/-1/-1;
    > a {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`
