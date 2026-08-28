export default function ConditionIcon() {
  return (
    <svg
      className="conditionIcon"
      id="conditionIcon"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <circle cx="26" cy="26" r="14" fill="var(--gold)"></circle>
      <path
        d="M40 34c7 0 12 5 12 11 0 1-.1 1.9-.3 2.8H16c-4.4 0-8-3.4-8-7.6 0-3.9 3-7.1 6.9-7.5C16.4 33.2 20.8 30 26 30c6.6 0 12 4.8 12 4.8"
        fill="var(--card)"
        stroke="var(--line)"
        stroke-width="2"
      ></path>
    </svg>
  );
}
