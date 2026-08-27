const WaterLogItem = () => {
  return (
    <li class="wt__log-item" dataId="example">
      <span>
        +250 ml
        <span class="wt__log-time">14:05</span>
      </span>
      <button class="wt__log-remove" aria-label="Remove 250 ml entry">
        ×
      </button>
    </li>
  );
};
export default WaterLogItem;
