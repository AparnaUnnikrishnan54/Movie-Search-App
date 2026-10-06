import React from 'react'

function Loader() {
  return (
    <div className="text-center my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2">Loading movies...</p>
    </div>
  )
}

export default Loader