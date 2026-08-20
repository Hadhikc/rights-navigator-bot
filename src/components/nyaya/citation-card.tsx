import { ScrollText } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { Citation } from "@/lib/nyaya-data";

export function CitationCard({ citations }: { citations: Citation[] }) {
  return (
    <Collapsible className="mt-3 w-full">
      <CollapsibleTrigger className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/15">
        <ScrollText className="size-3.5" />
        {citations.length} verified source
        {citations.length > 1 ? "s" : ""}
      </CollapsibleTrigger>

      <CollapsibleContent className="mt-2 space-y-2">
        {citations.map((c) => (
          <figure
            key={c.reference}
            className="card-soft rounded-xl border-l-2 border-l-primary p-3"
          >
            <figcaption className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {c.source} · <span className="text-primary">{c.reference}</span>
            </figcaption>
            <blockquote className="mt-1.5 font-[family-name:var(--font-display)] text-sm italic leading-relaxed text-foreground">
              “{c.excerpt}”
            </blockquote>
          </figure>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
