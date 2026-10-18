import BottomNav from "../components/BottomNav";

/** Our Padi · Journal */
export default function Reflection() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#FFFFFF", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1F2A33", display: "flex", flexDirection: "column" }}>
<div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "16px", padding: "26px 20px 18px", overflow: "hidden" }}>
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><h1 style={{ margin: "0", fontSize: "26px", fontWeight: "800" }}>Reflection</h1><span style={{ fontSize: "13px", fontWeight: "700", color: "#0B847F", background: "#E7F6F5", padding: "6px 12px", borderRadius: "14px" }}>5-day streak</span></div>
<div style={{ background: "#F3FBFA", borderRadius: "22px", padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
<span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.06em", textTransform: "uppercase", color: "#0B847F" }}>Today's prompt</span>
<span style={{ fontSize: "18px", fontWeight: "800", lineHeight: "1.35" }}>What's one thing that felt heavy today, and one thing that helped?</span>
<label style={{ display: "flex", flexDirection: "column" }}><span style={{ position: "absolute", left: "-9999px" }}>Your entry</span><textarea rows={6} style={{ borderRadius: "16px", border: "1.5px solid #DCE3E8", padding: "14px 16px", font: "inherit", fontSize: "15px", lineHeight: "1.55", color: "#1F2A33", background: "#FFFFFF", resize: "none" }} defaultValue="Work deadlines piled up and I felt like I couldn't breathe. Talking to my sister on the phone helped a little. I want to try going to bed earlier this week." /></label>
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
<label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "700", color: "#33414B" }}><input type="checkbox" style={{ width: "20px", height: "20px", margin: "0", accentColor: "#0B847F" }} />Share anonymously</label>
<button type="button" style={{ height: "44px", padding: "0 20px", borderRadius: "22px", border: "0", background: "#0B847F", color: "#FFFFFF", font: "inherit", fontSize: "15px", fontWeight: "800" }}>Save entry</button>
</div>
<span style={{ fontSize: "12px", color: "#5B6770", display: "flex", alignItems: "center", gap: "6px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B6770" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>Only you can see this unless you choose to share.</span>
</div>
<h2 style={{ margin: "4px 0 0", fontSize: "17px", fontWeight: "800" }}>Past entries</h2>
<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
<a href="#" style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px", borderRadius: "18px", border: "1.5px solid #EDF1F4", textDecoration: "none", color: "#1F2A33" }}><span style={{ width: "46px", height: "50px", borderRadius: "14px", background: "#FCEBB3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "17px", lineHeight: "1" }}>17<span style={{ fontSize: "10px", fontWeight: "700", color: "#6B5A1E" }}>OCT</span></span><span style={{ flex: "1", display: "flex", flexDirection: "column", minWidth: "0" }}><span style={{ fontSize: "15px", fontWeight: "800" }}>A calmer evening</span><span style={{ fontSize: "13px", color: "#5B6770", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Went for a walk after dinner and felt lighter…</span></span></a>
<a href="#" style={{ display: "flex", gap: "14px", alignItems: "center", padding: "14px", borderRadius: "18px", border: "1.5px solid #EDF1F4", textDecoration: "none", color: "#1F2A33" }}><span style={{ width: "46px", height: "50px", borderRadius: "14px", background: "#CFE3FA", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "17px", lineHeight: "1" }}>16<span style={{ fontSize: "10px", fontWeight: "700", color: "#244E7E" }}>OCT</span></span><span style={{ flex: "1", display: "flex", flexDirection: "column", minWidth: "0" }}><span style={{ fontSize: "15px", fontWeight: "800" }}>Overthinking again</span><span style={{ fontSize: "13px", color: "#5B6770", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Replayed that conversation over and over…</span></span></a>
</div>
</div>
<BottomNav active="reflection" />
</div>
  );
}

