import "./App.css";
import WaterTracker from "./widgets/WaterTreker/WaterTracker";

function App() {
  return (
    <>
      <header>
        <img src="logo.svg" alt="FamilyHub logo" />
        <h1>FamilyHub</h1>
      </header>
      <WaterTracker memberName="Anna" initialGoal={2000} />
    </>
  );
}

export default App;
