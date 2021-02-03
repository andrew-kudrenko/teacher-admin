import React, { useContext } from 'react'
import { IconButton } from '@material-ui/core'
import { Brightness4Outlined, Brightness5Outlined } from '@material-ui/icons'
import { Theme } from '../../../enums/common.enums'
import { ThemeContext } from '../../../hooks/theme.context'
import { useLocalStorage } from '../../../hooks/local-storage.hook'

export const ThemeToggler: React.FC = () => {
  let { theme, toggleTheme } = useContext(ThemeContext)
  const [, setStoredTheme] = useLocalStorage('theme', theme)

  toggleTheme = () => {
    theme = theme === Theme.Light ? Theme.Dark : Theme.Light
    setStoredTheme(theme)
  }

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme === Theme.Light ? (
        <Brightness4Outlined />
      ) : (
        <Brightness5Outlined />
      )}
    </IconButton>
  )
}
