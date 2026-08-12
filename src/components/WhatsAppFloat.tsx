import { MessageCircle } from "lucide-react";
import "./WhatsAppFloat.css";

interface WhatsAppFloatProps {
  phone?: string;
  message?: string;
  label?: string;
}

export default function WhatsAppFloat({ phone = "5532991075164", message, label }: WhatsAppFloatProps) {
  const cleanPhone = phone.replace(/\D/g, "");
  const whatsappUrl = message 
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${cleanPhone}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {label && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-sm font-black text-white shadow-lg shadow-green-500/40 transition-colors hover:bg-[#1fbd5a]"
          aria-label={label}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
          </span>
          {label}
        </a>
      )}

      {/* Radar waves background */}
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="animate-radar-wave-1"></div>
        <div className="animate-radar-wave-2"></div>
        <div className="animate-radar-wave-3"></div>

        {/* Main button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/50 transition-transform hover:scale-110 hover:shadow-xl"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
