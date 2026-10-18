import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import Logo from "../components/Logo";

interface Message {
  id: number;
  from: "padi" | "me";
  text: string;
}

const STARTER: Message[] = [
  { id: 1, from: "padi", text: "Hi Mercy103. I'm here for you. What's on your mind tonight?" },
  { id: 2, from: "me", text: "I can't switch off. Work keeps running through my head." },
  { id: 3, from: "padi", text: "That sounds exhausting. Would it help to write the thoughts down, or try a 2-minute breathing exercise first?" },
];

/** Canned supportive replies; a real build would call the AI companion service here. */
const REPLIES: ReadonlyArray<string> = [
  "Thank you for telling me. What feels heaviest right now?",
  "That makes sense. You don't have to sort it all out tonight.",
  "Let's take one small step. Would a short breathing exercise help?",
];

const bubble = (from: Message["from"]): React.CSSProperties => ({
  alignSelf: from === "me" ? "flex-end" : "flex-start",
  maxWidth: "80%",
  background: from === "me" ? "#0A8781" : "#FFFFFF",
  color: from === "me" ? "#FFFFFF" : "#1E2A32",
  borderRadius: from === "me" ? "20px 6px 20px 20px" : "6px 20px 20px 20px",
  padding: "12px 14px",
  fontSize: 15,
  lineHeight: 1.5,
  boxShadow: from === "me" ? "none" : "0 1px 2px rgba(30,42,50,0.06)",
});

/** Chat bot: a working message composer with typing indicator and quick replies. */
export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>(STARTER);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const replyIndex = useRef(0);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function send(e: FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { id: Date.now(), from: "me", text }]);
    setDraft("");
    setTyping(true);
    window.setTimeout(() => {
      const reply = REPLIES[replyIndex.current % REPLIES.length];
      replyIndex.current += 1;
      setTyping(false);
      setMessages((m) => [...m, { id: Date.now() + 1, from: "padi", text: reply }]);
    }, 1100);
  }

  return (
    <div style={{ width: 390, height: 844, boxSizing: "border-box", background: "#F7F9F9", color: "#1E2A32", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "18px 16px 14px", background: "#FFFFFF", borderBottom: "1px solid #E6ECEE" }}>
        <span style={{ width: 44, height: 44, borderRadius: 22, background: "#E6F6F4", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Logo size={28} color="#0FA39C" />
        </span>
        <span style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 16, fontWeight: 800 }}>Padi AI</span>
          <span style={{ fontSize: 12, color: "#0A8781", fontWeight: 700 }}>{typing ? "Typing…" : "Always here · Private"}</span>
        </span>
        <Link to="/crisis" style={{ height: 36, padding: "0 12px", borderRadius: 18, background: "#FDEBE6", color: "#A8361B", fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center", textDecoration: "none" }}>
          Get help
        </Link>
      </div>

      <div ref={listRef} role="log" aria-live="polite" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, padding: 16, overflowY: "auto" }}>
        <span style={{ alignSelf: "center", fontSize: 12, color: "#5B6770", background: "#FFFFFF", padding: "6px 12px", borderRadius: 12, textAlign: "center" }}>
          Padi AI is a supportive companion, not a therapist.
        </span>
        {messages.map((m, i) => (
          <div key={m.id} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={bubble(m.from)}>{m.text}</div>
            {i === 2 && (
              <div style={{ alignSelf: "flex-start", display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Link to="/breathe" style={{ height: 38, padding: "0 14px", borderRadius: 19, border: "1.5px solid #BFE9E6", background: "#FFFFFF", color: "#0A8781", fontSize: 14, fontWeight: 800, display: "flex", alignItems: "center", textDecoration: "none" }}>Breathe with me</Link>
                <Link to="/reflection" style={{ height: 38, padding: "0 14px", borderRadius: 19, border: "1.5px solid #BFE9E6", background: "#FFFFFF", color: "#0A8781", fontSize: 14, fontWeight: 800, display: "flex", alignItems: "center", textDecoration: "none" }}>Write it down</Link>
              </div>
            )}
          </div>
        ))}
        {typing && (
          <div aria-label="Padi AI is typing" style={{ alignSelf: "flex-start", background: "#FFFFFF", borderRadius: "6px 20px 20px 20px", padding: "14px 16px", display: "flex", gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "#9AA6AE" }} />
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "#9AA6AE" }} />
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "#9AA6AE" }} />
          </div>
        )}
      </div>

      <form onSubmit={send} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 16px 12px", background: "#FFFFFF", borderTop: "1px solid #E6ECEE" }}>
        <label htmlFor="chat-input" style={{ position: "absolute", left: -9999 }}>Message</label>
        <input id="chat-input" type="text" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type how you feel…" autoComplete="off" style={{ flex: 1, height: 48, borderRadius: 24, border: "1.5px solid #DDE5E8", padding: "0 18px", font: "inherit", fontSize: 15, color: "#1E2A32", background: "#F7F9F9", minWidth: 0 }} />
        <button type="submit" aria-label="Send message" disabled={!draft.trim()} style={{ width: 48, height: 48, borderRadius: 24, border: 0, background: draft.trim() ? "#0A8781" : "#9FCFCB", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </form>
      <BottomNav active="chat-bot" />
    </div>
  );
}
