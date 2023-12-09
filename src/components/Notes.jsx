import React, { useContext, useRef, useState } from 'react'
import { Notecontext } from '../context/Notestate'
import Noteitem from './Noteitem';

export default function Notes() {
    const context = useContext(Notecontext)
    const { note, updateNote } = context;
    const [per, setper] = useState({ _id: "", title: "", descryption: "", tag: "" })
    const ref = useRef(null)

    const showmodal = (currentNote) => {
        ref.current.click()
        console.log(currentNote._id);
        setper({ _id: currentNote._id, title: currentNote.title, descryption: currentNote.descryption, tag: currentNote.tag })
}

    const handleclick = () => {
        updateNote(per._id, per.title, per.descryption, per.tag)
        console.log(per._id);

    }

    const onchange = (e) => {
        setper({  title:etitle.value , descryption:edescryption.value, tag:etag.value})
        console.log();
        
    }
    return (
        <div className="container mb-4">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref} className='d-none'>Open</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label" >Title</label>
                                    <input onChange={onchange} type="text" className="form-control" id="etitle" name='etitle' value={per.title} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescryption" className="form-label">Description</label>
                                    <input onChange={onchange} type="text" className="form-control" id="edescryption" name='edescription' value={per.descryption} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input onChange={onchange} type="text" className="form-control" id="etag" name='etag' value={per.tag} />
                                </div>

                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleclick}>Save Changes</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className='row d-flex '>
                <h1>Your Notes</h1>
                <span className='container mx-2'>
                {note.length===0 && "No Notes To Display"}

                </span>
                {
                    note.map((e) => {
                        return <Noteitem note={e} key={e._id} showmodal={showmodal} />
                    })
                }
            </div>
        </div>
    )
}
