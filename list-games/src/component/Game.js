import { useState } from 'react'
import './Game.css'


function Game ({ name, rating, background_image }) {

    const [favorite, setFavorite] = useState(false)

    const handleClickFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <div>
            <div className="game-container">
                <h2>{name}</h2>
                <img className="background-image" src={background_image} alt={name}/>
                <p>{rating}</p> 
                <div
                    className={favorite ? "isFavorite" : "notFavorite"}
                    type="button"
                    value=""
                    onClick={handleClickFavorite}>
                </div>
            </div>
        </div>
        )
}

export default Game