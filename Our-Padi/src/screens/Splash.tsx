/** Our Padi · Splash */
export default function Splash() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#FFFFFF", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1F2A33", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0", position: "relative" }}>
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
<svg width="68" height="68" viewBox="0 0 48 48" role="img" aria-label="Our Padi logo"><circle cx="18.5" cy="7" r="3.6" fill="#17B3AC" /><circle cx="29.5" cy="7" r="3.6" fill="#17B3AC" /><path d="M24 43C11 33 5 25 7.5 17.5C9.5 11.5 16 11 19 15.5C21 18.5 21.5 23 24 26C26.5 23 27 18.5 29 15.5C32 11 38.5 11.5 40.5 17.5C43 25 37 33 24 43Z" fill="none" stroke="#17B3AC" strokeWidth="3.6" strokeLinejoin="round" /></svg>
<div style={{ display: "flex", flexDirection: "column", lineHeight: "0.95" }}>
<span style={{ fontSize: "34px", fontWeight: "600", color: "#2B2B2B" }}>Our</span>
<span style={{ fontSize: "38px", fontWeight: "800", color: "#2B2B2B" }}>Padi<span style={{ color: "#17B3AC" }}>.</span></span>
</div>
</div>
<p style={{ position: "absolute", bottom: "64px", margin: "0", fontSize: "14px", color: "#5B6770" }}>A safe space to share</p>
</div>
  );
}

