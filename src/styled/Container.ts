import styled from '@emotion/styled'

import { mq } from 'Styled/Theme'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 2em;
  ${mq({
    maxWidth: ['100vw'],
  })}
`

export {
  Container,
}