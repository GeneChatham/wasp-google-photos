import waspLogo from "./waspLogo.png";
import "./Main.css";

export const MainPage = () => {

  // initialize a google auth client in popup mode.
  // ref: https://developers.google.com/identity/oauth2/web/guides/use-code-model#popup-mode
  const client = google.accounts.oauth2.initCodeClient({
    client_id: "GOOGLE_CLIENT_ID_GOES_HERE",
    scope: "https://www.googleapis.com/auth/photoslibrary.readonly",
    ux_mode: "popup",
    callback: (response) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", handleCallback, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      // Set custom header for CRSF
      xhr.setRequestHeader("X-Requested-With", "XmlHttpRequest");
      xhr.onload = function () {
        console.log("Auth code response: " + xhr.responseText);
      };
      xhr.send("code=" + response.code);
    },
  });

  console.log("is there even a client object:");
  console.log(client);

  return (
    <div className="container">
      <main>
        <div className="logo">
          <img src={waspLogo} alt="wasp" />
        </div>

        <h2 className="welcome-title">google photos...?</h2>
        <h3 className="welcome-subtitle">can we get this to load at all?</h3>

        <div className="buttons">
          <div className="button button-filled" onClick={client.requestCode}>
            {/* <div className="button button-filled" > */}
            Google Photos
          </div>
        </div>
      </main>
    </div>
  );
};
