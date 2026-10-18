import { Link } from "react-router-dom";
import { img } from "../lib/assets";

/** Our Padi · Your mind, your pace */
export default function Onboarding3() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#FFFFFF", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1E2A32", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 24px 36px", position: "relative", overflow: "hidden" }}>
<div style={{ alignSelf: "stretch", display: "flex", justifyContent: "flex-start", alignItems: "center" }}><Link to="/onboarding2" aria-label="Back" style={{ width: "44px", height: "44px", borderRadius: "22px", background: "#F2F5F6", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A32" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link></div>
<div style={{ width: "330px", height: "330px", borderRadius: "165px", background: "#E6F6F4", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-8px" }}><img src={img("onb-pace.png")} alt="A woman holding a giant pencil among calm leaves and notes" style={{ width: "300px", height: "auto", mixBlendMode: "multiply" }} /></div>
<h1 style={{ margin: "34px 0 0", fontSize: "28px", lineHeight: "1.2", fontWeight: "800", textAlign: "center", letterSpacing: "-0.01em" }}><span style={{ color: "#0FA39C" }}>Your mind,</span> your pace</h1>
<p style={{ margin: "14px 0 0", textAlign: "center", fontSize: "16px", lineHeight: "1.55", color: "#4F5D66", maxWidth: "310px" }}>Explore calming tools to ease stress and anxiety, because taking care of you should feel good, not overwhelming.</p>
<div style={{ display: "flex", gap: "6px", marginTop: "28px" }} aria-label="Step 3 of 3"><span style={{ width: "6px", height: "6px", borderRadius: "6px", background: "#CFD8DD" }}></span><span style={{ width: "6px", height: "6px", borderRadius: "6px", background: "#CFD8DD" }}></span><span style={{ width: "28px", height: "6px", borderRadius: "6px", background: "#0FA39C" }}></span></div>
<Link to="/username" style={{ marginTop: "auto", alignSelf: "stretch", height: "56px", borderRadius: "28px", background: "#0A8781", color: "#FFFFFF", fontWeight: "800", fontSize: "17px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", boxShadow: "0 10px 22px rgba(10,135,129,0.28)" }}>Create my account</Link>
<p style={{ margin: "18px 0 0", fontSize: "15px", color: "#4F5D66" }}>Already have an account? <Link to="/login" style={{ fontWeight: "800", textDecoration: "none" }}>Log in</Link></p>
</div>
  );
}

