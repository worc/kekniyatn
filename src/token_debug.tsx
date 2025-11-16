import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function () {
  const dispatch = useDispatch()
  const accessToken = useSelector<{accessToken: unknown}>(state => {
    console.log({state})
    return state.accessToken
  })

  useEffect(() => {
    dispatch({ type: 'REQUEST_ACCESS_TOKEN' })
  }, [])

  return <div>{ accessToken as string }</div>
}
