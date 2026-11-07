import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function SiteFooter({ dict }: Props) {
  return (
    <footer className="border-t border-[var(--border-decorative)] bg-page py-10">
      <div className="page-wrap flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-2xl text-ink">{dict.brand.names}</p>
          <p className="support mt-2 max-w-md">{dict.venues.photoCredit}</p>
        </div>
        <p className="text-muted">
          {dict.footer.made} · {dict.hero.dateLine}
        </p>
      </div>
    </footer>
  );
}
