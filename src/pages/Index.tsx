import { useState, useCallback, useRef } from "react";
import { quotes } from "@/data/quotes";
import { QuoteCard } from "@/components/QuoteCard";
import { RefreshCw } from "lucide-react";

const Index = () => {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * quotes.length));
  const [animating, setAnimating] = useState(false);
  const lastIndex = useRef(index);

  const getNewQuote = useCallback(() => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      let next: number;
      do {
        next = Math.floor(Math.random() * quotes.length);
      } while (next === lastIndex.current && quotes.length > 1);
      lastIndex.current = next;
      setIndex(next);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const quote = quotes[index];

  return (
    <div className="flex min-h-svh flex-col items-center justify-between bg-background px-5 py-10 max-w-[430px] mx-auto">
      {/* Header */}
      <header className="w-full text-center pt-2">
        <h1 className="text-lg font-semibold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Daily Quotes
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">Tap below for inspiration</p>
      </header>

      {/* Quote area */}
      <div className="flex-1 flex items-center justify-center w-full py-8">
        <QuoteCard quote={quote} animating={animating} />
      </div>

      {/* Button */}
      <footer className="w-full pb-4">
        <button
          onClick={getNewQuote}
          disabled={animating}
          className="w-full flex items-center justify-center gap-2.5 rounded-2xl bg-primary text-primary-foreground py-4 text-base font-semibold shadow-lg active:scale-[0.97] transition-all duration-150 disabled:opacity-60"
          style={{ boxShadow: "0 6px 24px hsl(24 80% 55% / 0.35)" }}
        >
          <RefreshCw size={18} className={animating ? "animate-spin" : ""} />
          New Quote
        </button>
      </footer>
    </div>
  );
};

export default Index;
