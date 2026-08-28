import "./WaterTracker.css";
import CustomAmountForm from "./CustomAmountForm";
import PlantVisual from "./PlantVisual";
import QuickAdd from "./QuickAdd";
import StatInfo from "./StatInfo";
import ProgressBar from "./ProgressBar";
import WaterLog from "./WaterLog";
import Card from "../Card/Card";
import LiveRegion from "../LiveRegion/LiveRegion";

const WaterTracker = ({ memberName, initialGoal, amount }) => {
  return (
    <Card title={memberName} eyebrow="Water">
      <PlantVisual />
      <StatInfo initialGoal={initialGoal} />
      <ProgressBar />
      <QuickAdd />
      <CustomAmountForm />
      <WaterLog />
      <LiveRegion
        id="waterAnnouncer"
        message={`Anna drank ${amount} milliliters of water.`}
      />
    </Card>
  );
};

export default WaterTracker;
