const StatInfo = ({ initialGoal }) => {
  return (
    <div className="wt__stats">
      <div className="wt__amount">
        <span id="consumedValue">800</span>
        <span>
          / <span id="goalValue">{initialGoal}</span> ml
        </span>
      </div>

      <div className="wt__sub" id="wtSubDefault">
        <strong>
          <span id="remainingValue">1200</span> ml
        </strong>{" "}
        left today
        <button className="wt__goal-edit" id="editGoalBtn">
          edit goal
        </button>
      </div>

      <div className="wt__goal-row" id="goalEditRow">
        <input className="wt__goal-input" type="number" id="goalInput" />
        <button className="wt__goal-edit" id="saveGoalBtn">
          save
        </button>
      </div>
    </div>
  );
};

export default StatInfo;
