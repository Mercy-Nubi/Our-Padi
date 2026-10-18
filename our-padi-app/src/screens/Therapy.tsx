import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";

/** Our Padi · Therapy packages */
type Audience = "Children" | "Individuals" | "Couples";
const AUDIENCES: ReadonlyArray<Audience> = ["Children", "Individuals", "Couples"];
const AUDIENCE_NOTE: Record<Audience, string> = {
  Children: "Sessions with child specialists; a parent or guardian books.",
  Individuals: "One-to-one sessions just for you.",
  Couples: "Joint sessions for you and your partner.",
};

export default function Therapy() {
  const [audience, setAudience] = useState<Audience>("Individuals");
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F7F9F9", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1E2A32", display: "flex", flexDirection: "column" }}>
<div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "14px", padding: "22px 20px 16px", overflow: "hidden" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><h1 style={{ margin: "0", fontSize: "26px", fontWeight: "800" }}>Get a therapist</h1><span style={{ fontSize: "14px", color: "#5B6770" }}>Licensed professionals, matched to you.</span></div>
<div role="tablist" aria-label="Who is therapy for" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", background: "#E9EEF0", borderRadius: "22px", padding: "4px" }}>
{AUDIENCES.map((a) => (
<button key={a} type="button" role="tab" aria-selected={a === audience} onClick={() => setAudience(a)} style={{ height: "38px", borderRadius: "18px", border: "0", background: a === audience ? "#FFFFFF" : "transparent", color: a === audience ? "#1E2A32" : "#4F5D66", font: "inherit", fontSize: "14px", fontWeight: a === audience ? "800" : "700", boxShadow: a === audience ? "0 2px 6px rgba(30,42,50,0.08)" : "none" }}>{a}</button>
))}
</div>
<p style={{ margin: "-4px 0 0", fontSize: "13px", color: "#5B6770" }}>{AUDIENCE_NOTE[audience]}</p>
<div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px", border: "1.5px solid #E6ECEE" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span style={{ fontSize: "17px", fontWeight: "800" }}>Basic</span><span style={{ fontSize: "20px", fontWeight: "800" }}>₦10,000<span style={{ fontSize: "13px", fontWeight: "700", color: "#5B6770" }}> one-off</span></span></div>
<ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14px", color: "#33414B" }}>
<li style={{ display: "flex", gap: "8px", alignItems: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A8781" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>One 30-minute 1:1 session</li>
<li style={{ display: "flex", gap: "8px", alignItems: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A8781" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>Personal session summary</li>
<li style={{ display: "flex", gap: "8px", alignItems: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A8781" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>Access to AI companion</li>
</ul>
</div>
<div style={{ background: "#0B4F4C", color: "#FFFFFF", borderRadius: "22px", padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: "10px", position: "relative" }}>
<span style={{ position: "absolute", top: "-10px", right: "18px", background: "#F2C14E", color: "#3D2A00", fontSize: "11px", fontWeight: "800", letterSpacing: "0.04em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "10px" }}>Recommended</span>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span style={{ fontSize: "17px", fontWeight: "800" }}>Standard</span><span style={{ fontSize: "20px", fontWeight: "800" }}>₦40,000<span style={{ fontSize: "13px", fontWeight: "700", color: "#BFE9E6" }}> / month</span></span></div>
<ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14px", color: "#E2F5F3" }}>
<li style={{ display: "flex", gap: "8px", alignItems: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7FE0D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>Four 30-minute sessions a month</li>
<li style={{ display: "flex", gap: "8px", alignItems: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7FE0D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>Session summary notes</li>
<li style={{ display: "flex", gap: "8px", alignItems: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7FE0D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>One 5-minute live check-in</li>
<li style={{ display: "flex", gap: "8px", alignItems: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7FE0D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>Unlimited AI companion support</li>
</ul>
<Link to="/booking" style={{ marginTop: "4px", height: "50px", borderRadius: "25px", background: "#FFFFFF", color: "#0B4F4C", fontWeight: "800", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Choose Standard</Link>
</div>
<div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1.5px solid #E6ECEE" }}><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "17px", fontWeight: "800" }}>Advanced</span><span style={{ fontSize: "13px", color: "#5B6770" }}>[ADVANCED FEATURES]</span></span><span style={{ fontSize: "20px", fontWeight: "800" }}>₦80,000</span></div>
</div>
<BottomNav active="therapy" />
</div>
  );
}

