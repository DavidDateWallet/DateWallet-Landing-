import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-30%20at%205.03.24%E2%80%AFAM-dIeNPivEiW4zVeYvYTPtcAETxVJU86.png"
            alt="People enjoying cooking and socializing together"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-12 text-center">
          <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground text-balance mb-12 max-w-6xl leading-tight">
            Download to find the most unique and fun date experiences in your
            city
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com/us/app/datewallet/id6755214707"
              className="inline-block transition-transform hover:scale-105"
              aria-label="Download on the App Store"
            >
              <div className="bg-black rounded-lg px-6 py-3 flex items-center gap-3 min-w-[200px] border border-gray-700">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    fill="currentColor"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold text-white">
                    App Store
                  </div>
                </div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.funwallet.dateWallet"
              className="inline-block transition-transform hover:scale-105"
              aria-label="Get it on Google Play"
            >
              <div className="bg-black rounded-lg px-6 py-3 flex items-center gap-3 min-w-[200px] border border-gray-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
                    fill="#EA4335"
                  />
                  <path
                    d="M13.792 12l2.302 2.302-10.937 6.333 8.635-8.635z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M17.293 9.302l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.5 12l2.198-2.491z"
                    fill="#EA4335"
                  />
                  <path
                    d="M5.864 2.658L16.802 8.99 14.5 11.293 5.864 2.658z"
                    fill="#34A853"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">GET IT ON</div>
                  <div className="text-lg font-semibold text-white">
                    Google Play
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Mobile App Notice */}
          <p className="text-sm text-muted-foreground mt-8 max-w-md">
            Available exclusively on mobile devices
          </p>
        </div>
      </div>
    </div>
  );
}
