import { createHash } from "node:crypto";

const REFERENCE_LENGTH = 10;

/**
 * Return the stable markdown reference label for an Apple Music track URL.
 */
export function trackReference(url) {
  if (!url) throw new Error("A track URL is required");
  return createHash("sha256").update(url).digest("hex").slice(0, REFERENCE_LENGTH);
}
