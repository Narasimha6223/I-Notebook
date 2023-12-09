import React , {useContext, useEffect } from 'react'
import Notes from './Notes';

import { Notecontext } from '../context/Notestate'

export default function Home() {

  const context = useContext(Notecontext)
  const { addNote ,fetchNotes } = context;
  useEffect(()=>{

    fetchNotes()
  },[])

   const add = ()=>{
    if (title.value.length<3|| descryption.value.length.value<5) {
        alert("Title Must Contain Atleast 3 Charecters and Descryption Must contain Atleast 5 CHarecters")
    }
    else{
      addNote(title.value ,descryption.value , tag.value )

    }
  }



  return (
    <>
      <div className='container my-3'>
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="descryption" className="form-label">Description</label>
            <input type="text" className="form-control" id="descryption" name='descryption'/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag'/>
          </div>

          <button type="button" className="btn btn-success" onClick={add}>Add</button>
        </form>

        <hr />




      </div>
      <Notes />


    </>
  )
}
