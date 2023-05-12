export async function HttpClient(fetchUrl: string, fetchOptions: any) {
  const options = {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  };

  return fetch(fetchUrl, options).then(async (res) => {
    return {
      ok: res.ok,
      status: res.status,
      statusText: res.statusText,
      body: await res.json(),
    };
  });
}
