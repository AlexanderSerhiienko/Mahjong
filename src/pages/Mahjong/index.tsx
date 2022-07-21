import { useEffect, useState } from 'react'
import { Card } from '../../components'
import { generatePairArray } from '../../services'
import { CardType } from '../../utils/types'
import { wait } from '../../utils/wait'
import { GameField, MainContainer } from './styled'

type WaitPair = null | {
  index: number
  number: number
}

const getCards = () =>
  generatePairArray().map((number) => ({
    number,
    isFlipped: true,
    isLocked: false,
  }))

export const Mahjong = () => {
  const [cards, setCards] = useState<CardType[]>(getCards())
  const [waitPair, setWaitPair] = useState<WaitPair>(null)
  const [peeping, setPeeping] = useState(true)

  const wrongPair = async (newCards: CardType[], index: number) => {
    newCards[index].isFlipped = true
    setCards(newCards)
    setPeeping(true)
    await wait(500)
    setPeeping(false)
    newCards[index].isFlipped = false
    newCards[waitPair!.index].isFlipped = false
    setWaitPair(null)
  }

  const correctPair = (newCards: CardType[], index: number) => {
    newCards[index].isFlipped = true
    newCards[index].isLocked = true
    newCards[waitPair!.index].isLocked = true
    setWaitPair(null)
  }

  const cardFlip = (newCards: CardType[], index: number) => {
    newCards[index].isFlipped = !newCards[index].isFlipped
    if (newCards[index].isFlipped)
      return setWaitPair({ number: newCards[index].number, index })
    setWaitPair(null)
  }

  const handleCardClick = async (index: number) => {
    const newCards = [...cards]
    if (
      waitPair &&
      waitPair.number === newCards[index].number &&
      waitPair.index !== index
    )
      correctPair(newCards, index)
    else if (waitPair && waitPair.number !== newCards[index].number)
      await wrongPair(newCards, index)
    else cardFlip(newCards, index)
    setCards(newCards)
  }

  const hideCards = () =>
    setTimeout(() => {
      setCards((prev) => prev.map((card) => ({ ...card, isFlipped: false })))
      setPeeping(false)
    }, 5000)

  useEffect(() => {
    hideCards()
  }, [])

  return (
    <MainContainer>
      <h1>Mahjong-like game</h1>
      <GameField disabled={peeping}>
        {cards.map((card, index) => (
          <Card
            onClick={() => (card.isLocked ? null : handleCardClick(index))}
            {...card}
            key={index}
          />
        ))}
      </GameField>
    </MainContainer>
  )
}
