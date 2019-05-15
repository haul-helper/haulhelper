import styled from '@emotion/styled'

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

const HeaderLogo = styled('img')`
  height: 60px;
`

export {HeaderContainer, HeaderWrapper, HeaderLogo}
