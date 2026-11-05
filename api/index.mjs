import { handleChat, handleTts } from '../lib/assistant.mjs';

function json(body, status = 404) {
  return Response.json(body, { status, headers: { 'cache-control': 'no-store' } });
}

export default {
  async fetch(request) {
    const route = new URL(request.url).searchParams.get('route');
    if (route === 'chat') return handleChat(request);
    if (route === 'tts') return handleTts(request);
    return json({ error: 'not_found' });
  },
};
