import { IMGPlaceHolder } from "@/assets";
import Image from "next/image";

interface prop {
  name: string;
  title: string;
}

export default function TeamCard({name, title}: prop) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="shadow-[5px_5px_0px_0px_rgba(245,72,7)] relative h-32 w-32 lg:h-72 lg:w-72 bg-red-300 rounded-full overflow-hidden">
        <Image
          src={IMGPlaceHolder}
          alt="PLACEHOLDER"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
        />
      </div>
      <h1 className="font-semibold text-xl text-accent mt-3">{name}</h1>
      <h1 className="font-extralight text-xs text-black">({title})</h1>
    </section>
  );
}
