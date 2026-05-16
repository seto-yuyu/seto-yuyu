import { PageShell } from "../components/PageShell";
import { LineIcon, AgeIcon, ArrowIcon } from "../components/icons";

const faqs = [
  {
    q: "スロセとは何ですか？",
    a: "スロセとは、パートナーとの関係性を丁寧に育むためのアプローチです。マッサージやタッチを起点に、心と体の両面から深いつながりを築く知識と実践方法をお届けしています。急がず、焦らず、お互いの状態に寄り添うことを大切にしています。",
  },
  {
    q: "18歳以上が対象なのはなぜですか？",
    a: "スロセは成人の方を対象とした、パートナーシップに関する教育・啓発情報です。内容の性質上、18歳以上の方にのみ適切にお届けできると判断しています。18歳未満の方の登録・利用はお断りしております。",
  },
  {
    q: "パートナーがいなくても参加できますか？",
    a: "はい、パートナーがいない方でもご参加いただけます。スロセの知識は自己理解を深め、将来の関係性を豊かにするためのものでもあります。「いつか素敵な関係を築きたい」という気持ちがあれば、今から学んでいただくことに十分な意味があります。",
  },
  {
    q: "LINEに登録すると何が届きますか？",
    a: "最新のスロセ情報、ブログ記事のお知らせ、ワークショップのご案内などをお届けします。スパムや不要なメッセージは一切送りません。配信が不要になった場合はいつでも配信停止できます。",
  },
  {
    q: "ワークショップは有料ですか？",
    a: "現在開催しているワークショップは完全無料でご参加いただけます。有料コンテンツを提供する際は事前に明示しますので、ご安心ください。まずはLINE登録からワークショップの案内をお待ちください。",
  },
];

export default function FaqPage() {
  return (
    <PageShell>
      {/* ========== Hero ========== */}
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
          <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-black text-deep-teal mb-4">
            よくある質問
          </h1>
          <div className="mx-auto rounded-full w-10 h-[3px] bg-gold mb-6" />
          <p className="text-deep-teal/65 text-sm leading-relaxed">
            スロセやサービスについて、よくいただく質問をまとめました。
            <br className="hidden md:block" />
            解決しない場合はお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* ========== FAQ List ========== */}
      <section className="py-16 px-6" style={{ backgroundColor: "#FDF6E3" }}>
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ border: "1px solid rgba(200,169,110,0.25)" }}
            >
              {/* Question */}
              <div
                className="px-7 py-5 flex items-start gap-4"
                style={{ backgroundColor: "#EAF3F7" }}
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-sm mt-0.5"
                  style={{ backgroundColor: "#C8A96E" }}
                >
                  Q
                </span>
                <p className="font-bold text-deep-teal text-base leading-relaxed pt-1">
                  {faq.q}
                </p>
              </div>
              {/* Answer */}
              <div className="px-7 py-5 flex items-start gap-4 bg-white">
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black text-sm mt-0.5"
                  style={{
                    backgroundColor: "rgba(184,212,220,0.3)",
                    color: "#2C5F6E",
                  }}
                >
                  A
                </span>
                <p className="text-deep-teal/70 text-sm leading-relaxed pt-1">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact link */}
        <div className="text-center mt-12">
          <p className="text-deep-teal/60 text-sm mb-4">
            解決しない質問がある場合はお気軽にご連絡ください。
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-white transition-all"
            style={{ borderRadius: "50px" }}
          >
            お問い合わせはこちら
            <ArrowIcon />
          </a>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #2C5F6E 0%, #1a3a45 100%)",
        }}
      >
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.25em] mb-4 text-gold">
            FREE REGISTRATION
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            まずはLINEで始める
          </h2>
          <p className="text-white/65 text-sm mb-8 leading-relaxed">
            登録無料。スロセの最新情報と
            <br />
            ワークショップのご案内をお届けします。
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
      </section>
    </PageShell>
  );
}
