import { Link } from "react-router-dom";

/** Our Padi · Mood insights */
export default function Insights() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F3FBFA", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1F2A33", display: "flex", flexDirection: "column", padding: "22px 20px 30px", gap: "16px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}><Link to="/home" aria-label="Back" style={{ width: "44px", height: "44px", borderRadius: "22px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F2A33" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><span style={{ fontSize: "17px", fontWeight: "800" }}>My mood</span></div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", background: "#FFFFFF", borderRadius: "22px", padding: "4px" }}>
<button type="button" style={{ height: "40px", borderRadius: "18px", border: "0", background: "#0B847F", color: "#FFFFFF", font: "inherit", fontSize: "14px", fontWeight: "800" }}>This week</button>
<button type="button" style={{ height: "40px", borderRadius: "18px", border: "0", background: "transparent", color: "#5B6770", font: "inherit", fontSize: "14px", fontWeight: "700" }}>This month</button>
</div>
<div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span style={{ fontSize: "16px", fontWeight: "800" }}>12 – 18 Oct</span><span style={{ fontSize: "13px", color: "#5B6770" }}>6 of 7 check-ins</span></div>
<div style={{ display: "flex", gap: "10px", height: "180px" }}>
<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: "11px", color: "#5B6770", paddingBottom: "22px", width: "34px" }}><span>Great</span><span>Good</span><span>Okay</span><span>Down</span><span>Low</span></div>
<div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "8px", alignItems: "end" }}>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}><span style={{ width: "100%", height: "63px", borderRadius: "10px 10px 4px 4px", background: "#CFE3FA" }}></span><span style={{ fontSize: "12px", color: "#5B6770" }}>M</span></div>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}><span style={{ width: "100%", height: "94px", borderRadius: "10px 10px 4px 4px", background: "#BFE9E6" }}></span><span style={{ fontSize: "12px", color: "#5B6770" }}>T</span></div>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}><span style={{ width: "100%", height: "63px", borderRadius: "10px 10px 4px 4px", background: "#CFE3FA" }}></span><span style={{ fontSize: "12px", color: "#5B6770" }}>W</span></div>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}><span style={{ width: "100%", height: "125px", borderRadius: "10px 10px 4px 4px", background: "#F6D985" }}></span><span style={{ fontSize: "12px", color: "#5B6770" }}>T</span></div>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}><span style={{ width: "100%", height: "8px", borderRadius: "4px", background: "#E3E8EC" }}></span><span style={{ fontSize: "12px", color: "#5B6770" }}>F</span></div>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}><span style={{ width: "100%", height: "94px", borderRadius: "10px 10px 4px 4px", background: "#BFE9E6" }}></span><span style={{ fontSize: "12px", color: "#5B6770" }}>S</span></div>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}><span style={{ width: "100%", height: "94px", borderRadius: "10px 10px 4px 4px", background: "#17B3AC" }}></span><span style={{ fontSize: "12px", fontWeight: "800", color: "#0B847F" }}>S</span></div>
</div>
</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
<div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "16px", display: "flex", flexDirection: "column", gap: "4px" }}><span style={{ fontSize: "13px", color: "#5B6770" }}>Most often</span><span style={{ fontSize: "20px", fontWeight: "800" }}>Okay</span></div>
<div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "16px", display: "flex", flexDirection: "column", gap: "4px" }}><span style={{ fontSize: "13px", color: "#5B6770" }}>Top topic</span><span style={{ fontSize: "20px", fontWeight: "800" }}>Work</span></div>
</div>
<div style={{ background: "#E7F6F5", borderRadius: "20px", padding: "16px", display: "flex", gap: "12px", alignItems: "flex-start" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B847F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0" }}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z" /></svg><span style={{ fontSize: "14px", lineHeight: "1.5", color: "#1F2A33" }}>Your best day was <strong>Thursday</strong>, the day you went for a walk. Small things add up.</span></div>
<Link to="/mood-checkin" style={{ marginTop: "auto", height: "56px", borderRadius: "28px", background: "#0B847F", color: "#FFFFFF", fontWeight: "800", fontSize: "17px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Check in now</Link>
</div>
  );
}

