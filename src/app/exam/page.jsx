"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [started, setStarted] = useState(false); // 🔥 ADDED ONLY

  const questions = [
    {
      questionText: 'أي اختصار يستخدم لحفظ الملف في Word؟',
      answerOptions: [
        { answerText: 'Ctrl + S', isCorrect: true },
        { answerText: 'Ctrl + P', isCorrect: false },
        { answerText: 'Ctrl + C', isCorrect: false },
      ],
    },
    {
      questionText: 'ما هو التبويب المسؤول عن إضافة الصور والرسومات؟',
      answerOptions: [
        { answerText: 'عرض (View)', isCorrect: false },
        { answerText: 'إدراج (Insert)', isCorrect: true },
        { answerText: 'تخطيط (Layout)', isCorrect: false },
      ],
    }
  ];

  const handleAnswerClick = (index, correct) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setIsCorrect(correct);

    if (correct) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div dir="rtl" style={{ backgroundColor: '#0a0a1a', minHeight: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      
      <div style={{ backgroundColor: '#161635', padding: '40px', borderRadius: '30px', border: '1px solid #333', width: '100%', maxWidth: '600px', textAlign: 'center' }}>

        {/* 🔥 START SCREEN (ADDED ONLY) */}
        {!started ? (
          <div>
            <h2 style={{ fontSize: '2rem', color: '#60a5fa' }}>
              اختبار Word
            </h2>

            <p style={{ margin: '20px 0', color: '#cbd5e1' }}>
              اضغطي لبدء الاختبار
            </p>

            <button
              onClick={() => setStarted(true)}
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              ▶ ابدأ الاختبار
            </button>
          </div>
        ) : showScore ? (
          
          <div>
            <h2 style={{ fontSize: '2rem', color: '#60a5fa' }}>نتيجة الاختبار</h2>
            <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>
              حصلت على {score} من أصل {questions.length}
            </p>

            <Link href="/">
              <button style={{
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                العودة للرئيسية
              </button>
            </Link>

          </div>

        ) : (
          
          <div>
            <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>
              السؤال {currentQuestion + 1} / {questions.length}
            </span>

            <h3 style={{ fontSize: '1.8rem', margin: '25px 0' }}>
              {questions[currentQuestion].questionText}
            </h3>

            <div style={{ display: 'grid', gap: '15px' }}>
              {questions[currentQuestion].answerOptions.map((option, index) => {

                let bgColor = '#1a1a3a';
                if (selectedAnswer === index) {
                  bgColor = option.isCorrect ? '#10b981' : '#ef4444';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index, option.isCorrect)}
                    style={{
                      padding: '15px',
                      borderRadius: '15px',
                      border: '2px solid #3b82f6',
                      backgroundColor: bgColor,
                      color: 'white',
                      fontSize: '1.1rem',
                      cursor: selectedAnswer === null ? 'pointer' : 'default',
                    }}
                  >
                    {option.answerText}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <div style={{ marginTop: '30px' }}>
                <p style={{
                  fontSize: '1.2rem',
                  color: isCorrect ? '#10b981' : '#ef4444',
                  fontWeight: 'bold'
                }}>
                  {isCorrect ? 'إجابة صحيحة! 🌟' : 'إجابة خاطئة ❌'}
                </p>

                <button
                  onClick={handleNextQuestion}
                  style={{
                    marginTop: '15px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '10px 25px',
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  السؤال التالي
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}