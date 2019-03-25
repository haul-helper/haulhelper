import React from 'react'
import {Link} from 'react-router-dom'

import h2 from '../../assets/images/h2.svg'

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  CreateTab,
  MeTab,
} from './Header.styles'

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Link to="/home">
            <HeaderLogo src={h2} />
          </Link>
          <CreateTab to="/create">create</CreateTab>
          <MeTab to="/profile">profile</MeTab>
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}

export default Header
