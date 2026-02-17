#!/usr/bin/env node

// Obtain a Music User Token via MusicKit JS in a local browser.
// Opens a small local web server, loads MusicKit JS, and lets you
// sign in to Apple Music. Prints the Music User Token to stdout.
//
// Usage:
//   export APPLE_MUSIC_TEAM_ID="..."
//   export APPLE_MUSIC_KEY_ID="..."
//   export APPLE_MUSIC_PRIVATE_KEY="$(cat AuthKey.p8)"
//   node .github/skills/apple-music-api/authorize.mjs
//
// The token is valid for ~6 months. Store it as APPLE_MUSIC_USER_TOKEN.

import { createServer } from "http";
import { exec } from "child_process";
import { generateDeveloperToken } from "./api.mjs";

const PORT = 7789;

const devToken = generateDeveloperToken();

const html = `<!DOCTYPE html>
<html>
<head>
  <title>Apple Music Authorization</title>
  <style>
    body { font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 60px auto; padding: 0 20px; }
    button { font-size: 18px; padding: 12px 24px; cursor: pointer; background: #fa243c; color: white; border: none; border-radius: 8px; }
    button:hover { background: #d91e34; }
    button:disabled { background: #ccc; cursor: default; }
    pre { background: #f5f5f5; padding: 16px; border-radius: 8px; word-break: break-all; white-space: pre-wrap; font-size: 13px; }
    .success { color: #28a745; }
    .error { color: #dc3545; }
  </style>
</head>
<body>
  <h1>Apple Music Authorization</h1>
  <p>Click the button below to sign in to Apple Music and obtain your Music User Token.</p>
  <button id="auth" onclick="authorize()">Sign In to Apple Music</button>
  <div id="status"></div>
  <script src="https://js-cdn.music.apple.com/musickit/v3/musickit.js" data-web-components></script>
  <script>
    async function authorize() {
      const btn = document.getElementById('auth');
      const status = document.getElementById('status');
      btn.disabled = true;
      btn.textContent = 'Signing in...';
      status.innerHTML = '<p>Waiting for Apple Music sign-in...</p>';

      try {
        await MusicKit.configure({
          developerToken: ${JSON.stringify(devToken)},
          app: { name: 'Playlist Manager', build: '1.0' }
        });

        const music = MusicKit.getInstance();
        await music.authorize();
        const token = music.musicUserToken;

        if (!token) throw new Error('No token received');

        status.innerHTML =
          '<p class="success"><strong>Success!</strong> Your Music User Token:</p>' +
          '<pre>' + token + '</pre>' +
          '<p>Copy this token and store it as <code>APPLE_MUSIC_USER_TOKEN</code>.</p>' +
          '<p>You can close this page now.</p>';

        // Send token back to the server so it can print it to stdout
        await fetch('/token', {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: token
        });
      } catch (err) {
        status.innerHTML = '<p class="error">Error: ' + err.message + '</p>';
        btn.disabled = false;
        btn.textContent = 'Try Again';
      }
    }
  </script>
</body>
</html>`;

const server = createServer((req, res) => {
  if (req.method === "POST" && req.url === "/token") {
    let body = "";
    req.on("data", (chunk) => { body += chunk; });
    req.on("end", () => {
      res.writeHead(200);
      res.end("ok");

      console.log("\n=== Music User Token ===\n");
      console.log(body);
      console.log("\n========================\n");
      console.log("Store this as APPLE_MUSIC_USER_TOKEN.");
      console.log("It is valid for approximately 6 months.\n");

      // Give the browser response time to complete, then exit
      setTimeout(() => {
        server.close();
        process.exit(0);
      }, 1000);
    });
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\nOpen this URL in your browser:\n\n  ${url}\n`);
  console.log("Sign in to Apple Music to obtain your Music User Token.\n");

  // Try to open the browser automatically
  const cmd = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";
  exec(`${cmd} ${url}`);
});
