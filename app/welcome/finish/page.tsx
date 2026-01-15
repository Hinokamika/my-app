import Link from "next/link";
import { Check, CircleCheck, Sparkles, TrendingUp, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinishPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-purple-100 p-4 font-sans">
      {/* Main Card Container */}
      <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-xl overflow-hidden relative border border-purple-100/50">
        
        {/* Celebration Header Image */}
        <div className="h-48 w-full bg-[#ede9fe]/50 relative overflow-hidden flex items-center justify-center">
          {/* Abstract confetti background pattern */}
          <div 
            className="absolute inset-0 opacity-20" 
            style={{ 
              backgroundImage: 'radial-gradient(#895af6 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}
          />
          {/* Note: In a production app, use next/image here */}
          <img 
            alt="Abstract colorful 3d shapes floating celebrating success" 
            className="w-full h-full object-cover opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR4D8zvMYJixx0wjRtiraSnIDAJgHbM1VTwjts8IJt2OIsi9mh_Q_Tm9hIzyDp-iRZIotcf_5AV6q3sIpCt73ttLnvKemx0QTMDVFUwiiEB7ax7juWuJNoeI3feRznPxa8QXTNyuIrHCwVEclP21T3Ajh1e-VFwXmRezbLu40SONyVA1PGleM3zeFrLWmIzJZ0Cd-8d2YRDqw6lEfz4P18eagMNIH-BYFYXf3hSByl0Ln4sVqcXom5tV4xCRWQr4aQQvpLfKmR4ZI"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Content Body */}
        <div className="px-8 pb-10 pt-2 flex flex-col items-center text-center">
          
          {/* Progress Stepper */}
          <div className="flex items-center gap-2 mb-8 -mt-16 bg-white px-4 py-2 rounded-full shadow-sm z-10">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#895af6] text-white">
              <Check className="w-[14px] h-[14px] stroke-[4]" />
            </div>
            <div className="w-8 h-1 bg-[#895af6] rounded-full" />
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#895af6] text-white">
              <Check className="w-[14px] h-[14px] stroke-[4]" />
            </div>
            <div className="w-8 h-1 bg-[#895af6] rounded-full" />
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#895af6] text-white">
              <Check className="w-[14px] h-[14px] stroke-[4]" />
            </div>
          </div>

          {/* Headlines */}
          <h1 className="text-gray-900 text-4xl font-black tracking-tight mb-2">You&apos;re all set!</h1>
          <p className="text-gray-500 text-lg font-medium mb-8">Start creating amazing content in seconds</p>

          {/* Success Hero Icon */}
          <div className="mb-6 relative group">
            <div className="absolute inset-0 bg-[#895af6]/20 rounded-full scale-110 blur-xl opacity-50 group-hover:scale-125 transition-transform duration-500" />
            <div className="w-20 h-20 bg-[#ede9fe] rounded-full flex items-center justify-center relative z-10 mx-auto">
              <CircleCheck className="text-[#895af6] w-12 h-12" />
            </div>
          </div>

          <h2 className="text-gray-800 text-2xl font-bold mb-8 tracking-tight">Your account is ready</h2>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10">
            {/* Feature 1 */}
            <div className="bg-[#f5f3ff] rounded-xl p-4 flex flex-col items-center md:items-start text-center md:text-left border border-[#895af6]/10 transition-transform hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#895af6] shadow-sm mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-gray-900 font-bold text-sm mb-1">10 Free Credits</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Start generating content immediately</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#f5f3ff] rounded-xl p-4 flex flex-col items-center md:items-start text-center md:text-left border border-[#895af6]/10 transition-transform hover:-translate-y-1 duration-300 delay-75">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#895af6] shadow-sm mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-gray-900 font-bold text-sm mb-1">SEO Tools</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Optimize every post for search</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#f5f3ff] rounded-xl p-4 flex flex-col items-center md:items-start text-center md:text-left border border-[#895af6]/10 transition-transform hover:-translate-y-1 duration-300 delay-150">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#895af6] shadow-sm mb-3">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-gray-900 font-bold text-sm mb-1">Smart Templates</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Use proven content frameworks</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/dashboard" className="w-full">
            <Button className="w-full bg-[#895af6] hover:bg-[#7048c9] text-white font-bold text-lg py-6 rounded-xl shadow-lg shadow-[#895af6]/30 flex items-center justify-center gap-2 group h-auto">
              Start Creating
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Footer Text */}
          <p className="mt-6 text-gray-400 text-sm">
            You can customize these settings anytime in <Link className="text-[#895af6] hover:underline font-medium" href="/settings">Settings</Link>
          </p>

        </div>
      </div>
    </div>
  );
}
