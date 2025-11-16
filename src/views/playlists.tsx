import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const defaultState = {
  playlists: [],
}

export default function Playlists () {
  const dispatch = useDispatch()
  const playlists: Array<Record<string, any>> = useSelector<Record<string, any>>(state => {
    return state.playlistReducer.playlists
  }) as unknown as Array<Record<string, any>>

  useEffect(() => {
    dispatch({ type: 'REQUEST_PLAYLISTS' })
  }, [])

  return (
    <>
      <h1>Playlists</h1>
      <div style={{ width: '100%' }}>
        { playlists.map( playlist => <div key={ playlist.id }>{ playlist.name }</div> ) }
      </div>
    </>
  )
}