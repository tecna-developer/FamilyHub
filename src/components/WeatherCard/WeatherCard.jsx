import Card from "../Card/Card";
import ConditionIcon from "./ConditionIcon";
import CurrentTemp from "./CurrentTemp";
import ForecastStrip from "./ForecastStrip";
import LiveRegion from "../LiveRegion/LiveRegion";

const WeatherCard = ({ locationName = "Tallinn" }) => {
  return (
    <Card eyebrow="Weather" title={locationName}>
      <div className="current">
        <ConditionIcon />
        <CurrentTemp />
      </div>
      <div className="subRow">
        <span>
          H: <strong id="highTemp">21°</strong>
        </span>
        <span>
          L: <strong id="lowTemp">12°</strong>
        </span>
        <span>
          Feels like <strong id="feelsLike">17°</strong>
        </span>
      </div>
      <ForecastStrip />

      <LiveRegion
        id="weatherAnnouncer"
        message={`Current weather in ${locationName}: 18 degrees, partly cloudy.`}
      />
    </Card>
  );
};

export default WeatherCard;
