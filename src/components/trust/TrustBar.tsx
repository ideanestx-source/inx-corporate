const signals = [
  "Senior-only delivery",
  "Discovery-first",
  "Architecture before code",
  "Peer-reviewed code",
  "Full IP transfer",
  "Post-deployment warranty",
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/[0.06] bg-white/[0.015] py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest shrink-0">
            Engineering standards
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {signals.map((s) => (
              <span key={s} className="flex items-center gap-2 text-[12px] text-white/38">
                <span className="h-1 w-1 rounded-full bg-blue-500/50 shrink-0" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
