export type ImageName =
  | "onb-breathe.png"
  | "onb-listen.png"
  | "onb-pace.png"
  | "il-username.png"
  | "il-password.png"
  | "il-email.png"
  | "il-avatar.png"
  | "il-hands.png"
  | "il-reader.png"
  | "card-bodyscan.png"
  | "card-anxiety.png";

/** Resolves an illustration in /public/images, respecting the deploy base path. */
export function img(name: ImageName): string {
  return `${import.meta.env.BASE_URL}images/${name}`;
}
