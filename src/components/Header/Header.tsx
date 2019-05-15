import React from 'react'
import {Link} from 'react-navi'
import h2 from 'h2/assets/images/h2.svg'

import {HeaderWrapper, HeaderContainer, HeaderLogo} from './Header.styles'

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link href="/">
        <HeaderLogo src={h2} />
      </Link>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
