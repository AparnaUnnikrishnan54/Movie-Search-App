import React from 'react'

function ErrorMessage({message}) {
  return (
    <div className="alert alert-danger text-center" role="alert">
      {message}
    </div>
  )
}

export default ErrorMessage