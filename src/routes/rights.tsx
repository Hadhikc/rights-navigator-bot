import { createFileRoute } from "@tanstack/react-router";

import { NyayaShell } from "@/components/nyaya/shell";
import { rightsLibrary } from "@/lib/nyaya-data";

export const Route = createFileRoute("/rights")({
  head: () => ({
    meta: [
      { title: "Rights library — Nyaya" },
      {
        name: "description",
        content:
          "Plain-language summaries of the fundamental rights and statutes Indians use most: Articles 14, 19, 21, 22, the RTI Act and the Consumer Protection Act.",
      },
      { property: "og:title", content: "Rights library — Nyaya" },
      {
        property: "og:description",
        content:
          "Fundamental rights and key Indian statutes, summarised in plain language.",
      },
    ],
  }),
  component: RightsPage,
});

function RightsPage() {
  return (
    <NyayaShell>
      <div className="mx-auto w-full max-w-4xl overflow-y-auto px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Rights library</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The provisions people ask about most — each one summarised in plain
          language, then quoted verbatim when you ask Nyaya about it.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {rightsLibrary.map((r) => (
            <article
              key={r.article}
              className="card-soft rise-in rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-primary">
                  {r.article}
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-wide text-secondary-foreground">
                  {r.tag}
                </span>
              </div>
              <h2 className="mt-2 text-lg font-bold">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </NyayaShell>
  );
}
