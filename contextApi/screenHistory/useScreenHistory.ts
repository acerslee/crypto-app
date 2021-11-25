import { useContext } from 'react'
import { ScreenHistory } from './_types'
import { ScreenHistoryContext } from './index'

export function useScreenHistory(): ScreenHistory {
  const { currentScreen, screenHistory, setToCurrentScreen } = useContext(
    ScreenHistoryContext,
  )

  return {
    currentScreen,
    screenHistory,
    setToCurrentScreen,
  }
}
