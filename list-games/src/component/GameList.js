import { useEffect, useState } from 'react'
import Game from './Game'
import axios from 'axios'

export default function GameList () {

const [gameList, setGameList] = useState([]);

    useEffect(() => 
    
        axios.get("https://apis.wilders.dev/wild-games/games/")
            .then(res => res.data)
            .then((data) => {
                setGameList(data)
                console.log("test", data)
            }
    
    ), [])

    return (
        <div>
            {
                gameList.map((list) => {
                    return <Game key={list.item} name={list.name} background_image={list.background_image} rating={list.rating} />
                })
            }
        </div>
    )
}