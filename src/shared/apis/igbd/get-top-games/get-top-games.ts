import axios from 'axios';
import { igbdApi } from '../igbd-api';
import { getTopGamesResponse } from './get-top-games.types';

export async function getTopGames() {
  const { data } = await axios.get<getTopGamesResponse[]>('http://localhost:3000/api/top-games');
  return data;
}
