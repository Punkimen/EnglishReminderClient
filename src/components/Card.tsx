import type { FC } from 'react';
import type { ICard } from '../App';
import s from './Card.module.css';
export const Card: FC<ICard> = (props) => {
  return (
    <div className={s.card}>
      <div className={s.front}>{props.value}</div>
      <div className={s.back}>{props.translate}</div>
    </div>
  );
};
