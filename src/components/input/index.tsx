"use client";

import { FormEvent, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(event:FormEvent) {
    event.preventDefault();

    if(input === "") return; //se clicar sem ter escrito algo nada acontece 

    router.push(`/game/search/${input}`)

  }

  return (
    <form
      onSubmit={handleSearch}
      className="mt-5 w-full my-5 flex justify-end items-center gap-2"
    >
      <input
        className="w-full p-1 rounded-lg text-start mr-0  bg-slate-200 outline-none"
        title="barra de pesquisa"
        placeholder="Digite o jogo que você procura"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="absolute p-1 " title="botao de pesquisa" type="submit">
        <IoSearchOutline className="mt-1" size={20} color="black" />
      </button>
    </form>
  );
}
