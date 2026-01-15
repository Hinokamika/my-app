"use client";

import { Card } from "@/components/ui/card";
import {
  Brain,
  CircleCheck,
  CirclePlay,
  Dot,
  Languages,
  MoveRight,
  SaveAll,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="w-full py-4 bg-white dark:bg-black text-black dark:text-white border-b dark:border-transparent sticky top-0 z-50">
        <div className="w-full mx-auto flex justify-between items-center px-10">
          <div className="flex items-center">
            <Brain className="w-6 h-6 mr-2 text-purple-600" />
            <h2 className="text-2xl font-bold tracking-tight">
              Content Generator
            </h2>
          </div>
          <div className="hidden md:flex gap-10">
            <Link
              href=""
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href=""
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href=""
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Blog
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/auth/signIn"
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signUp"
              type="button"
              className="bg-purple-600 dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 w-full">
        <div className="flex gap-10 px-9 py-[80px]">
          <div className="flex flex-col gap-8 max-w-[50%]">
            <div className="flex bg-purple-100 dark:bg-gray-100 text-purple-600 dark:text-black border rounded-[15px] px-3 py-1 w-fit">
              <Dot className="" />
              <p>NEW: AI OUTLINE GENERATOR</p>
            </div>
            <div>
              <h1 className="text-[68px] font-bold">
                Transform Ideas
                <br />
                Into Engaging
                <br />
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
              <button className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 font-semibold rounded-[10px] hover:opacity-80 transition-opacity">
                Get Started for Free
              </button>
              <button className="flex gap-2 border rounded-[10px] bg-transparent text-black dark:text-white px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                <CirclePlay className="text-purple-500"/>
                View Demo
              </button>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <CircleCheck className="text-green-500"/>
                No credit card required
              </div>
              <div className="flex gap-2">
                <CircleCheck className="text-green-500"/>
                14-day free trial
              </div>
            </div>
          </div>
          <Image
            src={"/images/image_landing.png"}
            alt={""}
            width={800}
            height={600}
            className="w-full h-full rounded-[15px] shadow-lg"
          />
        </div>
        <div className="flex justify-center items-center text-center py-[60px] w-full text-black dark:text-gray-600 bg-gray-300 dark:bg-gray-300">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-balance leading-relaxed">
              Powerful Features built for creators
            </h2>
            <p>Sign up for free and start creating content today.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-[80px] w-full px-9">
          <div className="flex flex-col gap-5">
            <h2 className="text-[36px] font-bold text-balance leading-relaxed">
              Powerful Features built for creators
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-300 text-balance leading-relaxed">
              Everything you need to scale your content marketing efforts
              without the burnout.
              <br />
              From ideation to polishing, we&apos;ve got you
              <br />
              covered.
            </p>
            <Link href="" className="flex gap-2 text-purple-400">
              Explore all capabilities <MoveRight />
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            <Card className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 border-none">
              <Search className="text-purple-600 w-10 h-10 bg-purple-100 p-2 rounded-[8px]" />
              <h2 className="text-xl font-bold">SEO Optimization</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Rank higher with built-in keyword suggestions and semantic
                analysis as you type.
              </p>
            </Card>
            <Card className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 border-none">
              <Languages className="text-blue-600 w-10 h-10 bg-blue-100 p-2 rounded-[8px]" />
              <h2 className="text-xl font-bold">Multi-language support</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Generate and translate content in over 25+ languages instantly to reach global audience.
              </p>
            </Card>
          </div>
          <div className="flex flex-col gap-6">
            <Card className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 border-none">
              <SlidersHorizontal className="text-pink-600 w-10 h-10 bg-pink-100 p-2 rounded-[8px]" />
              <h2 className="text-xl font-bold">Tone Adjustment</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Switch between professional, friendly, witty, or persuasive
                tones with one click.
              </p>
            </Card>
            <Card className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-800 border-none">
              <SaveAll className="text-orange-600 w-10 h-10 bg-orange-100 p-2 rounded-[8px]" />
              <h2 className="text-xl font-bold">Plagiarism Checker</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Ensure your content is 100% original with our integrated
                scanning technology.
              </p>
            </Card>
          </div>
        </div>
        <div className="flex justify-center items-center py-[80px] w-full px-4">
          <div className="bg-purple-600 p-12 md:p-16 rounded-[20px] flex flex-col gap-6 text-center w-full max-w-4xl shadow-xl">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
              Ready to 10x your writing speed?
            </h2>
            <p className="text-purple-100 text-lg md:text-xl max-w-lg mx-auto text-pretty font-medium">
              Join 50,000+ content creators who are saving hours every week with
              ContentCraft.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <button
                type="button"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 font-bold rounded-xl transition-colors shadow-sm"
              >
                Start your free trial
              </button>
              <button
                type="button"
                className="bg-transparent text-white border border-purple-400 hover:bg-purple-500/50 px-8 py-3 font-semibold rounded-xl transition-colors"
              >
                Talk to sales
              </button>
            </div>
            <p className="text-purple-200 text-sm">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
