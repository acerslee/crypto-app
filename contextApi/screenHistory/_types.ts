export interface ScreenHistory {
  currentScreen: string
  screenHistory: Array<string>
  setToCurrentScreen(currentScreen: string, logScreen?: boolean): void
}
