import { headers } from 'next/headers';
import { get as GetLeads } from '../../../actions/Leads';

export async function GET() {
  const headersList = await headers();
  const madremia = headersList.get('madremia');

  if (!madremia || madremia !== process.env.API_HEADER) {
    return Response.json([]);
  }

  const leads = await GetLeads();
  return Response.json(leads);
}
