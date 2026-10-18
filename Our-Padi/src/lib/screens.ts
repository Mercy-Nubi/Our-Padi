import type { ComponentType } from "react";
import Splash from "../screens/Splash";
import Onboarding1 from "../screens/Onboarding1";
import Onboarding2 from "../screens/Onboarding2";
import Onboarding3 from "../screens/Onboarding3";
import Username from "../screens/Username";
import Password from "../screens/Password";
import Email from "../screens/Email";
import Avatar from "../screens/Avatar";
import Login from "../screens/Login";
import Home from "../screens/Home";
import MoodCheckin from "../screens/MoodCheckin";
import Reflection from "../screens/Reflection";
import Breathe from "../screens/Breathe";
import Library from "../screens/Library";
import ChatBot from "../screens/ChatBot";
import Community from "../screens/Community";
import PostDetail from "../screens/PostDetail";
import Insights from "../screens/Insights";
import Therapy from "../screens/Therapy";
import Booking from "../screens/Booking";
import Crisis from "../screens/Crisis";
import Profile from "../screens/Profile";

export type FlowId = "welcome" | "account" | "daily" | "connect" | "care";

export interface Screen {
  /** URL slug, e.g. "home" → #/home */
  slug: string;
  title: string;
  flow: FlowId;
  component: ComponentType;
}

export const FLOWS: ReadonlyArray<{ id: FlowId; title: string }> = [
  { id: "welcome", title: "Welcome & onboarding" },
  { id: "account", title: "Create your account" },
  { id: "daily", title: "Home & daily care" },
  { id: "connect", title: "Chat bot & community" },
  { id: "care", title: "Therapy, support & profile" },
];

export const SCREENS: ReadonlyArray<Screen> = [
  { slug: "splash", title: "Splash", flow: "welcome", component: Splash },
  { slug: "onboarding1", title: "Breathe easy", flow: "welcome", component: Onboarding1 },
  { slug: "onboarding2", title: "We're here to listen", flow: "welcome", component: Onboarding2 },
  { slug: "onboarding3", title: "Your mind, your pace", flow: "welcome", component: Onboarding3 },
  { slug: "username", title: "Username", flow: "account", component: Username },
  { slug: "password", title: "Create password", flow: "account", component: Password },
  { slug: "email", title: "Email", flow: "account", component: Email },
  { slug: "avatar", title: "Customize avatar", flow: "account", component: Avatar },
  { slug: "login", title: "Log in", flow: "account", component: Login },
  { slug: "home", title: "Home", flow: "daily", component: Home },
  { slug: "mood-checkin", title: "Mood check-in", flow: "daily", component: MoodCheckin },
  { slug: "reflection", title: "Reflection", flow: "daily", component: Reflection },
  { slug: "breathe", title: "Breathing exercise", flow: "daily", component: Breathe },
  { slug: "library", title: "Pal's Library", flow: "daily", component: Library },
  { slug: "chat-bot", title: "Chat bot · Padi AI", flow: "connect", component: ChatBot },
  { slug: "community", title: "Community", flow: "connect", component: Community },
  { slug: "post-detail", title: "Post & replies", flow: "connect", component: PostDetail },
  { slug: "insights", title: "Mood insights", flow: "connect", component: Insights },
  { slug: "therapy", title: "Therapy packages", flow: "care", component: Therapy },
  { slug: "booking", title: "Book a session", flow: "care", component: Booking },
  { slug: "crisis", title: "Get help now", flow: "care", component: Crisis },
  { slug: "profile", title: "Profile & privacy", flow: "care", component: Profile },
];
