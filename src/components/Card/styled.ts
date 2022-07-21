import styled, { css } from 'styled-components'

export const CardContainer = styled.div<{
  isFlipped: boolean
  isLocked: boolean
}>`
  background: white;
  display: grid;
  place-content: center;
  height: 120px;
  width: 80px;
  border-radius: 8px;
  position: relative;
  z-index: 2;

  ${(props) =>
    props.isFlipped &&
    css`
      &:before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(-45deg, #f492f0 0%, #f9c58d 100%);
        transform: translate3d(0px, 0px, 0) scale(1.19);
        filter: blur(20px);
        opacity: 0.7;
        transition: opacity 0.3s;
        border-radius: inherit;
      }

      &::after {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: inherit;
        border-radius: inherit;
      }
    `};

  ${(props) =>
    props.isLocked &&
    css`
      opacity: 0.3;
    `}

  ${(props) =>
    !props.isLocked &&
    css`
      cursor: pointer;
    `}
`

export const Name = styled.span`
  color: black;
  font-size: 24px;
`
