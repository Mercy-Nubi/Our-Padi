import { Link } from "react-router-dom";
import { img } from "../lib/assets";

/** Our Padi · Email */
export default function Email() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F7F9F9", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1E2A32", display: "flex", flexDirection: "column", padding: "20px 24px 36px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "14px" }}><Link to="/password" aria-label="Back" style={{ width: "44px", height: "44px", borderRadius: "22px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A32" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "6px" }} aria-label="Step 3 of 4"><span style={{ height: "5px", borderRadius: "5px", background: "#0FA39C" }}></span><span style={{ height: "5px", borderRadius: "5px", background: "#0FA39C" }}></span><span style={{ height: "5px", borderRadius: "5px", background: "#0FA39C" }}></span><span style={{ height: "5px", borderRadius: "5px", background: "#DDE5E8" }}></span></div><span style={{ fontSize: "13px", fontWeight: "700", color: "#5B6770" }}>3/4</span></div>
<h1 style={{ margin: "30px 0 6px", fontSize: "27px", fontWeight: "800", letterSpacing: "-0.01em" }}>What's your email?</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#4F5D66" }}>We'll use it to keep your account safe and, if you like, send gentle wellness tips.</p>
<div style={{ display: "flex", justifyContent: "center", margin: "26px 0 22px" }}><img src={img("il-email.png")} alt="A calm woman wrapped in a soft cloud, drawn inside a circle" style={{ width: "172px", height: "auto", mixBlendMode: "multiply" }} /></div>
<label htmlFor="email" style={{ fontSize: "14px", fontWeight: "800", marginBottom: "8px" }}>Email address</label>
<div style={{ display: "flex", alignItems: "center", gap: "10px", height: "56px", borderRadius: "18px", border: "1.5px solid #DDE5E8", background: "#FFFFFF", padding: "0 16px" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B6770" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3.5 7l8.5 6 8.5-6" /></svg><input id="email" type="email" placeholder="you@example.com" style={{ flex: "1", border: "0", outline: "none", font: "inherit", fontSize: "16px", color: "#1E2A32", background: "transparent", minWidth: "0" }} /></div>
<label style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginTop: "16px", fontSize: "14px", lineHeight: "1.45", color: "#33414B" }}><input type="checkbox" defaultChecked style={{ width: "20px", height: "20px", margin: "1px 0 0", accentColor: "#0A8781" }} />Send me weekly wellness tips. You can turn this off any time.</label>
<p style={{ margin: "14px 0 0", fontSize: "13px", color: "#5B6770", display: "flex", alignItems: "center", gap: "6px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B6770" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>We never share your email.</p>
<button type="button" disabled style={{ marginTop: "auto", height: "56px", borderRadius: "28px", border: "0", background: "#CDEBE8", color: "#4C7D79", font: "inherit", fontWeight: "800", fontSize: "17px" }}>Continue</button>
</div>
  );
}

