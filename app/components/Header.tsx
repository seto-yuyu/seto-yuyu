import { LineIcon } from "./icons";

const LINE_URL = "#";

const navLinks = [
  { href: "/surose", label: "スロセとは" },
  { href: "/blog", label: "ブログ" },
  { href: "/workshop", label: "ワークショップ" },
  { href: "/about", label: "about" },
];

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-cream/95 border-b border-gold/25"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-baseline shrink-0">
          <span className="font-black text-xl tracking-tight text-gold">瀬戸</span>
          <span className="font-black text-xl tracking-tight text-deep-teal">優結</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-deep-teal hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LINE_URL}
            className="flex items-center gap-1.5 text-white font-bold px-5 py-2 text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
          >
            <LineIcon size={16} />
            LINE登録
          </a>
        </nav>

        <a
          href={LINE_URL}
          className="md:hidden flex items-center gap-1.5 text-white font-bold px-4 py-2 text-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#06C755", borderRadius: "50px" }}
        >
          <LineIcon size={15} />
          LINE登録
        </a>
      </div>
    </header>
  );
}
