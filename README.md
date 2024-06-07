# wasp-google-photos

Attempting to connect to Google Photos from a wasp-generated project.

Following the guide here: https://developers.google.com/identity/oauth2/web/guides/overview

To add Google Identity Services script to index.html, update 
.wasp/out/web-app/index.html to be:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="/manifest.json" />

        <title>wasp-google-photos</title>
      </head>

      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        <!-- inject the google auth library script
        ref: https://developers.google.com/identity/oauth2/web/guides/load-3p-authorization-library -->
        <script
          src="https://accounts.google.com/gsi/client"
          onload="console.log('TODO: add onload function')"
        ></script>
        <script type="module" src="/src/index.tsx"></script>
      </body>
    </html>


