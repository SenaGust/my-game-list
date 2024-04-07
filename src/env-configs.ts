import { z } from 'zod';

const envConfigSchema = z.object({
  NEXT_PUBLIC_IGDB_BASE_URL: z.string().min(1).url(),
  NEXT_PUBLIC_IGDB_CLIENT_ID: z.string().min(1),
  NEXT_PUBLIC_IGDB_SECRET_ID: z.string().min(1),
});

export const envConfig = envConfigSchema.parse({ ...process.env });
