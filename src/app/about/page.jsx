"use client";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div dir="rtl" style={{ 
      backgroundColor: '#0a0a1a', 
      height: '100vh', 
      color: 'white', 
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative'
    }}>

      {/* خلفية جمالية خفيفة */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '200px', height: '200px', backgroundColor: 'rgba(59, 130, 246, 0.1)', filter: 'blur(80px)', borderRadius: 'full' }}></div>

      {/* Navbar */}
      <nav style={{ padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div style={{ fontWeight: '900', color: '#3b82f6', letterSpacing: '-1px' }}>ET-ASU</div>
        <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', border: '1px solid #333', padding: '5px 15px', borderRadius: '15px' }}>
          الرئيسية
        </Link>
      </nav>

      {/* الكارت */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 10 }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '600px', 
          backgroundColor: 'rgba(255, 255, 255, 0.03)', 
          backdropFilter: 'blur(15px)', 
          borderRadius: '30px', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          padding: '30px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}>
          
          <div style={{ marginBottom: '20px' }}>
            <span style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '5px 12px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' }}>
              بطاقة تعريفية
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '10px', color: 'white' }}>
              عن المنصة التعليمية
            </h1>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px', borderRight: '3px solid #3b82f6', paddingRight: '15px' }}>
            بيئة تعلم رقمية تفاعلية مخصصة لتدريس مهارات برنامج Microsoft Word، تم تصميمها بمعايير تكنولوجيا التعليم لضمان تجربة تعلم ذكية وفعالة.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '20px' }}>
              <h3 style={{ color: '#3b82f6', fontSize: '1rem', marginBottom: '10px' }}>🎯 الأهداف</h3>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                تقديم محتوى مرئي واضح، تعزيز التعلم الذاتي، وتوفير تقييم فوري.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '20px' }}>
              <h3 style={{ color: '#3b82f6', fontSize: '1rem', marginBottom: '10px' }}>👤 الطالبة</h3>
              <p style={{ fontWeight: 'bold' }}>منة الله سيد</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons (بدون زر الامتحان) */}
      <div style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        marginBottom: '30px',
        zIndex: 10
      }}>

        <Link href="/Lessons/Lesson1">
          <button style={{
            padding: '10px 20px',
            borderRadius: '15px',
            border: '1px solid rgba(59,130,246,0.5)',
            backgroundColor: 'rgba(59,130,246,0.15)',
            color: '#60a5fa',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            📚 ابدأ الدروس
          </button>
        </Link>

        <Link href="/">
          <button style={{
            padding: '10px 20px',
            borderRadius: '15px',
            border: '1px solid #333',
            backgroundColor: 'rgba(255,255,255,0.05)',
            color: '#cbd5e1',
            cursor: 'pointer'
          }}>
            🏠 الرئيسية
          </button>
        </Link>

      </div>

    </div>
  );
}