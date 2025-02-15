import React, { useState } from 'react'

const App = () => {

    const[songname,setSongname]=useState('')
    const[actorname,setActorname]=useState('')
    const[singername,setSingername]=useState('')
    const[songposter,setSongposter]=useState('')

    const[Alluser,setAlluser]=useState([])

    const formHandler = (e) =>{
        e.preventDefault()
        console.log("Form Submit");

        const copyAlluser = [...Alluser]
        copyAlluser.push({songname,actorname,singername,songposter})
        setAlluser(copyAlluser)

        setSongname('')
        setActorname('')
        setSingername('')
        setSongposter('')
       
    }

    const deletHandler = (idx) =>{
        console.log("index is :",idx)
        const copyAlluser = [...Alluser]
        copyAlluser.splice(idx,1)
        setAlluser(copyAlluser)
    }

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }} >
        <input  value={songname} onChange={(e)=>{
            setSongname(e.target.value)
        }}
         type="text"  
          placeholder='Song Name'/>

        <input value={actorname} onChange={(e)=>{
            setActorname(e.target.value)
        }}
        type="text" placeholder='Actor Name' />

        <input value={singername} onChange={(e)=>{
            setSingername(e.target.value)
        }}
         type="text" placeholder='Singer Name'/>

        <input value={songposter} onChange={(e)=>{
            setSongposter(e.target.value)
        }}
        type="text" placeholder='Song Poster(Image URL)'/>

       

        <button>Add Song</button>
      </form>

        {
            Alluser.map(function(elem,idx){
                return <div className='showproduct' key={idx}>
                        <img src={elem.songposter} alt="" />
                        <div className='right'>
                            <h3>{elem.songname}</h3>
                            <h3>Actor  : {elem.actorname}</h3>
                            <h3>Singer : {elem.singername}</h3>
                        </div>
                        <h1  onClick={()=>{ deletHandler(idx)}} className='del'> <i class="ri-close-circle-line"></i></h1>
                </div>
            })
        }


    </div>
  )
}

export default App
