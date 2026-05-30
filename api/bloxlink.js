export default async function(req) {
  const path = new URL(req.url).pathname.replace("/api/bloxlink", "");
  const targetUrl = "https://api.bloxlink.com" + path;
  const res = await fetch(targetUrl, {
    headers: { "Accept": "application/json" },
  });
  return new Response(res.body, {
    status: res.status,
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
