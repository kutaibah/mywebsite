"use client";
import Link from "next/link";
import { Quote as QuoteIcon } from "lucide-react";

export interface QuoteData {
  id: string;
  text: string;
  author: string;
  source?: string;
  year?: string;
}

type Props = {
  quote: QuoteData;
};

export const Quote: React.FC<Props> = ({ quote }) => {
  return (
    <article className="p-4 md:p-8">
      <div className="flex justify-between gap-2 items-center">
        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
          {quote.author}
        </span>
        <span className="text-zinc-500 text-xs flex items-center gap-1">
          <QuoteIcon className="w-4 h-4" />
        </span>
      </div>
      <p className="z-20 mt-4 text-md duration-1000 text-zinc-200 group-hover:text-white font-serif italic">
        "{quote.text}"
      </p>
      <div className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 flex justify-between">
        <span>{quote.source}</span>
        {quote.year && <span>{quote.year}</span>}
      </div>
    </article>
  );
};
