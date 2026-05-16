import { PageShell } from "../components/PageShell";
import { LineIcon, AgeIcon } from "../components/icons";

export default function SurosePage() {
  return (
    <PageShell>
      {/* ========== Page Hero ========== */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ backgroundColor: "#FDF6E3" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-10"
          aria-hidden="true"
        >
          <span
            className="font-black leading-none text-deep-teal opacity-[0.04]"
            style={{ fontSize: "40vw" }}
          >
            知
          </span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 mb-6 border border-gold text-gold"
            style={{ borderRadius: "50px" }}
          >
            <AgeIcon />
            18歳以上限定
          </div>
          <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
            ABOUT SUROSE
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-deep-teal mb-4 leading-tight">
            スロセとは
          </h1>
          <div className="mx-auto rounded-full w-10 h-[3px] bg-gold mb-6" />
          <p className="text-deep-teal/70 text-base md:text-lg leading-relaxed">
            「知ると、変わる。」
            <br />
            スロセという知識が、パートナーとの関係性を根本から変えます。
          </p>
        </div>
      </section>

      {/* ========== Section 1: スロセとは何か ========== */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EAF3F7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
                SECTION 01
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-deep-teal mb-6 leading-tight">
                スロセとは
                <br />
                何か？
              </h2>
              <div className="w-10 h-[3px] bg-gold rounded-full mb-6" />
              <p className="text-deep-teal/70 text-base leading-relaxed mb-4">
                スロセとは、パートナーとの時間を丁寧に、ゆっくりと育んでいくためのアプローチです。急がず、焦らず、お互いの心と体の状態に寄り添いながら、深いつながりを築いていきます。
              </p>
              <p className="text-deep-teal/70 text-base leading-relaxed mb-4">
                マッサージやタッチを起点とした実践は、体の緊張をほぐし、心の壁を下げる効果があります。言葉だけでは伝えられない気持ちを、ふれあいを通じて表現することができます。
              </p>
              <p className="text-deep-teal/70 text-base leading-relaxed">
                スロセは特別なテクニックではなく、相手を思いやる「姿勢」そのものです。その姿勢を学ぶことで、日常の関係性が少しずつ、でも確かに変わっていきます。
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className="w-full max-w-sm aspect-square rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: "#FDF6E3", border: "2px solid rgba(200,169,110,0.3)" }}
              >
                <div className="text-center px-8">
                  <div
                    className="text-7xl font-black mb-2"
                    style={{ color: "#C8A96E", opacity: 0.15 }}
                  >
                    ス
                  </div>
                  <p className="text-deep-teal font-black text-2xl mb-2">スロセ</p>
                  <p className="text-deep-teal/50 text-sm">
                    丁寧に、ゆっくりと、<br />深いつながりへ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 2: 火の性・水の性 ========== */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FDF6E3" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
              SECTION 02
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-deep-teal mb-4">
              男性は火の性、女性は水の性
            </h2>
            <div className="mx-auto rounded-full w-10 h-[3px] bg-gold mb-6" />
            <p className="text-deep-teal/65 text-sm leading-relaxed max-w-xl mx-auto">
              二つの異なる性質を理解することが、スロセの出発点です。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* 火の性 */}
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#fff8f0", border: "2px solid rgba(200,169,110,0.3)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(200,169,110,0.15)" }}
                >
                  <FireIcon />
                </div>
                <h3 className="text-xl font-black text-deep-teal">男性は「火の性」</h3>
              </div>
              <p className="text-deep-teal/70 text-sm leading-relaxed mb-3">
                火はすぐに燃え上がり、熱く、速く動きます。男性の性質はこの「火」に例えられます。
              </p>
              <ul className="space-y-2">
                {["すぐに熱くなる", "視覚や刺激に反応しやすい", "短い時間で完結しやすい"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-deep-teal/65">
                    <span className="text-gold mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 水の性 */}
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#f0f7fa", border: "2px solid rgba(184,212,220,0.5)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(184,212,220,0.3)" }}
                >
                  <WaterIcon />
                </div>
                <h3 className="text-xl font-black text-deep-teal">女性は「水の性」</h3>
              </div>
              <p className="text-deep-teal/70 text-sm leading-relaxed mb-3">
                水はゆっくり温まり、時間をかけて深く満たされます。女性の性質はこの「水」に例えられます。
              </p>
              <ul className="space-y-2">
                {["時間をかけてゆっくり温まる", "心の安心感が大切", "感情・ふれあいに反応しやすい"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-deep-teal/65">
                    <span className="text-gold mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: "#EAF3F7" }}
          >
            <p className="text-deep-teal font-bold text-lg mb-2">
              この違いを知ることが、すれ違いをなくす第一歩
            </p>
            <p className="text-deep-teal/65 text-sm leading-relaxed">
              どちらが正しい・間違いではありません。ただ、違うのです。<br />
              スロセはその違いを尊重し、女性が本来持つ「水の性質」を大切にするアプローチです。
            </p>
          </div>
        </div>
      </section>

      {/* ========== Section 3: 実践するには ========== */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EAF3F7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
              SECTION 03
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-deep-teal mb-4">
              スロセを実践するには
            </h2>
            <div className="mx-auto rounded-full w-10 h-[3px] bg-gold mb-6" />
            <p className="text-deep-teal/65 text-sm leading-relaxed max-w-xl mx-auto">
              特別な準備は必要ありません。今日から始められる3つのステップをご紹介します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "知識を持つ",
                body: "まず「なぜスロセが大切なのか」を理解することから始めます。知識が姿勢を変え、姿勢が行動を変えます。",
              },
              {
                step: "02",
                title: "ふれあいから始める",
                body: "マッサージや軽いタッチから始めてみましょう。言葉より先に体を通じた安心感を伝えることが大切です。",
              },
              {
                step: "03",
                title: "時間をかける",
                body: "急がないことがスロセの核心です。結果を求めず、プロセスそのものを大切にする姿勢が関係性を深めます。",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl p-8 border-t-4 border-gold shadow-sm"
                style={{ backgroundColor: "#FDF6E3" }}
              >
                <p
                  className="text-4xl font-black mb-4 leading-none"
                  style={{ color: "rgba(200,169,110,0.25)" }}
                >
                  {item.step}
                </p>
                <h3 className="text-lg font-bold text-deep-teal mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-deep-teal/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* LINE CTA */}
          <div
            className="rounded-3xl py-14 px-8 text-center"
            style={{
              background: "linear-gradient(135deg, #2C5F6E 0%, #1a3a45 100%)",
            }}
          >
            <p className="text-xs font-bold tracking-[0.25em] mb-4 text-gold">
              START TODAY
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              まずはLINEで学びを始める
            </h3>
            <p className="text-white/65 text-sm mb-8 leading-relaxed">
              スロセの基礎知識から実践方法まで、<br />LINEで無料でお届けします。
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 text-base hover:opacity-90 transition-opacity shadow-xl"
              style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
            >
              <LineIcon size={20} />
              LINEで無料登録する
            </a>
            <p className="mt-6 text-xs text-white/35">
              ※ 18歳未満の方の登録はお断りしております
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FireIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8D4DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}
