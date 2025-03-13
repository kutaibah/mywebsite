import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Quote } from "./quote";
import { quotes } from "./data";

export const revalidate = 60;

export default function QuotesPage() {
  const featured = quotes[0];
  const top2 = quotes[1];
  const top3 = quotes[2];
  const remainingQuotes = quotes.slice(3);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Quotes
          </h2>
          <p className="mt-4 text-zinc-400">
            A collection of inspiring quotes that have shaped my thinking.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Quote quote={featured} />
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((quote) => (
              <Card key={quote.id}>
                <Quote quote={quote} />
              </Card>
            ))}
          </div>
        </div> 
        <div className="hidden w-full h-px md:block bg-zinc-800" />*/}

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {remainingQuotes
              .filter((_, i) => i % 3 === 0)
              .map((quote) => (
                <Card key={quote.id}>
                  <Quote quote={quote} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {remainingQuotes
              .filter((_, i) => i % 3 === 1)
              .map((quote) => (
                <Card key={quote.id}>
                  <Quote quote={quote} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {remainingQuotes
              .filter((_, i) => i % 3 === 2)
              .map((quote) => (
                <Card key={quote.id}>
                  <Quote quote={quote} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
