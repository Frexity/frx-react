import { useContext, useEffect } from 'react'
import { SelectContext } from '../Context'
import { AsyncHandlerProps } from '../types'
import { sleep } from '../utils'

export const AsyncHandler = ({ asyncOptions }: AsyncHandlerProps) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  useEffect(() => {
    if (!state.hasReachedBottom) {
      return
    }
    async function fetchData() {
      if (!asyncOptions?.url) {
        return
      }
      dispatch({ isLoading: true })
      const result = await fetch(asyncOptions.url)
      await sleep(2000)
      if (result.ok) {
        const data = await result.json()
        console.log({ data })
        dispatch({ hasReachedBottom: false, isLoading: false })
      }
    }
    if (asyncOptions?.url) {
      fetchData()
    }
  }, [state.hasReachedBottom, asyncOptions?.url, dispatch])

  useEffect(() => {
    async function fetchData() {
      if (!asyncOptions?.url) {
        return
      }
      dispatch({ isLoading: true })
      const result = await fetch(asyncOptions.url)
      await sleep(2000)
      if (result.ok) {
        const data = await result.json()
        const mappedData = data.map((item: Record<string, string>) => {
          return {
            label: item[asyncOptions?.labelAttribute || 'label'],
            value: item[asyncOptions?.valueAttribute || 'value'],
          }
        })
        dispatch({
          options: mappedData,
          hasReachedBottom: false,
          isLoading: false,
        })
      }
    }
    if (asyncOptions?.url && asyncOptions?.loadOnMount) {
      fetchData()
    }
  }, [state.hasReachedBottom, asyncOptions?.url, dispatch])

  return <></>
}
