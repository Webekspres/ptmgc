import { MessageCircle } from "lucide-react";
import { CONTACT_URL, WHATSAPP_DISPLAY } from "./constants";

export function FloatingCTA() {
  return (
    <a
      href={CONTACT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-primary-deep shadow-(--shadow-elevated) transition hover:-translate-y-0.5 hover:brightness-95"
    >
      <MessageCircle className="h-4 w-4" strokeWidth={2.25} />
      <span className="flex flex-col items-start leading-tight">
        <span>Mulai Diskusi</span>
        <span className="text-[10px] font-normal opacity-70">{WHATSAPP_DISPLAY}</span>
      </span>
    </a>
  );
}
