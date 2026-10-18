import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupHeader from "../components/SignupHeader";
import { img } from "../lib/assets";
import { PASSWORD_RULES, STRENGTH_COLOR, checkPassword } from "../lib/password";

const fieldBox = (focused: boolean, error = false): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  height: 56,
  borderRadius: 18,
  border: `${focused || error ? 2 : 1.5}px solid ${error ? "#C9463D" : focused ? "#0FA39C" : "#DDE5E8"}`,
  background: "#FFFFFF",
  padding: "0 8px 0 16px",
  boxShadow: focused ? "0 0 0 4px rgba(15,163,156,0.12)" : "none",
});

const inputStyle: React.CSSProperties = {
  flex: 1, border: 0, outline: "none", font: "inherit", fontSize: 16, fontWeight: 700, color: "#1E2A32", background: "transparent", minWidth: 0,
};

function EyeButton({ shown, onToggle }: { shown: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle} aria-label={shown ? "Hide password" : "Show password"} aria-pressed={shown} style={{ width: 44, height: 44, border: 0, background: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5B6770" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {shown ? (
          <>
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
            <circle cx="12" cy="12" r="3" />
          </>
        ) : (
          <path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3 3.9M6.3 6.4C3.6 8.2 2 12 2 12s3.5 7 10 7c1.7 0 3.2-.4 4.5-1.1" />
        )}
      </svg>
    </button>
  );
}

/** Create password: live rule checklist, strength meter and match check. */
export default function Password() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("Asqwert112");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focus, setFocus] = useState<"pw" | "confirm" | null>("pw");

  const check = useMemo(() => checkPassword(password), [password]);
  const mismatch = confirm.length > 0 && confirm !== password;
  const canContinue = check.strength === "strong" && confirm === password;
  const meterColor = STRENGTH_COLOR[check.strength];

  return (
    <div style={{ width: 390, height: 844, boxSizing: "border-box", background: "#F7F9F9", color: "#1E2A32", display: "flex", flexDirection: "column", padding: "20px 24px 36px" }}>
      <SignupHeader step={2} backTo="/username" />

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 24 }}>
        <img src={img("il-password.png")} alt="A woman waving hello, drawn inside a circle" style={{ width: 92, height: "auto", mixBlendMode: "multiply" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: "-0.01em" }}>Hi Mercy103</h1>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.45, color: "#4F5D66" }}>Create a strong password to keep your space safe.</p>
        </div>
      </div>

      <label htmlFor="pw" style={{ fontSize: 14, fontWeight: 800, margin: "24px 0 8px" }}>Password</label>
      <div style={fieldBox(focus === "pw")}>
        <input id="pw" type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setFocus("pw")} onBlur={() => setFocus(null)} autoComplete="new-password" aria-describedby="pw-hint pw-rules" style={inputStyle} />
        <EyeButton shown={show} onToggle={() => setShow((s) => !s)} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 6, marginTop: 12 }} aria-hidden="true">
        {PASSWORD_RULES.map((_, i) => (
          <span key={i} style={{ height: 5, borderRadius: 5, background: i < check.score ? meterColor : "#DDE5E8", transition: "background .2s" }} />
        ))}
      </div>
      <p id="pw-hint" aria-live="polite" style={{ margin: "6px 0 0", fontSize: 13, fontWeight: 700, color: check.strength === "strong" ? "#1E7A45" : check.strength === "weak" ? "#A8361B" : "#8A5A10" }}>
        {check.hint}
      </p>

      <ul id="pw-rules" style={{ listStyle: "none", padding: 0, margin: "14px 0 0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px 12px", fontSize: 14, fontWeight: 700 }}>
        {PASSWORD_RULES.map((rule) => {
          const ok = check.passed.has(rule.id);
          return (
            <li key={rule.id} style={{ display: "flex", alignItems: "center", gap: 8, color: ok ? "#1E2A32" : "#5B6770" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                {ok ? (
                  <>
                    <circle cx="12" cy="12" r="10" fill="#0FA39C" />
                    <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </>
                ) : (
                  <circle cx="12" cy="12" r="9" fill="none" stroke="#B8C4CA" strokeWidth="2" />
                )}
              </svg>
              {rule.label}
              <span style={{ position: "absolute", left: -9999 }}>{ok ? "(met)" : "(not met)"}</span>
            </li>
          );
        })}
      </ul>

      <label htmlFor="pw2" style={{ fontSize: 14, fontWeight: 800, margin: "22px 0 8px" }}>Confirm password</label>
      <div style={fieldBox(focus === "confirm", mismatch)}>
        <input id="pw2" type={showConfirm ? "text" : "password"} value={confirm} placeholder="Type it again" onChange={(e) => setConfirm(e.target.value)} onFocus={() => setFocus("confirm")} onBlur={() => setFocus(null)} autoComplete="new-password" aria-invalid={mismatch} aria-describedby="pw2-msg" style={{ ...inputStyle, fontWeight: 400 }} />
        <EyeButton shown={showConfirm} onToggle={() => setShowConfirm((s) => !s)} />
      </div>
      <p id="pw2-msg" aria-live="polite" style={{ margin: "8px 0 0", minHeight: 18, fontSize: 13, fontWeight: 700, color: mismatch ? "#A8361B" : "#1E7A45" }}>
        {mismatch ? "Passwords don't match yet" : confirm && confirm === password ? "Passwords match" : ""}
      </p>

      <button
        type="button"
        disabled={!canContinue}
        onClick={() => navigate("/email")}
        style={{ marginTop: "auto", height: 56, borderRadius: 28, border: 0, background: canContinue ? "#0A8781" : "#CDEBE8", color: canContinue ? "#FFFFFF" : "#4C7D79", font: "inherit", fontWeight: 800, fontSize: 17, boxShadow: canContinue ? "0 10px 22px rgba(10,135,129,0.28)" : "none" }}
      >
        Continue
      </button>
    </div>
  );
}
