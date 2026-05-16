import { PageShell } from "../components/PageShell";
import { AgeIcon } from "../components/icons";
import { BlogFilter } from "./BlogFilter";
import type { BlogPost } from "./BlogFilter";

const blogPosts: BlogPost[] = [
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
  {
    id: 4,
    category: "体と心",
    title: "マッサージから始めるスロセ——タッチが育む信頼の話",
    date: "2026.04.20",
    excerpt:
      "タッチには心を開く力があります。スロセの入口であるマッサージのアプローチを通じて、体と心の両面から絆を深める方法を紹介します。",
  },
  {
    id: 5,
    category: "スロセ入門",
    title: "はじめてのスロセ実践——どこから始めればいい？",
    date: "2026.04.15",
    excerpt:
      "スロセに興味を持ったけれど、最初の一歩が踏み出せない方へ。今日からできる小さな実践方法を、ステップ別にご紹介します。",
  },
  {
    id: 6,
    category: "関係性と絆",
    title: "パートナーとの「すれ違い」を減らすために知っておきたいこと",
    date: "2026.04.08",
    excerpt:
      "忙しい毎日の中でパートナーとの距離を感じていませんか？スロセの視点から、関係性の「すれ違い」が生まれる理由と改善策を考えます。",
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      {/* Page Hero */}
      <section
        className="pt-32 pb-16 px-6 text-center"
        style={{ backgroundColor: "#FDF6E3" }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 mb-6 border border-gold text-gold"
            style={{ borderRadius: "50px" }}
          >
            <AgeIcon />
            18歳以上限定
          </div>
          <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">BLOG</p>
          <h1 className="text-4xl md:text-5xl font-black text-deep-teal mb-4">
            ブログ
          </h1>
          <div className="mx-auto rounded-full w-10 h-[3px] bg-gold mb-6" />
          <p className="text-deep-teal/65 text-sm leading-relaxed">
            スロセに関する知識・体験談・実践方法を
            <br className="hidden md:block" />
            20〜30代の女性に向けてお届けします。
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#FDF6E3" }}
      >
        <div className="max-w-6xl mx-auto">
          <BlogFilter posts={blogPosts} />
        </div>
      </section>

      {/* LINE CTA */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #2C5F6E 0%, #1a3a45 100%)",
        }}
      >
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.25em] mb-4 text-gold">
            LINE REGISTRATION
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            最新記事をLINEで受け取る
          </h2>
          <p className="text-white/65 text-sm mb-8 leading-relaxed">
            ブログ更新のお知らせ、限定情報をLINEでお届けします。
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 text-base hover:opacity-90 transition-opacity shadow-xl"
            style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.19 2 11.33c0 2.64 1.16 5.04 3.03 6.78.18.15.26.39.2.61l-.56 2.1c-.08.31.22.59.52.47l2.41-.95c.2-.08.42-.05.59.07C9.27 21.12 10.6 21.5 12 21.5c5.52 0 10-4.19 10-9.17S17.52 2 12 2z" />
            </svg>
            LINEで無料登録する
          </a>
          <p className="mt-6 text-xs text-white/35">
            ※ 18歳未満の方の登録はお断りしております
          </p>
        </div>
      </section>
    </PageShell>
  );
}
