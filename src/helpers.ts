type Result = {
  results: [];
}

type Filters = {
  page: number;
}

export async function fetchJobs(apiUrl?: string, filters?: Filters): Promise<Result> {
  const { page }: Filters = filters || { page: 1 };
  // let api = `https://admin:sandbox.hosco.dev@sandbox.hosco.dev/api/1.13/jobs/search`;
  let api = `https://www.hosco.com/api/1.13/jobs/search`;
  if (apiUrl) {
    api = apiUrl;
  }
  const res = await fetch(api, {
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
  slug: string;
  title: string;
  url: string;
}