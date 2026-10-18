import { Link } from "react-router-dom";
import { img } from "../lib/assets";

/** Our Padi · Breathe easy */
export default function Onboarding1() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#FFFFFF", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1E2A32", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 24px 36px", position: "relative", overflow: "hidden" }}>
<div style={{ alignSelf: "stretch", display: "flex", justifyContent: "flex-end" }}><Link to="/username" style={{ fontSize: "15px", fontWeight: "700", textDecoration: "none", padding: "10px 4px" }}>Skip</Link></div>
<div style={{ width: "330px", height: "330px", borderRadius: "165px", background: "#E6F6F4", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "18px" }}><img src={img("onb-breathe.png")} alt="A woman sitting cross-legged, eyes closed, hands together" style={{ width: "280px", height: "auto", mixBlendMode: "multiply" }} /></div>
<h1 style={{ margin: "34px 0 0", fontSize: "28px", lineHeight: "1.2", fontWeight: "800", textAlign: "center", letterSpacing: "-0.01em" }}><span style={{ color: "#0FA39C" }}>Breathe easy,</span><br />feel easy</h1>
<p style={{ margin: "14px 0 0", textAlign: "center", fontSize: "16px", lineHeight: "1.55", color: "#4F5D66", maxWidth: "310px" }}>No pressure, no judgment. Just a safe space to share what's on your mind, especially when talking feels tough.</p>
<div style={{ display: "flex", gap: "6px", marginTop: "28px" }} aria-label="Step 1 of 3"><span style={{ width: "28px", height: "6px", borderRadius: "6px", background: "#0FA39C" }}></span><span style={{ width: "6px", height: "6px", borderRadius: "6px", background: "#CFD8DD" }}></span><span style={{ width: "6px", height: "6px", borderRadius: "6px", background: "#CFD8DD" }}></span></div>
<Link to="/onboarding2" style={{ marginTop: "auto", alignSelf: "stretch", height: "56px", borderRadius: "28px", background: "#0A8781", color: "#FFFFFF", fontWeight: "800", fontSize: "17px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", boxShadow: "0 10px 22px rgba(10,135,129,0.28)" }}>Get started</Link>
<p style={{ margin: "18px 0 0", fontSize: "15px", color: "#4F5D66" }}>Already have an account? <Link to="/login" style={{ fontWeight: "800", textDecoration: "none" }}>Log in</Link></p>
</div>
  );
}

