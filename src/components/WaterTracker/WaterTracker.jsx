import CustomAmountForm from "./CustomAmountForm";
import PlantVisual from "./PlantVisual";
import QuickAdd from "./QuickAdd";
import StatInfo from "./StatInfo";
import ProgressBar from "./ProgressBar";
import WaterLog from "./WaterLog";
import Card from "../Card/Card";

const WaterTracker = ({ memberName, initialGoal }) => {
  return (
    <Card title={memberName} eyebrow="Water">
      <PlantVisual />
      <StatInfo initialGoal={initialGoal} />
      <ProgressBar />
      <QuickAdd />
      <CustomAmountForm />
      <WaterLog />
    </Card>
  );
};

export default WaterTracker;
