# folloo-server

<b>Prerequisites:</b>
<ul><li>Requires an environment variable called FIREBASE_SECRET which contains your firebase secret</li></ul>

<b>Usage:</b>
<ul>
  <li>Accepts a request (must contain uid) at url/authToken and responds with a generated firebase token</li>
  <li>Will listen on port 8080 or whatever you have set in an optional PORT environment variable</li>
</ul>
