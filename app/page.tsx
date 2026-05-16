import { PageShell } from "./components/PageShell";
import { LineIcon, AgeIcon, ArrowIcon } from "./components/icons";

const LINE_URL = "#line-cta";

const suroseCards = [
  {
    title: "スロセとは何か？",
    description:
      "スロセとは、パートナーとの時間を丁寧に、ゆっくりと育んでいくためのアプローチです。マッサージやタッチを起点に、心と体の深いつながりを学びます。",
    icon: <BookIcon />,
  },
  {
    title: "女性は「水の性」",
    description:
      "男性が火のように熱く速い性質を持つのに対し、女性は水のように時間をかけてゆっくり温まる性質があります。スロセはその違いを理解し、女性の満足を大切にする知識です。",
    icon: <WaterIcon />,
  },
  {
    title: "絆が変える関係性",
    description:
      "「知ると、変わる。」正しい知識を持つことで、パートナーとの関係性はより豊かになります。日本の女性の満足度向上を目指した、教育・啓発の情報をお届けします。",
    icon: <HeartIcon />,
  },
];

const blogPosts = [
  {
    id: 1,
    category: "スロセ入門",
    title: "スロセって何？はじめての方へ贈る基本の考え方",
    date: "2026.05.10",
    excerpt:
      "スロセとはパートナーとの絆を深めるアプローチです。マッサージを起点に、心と体のつながりを大切にする方法をわかりやすく解説します。",
  },
  {
    id: 2,
    category: "体験談",
    title: "スロセを知って、夫婦の時間が変わった話",
    date: "2026.05.05",
    excerpt:
      "「以前とは全然違う」読者の方からいただいたリアルな体験談。スロセの知識がどのように関係性に変化をもたらしたのかをご紹介します。",
  },
  {
    id: 3,
    category: "関係性と絆",
    title: "男性は火の性、女性は水の性——その違いを知るだけで変わること",
    date: "2026.04.28",
    excerpt:
      "火と水の性質の違いを理解するだけで、相手への接し方が変わります。パートナーとのすれ違いを減らすためのヒントをお届けします。",
  },
];

export default function Home() {
  return (
    <PageShell>
      <main>
        {/* ========== Hero ========== */}
        <section
          className="relative min-h-screen flex items-center justify-center pt-16"
          style={{ backgroundColor: "#FDF6E3" }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
            aria-hidden="true"
          >
            <span
              className="font-black leading-none text-deep-teal opacity-[0.04]"
              style={{ fontSize: "55vw" }}
            >
              知
            </span>
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
            <div
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 mb-8 border border-gold text-gold"
              style={{ borderRadius: "50px" }}
            >
              <AgeIcon />
              18歳以上限定
            </div>

            <p className="text-deep-teal text-sm md:text-base font-medium tracking-[0.3em] mb-5">
              1000万人の女性にスロセを届ける
            </p>

            <h1 className="text-7xl md:text-9xl font-black leading-none mb-6 text-gold">
              知ると、
              <br />
              変わる。
            </h1>

            <div className="mx-auto mb-6 rounded-full w-12 h-[3px] bg-gold" />

            <p className="text-deep-teal/75 text-base md:text-lg mb-10 leading-relaxed">
              パートナーとの絆を深める「スロセ」の知識が、
              <br className="hidden md:block" />
              あなたの関係性を根本から変えます。
            </p>

            <a
              href={LINE_URL}
              className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 text-lg hover:opacity-90 transition-opacity shadow-lg"
              style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
            >
              <LineIcon size={24} />
              LINEで無料登録する
            </a>

            <p className="mt-5 text-xs text-deep-teal/50">
              ※ 18歳未満の方の登録はお断りしております
            </p>
          </div>
        </section>

        {/* ========== スロセについて知る ========== */}
        <section
          id="about"
          className="py-20 px-6"
          style={{ backgroundColor: "#EAF3F7" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
                ABOUT SUROSE
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-deep-teal">
                スロセについて知る
              </h2>
              <div className="mt-4 mx-auto rounded-full w-10 h-[3px] bg-gold" />
              <p className="mt-6 text-deep-teal/65 text-sm leading-relaxed max-w-xl mx-auto">
                スロセは、パートナーとの関係性・絆を深めるための教育・啓発アプローチです。
                <br />
                20〜30代の女性に向けて、心と体から関係性を育む知識をお届けします。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {suroseCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-gold"
                  style={{ backgroundColor: "#FDF6E3" }}
                >
                  <div className="mb-5">{card.icon}</div>
                  <h3 className="text-lg font-bold text-deep-teal mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-deep-teal/70">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/surose"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-white transition-all"
                style={{ borderRadius: "50px" }}
              >
                スロセについてもっと知る
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ========== 最新ブログ ========== */}
        <section
          id="blog"
          className="py-20 px-6"
          style={{ backgroundColor: "#FDF6E3" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
                LATEST BLOG
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-deep-teal">
                最新ブログ
              </h2>
              <div className="mt-4 mx-auto rounded-full w-10 h-[3px] bg-gold" />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {["スロセ入門", "体験談", "関係性と絆", "体と心"].map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-bold px-3 py-1.5"
                  style={{
                    borderRadius: "50px",
                    border: "1px solid #C8A96E",
                    color: "#C8A96E",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden cursor-pointer group transition-all hover:-translate-y-1 border border-gold/20 hover:border-gold/50 shadow-sm hover:shadow-md"
                >
                  <div
                    className="h-1.5"
                    style={{
                      background:
                        "linear-gradient(to right, #C8A96E, #B8D4DC)",
                    }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-bold px-2.5 py-1 border border-gold text-gold"
                        style={{ borderRadius: "50px" }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-deep-teal/45">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-base font-bold mb-2 leading-snug text-deep-teal group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-deep-teal/60">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-white transition-all"
                style={{ borderRadius: "50px" }}
              >
                ブログ一覧を見る
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ========== LINE CTA ========== */}
        <section
          id="line-cta"
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
              LINEでスロセを
              <br />
              受け取る
            </h2>
            <p className="mb-8 leading-relaxed text-base text-white/70">
              登録無料。パートナーとの絆を深める
              <br className="hidden md:block" />
              スロセ情報をLINEでお届けします。
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-white font-bold px-10 py-5 text-xl hover:opacity-90 transition-opacity shadow-2xl"
              style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
            >
              <LineIcon size={24} />
              LINEで無料登録する
            </a>
            <p className="mt-8 text-xs leading-relaxed text-white/40">
              ※ 本サービスは18歳以上の方を対象としております。
              <br />
              18歳未満の方の登録・利用はお断りしております。
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

/* ========== Page-specific Icons ========== */

function BookIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C8A96E"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="13" y2="11" />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C8A96E"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C8A96E"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
