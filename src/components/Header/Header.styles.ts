import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import { colors, transitions } from 'Styled/Theme'

const HeaderWrapper = styled.header``

const HeaderContainer = styled.nav`
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: auto auto auto 1fr auto;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo create me . login signin';
  z-index: 99;
  align-items: center;
  margin-top: 3vh;
`

const Tab = styled(NavLink)`
  padding: 0 1em;
  transition: all ${transitions.default};
  position: relative;

  margin-left: 1em;
  text-decoration: none;
  color: ${colors.black};
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: 400;

  :hover {
    text-decoration: underline;
  }

  &.active {
    color: ${colors.i5}
  }
`

const CreateTab = styled(Tab)`
  grid-area: create;
`

const MeTab = styled(Tab)`
  grid-area: me;
`

const LoginTab = styled(Tab)`
  grid-area: login;
`

const SigninTab = styled(Tab)`
  grid-area: signin;
`

const HeaderLogo = styled('img')`
  height: 60px;
`


export {
  HeaderContainer,
  HeaderWrapper,
  CreateTab,
  MeTab,
  LoginTab,
  SigninTab,
  HeaderLogo,
}
