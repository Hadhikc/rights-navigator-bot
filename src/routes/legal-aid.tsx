import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { NyayaShell } from "@/components/nyaya/shell";
import { legalAid } from "@/lib/nyaya-data";

export const Route = createFileRoute("/legal-aid")({
  head: () => ({
    meta: [
      { title: "Free legal aid near you — Nyaya" },
      {
        name: "description",
        content:
          "Find the legal services authority closest to you — NALSA, State, District and Taluk bodies that provide free legal representation in India.",
      },
      { property: "og:title", content: "Free legal aid near you — Nyaya" },
      {
        property: "og:description",
        content:
          "NALSA, State, District and Taluk legal services authorities offering free representation.",
      },
    ],
  }),
  component: LegalAidPage,
});

function LegalAidPage() {
  return (
    <NyayaShell>
      <div className="mx-auto w-full max-w-4xl overflow-y-auto px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Legal aid near you</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Free legal services are a statutory entitlement in India, not a favour.
          Start at the level closest to you and work upward.
        </p>

        <ol className="mt-8 space-y-4">
          {legalAid.map((a, i) => (
            <li
              key={a.name}
              className="card-soft rise-in flex gap-4 rounded-2xl p-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-[family-name:var(--font-display)] font-bold text-primary">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h2 className="text-lg font-bold">{a.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{a.note}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="size-4 text-primary" />
                    {a.scope}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-verdant">
                    <Phone className="size-4" />
                    {a.phone}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </NyayaShell>
  );
}
