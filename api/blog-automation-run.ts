import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  loadAutomationSettings,
  runBlogAutomation,
  updateAutomationAfterRun,
} from "../automation/blog-automation";

const isAuthorizedCronRequest = (req: VercelRequest) => {
  const expectedSecret = process.env.CRON_SECRET;
  if (!expectedSecret) return true;

  const header = req.headers.authorization;
  return header === `Bearer ${expectedSecret}`;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!isAuthorizedCronRequest(req)) {
    return res.status(401).json({ ok: false, error: "Unauthorized cron request" });
  }

  try {
    const settings = await loadAutomationSettings();
    const result = await runBlogAutomation();

    if (!result.skipped) {
      await updateAutomationAfterRun(result, settings.interval_minutes);
    }

    return res.status(200).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected automation error";
    return res.status(500).json({ ok: false, error: message });
  }
}
