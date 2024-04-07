import { getTopGames } from '@/shared/apis/igbd/get-top-games';
import { useQuery } from '@tanstack/react-query';

export function useGetTopGames() {
  const { data: topGames } = useQuery({
    queryKey: ['topGames'],
    queryFn: getTopGames,
  });

  return { topGames, isLoading: !topGames };
}
