import React from 'react'

export default function Wave({newImage}) {
  return (
  <section className='wave'>
        <div>
            <img
                alt="Wave"
                src={newImage}
            />
        </div>
  </section>
  )
}
