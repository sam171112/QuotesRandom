import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App()
 {
  
  const[quote,setQuote]=useState('')
  const[author,setAuthor]=useState('')
  const[btn,setBtn]=useState(0)
  const[bg,setBg]=useState('#000000')
  const[emptyDiv,setDiv]=useState('')
  useEffect(()=>
  {
    axios.get('https://api.quotable.io/random')
    .then((data)=>{
      setAuthor(data.data.author)
      setQuote(data.data.content)
    const temp='#'+Math.round(Math.random()*1000000)
    setBg(temp)  
    
    })
  },[btn])

  return (
    <>
  <div className='Quotes' style={{backgroundColor:bg}}>
  <h3>{quote}</h3>
  <h3>{author}</h3>  
  </div>
  <div className='btnDiv'>
  <button className='btnR' onClick={()=>
   {
    setBtn(btn+1)
   }
  }>Refresh</button>
  <button className='btnS' onClick={()=>
   { 
    const d=document.getElementById('add')
    d.style.display="flex"
    const subdiv=document.createElement('div')
    subdiv.id="subDiv"
    const title=document.createElement('h3')
    title.textContent=quote
    const aut=document.createElement('h3')
    aut.textContent=author
    const but=document.createElement('button')
    but.textContent="❎"
    subdiv.append(title,aut,but)
    d.appendChild(subdiv)
    but.addEventListener("click",()=>{d.removeChild(subdiv)
      })
  }
}>Save</button>
   </div>
   <div id='add' >
   </div>
    </>
  )
  
}


export default App
