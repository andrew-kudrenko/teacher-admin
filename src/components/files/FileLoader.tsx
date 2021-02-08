import React from 'react'
import { Box, Button, makeStyles, Theme, Typography } from '@material-ui/core'
import { FileLoaderProps } from '../../types/components.types'

const useStyles = makeStyles((theme: Theme) => ({
  preview: {
    height: 150,
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

export const FileLoader: React.FC<FileLoaderProps> = props => {
  const { onClear, onUpload, onSelect, preview } = props
  const classes = useStyles()

  return (
    <Box className={classes.fileLoader}>
      <Box>
        {preview ? (
          <img alt="preview" src={preview} className={classes.preview} />
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
        name="file"
        onChange={onSelect}
      />
      <Box className={classes.loaderButtons}>
        {/* <Button
          onClick={onUpload}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          {'Сохранить'}
        </Button> */}
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
