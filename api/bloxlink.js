export default async function(request, response) {
  const path = new URL(request.url).pathname.replace("/api/bloxlink", "");
  const targetUrl = "https://api.bloxlink.com" + path;
  
  try {
    const res = await fetch(targetUrl, {
      headers: { "Accept": "application/json" },
    });
    const body = await res.text();
    response.status(res.status).send(body);
  } catch (err) {
    response.status(500).send("Proxy error: " + err.message);
  }
}
