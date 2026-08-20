import type { ReactNode } from "react";
import { Globe } from "lucide-react";

import { AppSidebar } from "@/components/nyaya/app-sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { languages } from "@/lib/nyaya-data";

export function NyayaShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="surface-warm flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-border/70 px-4 sm:px-6">
            <SidebarTrigger className="size-9 rounded-lg" />

            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-1.5 rounded-full border border-verdant/30 bg-verdant-soft px-3 py-1.5 text-xs font-medium text-verdant sm:inline-flex">
                <span className="size-1.5 rounded-full bg-verdant" />
                On-device · Qwen 3 14B
              </span>

              <Select defaultValue="en">
                <SelectTrigger className="h-9 w-[9.5rem] rounded-full border-border bg-card text-sm">
                  <Globe className="size-4 text-primary" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((l) => (
                    <SelectItem key={l.code} value={l.code}>
                      {l.label} · {l.native}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </header>

          <main className="flex min-h-0 flex-1 flex-col">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
