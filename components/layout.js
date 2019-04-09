import * as React from 'react'
import styled from 'styled-components'
import Header from './header'

const Wrapper = styled.div`
  width: 960px;
  max-width: 90vw;
  margin: 0 auto;
`

const bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
`

// stripes!
const BottomBG = styled(bg)`
  z-index: -1;
  background-blend-mode: soft-light;
  background:
    repeating-linear-gradient(
      45deg,
      var(--bg-y),
      var(--bg-y) 40px,
      var(--bg-b) 40px,
      var(--bg-b) 80px,
      var(--bg-p) 80px,
      var(--bg-p) 120px
    );
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

const ContentBox = styled.div`
  background-color: #fefefe;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 1em 2em;
  line-height: 1.3;

  p {
    padding: 0.7em 0;
  }

  a {
    color: #ef7575;
    text-decoration-color: transparent;
    transition: 0.3s ease-in-out;
    
    :hover {
      text-shadow: 0 0 1px var(--bg-p);
      text-decoration-color: #ef7575;
    }
  }
`

export default ({ children }) => <Wrapper>
  <BottomBG />
  <Header />
  <ContentBox>
    {children}
  </ContentBox>
</Wrapper>
