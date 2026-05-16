"use client";

import { useState } from "react";

export type BlogPost = {
  id: number;
  category: string;
  title: string;
  date: string;
  excerpt: string;
};

const CATEGORIES = ["すべて", "スロセ入門", "体験談", "関係性と絆", "体と心"];

export function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState("すべて");

  const filtered =
    active === "すべて" ? posts : posts.filter((p) => p.category === active);

  const countFor = (cat: string) =>
    cat === "すべて" ? posts.length : posts.filter((p) => p.category === cat).length;

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="flex items-center gap-1.5 text-sm font-bold px-4 py-2 transition-all"
            style={{
              borderRadius: "50px",
              border: `1px solid ${active === cat ? "#C8A96E" : "rgba(200,169,110,0.35)"}`,
              backgroundColor: active === cat ? "#C8A96E" : "transparent",
              color: active === cat ? "#fff" : "#C8A96E",
            }}
          >
            {cat}
            <span
              className="text-xs font-normal opacity-75 tabular-nums"
            >
              ({countFor(cat)})
            </span>
          </button>
        ))}
      </div>

      {/* Post grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden cursor-pointer group transition-all hover:-translate-y-1 border border-gold/20 hover:border-gold/50 shadow-sm hover:shadow-md"
          >
            <div
              className="h-1.5"
              style={{
                background: "linear-gradient(to right, #C8A96E, #B8D4DC)",
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
                <span className="text-xs text-deep-teal/45">{post.date}</span>
              </div>
              <h2 className="text-base font-bold mb-2 leading-snug text-deep-teal group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed text-deep-teal/60">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-deep-teal/50 py-16 text-sm">
          このカテゴリの記事はまだありません。
        </p>
      )}
    </>
  );
}
