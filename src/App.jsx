import { useCallback, useState } from "react";
import IntroSplash from "./components/IntroSplash.jsx";
import PetalField from "./components/PetalField.jsx";
import Hero from "./components/Hero.jsx";
import InviteCard from "./components/InviteCard.jsx";
import Festivities from "./components/Festivities.jsx";
import Families from "./components/Families.jsx";
import Venue from "./components/Venue.jsx";
import Countdown from "./components/Countdown.jsx";
import PlannerInfo from "./components/PlannerInfo.jsx";
import Footer from "./components/Footer.jsx";
import Lightbox from "./components/Lightbox.jsx";
export default function App() {
  const [siteOpen, setSiteOpen] = useState(false);
  const [lightbox, setLightbox] = useState({ src: null, alt: "" });

  function openImage(src, alt) {
    setLightbox({ src, alt });
  }
  const closeImage = useCallback(() => setLightbox({ src: null, alt: "" }), []);

  return (
    <>
      {!siteOpen && <IntroSplash onOpen={() => setSiteOpen(true)} />}

      {siteOpen && (
        <>
          <PetalField />
          <div className="site-wrap">
            <Hero />
            <InviteCard />
            <Festivities onOpenImage={openImage} />
            <Families />
            <Venue />
            <Countdown />
            <PlannerInfo />
            <Footer />
          </div>
          <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeImage} />
        </>
      )}
    </>
  );
}
