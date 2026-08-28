import Card from "../Card/Card";

const WeatherCard = () => {
  return (
    <Card eyebrow="Weather">
      <h2 className="card__title" id="locationName">
        Tallinn
      </h2>
    </Card>
  );
};

export default WeatherCard;
