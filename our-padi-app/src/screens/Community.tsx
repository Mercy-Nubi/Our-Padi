import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";

/** Our Padi · Community */
export default function Community() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F3FBFA", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1F2A33", display: "flex", flexDirection: "column", position: "relative" }}>
<div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "14px", padding: "26px 20px 18px", overflow: "hidden" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><h1 style={{ margin: "0", fontSize: "26px", fontWeight: "800" }}>Community</h1><span style={{ fontSize: "14px", color: "#5B6770" }}>Everyone here is anonymous. Be kind.</span></div>
<div style={{ display: "flex", gap: "8px", overflow: "hidden" }}>
<button type="button" style={{ height: "38px", padding: "0 16px", borderRadius: "19px", border: "0", background: "#1F2A33", color: "#FFFFFF", font: "inherit", fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap" }}>For you</button>
<button type="button" style={{ height: "38px", padding: "0 16px", borderRadius: "19px", border: "0", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap" }}>Anxiety</button>
<button type="button" style={{ height: "38px", padding: "0 16px", borderRadius: "19px", border: "0", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap" }}>Work stress</button>
<button type="button" style={{ height: "38px", padding: "0 16px", borderRadius: "19px", border: "0", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap" }}>Family</button>
</div>
<Link to="/post-detail" style={{ background: "#FFFFFF", borderRadius: "22px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", textDecoration: "none", color: "#1F2A33" }}>
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "36px", height: "36px", borderRadius: "18px", background: "#FFD9C7" }}></span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "14px", fontWeight: "800" }}>SoftCloud</span><span style={{ fontSize: "12px", color: "#5B6770" }}>2h · Anxiety</span></span></div>
<span style={{ fontSize: "15px", lineHeight: "1.5" }}>Does anyone else get anxious on Sunday nights thinking about Monday? My chest gets tight and I can't sleep.</span>
<div style={{ display: "flex", gap: "18px", fontSize: "13px", fontWeight: "700", color: "#5B6770" }}><span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0B847F" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="#BFE9E6" stroke="#0B847F" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" /></svg>48 hear you</span><span style={{ display: "flex", alignItems: "center", gap: "6px" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B6770" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /></svg>12 replies</span></div>
</Link>
<Link to="/post-detail" style={{ background: "#FFFFFF", borderRadius: "22px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", textDecoration: "none", color: "#1F2A33" }}>
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "36px", height: "36px", borderRadius: "18px", background: "#DCD3F5" }}></span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "14px", fontWeight: "800" }}>KindLeaf</span><span style={{ fontSize: "12px", color: "#5B6770" }}>5h · Small wins</span></span></div>
<span style={{ fontSize: "15px", lineHeight: "1.5" }}>I finally told my friend how I've been feeling. She didn't judge me at all. Proud of myself today.</span>
<div style={{ display: "flex", gap: "18px", fontSize: "13px", fontWeight: "700", color: "#5B6770" }}><span style={{ display: "flex", alignItems: "center", gap: "6px" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B6770" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" /></svg>126 hear you</span><span style={{ display: "flex", alignItems: "center", gap: "6px" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B6770" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /></svg>31 replies</span></div>
</Link>
<Link to="/post-detail" style={{ background: "#FFFFFF", borderRadius: "22px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", textDecoration: "none", color: "#1F2A33" }}>
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ width: "36px", height: "36px", borderRadius: "18px", background: "#CFE3FA" }}></span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "14px", fontWeight: "800" }}>MorningTide</span><span style={{ fontSize: "12px", color: "#5B6770" }}>Yesterday · Work stress</span></span></div>
<span style={{ fontSize: "15px", lineHeight: "1.5" }}>How do you switch off after work when your mind keeps running?</span>
</Link>
</div>
<Link to="/reflection" style={{ position: "absolute", right: "20px", bottom: "98px", height: "54px", padding: "0 20px", borderRadius: "27px", background: "#0B847F", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "8px", fontWeight: "800", fontSize: "15px", textDecoration: "none", boxShadow: "0 10px 24px rgba(11,132,127,0.35)" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>Share</Link>
<BottomNav active="community" />
</div>
  );
}

