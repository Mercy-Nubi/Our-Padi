import { Link } from "react-router-dom";

interface SignupHeaderProps {
  step: 1 | 2 | 3 | 4;
  backTo: string;
}

/** Back button plus the four-step progress bar used across sign-up. */
export default function SignupHeader({ step, backTo }: SignupHeaderProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <Link
        to={backTo}
        aria-label="Back"
        style={{ width: 44, height: 44, borderRadius: 22, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A32" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </Link>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 6 }} role="progressbar" aria-valuemin={1} aria-valuemax={4} aria-valuenow={step} aria-label={`Step ${step} of 4`}>
        {[1, 2, 3, 4].map((n) => (
          <span key={n} style={{ height: 5, borderRadius: 5, background: n <= step ? "#0FA39C" : "#DDE5E8" }} />
        ))}
      </div>
      <span style={{ fontSize: 13, fontWeight: 700, color: "#5B6770" }}>{step}/4</span>
    </div>
  );
}
