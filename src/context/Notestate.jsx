import React, { createContext, useState } from 'react'
const Notecontext = createContext();

let host = "http://localhost:3000/api"
const Notestate = (props) => {
  const [note, setnote] = useState([])

  //Geiing Notes from Database
  const fetchNotes = async () => {
    let URL = `${host}/notes/fetchallnotes`
    let getNotes = await fetch(URL, {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU2OTY5MjliNzQ5NGY0ODNiOWNhZmE5IiwiaWF0IjoxNzAxNTExMzUyfQ.sj-iQQlcYF9wn5rEli6ecuQELgj9GBiGjM2JbpiT9sg'
      }
    })
    let result = await getNotes.json()
    //console.log(result);
    setnote(result)
    // //console.log([]);
  }


  //Adding Note to Database
  const addNote = async (title, descryption, tag) => {
    if (tag == "" || null) {
      tag = "default"
    }
    let URL = `${host}/notes/addnote`
    let postNote = await fetch(URL, {
      'method': 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU2OTY5MjliNzQ5NGY0ODNiOWNhZmE5IiwiaWF0IjoxNzAxNTExMzUyfQ.sj-iQQlcYF9wn5rEli6ecuQELgj9GBiGjM2JbpiT9sg'
      },
      body: JSON.stringify({
        title, descryption, tag
      })
    })

    let result = await postNote.json()
    // console.log("Result of Add Note" ,result);
    setnote(note.concat({id:result._id, title: result.title, descryption:result.descryption, tag: "default" }))
  }

  //Updating a Note in Database
  const updateNote = async (id, title, descryption, tag) => {

    let URL = `${host}/notes/updatenote/${id}`
    console.log(id);
    let postNote = await fetch(URL, {
      'method': 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU2OTY5MjliNzQ5NGY0ODNiOWNhZmE5IiwiaWF0IjoxNzAxNTExMzUyfQ.sj-iQQlcYF9wn5rEli6ecuQELgj9GBiGjM2JbpiT9sg'
      },
      body: JSON.stringify({
        title, descryption, tag
      })
    })
    let result = await postNote.json()
    console.log("update:",result);
    let newNote = JSON.parse(JSON.stringify(note))
    setnote(newNote)
    fetchNotes()
   

  }

  // Deleting a Note from Database
  const deleteNote = async (id) => {

    let URL = `${host}/notes/deletenote/${id}`
    let removenote = await fetch(URL, {
      'method': 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU2OTY5MjliNzQ5NGY0ODNiOWNhZmE5IiwiaWF0IjoxNzAxNTExMzUyfQ.sj-iQQlcYF9wn5rEli6ecuQELgj9GBiGjM2JbpiT9sg'
      },
    })
    let result = await removenote.json()
    //console.log(result);
    const newNotes = note.filter((note) => { return note._id !== id })
    setnote(newNotes)

  }




  return (
    <Notecontext.Provider value={{ note, setnote, addNote, updateNote, deleteNote, fetchNotes }}>
      {props.children}
    </Notecontext.Provider>
  )
}

export { Notestate, Notecontext };