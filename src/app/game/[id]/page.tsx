import { Gameprops } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Container } from "@/components/container/index";
import { Label } from "./Components/label/index";
import { GamesCards } from "@/components/GameCards/item";
import { Metadata } from "next";

interface propsParms {
  params:{
    id: string;
  };
}

export async function generateMetaData({
  params
}:propsParms):Promise<Metadata> {
  try {
    const response:Gameprops = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`,
      { next:{revalidate:60}}
    )
      .then((res)=>res.json())
      .catch(()=>{
        return {
          title: "JPGames - Descubra Jogos Incriveis para se Divertir",
        };
      });


      return{
        title:response.title,
        description:`${response.description.slice(0,100)}...`,
        openGraph:{
          title:response.title,
          images:response.image_url
        },
        robots:{
          index:true,
          follow:true,
          nocache:true,
          googleBot:{
            index:true,
            follow:true,
            noimageindex:true
          }
        }
      }



  } catch(err) {
    return{
      title:"JPGames - Descubra Jogos Incriveis para se Divertir",
    };
  }
}

async function GetData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } }
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function GetGameDay(){
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Game({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: Gameprops = await GetData(id);
  const game: Gameprops = await GetGameDay();

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-70"
          src={data.image_url}
          priority={true}
          fill={true}
          quality={100}
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 33vw"
          alt={data.title}
        ></Image>
      </div>
      <Container>
        <h1 className="text-black font-bold mt-4 mb-5 ">{data.title}</h1>
        <p className="text-black font-medium ">{data.description}</p>

        <h2 className="text-black font-bold text-xl my-4">Plataformas:</h2>
        <div className="flex gap-2  flex-wrap">
          {data.platforms.map((item) => (
            <Label data={item} key={item} />
          ))}
        </div>

        <h3 className="text-black font-bold text-xl my-4">Categoria:</h3>
        <div className="flex gap-2  flex-wrap">
          {data.categories.map((item) => (
            <Label data={item} key={item} />
          ))}
        </div>

        <p className="mt-2 mb-2">
          <strong>Data de Lançamento:</strong> {data.release}
        </p>

        <h2 className="text-black font-bold text-xl my-4">Jogo recomendado:</h2>
        <div className="flex">
          <div className="flex-grow">
            <GamesCards data={game} />
          </div>
        </div>
      </Container>
    </main>
  );
}
