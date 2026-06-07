import Image from "next/image";
import { PageShell } from "../components/PageShell";
import { LineIcon, AgeIcon, ArrowIcon } from "../components/icons";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Milestone = { year: string; title: string; description: string };
type Value = { title: string; description: string };

const DEFAULT_VALUES: Value[] = [
  { title: "正しい知識", description: "スロセに関する情報は、根拠のある知識に基づいてお届けします。感覚ではなく、理解から変化を起こすことを大切にします。" },
  { title: "女性の視点", description: "「女性は水の性」という概念を軸に、20〜30代の女性が本当に必要としている情報を、女性の視点からお届けします。" },
  { title: "安心できる場", description: "スロセについて安心して学べる場を作ることが使命です。18歳以上の方を対象に、丁寧で誠実な情報発信を続けます。" },
];

const DEFAULT_MILESTONES: Milestone[] = [
  { year: "2019", title: "スロセとの出会い", description: "自身のパートナーシップへの悩みをきっかけに研究を始める。" },
  { year: "2021", title: "SNS発信を開始", description: "スロセ情報の発信を開始。フォロワーが急増し、多くの女性から共感の声が届く。" },
  { year: "2023", title: "ワークショップ初開催", description: "オンラインワークショップを初開催。参加者から「関係性が変わった」という声が続出。" },
  { year: "2025", title: "本サイト立ち上げ", description: "本サイトを立ち上げ、1000万人の女性にスロセを届けるミッションを宣言。" },
];

const ABOUT_QUERY = `*[_type == "about" && _id == "about-page"][0]{
  name,
  nameRomaji,
  profileImage,
  profileText1,
  profileText2,
  missionTitle,
  missionText1,
  missionText2,
  values[]{ title, description },
  milestones[]{ year, title, description }
}`;

type AboutData = {
  name?: string;
  nameRomaji?: string;
  profileImage?: { asset: { _ref: string }; alt?: string };
  profileText1?: string;
  profileText2?: string;
  missionTitle?: string;
  missionText1?: string;
  missionText2?: string;
  values?: Value[];
  milestones?: Milestone[];
};

const DEFAULTS: Required<Omit<AboutData, 'values' | 'milestones'>> = {
  name: "瀬戸優結",
  nameRomaji: "SETO YUYU",
  profileImage: { asset: { _ref: "" } },
  profileText1:
    "「1000万人の女性にスロセを届ける」をミッションに活動するスロセ教育者・情報発信者。20〜30代の女性を中心に、パートナーとの関係性・絆を深めるための知識を届けています。",
  profileText2:
    "自身のパートナーシップへの悩みをきっかけにスロセと出会い、その知識が関係性を根本から変えた体験から、同じ悩みを持つ女性たちへの情報発信を始めました。",
  missionTitle: "1000万人の女性に\nスロセを届ける",
  missionText1:
    "日本の女性の満足度向上を目指して——。スロセという知識が一人でも多くの女性に届くことで、パートナーとの関係性が変わり、人生そのものが豊かになると信じています。",
  missionText2:
    "「知ると、変わる。」この言葉は私自身の体験から生まれました。スロセを知る前と後では、パートナーとの関係性はまったく異なるものになりました。その変化を、1000万人の女性と分かち合いたいと思っています。",
};

export default async function AboutPage() {
  const data: AboutData | null = await client.fetch(ABOUT_QUERY, {}, { next: { revalidate: 60 } });

  const name = data?.name || DEFAULTS.name;
  const nameRomaji = data?.nameRomaji || DEFAULTS.nameRomaji;
  const profileText1 = data?.profileText1 || DEFAULTS.profileText1;
  const profileText2 = data?.profileText2 || DEFAULTS.profileText2;
  const missionTitle = data?.missionTitle || DEFAULTS.missionTitle;
  const missionText1 = data?.missionText1 || DEFAULTS.missionText1;
  const missionText2 = data?.missionText2 || DEFAULTS.missionText2;
  const values = (data?.values && data.values.length > 0)
    ? data.values
    : DEFAULT_VALUES;
  const milestones = (data?.milestones && data.milestones.length > 0)
    ? data.milestones
    : DEFAULT_MILESTONES;
  const profileImageUrl =
    data?.profileImage?.asset?._ref
      ? urlFor(data.profileImage).width(640).height(640).fit("crop").url()
      : null;
  const profileImageAlt = data?.profileImage?.alt || name;

  return (
    <PageShell>
      {/* ========== Hero ========== */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ backgroundColor: "#FDF6E3" }}
      >
        <div
          className="absolute right-0 top-0 h-full w-1/2 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ backgroundColor: "#B8D4DC" }}
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 mb-6 border border-gold text-gold"
                style={{ borderRadius: "50px" }}
              >
                <AgeIcon />
                18歳以上限定
              </div>
              <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
                PROFILE
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-deep-teal mb-4 leading-tight">
                {name}
                <span className="block text-xl md:text-2xl font-bold text-deep-teal/50 mt-2 tracking-widest">
                  {nameRomaji}
                </span>
              </h1>
              <div className="w-10 h-[3px] bg-gold rounded-full mb-6" />
              <p className="text-deep-teal/70 text-base leading-relaxed mb-4">
                {profileText1}
              </p>
              <p className="text-deep-teal/70 text-base leading-relaxed">
                {profileText2}
              </p>
            </div>
            <div className="flex justify-center">
              {profileImageUrl ? (
                <div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
                  style={{ border: "3px solid rgba(200,169,110,0.3)" }}
                >
                  <Image
                    src={profileImageUrl}
                    alt={profileImageAlt}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              ) : (
                <div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #EAF3F7 0%, #FDF6E3 100%)",
                    border: "3px solid rgba(200,169,110,0.3)",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="text-8xl font-black leading-none mb-2"
                      style={{ color: "rgba(200,169,110,0.2)" }}
                    >
                      瀬
                    </div>
                    <p className="text-deep-teal font-bold text-sm">{name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Mission ========== */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EAF3F7" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
            MISSION
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-deep-teal mb-4 whitespace-pre-line">
            {missionTitle}
          </h2>
          <div className="mx-auto rounded-full w-10 h-[3px] bg-gold mb-8" />
          <p className="text-deep-teal/70 text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            {missionText1}
          </p>
          <p className="text-deep-teal/70 text-base leading-relaxed max-w-2xl mx-auto">
            {missionText2}
          </p>
        </div>
      </section>

      {/* ========== Values ========== */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FDF6E3" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
              VALUES
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-deep-teal mb-4">
              大切にしていること
            </h2>
            <div className="mx-auto rounded-full w-10 h-[3px] bg-gold" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="rounded-2xl p-8 border-t-4 border-gold shadow-sm"
                style={{ backgroundColor: "#EAF3F7" }}
              >
                <h3 className="text-lg font-bold text-deep-teal mb-3">
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed text-deep-teal/65">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Timeline ========== */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EAF3F7" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] mb-3 text-gold">
              HISTORY
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-deep-teal mb-4">
              活動の歩み
            </h2>
            <div className="mx-auto rounded-full w-10 h-[3px] bg-gold" />
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex gap-6 items-start rounded-2xl p-6"
                style={{ backgroundColor: "#FDF6E3" }}
              >
                <div className="shrink-0 text-2xl font-black text-gold">
                  {m.year}
                </div>
                <div className="pt-1">
                  {m.title && (
                    <p className="text-deep-teal font-bold text-sm mb-1">{m.title}</p>
                  )}
                  <p className="text-deep-teal/70 text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
            JOIN US
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            スロセの学びを始めよう
          </h2>
          <p className="text-white/65 text-sm mb-8 leading-relaxed">
            LINEに登録して、最新のスロセ情報を受け取ってください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 text-white font-bold px-8 py-4 text-base hover:opacity-90 transition-opacity shadow-xl"
              style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
            >
              <LineIcon size={20} />
              LINEで無料登録する
            </a>
            <a
              href="/workshop"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 text-base hover:opacity-90 transition-opacity"
              style={{ borderRadius: "50px", border: "2px solid rgba(200,169,110,0.6)", color: "#C8A96E" }}
            >
              ワークショップを見る
              <ArrowIcon />
            </a>
          </div>
          <p className="mt-8 text-xs text-white/35">
            ※ 18歳未満の方の登録はお断りしております
          </p>
        </div>
      </section>
    </PageShell>
  );
}
