import { runBlogAutomation } from "../automation/blog-automation";

const result = await runBlogAutomation({
  force: true,
  publish: false,
  testMode: true,
  siteUrl: process.env.TEST_SITE_URL || "https://www.technexos.com.br",
});

console.log(JSON.stringify(result, null, 2));

if (!result.ok) {
  process.exitCode = 1;
}
