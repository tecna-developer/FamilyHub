const LiveRegion = ({ message, id, politeness = "polite" }) => {
  return (
    <div aria-live={politeness} className="sr-only" id={id}>
      {message}
    </div>
  );
};

export default LiveRegion;