import ForecastItem from "./ForecastItem";

const ForecastStrip = () => {
  return (
    <>
      <div className="forecastTitle">Today</div>
      <div className="forecastRow" id="forecastRow">
        <div className="forecastItem isNow" data-hour="now">
          <span className="forecastTime">Now</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="10" cy="10" r="5" fill="var(--gold)" />
          </svg>
          <span className="forecastTemp">18°</span>
        </div>
        <ForecastItem />
        <div className="forecastItem" data-hour="16">
          <span className="forecastTime">16:00</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M13 8c2.2 0 4 1.6 4 3.6 0 .3 0 .6-.1.9H4.4C2.5 12.5 1 11 1 9.3c0-1.6 1.3-2.9 2.9-3C4.3 5 6.4 3.3 9 3.3c2.9 0 5.2 2 5.2 2"
              fill="var(--muted)"
            />
          </svg>
          <span className="forecastTemp">17°</span>
        </div>
        <div className="forecastItem" data-hour="18">
          <span className="forecastTime">18:00</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M13 8c2.2 0 4 1.6 4 3.6 0 .3 0 .6-.1.9H4.4C2.5 12.5 1 11 1 9.3c0-1.6 1.3-2.9 2.9-3C4.3 5 6.4 3.3 9 3.3c2.9 0 5.2 2 5.2 2"
              fill="var(--muted)"
            />
          </svg>
          <span className="forecastTemp">15°</span>
        </div>
        <div className="forecastItem" data-hour="20">
          <span className="forecastTime">20:00</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M13 8c2.2 0 4 1.6 4 3.6 0 .3 0 .6-.1.9H4.4C2.5 12.5 1 11 1 9.3c0-1.6 1.3-2.9 2.9-3C4.3 5 6.4 3.3 9 3.3c2.9 0 5.2 2 5.2 2"
              fill="var(--muted)"
            />
          </svg>
          <span className="forecastTemp">13°</span>
        </div>
      </div>
    </>
  );
};

export default ForecastStrip;
