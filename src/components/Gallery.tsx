import { Link } from "react-router-dom";
import { FLOWS, SCREENS } from "../lib/screens";
import Logo from "./Logo";

/** Overview of every screen, grouped by flow. Each thumbnail is the real component, scaled down. */
export default function Gallery() {
  return (
    <div className="gallery">
      <header className="gallery-header">
        <div>
          <div className="brand">
            <Logo size={52} />
            <h1>
              Our Padi<span>.</span>
            </h1>
          </div>
          <p>
            A mental wellness app: a safe, judgment-free space to share what's on your mind, find calm, and get
            professional support. Open any screen, then tap through the flow.
          </p>
        </div>
        <p className="credit">
          Product design &amp; frontend by <strong>Mercy Nubi</strong>
        </p>
      </header>

      {FLOWS.map((flow) => (
        <section key={flow.id}>
          <h2>{flow.title}</h2>
          <div className="grid">
            {SCREENS.filter((s) => s.flow === flow.id).map(({ slug, title, component: Screen }) => (
              <Link key={slug} className="tile" to={`/${slug}`}>
                <div className="frame" aria-hidden="true" ref={(el) => el?.setAttribute("inert", "")}>
                  <div className="frame-inner">
                    <Screen />
                  </div>
                </div>
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <footer>Illustrations and brand © Our Padi. A static, clickable prototype: no data is stored or sent.</footer>
    </div>
  );
}
