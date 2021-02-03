import {
  createMuiTheme,
  Theme as MaterialTheme,
} from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'
import { Theme } from '../enums/common.enums'
import { useEffect } from 'react'
import { useLocalStorage } from './local-storage.hook'

function createTheme(theme: Theme) {
  return createMuiTheme({
    palette: {
      primary: { main: colors.lightGreen[100] },
      secondary: { main: colors.orange[200] },
      type: theme === Theme.Light ? 'light' : 'dark',
    },
  })
}

export const useCustomTheme = (): [MaterialTheme, (theme: Theme) => void] => {
  const [theme, setTheme] = useLocalStorage('theme', Theme.Light)

  useEffect(() => setTheme(theme), [])

  return [createTheme(theme), setTheme]
}
