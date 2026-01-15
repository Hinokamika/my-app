import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f5f8] dark:bg-[#151022] text-[#131118] dark:text-white transition-colors duration-200 gap-6">
      <div className="size-12 text-[#895af6] animate-pulse">
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
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-[#895af6]" />
        <p className="text-[#6d608a] dark:text-[#a09bb0] text-sm font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
