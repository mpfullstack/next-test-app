type Result = {
  results: [];
}

type Filters = {
  page: number;
}

export async function fetchJobs(filters?: Filters): Promise<Result> {
  const { page }: Filters = filters || { page: 1 };
  const res = await fetch(`${process.env.HOSCO_API_URL}/api/1.13/jobs/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      page,
    })
  });

  return await res.json();
}

export interface Job {
  id: number;
  title: string;
  url: string;
}