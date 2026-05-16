import { PageShell } from "../components/PageShell";
import { LineIcon, AgeIcon, ArrowIcon } from "../components/icons";

export default function ContactPage() {
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
          <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
            CONTACT
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-deep-teal mb-4">
            お問い合わせ
          </h1>
          <div className="mx-auto rounded-full w-10 h-[3px] bg-gold mb-6" />
          <p className="text-deep-teal/65 text-sm leading-relaxed">
            お問い合わせはLINEにて承っております。
            <br />
            登録後にメッセージをお送りください。
          </p>
        </div>
      </section>

      {/* ========== Main CTA ========== */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "#FDF6E3" }}
      >
        <div className="max-w-2xl mx-auto">
          {/* LINE Card */}
          <div
            className="rounded-3xl p-10 md:p-14 text-center shadow-lg"
            style={{
              background: "linear-gradient(135deg, #2C5F6E 0%, #1a3a45 100%)",
            }}
          >
            <div className="mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#06C755" }}
              >
                <LineIcon size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                LINEでお問い合わせ
              </h2>
              <p className="text-white/65 text-sm leading-relaxed">
                お問い合わせ・ご相談はすべてLINEにて
                <br />
                受け付けております。お気軽にどうぞ。
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-white font-bold px-10 py-5 text-xl hover:opacity-90 transition-opacity shadow-2xl"
              style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
            >
              <LineIcon size={24} />
              LINEで問い合わせる
            </a>
            <p className="mt-6 text-xs text-white/40">
              ※ 18歳未満の方のご利用はお断りしております
            </p>
          </div>

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "#EAF3F7",
                border: "1px solid rgba(200,169,110,0.2)",
              }}
            >
              <h3 className="font-bold text-deep-teal mb-2 text-sm">
                お問い合わせ内容の例
              </h3>
              <ul className="space-y-1.5 text-xs text-deep-teal/65">
                {[
                  "スロセについての質問",
                  "ワークショップに関するご相談",
                  "メディア・取材のお申し込み",
                  "コラボレーションのご提案",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="text-gold mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "#EAF3F7",
                border: "1px solid rgba(200,169,110,0.2)",
              }}
            >
              <h3 className="font-bold text-deep-teal mb-2 text-sm">
                返信について
              </h3>
              <p className="text-xs text-deep-teal/65 leading-relaxed">
                通常2〜3営業日以内にご返信いたします。内容によってはお時間をいただく場合がございます。
              </p>
              <p className="text-xs text-deep-teal/65 leading-relaxed mt-2">
                よくある質問はFAQページもご参照ください。
              </p>
              <a
                href="/faq"
                className="inline-flex items-center gap-1 text-xs text-gold mt-3 hover:opacity-75 transition-opacity"
              >
                FAQを見る
                <ArrowIcon size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Other Links ========== */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#EAF3F7" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.25em] mb-8 text-gold">
            OTHER PAGES
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/surose", label: "スロセとは" },
              { href: "/blog", label: "ブログを読む" },
              { href: "/workshop", label: "ワークショップに参加" },
              { href: "/about", label: "瀬戸優結について" },
              { href: "/faq", label: "よくある質問" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium px-5 py-2.5 text-deep-teal hover:text-gold hover:border-gold transition-all"
                style={{
                  borderRadius: "50px",
                  border: "1px solid rgba(44,95,110,0.25)",
                }}
              >
                {link.label}
                <ArrowIcon size={12} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
