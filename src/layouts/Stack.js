import styled from '@emotion/styled'

export const VerticalStack = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * + * {
    margin-top: 1rem;
  }
`

export const HorizontalStack = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  & > * + * {
    margin-left: 1rem;
  }
`