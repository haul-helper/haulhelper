import styled from '@emotion/styled'

const ImageInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 1em;
`

const WTCLink = styled.a`
  text-decoration: underline;
  font-weight: 700;
  grid-area: 2/1;
  color: #2d46c9;
`

const Meta = styled.h3`
  font-weight: 400;
  margin: 0;
`

const Warning = styled.span`
  color: red;
  grid-area: 2/2;
`

export {ImageInfoWrapper, WTCLink, Meta, Warning}
