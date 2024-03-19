interface LabelProps{
data: string;
}

export function Label({data}:LabelProps){
    return(
        <div className="bg-slate-200 mb-5 cursor-default gap-1 px-1 text-base rounded-md hover:font-bold duration-200 sm:flex-grow-0 ">{data}</div>
    )
}