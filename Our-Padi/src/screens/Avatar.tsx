import { Link } from "react-router-dom";
import { img } from "../lib/assets";

/** Our Padi · Customize avatar */
export default function Avatar() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F7F9F9", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1E2A32", display: "flex", flexDirection: "column", padding: "20px 24px 36px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "14px" }}><Link to="/email" aria-label="Back" style={{ width: "44px", height: "44px", borderRadius: "22px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A32" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "6px" }} aria-label="Step 4 of 4"><span style={{ height: "5px", borderRadius: "5px", background: "#0FA39C" }}></span><span style={{ height: "5px", borderRadius: "5px", background: "#0FA39C" }}></span><span style={{ height: "5px", borderRadius: "5px", background: "#0FA39C" }}></span><span style={{ height: "5px", borderRadius: "5px", background: "#0FA39C" }}></span></div><span style={{ fontSize: "13px", fontWeight: "700", color: "#5B6770" }}>4/4</span></div>
<h1 style={{ margin: "30px 0 6px", fontSize: "27px", fontWeight: "800", letterSpacing: "-0.01em" }}>Make it yours</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#4F5D66" }}>Create an avatar that feels like you. Only your username and avatar are shown.</p>
<div style={{ display: "flex", justifyContent: "center", marginTop: "30px", position: "relative" }}><div style={{ width: "196px", height: "196px", borderRadius: "98px", overflow: "hidden", background: "#EDEDED", boxShadow: "0 0 0 6px #FFFFFF, 0 0 0 8px #BFE9E6" }}><img src={img("il-avatar.png")} alt="Your avatar: a smiling girl with long dark hair in a hoodie" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div><span style={{ position: "absolute", left: "50%", bottom: "-6px", transform: "translateX(48px)", width: "44px", height: "44px", borderRadius: "22px", background: "#0A8781", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z" /></svg></span></div>
<div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "16px", marginTop: "34px", display: "flex", flexDirection: "column", gap: "14px" }}>
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><span style={{ fontSize: "14px", fontWeight: "800" }}>Skin tone</span><div style={{ display: "flex", gap: "8px" }}>
<button type="button" aria-label="Skin tone 1" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#F3D3B5" }}></button>
<button type="button" aria-label="Skin tone 2" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#DDA67A" }}></button>
<button type="button" aria-label="Skin tone 3, selected" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#B97A50", boxShadow: "0 0 0 2px #FFFFFF, 0 0 0 4px #0A8781" }}></button>
<button type="button" aria-label="Skin tone 4" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#8A5634" }}></button>
<button type="button" aria-label="Skin tone 5" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#5C3820" }}></button></div></div>
<div style={{ height: "1px", background: "#EDF1F3" }}></div>
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><span style={{ fontSize: "14px", fontWeight: "800" }}>Outfit colour</span><div style={{ display: "flex", gap: "8px" }}>
<button type="button" aria-label="Slate, selected" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#3D5266", boxShadow: "0 0 0 2px #FFFFFF, 0 0 0 4px #0A8781" }}></button>
<button type="button" aria-label="Teal" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#12B8AF" }}></button>
<button type="button" aria-label="Coral" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#F08A6C" }}></button>
<button type="button" aria-label="Lilac" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#A493E0" }}></button>
<button type="button" aria-label="Sun" style={{ width: "30px", height: "30px", borderRadius: "15px", border: "0", background: "#F2C14E" }}></button></div></div>
</div>
<Link to="/home" style={{ marginTop: "auto", height: "56px", borderRadius: "28px", background: "#0A8781", color: "#FFFFFF", fontWeight: "800", fontSize: "17px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", boxShadow: "0 10px 22px rgba(10,135,129,0.28)" }}>Finish setup</Link>
<Link to="/home" style={{ marginTop: "14px", alignSelf: "center", fontSize: "15px", fontWeight: "800", textDecoration: "none", padding: "8px" }}>Skip for now</Link>
</div>
  );
}

