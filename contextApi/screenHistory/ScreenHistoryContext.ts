import { createContext } from 'react'
import { ScreenHistory } from './_types'

export const ScreenHistoryContext = createContext<ScreenHistory>({
  currentScreen: '',
  screenHistory: [],
  setToCurrentScreen: () => {},
})
