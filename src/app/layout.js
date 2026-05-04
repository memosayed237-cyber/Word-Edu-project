import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ET-ASU | منصة تعلم الوورد",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-[#020617] text-slate-50 min-h-screen overflow-x-hidden">
        
        {/* --- الخلفية التفاعلية الاحترافية (Cyber Grid Background) --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* طبقة الشبكة */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* أضواء النيون المتحركة */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* --- شريط القوائم العلوي (Navbar) --- */}
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              ET-ASU
            </div>
            
            <div className="flex items-center gap-8">
              <Link href="/" className="hover:text-blue-400 transition-colors font-medium">الرئيسية</Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors font-medium">عن المنصة</Link>
              <Link href="/exam" className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full transition-all font-bold shadow-lg shadow-blue-900/20">
                الاختبار
              </Link>
            </div>
          </div>
        </nav>

        {/* --- محتوى الصفحات --- */}
        <main className="relative z-10 pt-10 pb-20">
          {children}
        </main>

      </body>
    </html>
  );
}