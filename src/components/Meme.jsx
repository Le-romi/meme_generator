import memesData from "../memesData.js"
import React from "react"

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes)

    function getMemeImage() {
        console.log(allMemeImages.length)
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: allMemeImages[randomNumber].url
        }))
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
            <img className="meme--img" src={meme.randomImg}/>
        </main>
    )
  }
  
  export default Meme
  