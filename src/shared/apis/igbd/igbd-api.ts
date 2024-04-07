import { envConfig } from '@/env-configs';
import axios from 'axios';
import { getAccessToken } from './utils/get-access-token/get-access-token';

export const igbdApi = axios.create({
  baseURL: envConfig.NEXT_PUBLIC_IGDB_BASE_URL,
  headers: {
    'Client-ID': envConfig.NEXT_PUBLIC_IGDB_CLIENT_ID,
  },
});

igbdApi.interceptors.request.use(async (config) => {
  const { accessToken } = await getAccessToken();
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});
