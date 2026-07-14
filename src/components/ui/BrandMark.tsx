export default function BrandMark({
  accent = "var(--accent)",
}: {
  accent?: string;
}) {
  return (
    <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3 L27 9 V20 C27 25 21.5 28.5 16 30 C10.5 28.5 5 25 5 20 V9 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 11 V24 M16 11 L11 16 M16 11 L21 16"
        stroke={accent}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
