import { Link } from "react-router-dom";

/** Our Padi · Book a session */
export default function Booking() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#FFFFFF", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1F2A33", display: "flex", flexDirection: "column", padding: "22px 20px 30px", gap: "18px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}><Link to="/therapy" aria-label="Back" style={{ width: "44px", height: "44px", borderRadius: "22px", background: "#F2F5F7", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F2A33" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><span style={{ fontSize: "17px", fontWeight: "800" }}>Book a session</span></div>
<div style={{ display: "flex", gap: "12px", alignItems: "center", background: "#F3FBFA", borderRadius: "20px", padding: "14px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "#CFE3FA", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#244E7E" }}>FO</span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "16px", fontWeight: "800" }}>Dr. Funmi Okafor</span><span style={{ fontSize: "13px", color: "#5B6770" }}>Clinical psychologist · 30 min</span></span></div>
<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><h2 style={{ margin: "0", fontSize: "16px", fontWeight: "800" }}>Session type</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
<button type="button" style={{ height: "48px", borderRadius: "16px", border: "2px solid #0B847F", background: "#E7F6F5", color: "#0B847F", font: "inherit", fontSize: "14px", fontWeight: "800" }}>Video</button>
<button type="button" style={{ height: "48px", borderRadius: "16px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: "14px", fontWeight: "700" }}>Voice</button>
<button type="button" style={{ height: "48px", borderRadius: "16px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: "14px", fontWeight: "700" }}>Chat</button>
</div></div>
<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><h2 style={{ margin: "0", fontSize: "16px", fontWeight: "800" }}>October</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "8px" }}>
<button type="button" style={{ height: "68px", borderRadius: "16px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", font: "inherit", color: "#33414B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><span style={{ fontSize: "12px" }}>Mon</span><span style={{ fontSize: "18px", fontWeight: "800" }}>20</span></button>
<button type="button" style={{ height: "68px", borderRadius: "16px", border: "0", background: "#0B847F", font: "inherit", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><span style={{ fontSize: "12px" }}>Tue</span><span style={{ fontSize: "18px", fontWeight: "800" }}>21</span></button>
<button type="button" style={{ height: "68px", borderRadius: "16px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", font: "inherit", color: "#33414B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><span style={{ fontSize: "12px" }}>Wed</span><span style={{ fontSize: "18px", fontWeight: "800" }}>22</span></button>
<button type="button" style={{ height: "68px", borderRadius: "16px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", font: "inherit", color: "#33414B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><span style={{ fontSize: "12px" }}>Thu</span><span style={{ fontSize: "18px", fontWeight: "800" }}>23</span></button>
<button type="button" style={{ height: "68px", borderRadius: "16px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", font: "inherit", color: "#33414B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><span style={{ fontSize: "12px" }}>Fri</span><span style={{ fontSize: "18px", fontWeight: "800" }}>24</span></button>
</div></div>
<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><h2 style={{ margin: "0", fontSize: "16px", fontWeight: "800" }}>Available times</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
<button type="button" style={{ height: "46px", borderRadius: "14px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: "14px", fontWeight: "700" }}>10:00 am</button>
<button type="button" style={{ height: "46px", borderRadius: "14px", border: "2px solid #0B847F", background: "#E7F6F5", color: "#0B847F", font: "inherit", fontSize: "14px", fontWeight: "800" }}>1:00 pm</button>
<button type="button" style={{ height: "46px", borderRadius: "14px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: "14px", fontWeight: "700" }}>3:30 pm</button>
<button type="button" style={{ height: "46px", borderRadius: "14px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: "14px", fontWeight: "700" }}>5:00 pm</button>
<button type="button" disabled style={{ height: "46px", borderRadius: "14px", border: "1.5px dashed #DCE3E8", background: "#F7F9FA", color: "#8A96A0", font: "inherit", fontSize: "14px", fontWeight: "700", textDecoration: "line-through" }}>6:30 pm</button>
<button type="button" style={{ height: "46px", borderRadius: "14px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", color: "#33414B", font: "inherit", fontSize: "14px", fontWeight: "700" }}>7:30 pm</button>
</div></div>
<div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
<div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px" }}><span style={{ color: "#5B6770" }}>Standard · session 1 of 4 · Tue 21 Oct, 1 pm</span><strong>₦40,000</strong></div>
<Link to="/home" style={{ height: "56px", borderRadius: "28px", background: "#0B847F", color: "#FFFFFF", fontWeight: "800", fontSize: "17px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Confirm booking</Link>
</div>
</div>
  );
}

