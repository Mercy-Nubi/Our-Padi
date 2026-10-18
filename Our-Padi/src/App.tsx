import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import Gallery from "./components/Gallery";
import { SCREENS } from "./lib/screens";

function ScreenRoute() {
  const { slug } = useParams<{ slug: string }>();
  const screen = SCREENS.find((s) => s.slug === slug);
  if (!screen) return <Navigate to="/" replace />;
  const Component = screen.component;
  return (
    <>
      <Link className="back-to-gallery" to="/">
        All screens
      </Link>
      <main className="device" aria-label={screen.title}>
        <Component />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/:slug" element={<ScreenRoute />} />
    </Routes>
  );
}
