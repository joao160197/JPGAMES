import { Container } from "@/components/container";
import { Gameprops } from "@/utils/types/game";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GamesCards } from "@/components/GameCards/item";

async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function getGames() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const dalyGame: Gameprops = await getDalyGame();
  const data: Gameprops[] = await getGames();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo pra você
        </h1>
        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 p-4 flex justify-center items-center gap-2">
                <p className="font-bold text-white ">{dalyGame.title}</p>
                <FaRegArrowAltCircleRight size={25} color="#FFFF" />
              </div>

              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority={true}
                quality={100}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-35 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 760px) 100vw, (max-width: 1200px) 33vw"
              />
            </div>
          </section>
        </Link>
        <Input />

        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {data.map((item) => (
            <GamesCards key={item.id} data={item} />
          ))}
        </section>
      </Container>
    </main>
  );
}
