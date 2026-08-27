import CustomAmountForm from "./components/CustomAmountForm";
import PlantVisual from "./components/PlantVisual";
import QuickAdd from "./components/QuickAdd";
import StatInfo from "./components/StatInfo";
import ProgressBar from "./components/ProgressBar";
import WaterLog from "./components/WaterLog";

const WaterTracker = ({ memberName, initialGoal }) => {
  return (
    <div className="wt__card">
      <h2 className="wt__name">{memberName}</h2>
      <span className="wt__eyebrow">Water · familyHub</span>
      <PlantVisual />
      <StatInfo initialGoal={initialGoal} />
      <ProgressBar />
      <QuickAdd />
      <CustomAmountForm />
      <WaterLog />
    </div>
  );
};

export default WaterTracker;
