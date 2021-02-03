import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { BaseRoutes } from '../../routes/BaseRoutes'
import { BaseLayout } from '../layouts/base/BaseLayout'
import { useCustomTheme } from '../../hooks/theme.hook'

export const App: React.FC = () => {
  const theme = useCustomTheme()

  return (
    // <ThemeProvider theme={theme}>
    <BaseLayout>
      <BaseRoutes />
    </BaseLayout>
    // </ThemeProvider>
  )
}
