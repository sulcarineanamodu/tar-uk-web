"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447386488103?text=Hi, I need an appliance repair. Can you help?"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-40 w-12 h-12 bg-green-light text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-xl"
    >
      💬
    </a>
  );
}
