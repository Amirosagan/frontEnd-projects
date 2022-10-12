import React from 'react'

function Buttons({calc , reset}) {
  return (
    <div className='buttons-group'>
        <button type="submit" ref={calc}>Calaculate</button>
        <button type="reset" ref={reset} >Reset</button>
    </div>
  )
}

export default Buttons