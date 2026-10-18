export interface PasswordRule {
  id: "length" | "upper" | "lower" | "number" | "special";
  label: string;
  test: (value: string) => boolean;
}

export const PASSWORD_RULES: ReadonlyArray<PasswordRule> = [
  { id: "length", label: "8+ characters", test: (v) => v.length >= 8 },
  { id: "upper", label: "Uppercase", test: (v) => /[A-Z]/.test(v) },
  { id: "lower", label: "Lowercase", test: (v) => /[a-z]/.test(v) },
  { id: "number", label: "A number", test: (v) => /\d/.test(v) },
  { id: "special", label: "Special character", test: (v) => /[^A-Za-z0-9]/.test(v) },
];

export type Strength = "empty" | "weak" | "fair" | "good" | "strong";

export interface PasswordCheck {
  passed: ReadonlySet<PasswordRule["id"]>;
  score: number; // 0–5 rules met
  strength: Strength;
  hint: string;
}

export function checkPassword(value: string): PasswordCheck {
  const passed = new Set(PASSWORD_RULES.filter((r) => r.test(value)).map((r) => r.id));
  const score = passed.size;
  const strength: Strength =
    value.length === 0 ? "empty" : score <= 2 ? "weak" : score === 3 ? "fair" : score === 4 ? "good" : "strong";
  const missing = PASSWORD_RULES.find((r) => !passed.has(r.id));
  const HINTS: Record<PasswordRule["id"], string> = {
    length: "use at least 8 characters",
    upper: "add an uppercase letter",
    lower: "add a lowercase letter",
    number: "add a number",
    special: "add a special character",
  };
  const hint =
    strength === "empty"
      ? "Use at least 8 characters."
      : strength === "strong" || !missing
        ? "Strong password"
        : `${score >= 3 ? "Almost there" : "Keep going"}, ${HINTS[missing.id]}`;
  return { passed, score, strength, hint };
}

export const STRENGTH_COLOR: Record<Strength, string> = {
  empty: "#DDE5E8",
  weak: "#D9534F",
  fair: "#E9A23B",
  good: "#E9A23B",
  strong: "#1E8A4C",
};
