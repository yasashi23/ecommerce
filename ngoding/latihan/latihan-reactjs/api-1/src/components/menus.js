import React, {Component} from 'react'
import { useState } from 'react'

const Navbar = (props) => {
  const [api, setApi] = useState("")
  const [play, setPlay] = useState("")


  
  const key = 'AIzaSyBQx24RG2tkmZYjeOVMABNjOFoEnq7UOyc'
  const urlApi = `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCADw5dS_RtNPLWU9Ai_pLfQ&key=${key}`

  // const urlApi = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCADw5dS_RtNPLWU9Ai_pLfQ&key=${key}`
  const playl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBQx24RG2tkmZYjeOVMABNjOFoEnq7UOyc&channelId=UCADw5dS_RtNPLWU9Ai_pLfQ&part=snippet,id&order=date&maxResults=20`
  
  fetch(urlApi)
    .then((res) => res.json())
    .then((data) => {console.log(data)
    setApi(data.items[0].statistics)})

    fetch(playl)
    .then((res) => res.json())
    .then((data) => console.log(data.error.message))



  return(
    <div>
      {api}
      lll
    </div>
  )
}



export default Navbar