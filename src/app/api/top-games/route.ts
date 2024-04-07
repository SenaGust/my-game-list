import { igbdApi } from '@/shared/apis/igbd/igbd-api';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data: a } = await igbdApi.post(
    '/games',
    'fields name,cover.url,rating,category;where category = 9; sort rating desc;limit 33;'
  );

  return NextResponse.json(a, { status: 200 });
}
