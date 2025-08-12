import Image from "next/image";
import { Playwrite_AU_QLD } from "next/font/google";
import { GiInterleavedArrows } from "react-icons/gi";
import Link from "next/link";
const play = Playwrite_AU_QLD({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert w-full h-full"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Link href="/dashboard" className=" w-full">
          <button
            className={` text-center w-full border p-4 rounded-2xl cursor-pointer hover:bg-[#fff] hover:text-[#000] transition-colors duration-500 ease-in-out gap-4 flex justify-center items-center ${play.className} `}
          >
            Let's Get Started
            <span className=" -rotate-45 text-2xl">
              <GiInterleavedArrows />
            </span>
          </button>
        </Link>
      </main>
    </div>
  );
}
