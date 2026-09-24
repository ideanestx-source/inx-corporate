import type { LabProject } from "@/lib/labs-data";

// Shared status marker for Lab cards and the Lab detail hero — one place
// for the status vocabulary, so a lab's status reads the same everywhere.
const STATUS: Record<LabProject["status"], { label: string; dot: string }> = {
  active: { label: "Active", dot: "bg-blue-400/80" },
  experimental: { label: "Experimental", dot: "bg-blue-400/50" },
  concept: { label: "Concept", dot: "border border-white/40" },
  archived: { label: "Archived", dot: "bg-white/25" },
};

type Props = { status: LabProject["status"] };

export default function LabStatus({ status }: Props) {
  const s = STATUS[status];

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
