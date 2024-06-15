import Channel from "./Channel"
export default function Aside() {
    const recomendados = [
        {
            channel:"elRubius",
            Game:"Fortnite",
            Viewers:"10.9 k"
        },
        {
            channel:"MissaSinfonia",
            Game:"Just Chatting",
            Viewers:"2.3 k"
        },
        {
            channel:"ibai",
            Game:"Fall Guys",
            Viewers:"4.9 k"
        },
        {
            channel:"elFedelobo",
            Game:"RE7",
            Viewers:"1.3 k"
        },
        {
            channel:"Auron",
            Game:"Just Chatting",
            Viewers:"7.8 k"
        },
        {
            channel:"Molar",
            Game:"Baldurs Gate",
            Viewers:"1.3 k"
        }
    ]
    
    return (
        <aside className="w-full mt-[2px] min-h-screen hidden lg:block col-start-1 col-end-2 row-start-2 row-end-3 bg-[#1F1F23]">
            <div className="flex items-center h-10 justify-between px-2 ">
            <p>
              CANALES RECOMENDADOS  
            </p>
            </div>
            <section className="flex flex-col ">
                {recomendados.map((canal)=> {
                    return (
                        <Channel 
                        key={`canal-${canal.channel}`}
                        channel={canal.channel}
                        Game={canal.Game}
                        Viewers={canal.Viewers}
                         />
                    )
                }
                )}
                <p className="text-sm pl-2 text-violet-500 hover:underline cursor-pointer pt-2 hidden xl:flex xl:flex-row xl:justify-between ">
                Mostrar más
                </p>
            </section>
            
        
        </aside>
    )
}