import { listLeads } from '@/lib/lead/store';

export const runtime = 'nodejs';

export async function GET() {
  const leads = listLeads();
  return Response.json({ leads });
}
