import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  color: white;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  gap: 3rem;
`
export const AboutTextContainer = styled.div`
  > h2 {
    font-size: 2rem;
    display: flex;
    position: relative;
    white-space: nowrap;
    gap: 0.5rem;
  }
  > h2::before {
    content: '01. ';
    font-family: 'Roboto', sans-serif;
    color: #fa4500;
    font-size: 1rem;
    text-align: left;
    margin: auto 0;
  }
  > h2::after {
    content: '';
    background-color: #222222;
    height: 1px;
    width: 100%;
    margin: auto 0;
  }
  ul > li {
    list-style: none;
  }
`
export const AboutImgContainer = styled.div`
  position: relative;

  img {
    height: 17rem;
    width: 17rem;
  }
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 2px solid #fa4500;
    top: 1rem;
    left: 1rem;
  }
`
