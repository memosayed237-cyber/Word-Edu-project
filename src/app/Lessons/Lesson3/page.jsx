"use client";

export default function Lesson4() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-right" dir="rtl">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
        <h1 className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-300">
          الدرس الثالث: تنسيق النصوص والفقرات
        </h1>
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 mb-10 shadow-2xl bg-black/20">
          <img src="/images/Lesson4.png" alt="تنسيق النصوص" className="w-full h-auto object-cover" />
        </div>
        <div className="text-xl text-blue-50 leading-relaxed space-y-6">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <p>يشمل التنسيق تغيير نوع الخط وحجمه، واستخدام الألوان، وضبط محاذاة الفقرات (يمين، يسار، وسط) والتباعد بين الأسطر.</p>
          </div>
        </div>
     
</div>
    </div>
  );
}