import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { FileText, MapPin, Mic, ShieldCheck } from "lucide-react";

import chakra from "@/assets/nyaya-chakra.png";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { CitationCard } from "@/components/nyaya/citation-card";
import { NyayaShell } from "@/components/nyaya/shell";
import { answerFor, suggestions, type Citation } from "@/lib/nyaya-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nyaya — Know your rights, in your language" },
      {
        name: "description",
        content:
          "Ask about the Indian Constitution, arrest rights, RTI and consumer grievances. Every answer cites the exact Article, and runs privately on your own device.",
      },
      { property: "og:title", content: "Nyaya — Know your rights" },
      {
        property: "og:description",
        content:
          "A private, on-device legal assistant grounded in real Indian legal text, in English, Hindi and Tamil.",
      },
    ],
  }),
  component: ChatPage,
});

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  citations?: Citation[];
};

const quickActions = [
  { icon: FileText, label: "Draft a complaint" },
  { icon: ShieldCheck, label: "Check a right" },
  { icon: MapPin, label: "Find legal aid" },
];

function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [thinking, setThinking] = useState(false);

  const ask = useCallback((question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    const id = Date.now().toString();
    setMessages((prev) => [
      ...prev,
      { id: `u-${id}`, role: "user", text: trimmed },
    ]);
    setThinking(true);

    window.setTimeout(() => {
      const result = answerFor(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${id}`,
          role: "assistant",
          text: result.answer,
          citations: result.citations,
        },
      ]);
      setThinking(false);
    }, 900);
  }, []);

  const handleSubmit = (message: PromptInputMessage) => {
    ask(message.text ?? "");
  };

  const empty = messages.length === 0;

  return (
    <NyayaShell>
      <Conversation className="min-h-0 flex-1">
        <ConversationContent className="mx-auto w-full max-w-3xl px-4 pb-4 pt-6 sm:px-6">
          {empty ? (
            <div className="rise-in flex flex-col items-center py-10 text-center sm:py-16">
              <img
                src={chakra}
                alt="Nyaya"
                width={88}
                height={88}
                className="size-20 sm:size-22"
              />
              <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl">
                Know your rights.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Ask about the Constitution, your fundamental rights, or a legal
                procedure — answered from verified Indian legal text, with the
                exact Article shown beside every claim.
              </p>

              <div className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => ask(s)}
                    className="card-soft group rounded-2xl px-4 py-3.5 text-left text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span className="mr-2 text-primary">→</span>
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {quickActions.map((a) => (
                  <span
                    key={a.label}
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    <a.icon className="size-3.5 text-primary" />
                    {a.label}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((m) => (
                <Message key={m.id} from={m.role} className="rise-in">
                  {m.role === "assistant" && (
                    <div className="flex items-center gap-2">
                      <img
                        src={chakra}
                        alt=""
                        width={22}
                        height={22}
                        loading="lazy"
                        className="size-5"
                      />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Nyaya
                      </span>
                    </div>
                  )}
                  <MessageContent className="group-[.is-user]:bg-ink group-[.is-user]:text-ink-foreground group-[.is-assistant]:leading-relaxed">
                    <MessageResponse>{m.text}</MessageResponse>
                    {m.citations ? <CitationCard citations={m.citations} /> : null}
                  </MessageContent>
                </Message>
              ))}

              {thinking && (
                <div className="flex items-center gap-2">
                  <img
                    src={chakra}
                    alt=""
                    width={22}
                    height={22}
                    loading="lazy"
                    className="size-5 animate-spin [animation-duration:3s]"
                  />
                  <Shimmer className="text-sm">
                    Reading the Constitution…
                  </Shimmer>
                </div>
              )}
            </div>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="shrink-0 px-4 pb-5 sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <PromptInput
            onSubmit={handleSubmit}
            className="card-soft rounded-2xl shadow-[var(--shadow-lift)]"
          >
            <PromptInputTextarea
              placeholder="Ask about your rights…"
              className="min-h-[3.25rem] text-base"
            />
            <PromptInputFooter className="justify-between">
              <PromptInputTools>
                <PromptInputButton>
                  <Mic className="size-4" />
                  <span className="sr-only">Speak</span>
                </PromptInputButton>
                <span className="text-xs text-muted-foreground">
                  English · हिन्दी · தமிழ்
                </span>
              </PromptInputTools>
              <PromptInputSubmit status={thinking ? "submitted" : undefined} />
            </PromptInputFooter>
          </PromptInput>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Nyaya gives general constitutional and legal information — not formal
            legal advice.
          </p>
        </div>
      </div>
    </NyayaShell>
  );
}
