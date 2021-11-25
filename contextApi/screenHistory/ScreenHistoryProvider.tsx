import React, { FC, useState } from 'react'
import { ScreenHistoryContext } from './index'

export const ScreenHistoryProvider: FC = ({ children }) => {

  const [currentScreen, setCurrentScreen] = useState('')
  const [screenHistory, setScreenHistory] = useState<Array<string>>([])

  const setToCurrentScreen = (
    currentScreen: string,
  ) => {
    setCurrentScreen(currentScreen)
    setScreenHistory([...screenHistory, currentScreen])
  }

  return (
    <ScreenHistoryContext.Provider
      value={{ currentScreen, screenHistory, setToCurrentScreen }}>
      {children}
    </ScreenHistoryContext.Provider>
  )
}
