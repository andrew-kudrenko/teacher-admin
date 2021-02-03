import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { EditorLayoutProps } from '../../../types/components.types'
import { EditorLayoutButtons } from './EditorLayoutButtons'

export const EditorLayout: React.FC<EditorLayoutProps> = props => {
  const { children, title, ...rest } = props

  return (
    <>
      <Typography variant="h5" gutterBottom align="center">
        {title}
      </Typography>
      <Grid container spacing={2}>
        {children}
        <EditorLayoutButtons {...rest} />
      </Grid>
    </>
  )
}
