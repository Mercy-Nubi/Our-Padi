import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupHeader from "../components/SignupHeader";
import { img } from "../lib/assets";

/** Sample of names already in use, standing in for the real availability API. */
const TAKEN = new Set(["mercy", "padi", "admin", "ourpadi", "chyna"]);

type Status = "empty" | "invalid" | "taken" | "available";

function checkUsername(raw: string): { status: Status; message: string } {
  const value = raw.trim();
  if (!value) return { status: "empty", message: "Letters, numbers and _ only, 3–20 characters." };
  if (!/^[A-Za-z0-9_]{3,20}$/.test(value)) return { status: "invalid", message: "Use 3–20 letters, numbers or _." };
  if (TAKEN.has(value.toLowerCase())) return { status: "taken", message: `@${value} is taken. Try one below.` };
  return { status: "available", message: `@${value} is available` };
}

const SUGGESTIONS = ["CalmMercy", "SoftCloud", "Mercy_Calm"];

/** Sign-up step 1: pick a username with a live availability check. */
export default function Username() {
  const navigate = useNavigate();
  const [name, setName] = useState("Mercy103");
  const { status, message } = useMemo(() => checkUsername(name), [name]);
  const ok = status === "available";
  const bad = status === "invalid" || status === "taken";
  const color = ok ? "#1E7A45" : bad ? "#A8361B" : "#5B6770";

  return (
    <div style={{ width: 390, height: 844, boxSizing: "border-box", background: "#F7F9F9", color: "#1E2A32", display: "flex", flexDirection: "column", padding: "20px 24px 36px" }}>
      <SignupHeader step={1} backTo="/onboarding3" />
      <h1 style={{ margin: "30px 0 6px", fontSize: 27, fontWeight: 800, letterSpacing: "-0.01em" }}>What should we call you?</h1>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: "#4F5D66" }}>Pick a username. It's how you'll appear, and it doesn't have to be your real name.</p>
      <div style={{ display: "flex", justifyContent: "center", margin: "26px 0 22px" }}>
        <img src={img("il-username.png")} alt="A smiling woman pointing, drawn inside a circle" style={{ width: 196, height: "auto", mixBlendMode: "multiply" }} />
      </div>

      <label htmlFor="username" style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>Username</label>
      <div style={{ display: "flex", alignItems: "center", gap: 10, height: 56, borderRadius: 18, border: `2px solid ${bad ? "#C9463D" : "#0FA39C"}`, background: "#FFFFFF", padding: "0 16px", boxShadow: "0 0 0 4px rgba(15,163,156,0.12)" }}>
        <span style={{ fontSize: 16, color: "#8A96A0", fontWeight: 700 }}>@</span>
        <input id="username" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="username" spellCheck={false} aria-invalid={bad} aria-describedby="username-msg" style={{ flex: 1, border: 0, outline: "none", font: "inherit", fontSize: 16, fontWeight: 700, color: "#1E2A32", background: "transparent", minWidth: 0 }} />
        {ok && (
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="#1E8A4C" />
            <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <p id="username-msg" aria-live="polite" style={{ margin: "10px 0 0", fontSize: 14, fontWeight: 700, color }}>{message}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14, alignItems: "center" }}>
        <span style={{ fontSize: 13, color: "#5B6770" }}>Or try:</span>
        {SUGGESTIONS.map((s) => (
          <button key={s} type="button" onClick={() => setName(s)} style={{ height: 34, padding: "0 12px", borderRadius: 17, border: "1.5px solid #DDE5E8", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: 13, fontWeight: 700 }}>
            {s}
          </button>
        ))}
      </div>

      <button type="button" disabled={!ok} onClick={() => navigate("/password")} style={{ marginTop: "auto", height: 56, borderRadius: 28, border: 0, background: ok ? "#0A8781" : "#CDEBE8", color: ok ? "#FFFFFF" : "#4C7D79", font: "inherit", fontWeight: 800, fontSize: 17, boxShadow: ok ? "0 10px 22px rgba(10,135,129,0.28)" : "none" }}>
        Continue
      </button>
      <p style={{ margin: "18px 0 0", textAlign: "center", fontSize: 15, color: "#4F5D66" }}>
        Already have an account? <Link to="/login" style={{ fontWeight: 800, textDecoration: "none" }}>Log in</Link>
      </p>
    </div>
  );
}
