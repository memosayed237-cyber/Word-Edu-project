"use client";
import Image from 'next/image';

export default function Lesson1() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-right" dir="rtl">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
        
        <h1 className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-300">
          الدرس الأول: تعريف البرنامج وأهميته
        </h1>
        
        {/* الحاوية المصلحة للصورة */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 mb-10 shadow-2xl bg-black/20">
          <img 
            src="/images/Lesson1.jpeg" 
            alt="واجهة برنامج وورد"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="text-xl text-blue-50 leading-relaxed space-y-6">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">ما هو برنامج Microsoft Word؟</h2>
            <p>
              هو أقوى وأشهر برامج معالجة النصوص في العالم، وهو أحد برامج حزمة Microsoft Office. 
              يُستخدم لكتابة المستندات، التقارير، والكتب، مع إمكانية تنسيقها وإضافة الصور والجداول إليها بشكل احترافي.
            </p>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">أهمية البرنامج:</h2>
            <ul className="list-disc list-inside space-y-3 mr-4">
              <li>سهولة كتابة وتعديل النصوص وتدقيقها إملائياً.</li>
              <li>إمكانية إضافة عناصر مرئية مثل الصور والرسوم البيانية.</li>
              <li>توفير قوالب جاهزة لتوفير الوقت والجهد.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}