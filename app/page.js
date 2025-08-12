import { GiInterleavedArrows } from "react-icons/gi";
import { Playwrite_AU_QLD } from "next/font/google";
import Link from "next/link";
const play = Playwrite_AU_QLD({
  subsets: ["latin"],
  weight: ["400"],
});

export default function page() {
  return (
    <section className=" w-full text-black h-dvh flex flex-col gap-10 justify-center items-center">
      <div
        className={` hover:bg-black hover:text-white ${play.className} transition-colors duration-500 ease-in-out rounded-4xl px-10 py-6 flex justify-center items-center gap-4 text-[1.2rem] `}
      >
        <Link href="/dashboard">
          {`let's get started`}
          <span className="text-3xl -rotate-45">
            <GiInterleavedArrows />
          </span>
        </Link>
      </div>
    </section>
  );
}
