import { envConfig } from '@/env-configs';
import axios from 'axios';
import { GetAccessTokenResponse } from './get-access-token.types';

const oneHour = 3600;

export async function getAccessToken() {
  const queryParams = {
    client_id: envConfig.NEXT_PUBLIC_IGDB_CLIENT_ID,
    client_secret: envConfig.NEXT_PUBLIC_IGDB_SECRET_ID,
    grant_type: 'client_credentials',
  };

  const response = await fetch(
    'https://id.twitch.tv/oauth2/token?' + new URLSearchParams(queryParams),
    { method: 'POST', cache: 'force-cache' }
  );

  console.log('aaaaa', response);

  const { access_token, expires_in } = await response.json();

  const result = { accessToken: access_token, expiresIn: expires_in / oneHour / 24 };
  console.log(result);

  return result;
}
