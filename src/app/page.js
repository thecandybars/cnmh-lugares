import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const classNames = {
    link: "underline underline-offset-2 hover:underline-offset-4",
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-8pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Image
          src="/cnmh-logo-bl.svg"
          alt="CNMH logo"
          width={280}
          height={38}
          priority
        />
        <h3 className="text-2xl font-bold text-center sm:text-left">Lugares</h3>
        <ul className="list-inside text-md text-center sm:text-left space-y-2">
          <li>
            <Link href="/siloe" className={classNames.link}>
              Video Scroll de Siloé
            </Link>
          </li>
          <li>
            <Link href="/tumaco" className={classNames.link}>
              Mural de Tumaco
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
