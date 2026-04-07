import Image from "next/image";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.shpper.app";
const APP_STORE_URL = "https://apps.apple.com/us/app/shpper/id6450944256";

export function AppStoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all hover:opacity-80 hover:scale-[1.02]"
      >
        <Image
          src="/images/store/google-play.png"
          alt="Get it on Google Play"
          width={180}
          height={54}
          className="h-13 w-auto"
          sizes="180px"
        />
      </a>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all hover:opacity-80 hover:scale-[1.02]"
      >
        <Image
          src="/images/store/app-store.png"
          alt="Download on the App Store"
          width={180}
          height={54}
          className="h-13 w-auto"
          sizes="180px"
        />
      </a>
    </div>
  );
}
