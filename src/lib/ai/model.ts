import { createGoogleGenerativeAI } from '@ai-sdk/google';
import type { LanguageModel } from 'ai';

export function getModel(): LanguageModel {
  const provider = process.env['AI_PROVIDER'] ?? 'google';
  const modelId = process.env['HOUDINY_MODEL_ID'] ?? 'gemini-2.0-flash';

  if (provider === 'google') {
    const apiKey = process.env['GOOGLE_GENERATIVE_AI_API_KEY'];
    const google = createGoogleGenerativeAI({ apiKey: apiKey ?? '' });
    return google(modelId);
  }

  throw new Error(
    `Unknown AI_PROVIDER: ${provider}. Set AI_PROVIDER=google (or add your provider to lib/ai/model.ts).`,
  );
}
