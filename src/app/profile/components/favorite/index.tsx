"use client"

import { FiEdit } from "react-icons/fi"
import { FaRegWindowClose  } from "react-icons/fa"
import { useState } from "react"

export function Favorite (){

    const [favorite, setFavorite] = useState("");
    const [showinput,setShowInput] = useState(false);
    const [gametitle, setGameTitle] = useState("")
     
    function handlebutton(){
        setShowInput(!showinput); //mostra o imput quando clicar no botao e zera ele quado vc fecha 

        if(favorite !==""){
            setGameTitle(favorite);//mostra o nome do jogo que vc digitou ?
        }

        setFavorite("")
    }

    return(
        <div className="w-full bg-gray-900 rounded-md p-4 h-44 text-white flex justify-between flex-col">
            {showinput ? (
                <div className="flex items-center justify-center gap-3">
                    <input className="w-full rounded-sm h-8 text-black px-2 " title="input" type="text" value={favorite} onChange={(event)=>setFavorite(event.target.value)}/>
                    <button title="fechar" type="reset"><FaRegWindowClose size={20} color="#FFFF" onClick={handlebutton} /></button>
                </div>
            ):(
            <button type="button" title="favorito" className="self-start hover:scale-125 duration-200 transition-all" onClick={handlebutton}>
               <FiEdit size={20} color="white"/>
            </button>
            )}
            
            {gametitle &&(
                <div>
                    <span className="text-white">Jogo Favorito:</span>
                    <p className="font-bold text-white ">{gametitle}</p>
                </div>
            )}
            {!gametitle && (
                <p className="font-bold text-white">Adicionar Jogo</p>
            )}
            
        </div>
    )
}