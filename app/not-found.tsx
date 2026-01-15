import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f5f8] dark:bg-[#151022] text-[#131118] dark:text-white font-sans overflow-x-hidden transition-colors duration-200">
      {/* Header */}
      <header className="w-full flex justify-center py-6 px-4 md:px-10 z-10">
        <div className="flex items-center gap-3">
          <div className="size-8 text-[#895af6]">
            <svg
              className="w-full h-full"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                fill="currentColor"
                fillOpacity="0.8"
                fillRule="evenodd"
              />
              <path
                d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[#131118] dark:text-white">
            ContentCraft
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 md:py-12 relative">
        {/* Abstract background elements for flair */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#895af6]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#895af6]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="w-full max-w-[640px] flex flex-col items-center text-center gap-8 md:gap-10">
          {/* Illustration */}
          <div className="relative w-full max-w-[400px] aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-[#1e1730] p-8 flex items-center justify-center border border-[#f1f0f5] dark:border-[#2d2445]">
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              data-alt="Abstract illustration of code or digital confusion"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuJmIJH89HxrMpG0Cc0cOPXHruF5hqIPAMsXu0qlcBOsqUenVITLepPhgSkC2J2NSjf4CraOl-22VGRGCH9ip7JImC9IYFjsc9LNNBoXiLqeEfGXZsd_p9Be7-D3lbNj9oUzv--9bjDDmM89Pi3GSDqLxhAI_SAKgHiOipvsvyvSf3rUI9I6zxU-AX0tIosC9_2g2QNGmklMmF6p1LDgB_Jx6vi2LCfPWslHS3VBGkwOKWS5COOoRL428RXoO2XEZEsk-hh4Gb114")',
              }}
            />
            {/* Overlay Gradient for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent dark:from-[#1e1730]/40 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center gap-4 max-w-[480px]">
            <div className="space-y-2">
              <p className="text-[#895af6] font-bold text-sm tracking-widest uppercase">
                404 Error
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#131118] dark:text-white">
                Oops! Page not found.
              </h2>
            </div>
            <p className="text-[#6d608a] dark:text-[#a09bb0] text-base md:text-lg font-normal leading-relaxed">
              It looks like you&apos;ve ventured into uncharted territory. The page you
              are looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
            {/* Primary Action */}
            <Link href="/dashboard" className="w-full sm:w-auto">
              <button className="group relative flex min-w-[200px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#895af6] text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-[#895af6]/25 hover:shadow-[#895af6]/40 hover:scale-105 transition-all duration-300">
                <span className="truncate">Go to Dashboard</span>
              </button>
            </Link>

            {/* Secondary Link */}
            <Link
              href="/help"
              className="flex items-center gap-2 text-[#6d608a] dark:text-[#a09bb0] hover:text-[#895af6] dark:hover:text-[#895af6] text-sm font-medium transition-colors py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Search our help center</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 mt-auto">
        <div className="max-w-[960px] mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-4 md:gap-8 text-center md:text-left">
          <p className="text-[#6d608a] dark:text-[#7d7595] text-sm font-normal">
            © 2024 ContentCraft. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/terms"
              className="text-[#6d608a] dark:text-[#7d7595] text-sm font-normal hover:text-[#895af6] dark:hover:text-[#895af6] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-[#6d608a] dark:text-[#7d7595] text-sm font-normal hover:text-[#895af6] dark:hover:text-[#895af6] transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
