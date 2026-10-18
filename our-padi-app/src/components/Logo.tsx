interface LogoProps {
  size?: number;
  color?: string;
}

/** The Our Padi heart mark: two figures forming a heart. */
export default function Logo({ size = 48, color = "#17B3AC" }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="18.5" cy="7" r="3.6" fill={color} />
      <circle cx="29.5" cy="7" r="3.6" fill={color} />
      <path
        d="M24 43C11 33 5 25 7.5 17.5C9.5 11.5 16 11 19 15.5C21 18.5 21.5 23 24 26C26.5 23 27 18.5 29 15.5C32 11 38.5 11.5 40.5 17.5C43 25 37 33 24 43Z"
        fill="none"
        stroke={color}
        strokeWidth="3.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
