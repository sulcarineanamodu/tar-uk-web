"use client";

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-40 right-6 z-40 w-12 h-12 bg-electric-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
      >
        💬
      </button>
      {isOpen && (
        <div className="fixed bottom-56 right-6 z-40 w-80 bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-navy text-white p-4">
            <h3 className="font-bold">TAR Assistant</h3>
            <p className="text-xs text-grey-300">Online</p>
          </div>
          <div className="h-64 bg-grey-50 p-4 overflow-y-auto">
            <div className="bg-white p-3 rounded-lg mb-3">
              <p className="text-sm">Hi! I'm the TAR Assistant. How can I help?</p>
            </div>
          </div>
          <div className="border-t p-3">
            <input type="text" placeholder="Type a message..." className="w-full px-3 py-2 border rounded-lg text-sm" />
          </div>
        </div>
      )}
    </>
  );
}
