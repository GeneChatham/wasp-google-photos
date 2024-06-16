import waspLogo from "./waspLogo.png";
import "./Main.css";

export const MainPage = () => {

  return (
    <div className="container">
      <main>
        <div className="logo">
          <img src={waspLogo} alt="wasp" />
        </div>

        <h2 className="welcome-title">google photos...?</h2>
        <h3 className="welcome-subtitle">can we get this to load at all?</h3>

        <div className="buttons">
          <div className="button button-filled" onClick={() => alert('time to test with the secrets added to the app')}>
            Google Photos
          </div>
        </div>
      </main>
    </div>
  );
};
