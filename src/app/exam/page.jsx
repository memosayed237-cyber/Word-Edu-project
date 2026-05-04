"use client";
import { useState } from 'react';

export default function ExamPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const correctAnswer = 2; 

  const handleCheck = () => {
    if (selectedOption !== null) {
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-right" dir="rtl">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[2rem] shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
         اختبار تفاعلي 
        </h2>

        <p className="text-xl text-blue-100 mb-8">
          س: أي من المهام التالية هي الوظيفة الأساسية لبرنامج Microsoft Word؟
        </p>

        <div className="space-y-4">
          {[
            { id: 1, text: "إجراء العمليات الحسابية المعقدة" },
            { id: 2, text: "إنشاء وتنسيق المستندات النصية" },
            { id: 3, text: "تعديل مقاطع الفيديو باحترافية" }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => { setSelectedOption(option.id); setShowResult(false); }}
              className={`w-full p-4 rounded-xl text-right transition-all border ${
                selectedOption === option.id 
                ? 'bg-blue-600 border-blue-400 text-white' 
                : 'bg-white/5 border-white/10 text-blue-100 hover:bg-white/10'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        <button 
          onClick={handleCheck}
          className="w-full mt-8 py-4 bg-gradient-to-l from-green-500 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
        >
          تحقق من إجابتك
        </button>

        {showResult && (
          <div className={`mt-6 p-4 rounded-xl text-center animate-bounce ${
            selectedOption === correctAnswer ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
          }`}>
            {selectedOption === correctAnswer 
              ? "✨ أحسنت! إجابة صحيحة، أنت متميز." 
              : "❌ حاول مرة أخرى، يمكنك مراجعة الدرس الأول."}
          </div>
        )}
      </div>
    </div>
  );
}