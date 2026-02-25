import type { Quote } from "@/data/quotes";
import { Quote as QuoteIcon } from "lucide-react";

interface QuoteCardProps {
  quote: Quote;
  animating: boolean;
}

export function QuoteCard({ quote, animating }: QuoteCardProps) {
  return (
    <div
      className={`w-full rounded-3xl bg-card p-7 shadow-xl border border-border transition-all duration-300 ${
        animating ? "opacity-0 scale-95 translate-y-2" : "opacity-100 scale-100 translate-y-0"
      }`}
    >
      <QuoteIcon size={28} className="text-primary/30 mb-4" />

      <blockquote
        className="text-xl leading-relaxed text-foreground font-light"
        style={{ fontFamily: "var(--font-quote)" }}
      >
        "{quote.text}"
      </blockquote>

      <p className="mt-5 text-sm font-medium text-muted-foreground tracking-wide">
        — {quote.author}
      </p>
    </div>
  );
}
