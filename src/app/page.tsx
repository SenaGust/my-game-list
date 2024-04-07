'use client';
import { GameCard } from '@/shared/components/game-card/game-card';
import { useGetTopGames } from '@/shared/hooks/apis/igbd/use-get-top-games';

export default function Home() {
  const { topGames, isLoading } = useGetTopGames();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Games</h1>
      <div>
        {topGames?.map(({ name, cover }) => (
          <GameCard key={name} name={name} imageUrl={cover?.url ?? ''} />
        ))}
      </div>
    </main>
  );
}
