const PlantVisual = () => {
  return (
    <div className="plant-visual">
      <svg width="140" height="200" viewBox="0 0 200 200" aria-hidden="true">
        <ellipse cx="100" cy="182" rx="34" ry="8" fill="#EDE8DB" />
        <path d="M72 150 L128 150 L120 182 L80 182 Z" fill="var(--clay)" />
        <rect x="72" y="144" width="56" height="10" rx="3" fill="var(--clay)" />

        <line
          id="wtStem"
          className="wt__stem"
          x1="100"
          y1="178"
          x2="100"
          y2="126"
          stroke="var(--sage-dark)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <ellipse
          id="wtLeaf1"
          className="wt__leaf is-visible"
          cx="82"
          cy="166"
          rx="16"
          ry="8"
          fill="var(--sage)"
          transform="rotate(-25 82 166)"
        />
        <ellipse
          id="wtLeaf2"
          className="wt__leaf"
          cx="118"
          cy="191"
          rx="16"
          ry="8"
          fill="var(--sage)"
          transform="rotate(25 118 191)"
        />
        <ellipse
          id="wtLeaf3"
          className="wt__leaf"
          cx="86"
          cy="138"
          rx="14"
          ry="7"
          fill="var(--sage)"
          transform="rotate(-20 86 138)"
        />

        <g id="wtBloom" className="wt__bloom">
          <circle cx="100" cy="120" r="7" fill="var(--gold)" />
          <circle cx="90" cy="126" r="6" fill="var(--bloom)" />
          <circle cx="110" cy="126" r="6" fill="var(--bloom)" />
          <circle cx="100" cy="114" r="6" fill="var(--bloom)" />
        </g>
      </svg>
    </div>
  );
};

export default PlantVisual;
