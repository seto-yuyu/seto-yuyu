const footerLinks = [
  { href: "/surose", label: "スロセとは" },
  { href: "/blog", label: "ブログ" },
  { href: "/workshop", label: "ワークショップ" },
  { href: "/about", label: "about" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
];

export function Footer() {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: "#1a3a45" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <p className="font-black text-xl mb-1 text-gold">瀬戸優結</p>
            <p className="text-xs text-white/45">1000万人の女性にスロセを届ける</p>
          </div>
          <nav className="flex items-center gap-5 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs text-white/30">
            &copy; 2026 瀬戸優結. All rights reserved.
          </p>
          <p className="text-xs font-medium text-white/40">
            本サイトは18歳以上の方を対象としております
          </p>
        </div>
      </div>
    </footer>
  );
}
