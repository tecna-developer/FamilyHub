import "./App.css";
import Header from "./components/WaterTracker/Header";
import WaterTracker from "./components/WaterTracker/WaterTracker";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <WaterTracker memberName="Anna" initialGoal={2000} />
        <WeatherCard />
      </main>
    </>
  );
}

export default App;
