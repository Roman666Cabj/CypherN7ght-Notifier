export default async function handler(req, res) {
  const { placeId, jobId } = req.query;

  if (!placeId || !jobId) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const link = `roblox://placeId=${encodeURIComponent(placeId)}&gameInstanceId=${encodeURIComponent(jobId)}`;

  res.status(302).setHeader("Location", link);
  res.end();
}