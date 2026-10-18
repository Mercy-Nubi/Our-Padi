import { Link } from "react-router-dom";
import { img } from "../lib/assets";

/** Our Padi · Profile and privacy */
export default function Profile() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F7F9F9", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1E2A32", display: "flex", flexDirection: "column", padding: "20px 20px 30px", gap: "16px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}><Link to="/home" aria-label="Back" style={{ width: "44px", height: "44px", borderRadius: "22px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A32" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><span style={{ fontSize: "17px", fontWeight: "800" }}>Profile</span></div>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
<span style={{ width: "96px", height: "96px", borderRadius: "48px", overflow: "hidden", background: "#EDEDED", boxShadow: "0 0 0 4px #FFFFFF, 0 0 0 6px #BFE9E6" }}><img src={img("il-avatar.png")} alt="Your avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></span>
<span style={{ fontSize: "22px", fontWeight: "800", marginTop: "8px" }}>Mercy103</span>
<span style={{ fontSize: "13px", color: "#5B6770" }}>Member since Oct 2026 · Only your username is public</span>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
<div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "12px", display: "flex", flexDirection: "column", alignItems: "center" }}><span style={{ fontSize: "20px", fontWeight: "800" }}>12</span><span style={{ fontSize: "12px", color: "#5B6770" }}>Check-ins</span></div>
<div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "12px", display: "flex", flexDirection: "column", alignItems: "center" }}><span style={{ fontSize: "20px", fontWeight: "800" }}>5</span><span style={{ fontSize: "12px", color: "#5B6770" }}>Reflections</span></div>
<div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "12px", display: "flex", flexDirection: "column", alignItems: "center" }}><span style={{ fontSize: "20px", fontWeight: "800" }}>1</span><span style={{ fontSize: "12px", color: "#5B6770" }}>Sessions</span></div>
</div>
<div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "4px 16px", display: "flex", flexDirection: "column" }}>
<label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 0", borderBottom: "1px solid #EDF1F3", fontSize: "15px", fontWeight: "700" }}>Daily check-in reminder<input type="checkbox" defaultChecked style={{ width: "22px", height: "22px", margin: "0", accentColor: "#0A8781" }} /></label>
<label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 0", borderBottom: "1px solid #EDF1F3", fontSize: "15px", fontWeight: "700" }}>App lock (PIN or Face ID)<input type="checkbox" defaultChecked style={{ width: "22px", height: "22px", margin: "0", accentColor: "#0A8781" }} /></label>
<label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 0", fontSize: "15px", fontWeight: "700" }}>Wellness tips by email<input type="checkbox" defaultChecked style={{ width: "22px", height: "22px", margin: "0", accentColor: "#0A8781" }} /></label>
</div>
<div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "4px 16px", display: "flex", flexDirection: "column" }}>
<Link to="/avatar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid #EDF1F3", fontSize: "15px", fontWeight: "700", color: "#1E2A32", textDecoration: "none" }}>Edit avatar<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A96A0" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg></Link>
<Link to="/booking" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid #EDF1F3", fontSize: "15px", fontWeight: "700", color: "#1E2A32", textDecoration: "none" }}>My therapy sessions<span style={{ fontSize: "13px", fontWeight: "800", color: "#0A8781", background: "#E6F6F4", padding: "3px 10px", borderRadius: "10px" }}>1 upcoming</span></Link>
<Link to="/insights" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid #EDF1F3", fontSize: "15px", fontWeight: "700", color: "#1E2A32", textDecoration: "none" }}>Mood insights<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A96A0" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg></Link>
<Link to="/splash" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", fontSize: "15px", fontWeight: "800", color: "#A8361B", textDecoration: "none" }}>Log out</Link>
</div>
</div>
  );
}

