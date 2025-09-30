import { useState } from 'react';
import './App.css';
import { AddedForm } from './components/AddedForm';
import { Game } from './components/Game';

export interface ICard {
  value: string;
  translate: string;
}

function App() {
  const [cards, setCards] = useState<Record<string, string>>({});

  const addCard = (value: string, translate: string) => {
    if (cards[value]) {
      return;
    }

    setCards({
      ...cards,
      [value]: translate,
    });
  };

  return (
    <>
      <AddedForm addCard={addCard} />
      <Game cards={cards} />
    </>
  );
}

export default App;
