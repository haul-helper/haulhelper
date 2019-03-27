import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import { colors } from 'Styled/Theme'

const HeaderWrapper = styled.header`
  width: 100%;
`

const HeaderContainer = styled.nav`
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: auto auto 1fr auto 1fr auto auto;
  z-index: 99;
  align-items: center;
  margin-top: 3vh;
`

const Tab = styled(NavLink)`
  margin: 0 1em;
  position: relative;
  text-decoration: none;
  color: ${colors.g9};
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: 400;

  :hover {
    color: ${colors.g5};
  }

  &.active {
    color: ${colors.i5};
    text-decoration: underline;
  }
`

const CreateTab = styled(Tab)`
  grid-column: 2;
`

const MeTab = styled(Tab)`
  grid-column: 4;
`

const LoginTab = styled(Tab)`
  grid-column: -2;
`

const SigninTab = styled(Tab)`
  grid-column: -1;
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
