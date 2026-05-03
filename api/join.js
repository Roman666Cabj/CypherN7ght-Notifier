export default async function handler(req, res) {
  const { placeId, jobId } = req.query;

  if (!placeId || !jobId) {
    return res.status(400).send("Missing placeId or jobId");
  }

  const robloxUrl = `https://www.roblox.com/games/${placeId}?gameInstanceId=${jobId}`;

  res.writeHead(302, { Location: robloxUrl });
  res.end();
}