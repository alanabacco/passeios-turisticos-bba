export default async function handler(req: any, res: any) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/catalogo/guias-turisticos");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}

// https://<your-site.com>/api/revalidate-guias-turisticos?secret=<token>
