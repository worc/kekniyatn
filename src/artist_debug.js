import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const ARTIST_DEBUG_TYPES = {
  REQUEST_ALBUMS: 'REQUEST_ALBUMS',
  RECEIVED_ALBUMS: 'RECEIVED_ALBUMS',
}

const defaultState = {
  albums: [],
}

export function artistDebug (state = defaultState, message) {
  switch (message.type) {
    case ARTIST_DEBUG_TYPES.RECEIVED_ALBUMS:
      return {
        ...state,
        albums: [ ...message.albums ]
      }
    default:
      return state
  }
}

export default function () {
  const dispatch = useDispatch()
  const albums = useSelector(state => {
    return state.artistDebug.albums
  })

  useEffect(() => {
    dispatch({ type: ARTIST_DEBUG_TYPES.REQUEST_ALBUMS, artist_id: '1SlPJ2l80sMnCHpz1wB8nT' })
  }, [])

  return (
    <>
      <h1>artist stuff</h1>
      { albums.map( album => {
        return <div>{ album.name }</div>
      })}
    </>
  )
}