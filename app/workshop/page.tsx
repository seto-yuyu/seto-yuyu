import { PageShell } from "../components/PageShell";
import { LineIcon, AgeIcon } from "../components/icons";

const workshopContents = [
  {
    no: "01",
    title: "スロセの基礎知識",
    body: "スロセとは何か、なぜ女性の満足度向上に大切なのかを、わかりやすく解説します。",
  },
  {
    no: "02",
    title: "火の性・水の性を理解する",
    body: "男性と女性の性質の違いを理解し、パートナーとのすれ違いを減らすための視点を学びます。",
  },
  {
    no: "03",
    title: "マッサージ実践入門",
    body: "心を開くタッチの方法、マッサージを起点としたスロセの実践的なアプローチを紹介します。",
  },
  {
    no: "04",
    title: "Q&Aセッション",
    body: "参加者からの質問にリアルタイムで回答します。疑問点や実践上の悩みをお気軽にどうぞ。",
  },
];

const faqs = [
  {
    q: "参加は完全無料ですか？",
    a: "はい、現在開催しているワークショップはすべて無料でご参加いただけます。",
  },
  {
    q: "パートナーがいなくても参加できますか？",
    a: "もちろんです。スロセの知識は将来の関係性を豊かにするものでもあり、おひとりでも十分に学んでいただけます。",
  },
  {
    q: "どのように参加申し込みをしますか？",
    a: "LINEに登録後、ワークショップの案内が届きます。案内に従ってお申し込みください。",
  },
];

export default function WorkshopPage() {
  return (
    <PageShell>
      {/* ========== Hero ========== */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #FDF6E3 0%, #EAF3F7 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 border border-gold text-gold"
              style={{ borderRadius: "50px" }}
            >
              <AgeIcon />
              18歳以上限定
            </div>
            <div
              className="inline-flex items-center text-xs font-bold px-4 py-1.5 text-white"
              style={{ borderRadius: "50px", backgroundColor: "#C8A96E" }}
            >
              無料参加
            </div>
          </div>
          <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
            WORKSHOP
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-deep-teal mb-4 leading-tight">
            スロセ
            <br />
            ワークショップ
          </h1>
          <div className="mx-auto rounded-full w-10 h-[3px] bg-gold mb-6" />
          <p className="text-deep-teal/70 text-base md:text-lg leading-relaxed mb-10">
            パートナーとの関係性・絆を深めるための
            <br className="hidden md:block" />
            スロセ知識と実践を、無料でお届けします。
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-3 text-white font-bold px-10 py-5 text-xl hover:opacity-90 transition-opacity shadow-2xl"
            style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
          >
            <LineIcon size={24} />
            LINEで参加申し込み
          </a>
          <p className="mt-5 text-xs text-deep-teal/45">
            ※ 登録無料・18歳未満の方の参加はお断りしております
          </p>
        </div>
      </section>

      {/* ========== Workshop Overview ========== */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FDF6E3" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
              OVERVIEW
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-deep-teal mb-4">
              ワークショップの内容
            </h2>
            <div className="mx-auto rounded-full w-10 h-[3px] bg-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {workshopContents.map((item) => (
              <div
                key={item.no}
                className="rounded-2xl p-8 border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#EAF3F7" }}
              >
                <p
                  className="text-4xl font-black mb-3 leading-none"
                  style={{ color: "rgba(200,169,110,0.25)" }}
                >
                  {item.no}
                </p>
                <h3 className="text-lg font-bold text-deep-teal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-deep-teal/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== For Whom ========== */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EAF3F7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
              FOR WHOM
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-deep-teal mb-4">
              こんな方におすすめ
            </h2>
            <div className="mx-auto rounded-full w-10 h-[3px] bg-gold" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "パートナーとの関係性をもっと豊かにしたい",
              "スロセに興味があるが、どこから始めればいいかわからない",
              "パートナーとのすれ違いをなんとかしたい",
              "女性として自分を大切にする方法を知りたい",
              "スロセの基礎から体系的に学びたい",
              "同じ悩みを持つ仲間とつながりたい",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl p-5"
                style={{ backgroundColor: "#FDF6E3" }}
              >
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-white text-xs font-bold"
                  style={{ backgroundColor: "#C8A96E" }}
                >
                  ✓
                </span>
                <p className="text-sm text-deep-teal/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FDF6E3" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
              FAQ
            </p>
            <h2 className="text-3xl font-black text-deep-teal mb-4">
              よくある質問
            </h2>
            <div className="mx-auto rounded-full w-10 h-[3px] bg-gold" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(200,169,110,0.25)" }}
              >
                <div
                  className="px-6 py-4 flex items-start gap-3"
                  style={{ backgroundColor: "#EAF3F7" }}
                >
                  <span className="font-black text-gold text-lg shrink-0">Q</span>
                  <p className="font-bold text-deep-teal text-sm leading-relaxed pt-0.5">
                    {faq.q}
                  </p>
                </div>
                <div className="px-6 py-4 flex items-start gap-3 bg-white">
                  <span className="font-black text-pale-blue text-lg shrink-0">A</span>
                  <p className="text-deep-teal/70 text-sm leading-relaxed pt-0.5">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Register CTA ========== */}
      <section
        id="register"
        className="py-24 px-6"
        style={{
          background: "linear-gradient(135deg, #2C5F6E 0%, #1a3a45 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.25em] mb-4 text-gold">
            FREE REGISTRATION
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            LINEで参加申し込み
          </h2>
          <p className="text-white/70 text-base mb-3 leading-relaxed">
            LINEに登録するとワークショップの案内が届きます。
            <br />
            参加費は完全無料です。
          </p>
          <div
            className="inline-flex items-center gap-2 text-xs px-4 py-2 mb-8"
            style={{
              borderRadius: "50px",
              border: "1px solid rgba(200,169,110,0.5)",
              color: "#C8A96E",
            }}
          >
            <AgeIcon />
            18歳以上限定のワークショップです
          </div>
          <br />
          <a
            href="#"
            className="inline-flex items-center gap-3 text-white font-bold px-10 py-5 text-xl hover:opacity-90 transition-opacity shadow-2xl"
            style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
          >
            <LineIcon size={24} />
            LINEで無料参加申し込み
          </a>
          <p className="mt-8 text-xs leading-relaxed text-white/40">
            ※ 本サービスは18歳以上の方を対象としております。
            <br />
            18歳未満の方の登録・利用はお断りしております。
          </p>
        </div>
      </section>
    </PageShell>
  );
}
