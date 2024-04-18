'use client';
import Image from 'next/image';
import { GameCardProps } from './game-card.types';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export function GameCard({ imageUrl, name }: GameCardProps) {
  const imageSrc = imageUrl?.replace('//', 'https://').replace('thumb', '720p');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: 'fit-content' }}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        <Image alt={name} src={imageSrc} height={720} width={540} priority={false} />

        <AnimatePresence>
          {isOpen && (
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {name}
            </motion.h3>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
