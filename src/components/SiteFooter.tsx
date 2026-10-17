import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function SiteFooter({ dict }: Props) {
  return (
    <footer className="border-t border-[var(--line)] bg-mist py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 sm:flex-row sm:items-center sm:px-6">
        <p className="font-display text-xl text-ink">{dict.brand.names}</p>
        <p className="text-sm text-ink-soft">
          {dict.footer.made} · {dict.brand.date}
        </p>
      </div>
    </footer>
  );
}
