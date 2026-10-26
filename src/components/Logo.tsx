export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-0 ${className}`}>
      <span className="font-bold text-negro">IKO</span>
      <span className="font-bold text-coral">+</span>
      <span className="font-normal text-gray-500 tracking-[0.2em] ml-1">
        STUDIO
      </span>
    </span>
  );
}

export function Isotipo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="IKO+ STUDIO"
    >
      <rect width="256" height="256" rx="56" fill="#1C1C1E" />
      <path
        d="M56 176h48v-42h48V92h38"
        stroke="#FAFAF8"
        strokeWidth="8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="184" y="80" width="24" height="24" fill="#FF6B4A" />
    </svg>
  );
}
