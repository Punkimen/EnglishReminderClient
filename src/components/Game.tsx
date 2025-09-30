import { useState, type FC } from 'react';
import { Card } from './Card';

interface IGameProps {
  cards: Record<string, string>;
}

export const Game: FC<IGameProps> = ({ cards }) => {
  const [start, setStart] = useState(false);
  const [currentIndexCard, setCurrentIndexCard] = useState<number | null>(null);

  const onButtonClick = () => {
    if (!start) {
      setStart(true);
      setCurrentIndexCard(0);
    } else {
      const cardsSize = Object.keys(cards).length - 1;

      setCurrentIndexCard((prev) =>
        prev !== null && prev < cardsSize ? prev + 1 : 0,
      );
    }
  };

  const onEndClick = () => {
    setStart(false);
    setCurrentIndexCard(null);
  };

  const currentCardKey =
    currentIndexCard !== null ? cards.keys[currentIndexCard] : null;

  return (
    <div>
      {currentCardKey && (
        <Card value={currentCardKey} translate={cards[currentCardKey]} />
      )}
      <button onClick={onButtonClick}>
        {start ? 'Следующая карта' : 'Начать игру'}
      </button>
      <button onClick={onEndClick}>Закончить</button>
    </div>
  );
};
