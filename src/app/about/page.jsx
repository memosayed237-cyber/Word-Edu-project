"use client";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" dir="rtl">
      {/* البطاقة الرئيسية */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* الجزء العلوي - العنوان */}
        <div className="bg-gradient-to-l from-blue-600/40 to-indigo-600/40 p-8 text-center border-b border-white/10">
          <h1 className="text-3xl font-black text-white tracking-wide">
            بطاقة التعريف الرقمية
          </h1>
          <div className="h-1 w-20 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* محتوى البيانات بتنسيق مركزي مركب */}
        <div className="p-10 space-y-10">
          
          <div className="grid grid-cols-1 gap-8">
            {/* الاسم */}
            <div className="text-center group">
              <p className="text-blue-400 text-sm font-bold mb-2 uppercase tracking-widest">الاسم الكامل</p>
              <p className="text-white text-3xl font-bold bg-white/5 py-3 rounded-2xl border border-white/5 group-hover:border-blue-500/50 transition-all">
                منة الله سيد محمد رمضان
              </p>
            </div>

            {/* صف المعلومات الثنائية */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-blue-400 text-sm font-bold mb-2">الفرقة</p>
                <p className="text-white text-xl font-semibold bg-white/5 py-3 rounded-2xl border border-white/5">الثالثة</p>
              </div>
              <div className="text-center">
                <p className="text-blue-400 text-sm font-bold mb-2">التخصص</p>
                <p className="text-white text-xl font-semibold bg-white/5 py-3 rounded-2xl border border-white/5">تكنولوجيا التعليم</p>
              </div>
            </div>
          </div>

          {/* قسم الإشراف - بتصميم أبسط وأجمل */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-center text-blue-300/70 text-sm mb-6 font-medium">إشراف أكاديمي</p>
            <div className="flex justify-center gap-4">
              <div className="bg-gradient-to-br from-white/10 to-transparent px-6 py-3 rounded-full border border-white/10 text-white font-medium shadow-sm">
                د/ أمل حسان
              </div>
              <div className="bg-gradient-to-br from-white/10 to-transparent px-6 py-3 rounded-full border border-white/10 text-white font-medium shadow-sm">
                د/ محمد عادل
              </div>
            </div>
          </div>

        </div>
        
        {/* تذييل البطاقة لإعطاء شكل جمالي */}
        <div className="h-2 bg-gradient-to-l from-blue-500 to-indigo-500"></div>
      </div>
    </div>
  );
}