const ForecastItem = () => {
  return (
    <div className="forecastItem" data-hour="14">
      <span class="forecastTime">14:00</span>
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="5" fill="var(--gold)" />
      </svg>
      <span class="forecastTemp">19°</span>
    </div>
  );
};

export default ForecastItem;
