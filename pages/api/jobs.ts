// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Job } from '../../src/helpers';

type Data = {
  results: Job[]
}

const jobs = {
  "results": [
    {
      "url": "https://sandbox.hosco.dev/en/job/coya-mykonos/commis-de-salle-h-f",
      "id": 992954,
      "title": "Commis de salle H/F",
      "slug": "coya-mykonos/commis-de-salle-h-f"
    },
    {
      "url": "https://sandbox.hosco.dev/en/job/coya-mykonos/chef-de-rang-h-f",
      "id": 992952,
      "title": "Chef de Rang H/F",
      "slug": "coya-mykonos/chef-de-rang-h-f"
    },
    {
      "url": "https://sandbox.hosco.dev/en/job/restaurant-lamartine/chef-de-partie-h-f-cuisson",
      "id": 992831,
      "title": "Chef de partie H/F cuisson",
      "slug": "restaurant-lamartine/chef-de-partie-h-f-cuisson"
    },
  ]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(jobs);
}
