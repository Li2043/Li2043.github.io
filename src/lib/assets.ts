import fs from "node:fs";
import path from "node:path";

/** True when a public URL such as /videos/exp01-baseline.mp4 exists on disk. */
export function publicAssetExists(urlPath: string): boolean {
  const clean = urlPath.replace(/^\//, "").split("?")[0] ?? "";
  if (!clean || clean.includes("..")) return false;
  return fs.existsSync(path.join(process.cwd(), "public", clean));
}
