import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DocumentLang } from "@/components/DocumentLang";
import { WeddingPage } from "@/components/WeddingPage";

export default async function LocalePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  return (
    <>
      <DocumentLang locale={locale} />
      <WeddingPage locale={locale} dict={dict} />
    </>
  );
}
