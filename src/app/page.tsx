import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";
import Button from '~/components/form/button';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t("home:home")}
      <Button className='bg-indigo-400 rounded-full'>Hello</Button>
    </main>
  )
}
