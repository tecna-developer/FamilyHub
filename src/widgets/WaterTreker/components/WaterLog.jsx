import WaterLogItem from "./WaterLogItem";

const WaterLog = () => {
  return (
    <>
      <div class="wt__log-title">
        <span>Today's log</span>
        <button class="wt__reset" id="resetDayBtn">
          reset day
        </button>
      </div>
      <p class="wt__log-empty is-visible" id="logEmpty">
        Nothing logged yet — add your first glass above.
      </p>
      <ul class="wt__log-list" id="logList">
        <WaterLogItem />
      </ul>
    </>
  );
};

export default WaterLog;
