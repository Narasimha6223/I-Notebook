import React from 'react'

export default function Alert(props) {
    return (
        <div className={`alert alert-${props.type} alert-dismissible`} role="alert">
                    Note {props.action}
        </div>
    )
}
