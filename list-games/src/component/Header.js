import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Header (props) {

    const title = "Game list of the best game 2020"
    const [bestGame, setBestGame] = useState([])
    const [rating, setRating] = useState([])


    
    const handleClickButton = () => {
        const newRating = bestGame.filter((game) => game.rating >= 4.5);
        console.log("salut", newRating)
        setBestGame(newRating)
        console.log("testpt", setBestGame)
        const showBestGame = newRating.map((e) => {
            return (
                <div> {showBestGame} </div>
            )
        }) }

    // const handleClickBest = () => {
    //     if (bestGame === "Top Games") {
    //         setBestGame(bestGame.filter(show => show.rating >= 4.5))
    //     } else {
            
    //     }
    // }

    useEffect(() =>

        axios.get("https://apis.wilders.dev/wild-games/games/")
            .then(res => res.data)
            .then((data) => {
                setBestGame(data)
                console.log("test", data)
            }

            ), [])

    

return (
        <h1>
            Welcome to {title}
            <input
            className="button-best-rank"
            type="button"
            value={bestGame ? "all-games" : "top Games"}
            onClick={handleClickButton}>

            </input>
        </h1>
    )
}