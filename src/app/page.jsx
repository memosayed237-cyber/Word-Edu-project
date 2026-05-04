"use client";
import Link from 'next/link';

export default function HomePage() {
  const lessons = [
    { id: 1, title: "التعريف بالبرنامج", desc: "ما هو وورد وما أهميته؟", color: "from-blue-500 to-cyan-400" },
    { id: 2, title: "واجهة البرنامج", desc: "شرح القوائم والأدوات الأساسية", color: "from-purple-500 to-pink-400" },
   
    { id: 3, title: "تنسيق الفقرات", desc: "المحاذاة، التباعد، والترقيم", color: "from-orange-500 to-yellow-400" },
    { id: 4, title: "إدراج الجداول", desc: "تصميم وتنظيم البيانات بجداول", color: "from-rose-500 to-red-400" },
    { id: 5, title: "إعدادات الصفحة", desc: "إضافة الوسائط وتنسيقها", color: "from-indigo-500 to-blue-400" },
    { id: 6, title: "الطباعة والحفظ", desc: "إعداد المستند للإخراج النهائي", color: "from-amber-500 to-orange-400" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10" dir="rtl">
      
      {/* 1. شريط العنوان الكبير والمتفاعل */}
      <section className="relative mb-20 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative bg-[#0f172a] border border-white/10 rounded-[2rem] p-12 text-center overflow-hidden">
          {/* تأثير ضوئي متحرك خلف العنوان */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse"></div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
            منصة تعلم Microsoft Word
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            رحلتك نحو احتراف معالجة النصوص تبدأ من هنا. سبعة دروس تفاعلية مصممة خصيصاً لتكنولوجيا التعليم.
          </p>
        </div>
      </section>

      {/* 2. قسم الدروس بتصميم بطاقات ملونة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lessons.map((lesson) => (
          <Link href={`/Lessons/Lesson${lesson.id}`} key={lesson.id} className="group">
            <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
              
              {/* رقم الدرس كعلامة مائية ملونة */}
              <div className={`absolute top-4 left-6 text-6xl font-black opacity-10 bg-clip-text text-transparent bg-gradient-to-br ${lesson.color}`}>
                0{lesson.id}
              </div>

              <div className={`w-12 h-1.5 rounded-full bg-gradient-to-r ${lesson.color} mb-6`}></div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {lesson.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                {lesson.desc}
              </p>

              <div className="flex items-center text-sm font-bold text-blue-400 group-hover:gap-2 transition-all">
                ابدأ الدرس الآن 
                <span className="mr-2">←</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

</div>

  );
}