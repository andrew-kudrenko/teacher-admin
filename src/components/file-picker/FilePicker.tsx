import React from 'react'
import { Box, Button, makeStyles, Theme, Typography } from '@material-ui/core'
import { FileLoaderProps } from '../../types/components.types'
import { apiUrl } from '../helpers/api.helpers'

const useStyles = makeStyles((theme: Theme) => ({
  preview: {
    height: 75,
  },
  fileLoader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loaderButtons: {
    display: 'flex',
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  input: {
    display: 'hidden',
  },
}))

export const FilePicker: React.FC<FileLoaderProps> = ({
  onClear,
  onUpload,
  onSelect,
  preview,
}) => {
  const classes = useStyles()

  const isAbsolute = preview?.includes('http')

  return (
    <Box className={classes.fileLoader}>
      <Box>
        {preview ? (
          <img
            alt="preview"
            src={isAbsolute ? preview : `${apiUrl}/${preview}`}
            className={classes.preview}
          />
        ) : (
          <Typography variant="subtitle1">{'Выберите изображение'}</Typography>
        )}
      </Box>
      <input
        style={{ display: 'none' }}
        accept="image/*"
        className={classes.input}
        id="file-loader"
        type="file"
        onChange={onSelect}
      />
      <Box className={classes.loaderButtons}>
        <label htmlFor="file-loader">
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            component="span"
          >
            {'Выбрать'}
          </Button>
        </label>
        <Button
          onClick={onClear}
          variant="outlined"
          color="secondary"
          className={classes.button}
        >
          {'Очистить'}
        </Button>
      </Box>
    </Box>
  )
}
