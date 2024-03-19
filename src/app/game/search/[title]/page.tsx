import { Gameprops } from "@/utils/types/game";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { GamesCards } from "@/components/GameCards/item";
import { TfiFaceSad } from "react-icons/tfi";

async function getData(title: string) {
  try {
    const DecodeTitle= decodeURI(title);

    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${DecodeTitle}`
    );
    return res.json();
  } catch (err) {
    return null;
  }
}

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: Gameprops[] = await getData(title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />

        <h1 className="font-bold text-xl mt-8 mb-5">
          Jogos encontrados na nossa base:
        </h1>

        {!games && (
          <p className=" w-full flex items-center justify-center gap-2">
            Game não encontrado !!! <TfiFaceSad size={20} color="black" />
          </p>
        )}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {games && games.map((item) => (
            <GamesCards key={item.id} data={item} />
          ))}
        </section>
      </Container>
    </main>
  );
}
