type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

