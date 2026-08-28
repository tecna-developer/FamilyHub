import "./App.css";
import ShoppingList from "./components/ShoppingList/ShoppingList";
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
        <ShoppingList />
      </main>
    </>
  );
}

export default App;
