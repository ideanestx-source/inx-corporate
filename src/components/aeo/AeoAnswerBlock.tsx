export type AeoQa = {
  question: string;
  directAnswer: string;
  expandedAnswer?: string;
};

export default function AeoAnswerBlock({
  heading,
  items,
}: {
  heading?: string;
  items: AeoQa[];
}) {
  return (
    <section
      aria-label="Common questions and answers"
      className="border-t border-white/[0.06] bg-[#05070e]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-3">
          Quick Answers
        </p>
        <h2 className="text-2xl font-semibold text-white mb-12">
          {heading ?? "Common Questions"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-white/[0.07] rounded-[3px] bg-[#080c18] p-7"
            >
              <h3 className="text-[13px] font-semibold text-white/90 mb-3 leading-snug">
                {item.question}
              </h3>
              <p className="text-[14px] text-white/75 leading-relaxed mb-0 font-medium">
                {item.directAnswer}
              </p>
              {item.expandedAnswer && (
                <p className="text-[13px] text-white/45 leading-relaxed mt-3 border-t border-white/[0.06] pt-3">
                  {item.expandedAnswer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
