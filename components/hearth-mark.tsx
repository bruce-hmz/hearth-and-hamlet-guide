export function HearthMark({ size = 26 }: { size?: number }) {
  return (
    <svg
      className="hearth-mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Hearth and Hamlet Guide logo"
    >
      {/* timber roofline */}
      <path
        d="M4 17.5 16 7l12 10.5"
        stroke="#e8833a"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* hearth flame inside the house */}
      <path
        d="M16 25.5c-2.9 0-4.6-1.9-4.6-4.2 0-2.6 2-3.9 3-5.9.5 1.1 1.2 1.7 1.2 1.7s-.3-2.9 1.6-5.1c.2 2.4 3.4 4.3 3.4 8 0 3.1-1.7 5.5-4.6 5.5Z"
        fill="#e8833a"
      />
      <path
        d="M16 25.5c-1.5 0-2.4-1-2.4-2.3 0-1.5 1.2-2.1 2.4-3.6 1.2 1.5 2.4 2.1 2.4 3.6 0 1.3-.9 2.3-2.4 2.3Z"
        fill="#f2e3c6"
      />
    </svg>
  );
}
