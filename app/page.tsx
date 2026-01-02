"use client";

import { Brain, CirclePlay, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex justify-around items-center py-4 bg-white dark:bg-black text-black dark:text-white border-b dark:border-transparent">
        <div className="flex items-center">
          <Brain className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold">Content Generator</h2>
        </div>
        <div className="flex gap-7">
          <Link
            href=""
            className="font-semibold hover:text-gray-600 dark:hover:text-gray-300"
          >
            Features
          </Link>
          <Link
            href=""
            className="font-semibold hover:text-gray-600 dark:hover:text-gray-300"
          >
            Pricing
          </Link>
          <Link
            href=""
            className="font-semibold hover:text-gray-600 dark:hover:text-gray-300"
          >
            Blog
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-transparent text-black dark:text-white px-4 py-2 font-semibold rounded hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-semibold rounded-[10px] hover:opacity-80 transition-opacity"
          >
            Sign Up
          </button>
        </div>
      </header>
      <main className="flex justify-center items-center bg-gray-50 dark:bg-gray-900 w-full px-9 py-4">
        <div className="flex gap-10 py-[80px]">
          <div className="flex flex-col gap-8 max-w-[50%]">
            <div className="flex bg-purple-100 dark:bg-gray-100 text-purple-600 dark:text-black border rounded-[15px] px-3 py-1 w-fit">
              <Dot className="" />
              <p>NEW: AI OUTLINE GENERATOR</p>
            </div>
            <div>
              <h1 className="text-6xl font-bold">
                Transform Ideas Into Engaging{" "}
                <span className="text-purple-600">Content</span> in Seconds
              </h1>
            </div>
            <div>
              <p className="text-xl text-gray-500 dark:text-gray-300 text-balance leading-relaxed">
                Stop staring at a blank page. Let ContentCraft&apos;s AI assist
                you in drafting blog posts, emails, and social media captions
                10x faster with Notion-style editor.
              </p>
            </div>
            <div className="flex gap-5">
              <button className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-semibold rounded-[10px] hover:opacity-80 transition-opacity">
                Get Started for Free
              </button>
              <button className="flex gap-2 border rounded-[10px] bg-transparent text-black dark:text-white px-4 py-2 font-semibold rounded hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                <CirclePlay/>
                View Demo
              </button>
            </div>
          </div>
          <Image
            src={"/images/image_landing.png"}
            alt={""}
            width={700}
            height={700}
            className="w-100% h-100% object-cover rounded-[15px]"
          />
        </div>
      </main>
    </div>
  );
}
