import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #ffe0b2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const GameField = styled.div<{ disabled: boolean }>`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(10, 1fr);
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `}
`
