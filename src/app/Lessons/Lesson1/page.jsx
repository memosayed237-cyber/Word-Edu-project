"use client";

import Link from "next/link";

export default function Lesson1() {
  return (
    <div className="min-h-screen bg-gray-50 text-right px-4 py-10" dir="rtl">

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>تقدم الدورة</span>
            <span>1 / 6</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[16%] bg-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* HERO */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

          <div className="grid lg:grid-cols-2 gap-10 p-10 items-center">

            {/* TEXT */}
            <div className="space-y-4">

              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm border border-blue-100">
                Microsoft Word Basics
              </span>

              <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                الدرس الأول
                <span className="block text-blue-600 text-2xl mt-2">
                  تعريف البرنامج وأهميته
                </span>
              </h1>

              <p className="text-gray-600 leading-loose">
                تعلم أساسيات Microsoft Word بشكل بسيط ومنظم وسهل الفهم.
              </p>

            </div>

            {/* ICON FIX (FORCED CONTROL) */}
            <div className="flex justify-center">

              <div className="w-[220px] h-[220px] rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden">

                <div className="w-[220px] h-[280px] flex items-center justify-center">

                  <img
                    src="/images/Lesson1.jpeg"
                    alt="lesson"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-3">

            <h2 className="text-blue-600 font-bold text-xl">
              🎯 أهداف الدرس
            </h2>

            <p className="text-gray-600">• التعرف على واجهة Word</p>
            <p className="text-gray-600">• فهم استخدام البرنامج</p>
            <p className="text-gray-600">• التمييز بين الأدوات</p>

          </div>

          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

              <h2 className="text-blue-600 font-bold text-xl mb-2">
                ما هو Microsoft Word؟
              </h2>

              <p className="text-gray-600 leading-loose">
                برنامج لمعالجة النصوص يساعدك على إنشاء وتنسيق المستندات بسهولة.
              </p>

            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

              <h2 className="text-blue-600 font-bold text-xl mb-2">
                أهمية البرنامج
              </h2>

              <p className="text-gray-600">✔ كتابة وتنسيق النصوص</p>
              <p className="text-gray-600">✔ إضافة الصور والجداول</p>
              <p className="text-gray-600">✔ استخدام قوالب جاهزة</p>

            </div>

          </div>

        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-4 pt-6">

          <button
            disabled
            className="px-6 py-3 bg-gray-200 text-gray-400 rounded-xl"
          >
            السابق
          </button>

          <Link href="/">
            <button className="px-6 py-3 bg-white border rounded-xl hover:bg-gray-50 transition">
              الرئيسية
            </button>
          </Link>

          <Link href="/Lessons/Lesson2">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:scale-105 transition">
              التالي →
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}