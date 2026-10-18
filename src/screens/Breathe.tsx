import { Link } from "react-router-dom";

/** Our Padi · Breathe */
export default function Breathe() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#0B4F4C", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 20px 40px", position: "relative", overflow: "hidden" }}>
<div style={{ alignSelf: "stretch", display: "flex", alignItems: "center", justifyContent: "space-between" }}><Link to="/home" aria-label="Close" style={{ width: "44px", height: "44px", borderRadius: "22px", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></Link><span style={{ fontSize: "15px", fontWeight: "700", color: "#CDEDEA" }}>Box breathing · 2 min</span><button type="button" aria-label="Sound on" style={{ width: "44px", height: "44px", borderRadius: "22px", border: "0", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" /><path d="M17 9a4 4 0 0 1 0 6" /></svg></button></div>
<div style={{ position: "relative", width: "300px", height: "300px", marginTop: "90px", display: "flex", alignItems: "center", justifyContent: "center" }}>
<div style={{ position: "absolute", inset: "0", borderRadius: "150px", background: "rgba(191,233,230,0.12)" }}></div>
<div style={{ position: "absolute", inset: "34px", borderRadius: "120px", background: "rgba(191,233,230,0.2)" }}></div>
<div style={{ position: "absolute", inset: "70px", borderRadius: "90px", background: "#5BC8C2" }}></div>
<div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}><span style={{ fontSize: "26px", fontWeight: "800", color: "#0B3B39" }}>Breathe in</span><span style={{ fontSize: "44px", fontWeight: "800", color: "#0B3B39", lineHeight: "1.1" }}>3</span></div>
</div>
<p style={{ margin: "56px 0 0", fontSize: "17px", lineHeight: "1.55", color: "#CDEDEA", textAlign: "center", maxWidth: "300px" }}>In for 4, hold for 4, out for 4, hold for 4. Let your shoulders drop.</p>
<div style={{ display: "flex", gap: "8px", marginTop: "26px" }} aria-label="Round 2 of 6"><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: "#5BC8C2" }}></span><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: "#5BC8C2" }}></span><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: "rgba(255,255,255,0.25)" }}></span><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: "rgba(255,255,255,0.25)" }}></span><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: "rgba(255,255,255,0.25)" }}></span><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: "rgba(255,255,255,0.25)" }}></span></div>
<div style={{ marginTop: "auto", display: "flex", gap: "12px", alignSelf: "stretch" }}>
<button type="button" style={{ flex: "1", height: "56px", borderRadius: "28px", border: "1.5px solid rgba(255,255,255,0.4)", background: "transparent", color: "#FFFFFF", font: "inherit", fontSize: "16px", fontWeight: "800" }}>Pause</button>
<Link to="/home" style={{ flex: "1", height: "56px", borderRadius: "28px", background: "#FFFFFF", color: "#0B4F4C", fontWeight: "800", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>I feel calmer</Link>
</div>
</div>
  );
}

