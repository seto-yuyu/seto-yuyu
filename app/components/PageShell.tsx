import { Header } from "./Header";
import { Footer } from "./Footer";
import { LineIcon } from "./icons";

const LINE_URL = "#";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <a
        href={LINE_URL}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 text-white font-bold px-5 py-3 hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
        style={{
          backgroundColor: "#06C755",
          borderRadius: "50px",
          boxShadow: "0 4px 24px rgba(6,199,85,0.4)",
        }}
        aria-label="LINEで登録する"
      >
        <LineIcon size={18} />
        <span className="text-sm">LINE登録</span>
      </a>
    </>
  );
}
