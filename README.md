# Fluctlight — Ayan

Fluctlight is Ayan's first-person conversational experience in an interactive Three.js light field. The original Fluctflight scene and Ayan's persona profile are combined here, with server-side streaming OpenRouter chat and timestamped Fish Audio speech.

## What is included

- The original Three.js shell, memory filaments, core, scene controls and responsive chat.
- A server-side first-person prompt built from `data/digital_clone.json` and the public portfolio facts in `data/ayan_knowledge.json`.
- `/api/chat` for OpenRouter. The browser sends only the current conversation; the server supplies Ayan's system prompt.
- `/api/tts` for Fish Audio. The browser falls back to its built-in speech synthesis if Fish Audio is unavailable.
- Browser speech recognition for voice input in supported browsers.

The app keeps chat history in page memory only. It does not write conversations to a database or browser storage. Chat text is sent to OpenRouter for replies; assistant replies are sent to Fish Audio when voice playback is enabled.

## Configure

Set these variables for the Vercel project (Production and Preview as needed):

- `OPENROUTER_API_KEY` — server-side OpenRouter key.
- `OPENROUTER_MODEL` — optional; defaults to `openrouter/free`.
- `FISH_AUDIO_API_KEY` — server-side Fish Audio key.
- `FISH_AUDIO_MODEL_ID` — Fish Audio voice reference ID. The server sends it as `reference_id`.
- `FISH_AUDIO_TTS_MODEL` — optional; defaults to `s2.1-pro-free`.

Copy `.env.example` to `.env.local` for local server development. Never put credentials in browser files or commit `.env.local`.

## Run locally

Serve the Vercel functions with `vercel dev` from this directory. A static file server can preview the 3D scene, but `/api/chat` and `/api/tts` require the server functions and environment variables.

Deploy this directory as the Vercel project root. It has no build step; Vercel serves the static page and the Node.js functions under `api/`.

## Source

- Fluctflight scene: https://github.com/Jarv1s-stack/Fluctflight-AI
- Persona source profile: https://github.com/Jarv1s-stack/Ayan-s_Digital_Clone_JSON
- Ayan's portfolio integration: `/projects/fluctlight/`

The original Fluctflight repository contained an OpenRouter credential in its client history. This combined project removes it from the source, but the key should be revoked at its provider because the old commit remains public there.
