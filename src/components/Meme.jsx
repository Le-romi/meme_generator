import memesData from "../memesData.js"
import React from "react"

function Meme() {

    const [memeImg, setMemeImg] = React.useState("")

    function getMemeImage() {
        
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImg(memesArray[randomNumber].url)
        console.log(memeImg)
        
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImg}/>
        </main>
    )
  }
  
  export default Meme
  