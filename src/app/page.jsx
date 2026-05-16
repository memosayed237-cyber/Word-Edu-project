"use client";
import Link from "next/link";

export default function HomePage() {
  const lessons = [
    { id: 1, title: "التعريف بالبرنامج", desc: "ما هو وورد وما أهميته؟" },
    { id: 2, title: "واجهة البرنامج", desc: "شرح القوائم والأدوات الأساسية" },
    { id: 3, title: "تنسيق الفقرات", desc: "المحاذاة، التباعد، والترقيم" },
    { id: 4, title: "إدراج الجداول", desc: "تصميم وتنظيم البيانات بجداول" },
    { id: 5, title: "إعدادات الصفحة", desc: "إضافة الوسائط وتنسيقها" },
    { id: 6, title: "الطباعة والحفظ", desc: "إعداد المستند للإخراج النهائي" },
  ];

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>

      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(12px)",
          background: "rgba(10,15,30,0.6)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: "900",
            color: "#38bdf8",
            letterSpacing: "1px",
          }}
        >
          ET-ASU
        </div>

        <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          <Link href="/" className="nav-link">
            الرئيسية
          </Link>

          <Link href="/about" className="nav-link">
            عن المنصة
          </Link>

          <Link href="/exam">
            <button className="hero-btn">ابدأ الاختبار</button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          marginTop: "80px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "35px 60px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg, rgba(70, 146, 168, 0.15), rgba(72, 138, 219, 0.08))",
            border: "1px solid rgba(109, 192, 228, 0.3)",
            boxShadow:
              "0 0 40px rgba(56,189,248,0.15), inset 0 0 25px rgba(56,189,248,0.08)",
          }}
        >
          <h1 style={{ fontSize: "3.5rem", marginBottom: "15px", color: "#fff" }}>
            منصة تعلم Microsoft Word
          </h1>

          <p style={{ maxWidth: "700px", color: "#94a3b8", fontSize: "1.15rem", margin: "auto" }}>
            تعلم برنامج Word من الصفر حتى الاحتراف من خلال دروس تفاعلية واختبارات عملية بشكل عصري وممتع.
          </p>
        </div>
      </section>

      {/* LESSONS */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "70px auto",
          padding: "0 20px",
        }}
      >
        <div className="lessons-grid">
          {lessons.map((lesson) => (
            <Link
              href={`/Lessons/Lesson${lesson.id}`}
              key={lesson.id}
              style={{ textDecoration: "none" }}
            >
              <div className="lesson-card">
                <div className="lesson-number">
                  Lesson {lesson.id}
                </div>

                <div>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.desc}</p>
                </div>

                <div style={{ marginTop: "25px" }}>
                  <span className="btn-cyan">
                    دخول الدرس →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ❌ شيلنا زرار السابق والتالي فقط */}

      </div>
    </div>
  );
}