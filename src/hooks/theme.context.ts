import React from 'react'
import { Theme } from '../enums/common.enums'

export const ThemeContext = React.createContext({
  theme: Theme.Light,
  toggleTheme: () => {},
})
