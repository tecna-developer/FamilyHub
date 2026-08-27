import QuickAddButton from "./QuickAddButton";

const QuickAdd = () => {
  return (
    <div className="wt__quick">
      <QuickAddButton />
      <QuickAddButton />
      <button className="wt__chip" dataAmount="350">
        +350 ml
      </button>
    </div>
  );
};

export default QuickAdd;
