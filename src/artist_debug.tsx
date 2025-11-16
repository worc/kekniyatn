import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Album from './album'

export const ARTIST_DEBUG_TYPES = {
  REQUEST_ALBUMS: 'REQUEST_ALBUMS',
  RECEIVED_ALBUMS: 'RECEIVED_ALBUMS',
}

const defaultState = {
  albums: [],
}

export function artistDebug (state = defaultState, message: Record<string, string>) {
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
  const albums: Array<Record<string, any>> = useSelector<{ artistDebug: { albums: Array<Record<string, any>> }}>(state => {
    return state.artistDebug.albums
  }) as unknown as Array<Record<string, any>>

  useEffect(() => {
    dispatch({ type: ARTIST_DEBUG_TYPES.REQUEST_ALBUMS, artist_id: '1SlPJ2l80sMnCHpz1wB8nT' })
  }, [])

  return (
    <>
      <h1>artist stuff</h1>
      <div style={{ width: '100%' }}>
        { albums.map( album => <Album album={ album }/> )}
      </div>
    </>
  )
}