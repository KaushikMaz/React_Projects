import React, {useState} from "react"
import memeData from "../memesData"


export default function Meme(){
    const [newMeme, setNewMeme]=useState("")


    const getMeme=()=>{
        const memeArray=memeData.data.memes
        const newRandom= Math.floor(Math.random()*memeArray.length)
        setNewMeme( memeArray[newRandom].url)
    }
    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button 
                    className="form-button"
                    onClick={getMeme}
                >
                    Get a new meme image 🖼
                </button>
                <img src={newMeme} className="meme-image" />
               
            </div>
        </main>
    )
}