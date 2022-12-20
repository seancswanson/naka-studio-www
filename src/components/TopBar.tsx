import NameSection from "./NameSection";
import SocialSection from "./SocialSection";

export default function TopBar() {
    return (
      <>
        <div className="info-container">
          <section className="info flex justify-around border-b border-stone-300 p-6">
            <NameSection />
            <SocialSection />
          </section>
        </div>
      </>
    );
}