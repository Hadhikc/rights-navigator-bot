import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Clock, MapPin, Plus, Search, ShieldCheck } from "lucide-react";

import chakra from "@/assets/nyaya-chakra.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { recentChats } from "@/lib/nyaya-data";

const navItems = [
  { title: "Ask Nyaya", url: "/", icon: ShieldCheck },
  { title: "Rights library", url: "/rights", icon: BookOpen },
  { title: "Legal aid near you", url: "/legal-aid", icon: MapPin },
];

export function AppSidebar() {
  const pathname = useRouterState({
    select: (router) => router.location.pathname,
  });

  return (
    <Sidebar collapsible="offcanvas" className="border-r border-sidebar-border">
      <SidebarHeader className="gap-4 p-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={chakra}
            alt="Nyaya"
            width={40}
            height={40}
            className="size-10"
          />
          <span className="leading-tight">
            <span className="block font-[family-name:var(--font-display)] text-lg font-bold text-sidebar-foreground">
              Nyaya
            </span>
            <span className="block text-xs text-muted-foreground">
              Your guide to constitutional rights
            </span>
          </span>
        </Link>

        <Button className="btn-saffron h-11 w-full justify-center rounded-xl text-sm font-semibold">
          <Plus className="size-4" />
          New conversation
        </Button>

        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search conversations"
            className="h-10 rounded-xl border-sidebar-border bg-card pl-9 text-sm"
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="h-10 rounded-xl data-[active=true]:bg-sidebar-accent data-[active=true]:font-semibold"
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="size-4 text-primary" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Recent
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentChats.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton className="h-auto items-start rounded-xl py-2">
                    <Clock className="mt-0.5 size-4 text-muted-foreground" />
                    <span className="flex flex-col items-start gap-0.5 overflow-hidden">
                      <span className="truncate text-sm">{chat.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {chat.when}
                      </span>
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="card-soft flex items-center gap-3 rounded-xl p-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold text-secondary-foreground">
            HA
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-semibold">Hadhi</span>
            <span className="flex items-center gap-1.5 text-xs text-verdant">
              <span className="size-1.5 rounded-full bg-verdant" />
              Running locally · private
            </span>
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
