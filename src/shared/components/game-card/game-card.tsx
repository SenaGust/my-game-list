import Image from 'next/image';
import { GameCardProps } from './game-card.types';
import { motion } from 'framer-motion';

export function GameCard({ imageUrl, name }: GameCardProps) {
  const imageSrc = imageUrl?.replace('//', 'https://').replace('thumb', '720p');
  return (
    <div style={{ width: 'fit-content' }}>
      <motion.div whileHover={{ scale: 1.05 }}>
        <img alt={name} src={imageSrc} />
        <p>{name}</p>
      </motion.div>
    </div>
  );
}
