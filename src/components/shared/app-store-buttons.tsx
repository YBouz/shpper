import Image from "next/image";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.shpper.app";
const APP_STORE_URL = "https://apps.apple.com/us/app/shpper/id6450944256";

export function AppStoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        <Image
          src="/images/store/google-play.png"
          alt="Get it on Google Play"
          width={160}
          height={48}
          className="h-12 w-auto"
          sizes="160px"
        />
      </a>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        <Image
          src="/images/store/app-store.png"
          alt="Download on the App Store"
          width={160}
          height={48}
          className="h-12 w-auto"
          sizes="160px"
        />
      </a>
    </div>
  );
}
