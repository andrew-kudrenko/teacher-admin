import React from 'react'
import { Box, Typography } from '@material-ui/core'

export const NavbarLogo: React.FC = () => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h6">{'Dashboard'}</Typography>
    </Box>
  )
}
