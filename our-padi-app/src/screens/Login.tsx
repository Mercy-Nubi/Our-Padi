import { Link } from "react-router-dom";

/** Our Padi · Log in */
export default function Login() {
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#FFFFFF", fontFamily: "'Nunito', 'Trebuchet MS', sans-serif", color: "#1F2A33", display: "flex", flexDirection: "column", padding: "28px 20px 36px" }}>
<Link to="/onboarding1" aria-label="Back" style={{ width: "44px", height: "44px", borderRadius: "22px", background: "#F2F5F7", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F2A33" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link>
<div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}><svg width="64" height="64" viewBox="0 0 48 48" aria-hidden="true"><circle cx="18.5" cy="7" r="3.6" fill="#17B3AC" /><circle cx="29.5" cy="7" r="3.6" fill="#17B3AC" /><path d="M24 43C11 33 5 25 7.5 17.5C9.5 11.5 16 11 19 15.5C21 18.5 21.5 23 24 26C26.5 23 27 18.5 29 15.5C32 11 38.5 11.5 40.5 17.5C43 25 37 33 24 43Z" fill="none" stroke="#17B3AC" strokeWidth="3.6" strokeLinejoin="round" /></svg></div>
<h1 style={{ margin: "20px 0 6px", fontSize: "28px", fontWeight: "800", textAlign: "center" }}>Welcome back</h1>
<p style={{ margin: "0 0 32px", fontSize: "16px", color: "#5B6770", textAlign: "center" }}>We're glad you're here.</p>
<form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
<label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "700" }}>Username or email<input type="text" defaultValue="Mercy103" style={{ height: "54px", borderRadius: "16px", border: "1.5px solid #DCE3E8", padding: "0 16px", font: "inherit", fontWeight: "400", fontSize: "16px", color: "#1F2A33", background: "#FAFCFC" }} /></label>
<label style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "700" }}>Password<input type="password" placeholder="Enter your password" style={{ height: "54px", borderRadius: "16px", border: "1.5px solid #DCE3E8", padding: "0 16px", font: "inherit", fontWeight: "400", fontSize: "16px", color: "#1F2A33", background: "#FAFCFC" }} /></label>
<a href="#" style={{ alignSelf: "flex-end", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>Forgot password?</a>
</form>
<Link to="/home" style={{ marginTop: "28px", height: "56px", borderRadius: "28px", background: "#0B847F", color: "#FFFFFF", fontWeight: "800", fontSize: "17px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Log in</Link>
<div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "26px 0", color: "#8A96A0", fontSize: "13px" }}><span style={{ flex: "1", height: "1px", background: "#E3E8EC" }}></span>or<span style={{ flex: "1", height: "1px", background: "#E3E8EC" }}></span></div>
<button type="button" style={{ height: "54px", borderRadius: "27px", border: "1.5px solid #DCE3E8", background: "#FFFFFF", font: "inherit", fontSize: "16px", fontWeight: "700", color: "#1F2A33" }}>Continue with Google</button>
<p style={{ margin: "auto 0 0", textAlign: "center", fontSize: "15px", color: "#33414B" }}>New to Our Padi? <Link to="/username" style={{ fontWeight: "700", textDecoration: "none" }}>Create an account</Link></p>
</div>
  );
}

