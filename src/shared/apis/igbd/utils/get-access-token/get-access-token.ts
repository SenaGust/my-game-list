import { envConfig } from '@/env-configs';
import axios from 'axios';
import { GetAccessTokenResponse } from './get-access-token.types';

export async function getAccessToken() {
  const {
    data: { access_token, expires_in },
  } = await axios.post<GetAccessTokenResponse>('https://id.twitch.tv/oauth2/token', undefined, {
    params: {
      client_id: envConfig.NEXT_PUBLIC_IGDB_CLIENT_ID,
      client_secret: envConfig.NEXT_PUBLIC_IGDB_SECRET_ID,
      grant_type: 'client_credentials',
    },
  });

  console.log({ access_token, expires_in }, 'data');

  return { accessToken: access_token, expiresIn: new Date(expires_in) };
}
