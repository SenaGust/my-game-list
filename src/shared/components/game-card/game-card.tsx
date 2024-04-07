import Image from 'next/image';
import { GameCardProps } from './game-card.types';

export function GameCard({ imageUrl, name }: GameCardProps) {
  return (
    <div>
      <img alt={name} src={imageUrl?.replace('//', 'https://').replace('thumb', '720p')} />
      <p>{name}</p>
    </div>
  );
}
