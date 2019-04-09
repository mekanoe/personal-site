import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { md } from '../kit/media'

const Outer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Name = styled.div`
  font-size: 1.35em;
  white-space: nowrap;
  font-weight: bold;
  padding: 0 15px;
  ${md`
  font-size: 3em;
  padding: 1rem;
  `}
`

const Side = styled.div`
  font-size: 1em;
  line-height: 1.6;
`

const Subhead = styled.div`
  font-weight: 300;
`

const Nav = styled.nav``

const NavLink = ({ href, children, prefetch, ...rest }) => <Link href={href} prefetch={prefetch}><a {...rest}>{children}</a></Link>
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  padding-right: 0.4em;
  transition: 0.3s ease-in-out;

  :hover {
    color: #666;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.4);
  }
`

export default () => <Outer>
  <Name>猫カフェ</Name>
  <Side>
    <Subhead>the weird musings &amp; projects of katalina</Subhead>
    <Nav>
      <StyledNavLink href='/' prefetch>index</StyledNavLink>
      <StyledNavLink href='/projects'>projects</StyledNavLink>
      <StyledNavLink href='/toys'>toys</StyledNavLink>
      <StyledNavLink href='/words'>words</StyledNavLink>
      <StyledNavLink href='/work'>work</StyledNavLink>
    </Nav>
  </Side>
</Outer>
