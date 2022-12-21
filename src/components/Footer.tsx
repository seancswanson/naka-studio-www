import swansong from "../images/icons/swansong-thick-24.png";
export default function Footer() {
    return (
      <>
        <footer className="min-w-475 m-auto">
          <a href="https://wwww.swansondigitalarts.com" target="_blank" rel="noreferrer"  className="italic flex items-center justify-center gap-4 p-2 text-center font-['Space_Mono'] text-xs">
            <span>mighty microsite by swansondigitalarts</span> <img src={swansong.src} alt="swanson digital arts logo" />
          </a>
        </footer>
      </>
    );
}