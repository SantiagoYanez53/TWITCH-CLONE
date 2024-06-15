import Tags from "./Tags"
export default function SectionGames (){
    const gamesSec = [ 
        {
            Name: "Just Chatting",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            Viewers:"315.8K",
            Tags:["IRL (vida real)"]
        },
        {
            Name: "Rust",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            Viewers:"194.4K",
            Tags:[]
        },
        {
            Name: "League of Legends",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            Viewers:"125.6K",
            Tags:["Juego de rol"],
            Nuevo: true
        },
        {
            Name: "Warzone",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
            Viewers:"42.1K",
            Tags:[]
        },
        {
            Name: "Valorant",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            Viewers:"101.6K",
            Tags:[]
        },
        {
            Name: "Special Events",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            Viewers:"185.7K",
            Tags:["IRL (vida real)"]
        },
        {
            Name: "Fornite",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Shooter","Juego de rol"]
        },
        {
            Name: "Just Chatting",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            Viewers:"315.8K",
            Tags:["IRL (vida real)"]
        },
        {
            Name: "Rust",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            Viewers:"194.4K",
            Tags:[]
        },
        {
            Name: "League of Legends",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            Viewers:"125.6K",
            Tags:["Juego de rol"]
        },
        {
            Name: "Warzone",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
            Viewers:"42.1K",
            Tags:[]
        },
        {
            Name: "Valorant",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            Viewers:"101.6K",
            Tags:[]
        },
        {
            Name: "Special Events",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            Viewers:"185.7K",
            Tags:["IRL (vida real)"]
        },
        {
            Name: "Fornite",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Shooter","Juego de rol"]
        },
        {
            Name: "Just Chatting",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            Viewers:"315.8K",
            Tags:["IRL (vida real)"]
        },
        {
            Name: "Rust",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            Viewers:"194.4K",
            Tags:[]
        },
        {
            Name: "League of Legends",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            Viewers:"125.6K",
            Tags:["Juego de rol"]
        },
        {
            Name: "Warzone",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
            Viewers:"42.1K",
            Tags:[]
        },
        {
            Name: "Valorant",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            Viewers:"101.6K",
            Tags:[]
        },
        {
            Name: "Special Events",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            Viewers:"185.7K",
            Tags:["IRL (vida real)"]
        },
        {
            Name: "Fornite",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Shooter","Juego de rol"]
        },
    ]
       return (
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] gap-3 bg-[#0E0E10]">
            {gamesSec.map((tag) => {
                return (
                    <Tags
                    key={"Juego-${tag.Name}"}
                    Name={tag.Name}
                    img={tag.img}
                    Viewers={tag.Viewers}
                    Tags={tag.Tags}
                    Nuevo={tag.Nuevo}
                    />
                )

            })}
        </section>
       )
}