import React from 'react'

export default function ({ album }) {
  console.log(album)

  return (
    <>
      <div>
        <img src={ album.images[0].url } style={{ width: '50%' }}/>
      </div>
      <div>{ album.name }</div>
      <div>{ album.release_date }</div>
    </>
  )
}