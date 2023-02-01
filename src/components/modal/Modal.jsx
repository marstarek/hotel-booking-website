import React from 'react'

const Modal = ({movie}) => {
  return (
    <><input type="checkbox" id={movie.id} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor={movie.id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">{movie.name}</h3>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
      </div>
    </div></>
  )
}

export default Modal