'use client'

import { BUSINESS_INFO } from '@/lib/constants'

export function WhatsAppFloat() {
  const message = encodeURIComponent(
    `Hi ${BUSINESS_INFO.name}, I am interested in your furniture. Could you share more details?`,
  )
  const href = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Royal Brunei Furniture on WhatsApp"
      className="animate-wa-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19.11 17.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.59-.5-.51-.68-.52l-.58-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.02 4C9.39 4 4 9.39 4 16.02c0 2.12.55 4.18 1.6 5.99L4 28l6.16-1.61a11.94 11.94 0 0 0 5.86 1.5h.01C22.66 27.89 28.05 22.5 28.05 15.87 28.05 9.24 22.66 4 16.02 4zm0 21.78h-.01c-1.74 0-3.45-.47-4.95-1.36l-.36-.21-3.66.96.98-3.57-.23-.37a9.83 9.83 0 0 1-1.5-5.21c0-5.43 4.42-9.85 9.85-9.85a9.79 9.79 0 0 1 6.97 2.89 9.79 9.79 0 0 1 2.88 6.97c0 5.43-4.42 9.85-9.97 9.85z" />
      </svg>
    </a>
  )
}
