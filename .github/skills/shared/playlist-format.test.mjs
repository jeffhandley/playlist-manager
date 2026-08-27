import assert from "node:assert/strict";
import test from "node:test";
import { trackReference } from "./playlist-format.mjs";

test("track references are short, stable, and URL-specific", () => {
  const first = "https://music.apple.com/us/song/first-song/111";
  const second = "https://music.apple.com/us/song/second-song/222";

  assert.equal(trackReference(first), trackReference(first));
  assert.match(trackReference(first), /^[0-9a-f]{10}$/);
  assert.notEqual(trackReference(first), trackReference(second));
});

test("track references require a URL", () => {
  assert.throws(() => trackReference(""), /track URL is required/);
});
