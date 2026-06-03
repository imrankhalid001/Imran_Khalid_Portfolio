export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3 mb-12">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand">
        {eyebrow}
      </span>
      <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}