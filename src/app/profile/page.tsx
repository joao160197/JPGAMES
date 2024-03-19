import { Container } from "@/components/container";
import Image from "next/image";
import user from "../../../public/user.png";
import { CiShare2 } from "react-icons/ci";
import { Favorite } from "./components/favorite";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:"Perfil JPGames",
}



export default function Profile() {
  return (
    <main className="w-full">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center  gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              className="rounded-full w-56 h-56 object-cover"
              src={user}
              alt="imagem do usuario"
            />
            <h1 className="font-bold text-xl">João Paulo</h1>
          </div>
          <div className="flex flex-row gap-4 sm:absolute top-0 right-0 justify-center items-center">
            <button className="bg-purple-800 px-4 py-3 rounded-lg text-white">
              Configurações
            </button>
            <button
              title="Compartilhar"
              className="bg-purple-800 px-4 py-3 rounded-lg"
              type="button"
            >
              <CiShare2 size={24} color="white" />
            </button>
          </div>
        </section>
        <section className="flex flex-wrap gap-5 flex-col  md:flex-row ">
          <div className="flex flex-grow flex-wrap">
            {" "}
            <Favorite />
          </div>
          <div  className="flex flex-grow flex-wrap">
            {" "}
            <Favorite />
          </div>
          <div  className="flex flex-grow flex-wrap">
            {" "}
            <Favorite />
          </div>
        </section>
      </Container>
    </main>
  );
}
