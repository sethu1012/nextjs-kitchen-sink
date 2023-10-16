import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";

export default function Home() {

  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t("second:title")}
    </main>
  )
}
