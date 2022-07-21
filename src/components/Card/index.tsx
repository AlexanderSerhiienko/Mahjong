import { FC } from 'react'
import { CardType } from '../../utils/types'
import { CardContainer, Name } from './styled'

interface CardProps extends CardType {
  onClick: () => void
}

export const Card: FC<CardProps> = ({
  number,
  isFlipped,
  isLocked,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick} isFlipped={isFlipped} isLocked={isLocked}>
      {isFlipped && <Name>{number}</Name>}
    </CardContainer>
  )
}
