"use client";

import Link from "next/link";

export default function Lesson7() {
  return (
    <div className="min-h-screen bg-gray-50 text-right px-4 py-10" dir="rtl">

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>تقدم الدورة</span>
            <span>6 / 6</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[100%] bg-blue-500 rounded-full"></div>
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
                الدرس السادس
                <span className="block text-blue-600 text-2xl mt-2">
                  حفظ الملفات والمستندات
                </span>
              </h1>

              <p className="text-gray-600 leading-loose">
                تعلم كيفية حفظ المستندات والتعديل عليها والرجوع إليها في أي وقت.
              </p>

            </div>

            {/* IMAGE */}
            <div className="flex justify-center">

              <div className="w-[100px] h-[420px] rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden">

                <img
                  src="/images/Lesson7.png"
                  alt="حفظ الملفات"
                  className="w-full h-full object-contain p-6"
                />

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

            <p className="text-gray-600">• فهم مفهوم الحفظ (Save)</p>
            <p className="text-gray-600">• حفظ المستندات على الجهاز</p>
            <p className="text-gray-600">• استرجاع الملفات لاحقًا</p>

          </div>

          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

              <h2 className="text-blue-600 font-bold text-xl mb-2">
                حفظ الملفات والمستندات
              </h2>

              <p className="text-gray-600 leading-loose">
                الحفظ (Save) يستخدم لتخزين المستند على الجهاز حتى يمكن الرجوع إليه أو تعديله لاحقًا في أي وقت.
              </p>

            </div>

          </div>

        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-4 pt-6">

          <Link href="/Lessons/Lesson5">
            <button className="px-6 py-3 bg-white border rounded-xl hover:bg-gray-50 transition">
              ← السابق
            </button>
          </Link>

          <Link href="/">
            <button className="px-6 py-3 bg-white border rounded-xl hover:bg-gray-50 transition">
              الرئيسية
            </button>
          </Link>

          <button disabled className="px-6 py-3 bg-gray-200 text-gray-400 rounded-xl">
            انتهت الدورة ✓
          </button>

        </div>

      </div>
    </div>
  );
}