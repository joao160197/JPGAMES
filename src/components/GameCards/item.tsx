import Link from "next/link";
import Image from "next/image";
import { BiRightArrowCircle } from "react-icons/bi";
import { Gameprops } from "@/utils/types/game";

interface GamesCardsProps {
  data: Gameprops;
}

export function GamesCards({ data }: GamesCardsProps) {
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-full bg-slate-300 rounded-lg p-5 mb-5">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            className="rounded-lg object-cover"
            src={data.image_url}
            alt={data.title}
            fill={true}
            quality={100}
            sizes="(max-width: 760px) 100vw, (max-width: 1200px) 33vw"
          />
        </div>
        <div className="flex items-center justify-between mt-4 ">
          <p className="font-bold text-black text-ellipsis truncate whitespace-nowrap overflow-hidden">{data.title}</p>
          <BiRightArrowCircle size={25} color="black" />
        </div>
      </section>
    </Link>
  );
}
