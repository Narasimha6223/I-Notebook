import React, { useContext } from 'react'


import { Notecontext } from '../context/Notestate'

export default function Noteitem(props) {
    const context = useContext(Notecontext)
    const { deleteNote } = context;
    const { note , showmodal } = props;

    return (
        <>

            <div className='col-md-3'>
                <div className="card my-2 mx-1 ">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text" >{note.descryption}</p>
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{showmodal(note)}}></i>
                        <i className="fa-regular fa-trash-can mx-2" onClick={() => { deleteNote(note._id) }}></i>
                    </div>
                </div>
            </div>

        </>

    )
}
