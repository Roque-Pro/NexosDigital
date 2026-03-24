import { MessageCircle } from "lucide-react";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Radar waves background */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-radar-wave-1"></div>
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-radar-wave-2"></div>
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-radar-wave-3"></div>

      {/* Main button */}
      <a
        href="https://wa.me/5532991075164"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/50 transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
